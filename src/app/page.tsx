'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { books } from '@/data/books';
import { Header } from '@/components/Header';
import { CoverView } from '@/components/CoverView';
import { NumberView } from '@/components/NumberView';
import { AuthModal } from '@/components/AuthModal';
import { ProgressBar } from '@/components/ProgressBar';
import { ResetPasswordModal } from '@/components/ResetPasswordModal';
import type { User } from '@supabase/supabase-js';

type ViewMode = 'cover' | 'number';
type FilterMode = 'all' | 'read' | 'unread';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('cover');
  const [readBooks, setReadBooks] = useState<Set<number>>(new Set());
  const [showAuth, setShowAuth] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterMode>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [numberViewMode, setNumberViewMode] = useState<'grid' | 'bingo'>('bingo');

  // Check auth status
  useEffect(() => {
    let isMounted = true;

    // Check URL hash for recovery token on initial load
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash && hash.includes('type=recovery')) {
        setShowReset(true);
      }
    }

    // Safety: force loading to false after 5s even if getSession hangs
    const safetyTimeout = setTimeout(() => {
      if (isMounted && loading) {
        setLoading(false);
      }
    }, 5000);

    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (!isMounted) return;

        setUser(session?.user ?? null);
        if (session?.user) {
          setShowAuth(false);
          await loadReadBooks(session.user.id);
        }
      } catch (err) {
        if (!isMounted) return;
        console.error('[Auth] getSession error', err);
        setUser(null);
      } finally {
        if (isMounted) {
          clearTimeout(safetyTimeout);
          setLoading(false);
        }
      }
    };
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event: any, session: any) => {
      if (event === 'PASSWORD_RECOVERY') {
        setShowReset(true);
      }

      setUser(session?.user ?? null);
      if (session?.user) {
        setShowAuth(false);
        await loadReadBooks(session.user.id);
      } else {
        setReadBooks(new Set());
      }
    });

    return () => {
      clearTimeout(safetyTimeout);
      subscription.unsubscribe();
    };
  }, []);

  const loadReadBooks = async (userId: string) => {
    const { data, error } = await supabase
      .from('reading_records')
      .select('book_number')
      .eq('user_id', userId)
      .eq('is_read', true);

    if (!error && data) {
      setReadBooks(new Set(data.map((r: any) => r.book_number)));
    }
  };

  const toggleBook = useCallback(async (bookNumber: number) => {
    if (!user) {
      setShowAuth(true);
      return;
    }

    const isCurrentlyRead = readBooks.has(bookNumber);

    // Optimistic update
    setReadBooks(prev => {
      const next = new Set(prev);
      if (isCurrentlyRead) {
        next.delete(bookNumber);
      } else {
        next.add(bookNumber);
      }
      return next;
    });

    if (isCurrentlyRead) {
      await supabase
        .from('reading_records')
        .delete()
        .eq('user_id', user.id)
        .eq('book_number', bookNumber);
    } else {
      await supabase
        .from('reading_records')
        .upsert({
          user_id: user.id,
          book_number: bookNumber,
          is_read: true,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id,book_number' });
    }
  }, [user, readBooks]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setReadBooks(new Set());
  };

  const bingoCount = useMemo(() => {
    let count = 0;
    for (let i = 0; i < books.length; i += 25) {
      const block = books.slice(i, i + 25);
      if (block.length < 25) continue;

      // Rows
      for (let r = 0; r < 5; r++) {
        if ([0, 1, 2, 3, 4].every(c => readBooks.has(block[r * 5 + c].number))) count++;
      }
      // Cols
      for (let c = 0; c < 5; c++) {
        if ([0, 1, 2, 3, 4].every(r => readBooks.has(block[r * 5 + c].number))) count++;
      }
      // Diagonals
      if ([0, 1, 2, 3, 4].every(i => readBooks.has(block[i * 5 + i].number))) count++;
      if ([0, 1, 2, 3, 4].every(i => readBooks.has(block[i * 5 + (4 - i)].number))) count++;
    }
    return count;
  }, [readBooks]);

  // Filter and search books
  const filteredBooks = books.filter(book => {
    if (filter === 'read' && !readBooks.has(book.number)) return false;
    if (filter === 'unread' && readBooks.has(book.number)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.number.toString().includes(q) ||
        (book.displayNumber && book.displayNumber.toLowerCase().includes(q))
      );
    }
    return true;
  });

  if (loading) {
    return (
      <div className="loading" suppressHydrationWarning>
        <div className="spinner" suppressHydrationWarning />
      </div>
    );
  }

  if (!user && !showReset) {
    return (
      <>
        <Header
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          user={null}
          onLogin={() => setShowAuth(true)}
          onLogout={handleLogout}
        />
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-6 py-10 overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#fff0f2_0%,transparent_60%)]">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,#f0f4f8_0%,transparent_70%)] opacity-60 -z-10 blur-[60px]" />
          <div className="text-7xl mb-6 animate-bounce drop-shadow-xl">✨</div>
          <h1 className="text-[2rem] font-black leading-tight mb-6 tracking-tight bg-gradient-to-br from-slate-900 to-slate-500 bg-clip-text text-transparent">
            민음사 세계문학전집<br />도장깨기
          </h1>
          <p className="text-xl text-slate-600 max-w-lg mb-10 leading-relaxed">
            {books.length}권의 위대한 고전 문학,<br />
            당신은 얼마나 읽으셨나요?
          </p>
          <button
            className="px-12 py-5 bg-slate-900 text-white rounded-full text-xl font-extrabold transition-all hover:scale-105 hover:bg-slate-800 shadow-2xl shadow-slate-900/20 active:scale-95"
            onClick={() => setShowAuth(true)}
          >
            시작하기
          </button>
        </div>
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
        {showReset && <ResetPasswordModal onClose={() => setShowReset(false)} />}
      </>
    );
  }

  return (
    <>
      <Header
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        user={user}
        onLogin={() => setShowAuth(true)}
        onLogout={handleLogout}
      />

      <div className="max-w-6xl mx-auto px-5 py-8 space-y-8">
        {/* View Mode Selector - Just below Header */}
        <div className="flex justify-start">
          <div className="flex flex-nowrap w-full sm:w-auto bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <button
              className={`flex-1 sm:flex-none px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${viewMode === 'cover' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
              onClick={() => setViewMode('cover')}
            >
              📖 표지 모드
            </button>
            <button
              className={`flex-1 sm:flex-none px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${viewMode === 'number' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
              onClick={() => setViewMode('number')}
            >
              🔢 숫자 모드
            </button>
          </div>
        </div>

        <ProgressBar
          readCount={readBooks.size}
          totalCount={books.length}
          bingoCount={bingoCount}
          isBingoMode={viewMode === 'number' && numberViewMode === 'bingo'}
        />

        <div className="max-w-xl mx-auto w-full">
          <div className="relative group">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400 group-focus-within:text-[#1e293b] transition-colors">🔍</span>
            <input
              className="w-full pl-14 pr-6 py-2.5 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1e293b] focus:ring-4 focus:ring-[#1e293b]/10 outline-none transition-all text-base shadow-sm"
              type="text"
              placeholder="제목, 저자 또는 번호로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
          <div className="flex flex-nowrap w-full md:w-auto bg-slate-100 p-1.5 rounded-2xl gap-1 overflow-x-auto scrollbar-hide">
            <button
              className={`flex-1 md:flex-none px-3 sm:px-6 py-2 rounded-[14px] text-sm font-bold transition-all whitespace-nowrap ${filter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              onClick={() => setFilter('all')}
            >
              전체 ({books.length})
            </button>
            <button
              className={`flex-1 md:flex-none px-3 sm:px-6 py-2 rounded-[14px] text-sm font-bold transition-all whitespace-nowrap ${filter === 'read' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              onClick={() => setFilter('read')}
            >
              읽음 ({readBooks.size})
            </button>
            <button
              className={`flex-1 md:flex-none px-3 sm:px-6 py-2 rounded-[14px] text-sm font-bold transition-all whitespace-nowrap ${filter === 'unread' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              onClick={() => setFilter('unread')}
            >
              안 읽음 ({books.length - readBooks.size})
            </button>
          </div>

          {viewMode === 'number' && (
            <div className="flex flex-nowrap w-full md:w-auto bg-slate-100 p-1.5 rounded-2xl gap-1">
              <button
                className={`flex-1 md:flex-none px-6 py-2 rounded-[14px] text-sm font-bold transition-all whitespace-nowrap ${numberViewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setNumberViewMode('grid')}
              >
                일반
              </button>
              <button
                className={`flex-1 md:flex-none px-6 py-2 rounded-[14px] text-sm font-bold transition-all whitespace-nowrap ${numberViewMode === 'bingo' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setNumberViewMode('bingo')}
              >
                빙고
              </button>
            </div>
          )}
        </div>

        <div>
          {viewMode === 'cover' ? (
            <CoverView
              books={filteredBooks}
              readBooks={readBooks}
              onToggle={toggleBook}
            />
          ) : (
            <NumberView
              books={numberViewMode === 'bingo' ? books : filteredBooks}
              readBooks={readBooks}
              onToggle={toggleBook}
              searchQuery={searchQuery}
              filter={filter}
              numberViewMode={numberViewMode}
            />
          )}
        </div>
      </div>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      {showReset && <ResetPasswordModal onClose={() => setShowReset(false)} />}
    </>
  );
}
