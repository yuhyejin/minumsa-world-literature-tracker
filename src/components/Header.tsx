'use client';

import type { User } from '@supabase/supabase-js';

type ViewMode = 'cover' | 'number' | 'bingo';

interface HeaderProps {
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    user: User | null;
    onLogin: () => void;
    onLogout: () => void;
}

export function Header({ viewMode, onViewModeChange, user, onLogin, onLogout }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex items-center gap-2 text-xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                        <span className="text-2xl drop-shadow-sm hover:-translate-y-1 transition-transform duration-300">📚</span>
                        <span>민음사 세계문학전집</span>
                    </div>
                </div>

                <div className="flex items-center">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300 hidden sm:block">
                                {user.email?.split('@')[0]}
                            </span>
                            <button 
                                className="px-4 py-2 rounded-xl text-sm font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                onClick={onLogout}
                            >
                                로그아웃
                            </button>
                        </div>
                    ) : (
                        <button 
                            className="px-5 py-2 rounded-xl text-sm font-bold bg-slate-800 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-100 text-white dark:text-slate-900 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5" 
                            onClick={onLogin}
                        >
                            로그인
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}
