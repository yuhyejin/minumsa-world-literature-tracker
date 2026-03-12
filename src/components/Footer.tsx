'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="w-full py-12 px-5 mt-auto border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 dark:text-slate-500 text-sm">Contact:</span>
          <a
            href="mailto:hj_eu@naver.com"
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-semibold underline underline-offset-4 decoration-slate-200 dark:decoration-slate-700"
          >
            hj_eu@naver.com
          </a>
        </div>
        <p className="text-slate-300 dark:text-slate-600 text-[10px] uppercase tracking-widest mt-2">
          &copy; {new Date().getFullYear()} Book Tracker
        </p>
      </div>
    </footer>
  );
}
