import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a real or dummy client depending on env configuration
function createSupabaseClient(): SupabaseClient {
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('placeholder')) {
        // Return a dummy client that doesn't hang the app
        return {
            auth: {
                getSession: () => Promise.resolve({ data: { session: null }, error: null }),
                onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
                signUp: () => Promise.resolve({ data: { user: null, session: null }, error: new Error('데이터베이스가 연결되지 않았습니다. .env.local 파일을 설정해주세요.') }),
                signInWithPassword: () => Promise.resolve({ data: { user: null, session: null }, error: new Error('데이터베이스가 연결되지 않았습니다. .env.local 파일을 설정해주세요.') }),
                signOut: () => Promise.resolve({ error: null }),
                resetPasswordForEmail: () => Promise.resolve({ data: {}, error: null }),
            },
            from: () => ({
                select: () => ({ eq: () => ({ eq: () => Promise.resolve({ data: [], error: null }) }) }),
                delete: () => ({ eq: () => ({ eq: () => Promise.resolve({ error: null }) }) }),
                upsert: () => Promise.resolve({ error: null }),
            })
        } as unknown as SupabaseClient;
    }

    return createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true,
            // localStorage is the default — no custom storage needed
            // This ensures tokens (which can exceed cookie 4KB limits) are stored properly
        }
    });
}

// Next.js 개발 환경(HMR)에서 파일이 재실행될 때마다 새로운 client가 생성되어
// 로컬 스토리지 락(Lock) 경합이 발생하는 것을 방지하기 위한 싱글톤 패턴 적용
const globalForSupabase = global as unknown as { supabase: SupabaseClient };

export const supabase = globalForSupabase.supabase || createSupabaseClient();

if (process.env.NODE_ENV !== 'production') globalForSupabase.supabase = supabase;
