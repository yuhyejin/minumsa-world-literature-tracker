'use client';

import { Book, getBookColor } from '@/data/books';

interface CoverViewProps {
    books: Book[];
    readBooks: Set<number>;
    onToggle: (bookNumber: number) => void;
}

export function CoverView({ books, readBooks, onToggle }: CoverViewProps) {
    return (
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6">
            {books.map((book) => {
                const isRead = readBooks.has(book.number);
                const color = getBookColor(book.number);
                return (
                    <div
                        key={book.number}
                        className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-white/5 ${isRead ? 'border-[#1e293b] dark:border-white ring-2 ring-[#1e293b] dark:ring-white ring-offset-2 dark:ring-offset-slate-900 shadow-md' : 'border-slate-200 dark:border-slate-800'}`}
                        onClick={() => onToggle(book.number)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && onToggle(book.number)}
                        aria-label={`${book.number}번 ${book.title} - ${isRead ? '읽음' : '안 읽음'}`}
                    >
                        {isRead && (
                            <div className="absolute top-3 right-3 z-10 w-8 h-8 bg-[#1e293b] dark:bg-white rounded-full flex items-center justify-center text-white dark:text-[#1e293b] shadow-sm font-bold animate-in zoom-in duration-200">
                                ✓
                            </div>
                        )}
                        <div className="aspect-[2/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                            {book.coverUrl ? (
                                <img src={book.coverUrl} alt={book.title} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isRead ? 'opacity-90 grayscale-[20%]' : ''}`} />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center transition-transform duration-500 group-hover:scale-105" style={{ background: color.bg, color: color.accent }}>
                                    <span className="text-sm font-bold opacity-70 mb-2">No. {book.number}</span>
                                    <h3 className="font-bold text-lg leading-tight line-clamp-3">{book.title}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
