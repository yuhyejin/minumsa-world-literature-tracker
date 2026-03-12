'use client';

interface ProgressBarProps {
    readCount: number;
    totalCount: number;
    bingoCount?: number;
    isBingoMode?: boolean;
}

export function ProgressBar({ readCount, totalCount, bingoCount = 0, isBingoMode = false }: ProgressBarProps) {
    const percentage = totalCount > 0 ? (readCount / totalCount) * 100 : 0;
    const totalBlocks = Math.ceil(totalCount / 25);

    if (isBingoMode) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 읽은 권수 - Dark Navy Card */}
                <div className="flex flex-col justify-between bg-[#1e293b] p-6 rounded-3xl shadow-sm transition-all hover:shadow-md h-full">
                    <div>
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">읽은 권수</span>
                        <div className="flex items-baseline gap-1.5 mt-2">
                            <span className="text-4xl font-black text-white">{readCount}</span>
                            <span className="text-xl font-bold text-slate-400">권</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-6 text-sm font-bold text-emerald-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>달성률 {percentage.toFixed(1)}%</span>
                    </div>
                </div>

                {/* 달성 빙고 - Yellow Accent Card */}
                <div className="flex flex-col justify-between bg-white dark:bg-slate-800 border-2 border-[#facc15] p-6 rounded-3xl shadow-sm transition-all hover:shadow-md h-full">
                    <div>
                        <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">달성 빙고</span>
                        <div className="flex items-baseline gap-1.5 mt-2">
                            <span className="text-4xl font-black text-[#1e293b] dark:text-white">{bingoCount}</span>
                            <span className="text-xl font-bold text-slate-400">줄</span>
                        </div>
                    </div>
                    <div className="mt-6 text-sm font-bold text-slate-500 dark:text-slate-400">
                        {totalBlocks}개 블록 진행 중
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between bg-[#f0f4f8] dark:bg-slate-800 border border-[#d9e2ec] dark:border-slate-700 p-6 rounded-3xl shadow-sm transition-all hover:shadow-md h-full">
                <div>
                    <span className="text-sm font-bold text-[#1e293b] dark:text-slate-300 uppercase tracking-wider">읽은 권수</span>
                    <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-4xl font-black text-[#1e293b] dark:text-white">{readCount}</span>
                        <span className="text-xl font-bold text-slate-400">권</span>
                    </div>
                </div>
                <div className="mt-6 text-sm font-bold text-slate-500 dark:text-slate-400">
                    📚 {totalCount - readCount}권 남음
                </div>
            </div>

            <div className="flex flex-col justify-between bg-[#1e293b] p-6 rounded-3xl shadow-sm transition-all hover:shadow-md h-full">
                <div>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">전체 권수</span>
                    <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-4xl font-black text-white">{totalCount}</span>
                        <span className="text-xl font-bold text-slate-400">권</span>
                    </div>
                </div>
                <div className="mt-6 space-y-2">
                    <div className="h-3 w-full bg-slate-600 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-[#facc15] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                    <span className="text-xs font-bold text-slate-400">{percentage.toFixed(1)}% 진행</span>
                </div>
            </div>
        </div>
    );
}
