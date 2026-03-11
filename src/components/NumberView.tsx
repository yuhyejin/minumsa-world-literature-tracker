'use client';

import { Book } from '@/data/books';
import { useMemo } from 'react';

interface NumberViewProps {
    books: Book[];
    readBooks: Set<number>;
    onToggle: (bookNumber: number) => void;
    searchQuery?: string;
    filter?: string;
    numberViewMode?: 'grid' | 'bingo';
}

function getBingoLines(blockBooks: Book[], readBooks: Set<number>): number {
    if (blockBooks.length < 25) return 0;
    let count = 0;
    // Rows
    for (let r = 0; r < 5; r++) {
        if ([0, 1, 2, 3, 4].every(c => readBooks.has(blockBooks[r * 5 + c].number))) count++;
    }
    // Cols
    for (let c = 0; c < 5; c++) {
        if ([0, 1, 2, 3, 4].every(r => readBooks.has(blockBooks[r * 5 + c].number))) count++;
    }
    // Diagonals
    if ([0, 1, 2, 3, 4].every(i => readBooks.has(blockBooks[i * 5 + i].number))) count++;
    if ([0, 1, 2, 3, 4].every(i => readBooks.has(blockBooks[i * 5 + (4 - i)].number))) count++;
    return count;
}

function getBingoLineCells(blockBooks: Book[], readBooks: Set<number>): Set<number> {
    const cells = new Set<number>();
    if (blockBooks.length < 25) return cells;
    // Rows
    for (let r = 0; r < 5; r++) {
        if ([0, 1, 2, 3, 4].every(c => readBooks.has(blockBooks[r * 5 + c].number))) {
            [0, 1, 2, 3, 4].forEach(c => cells.add(blockBooks[r * 5 + c].number));
        }
    }
    // Cols
    for (let c = 0; c < 5; c++) {
        if ([0, 1, 2, 3, 4].every(r => readBooks.has(blockBooks[r * 5 + c].number))) {
            [0, 1, 2, 3, 4].forEach(r => cells.add(blockBooks[r * 5 + c].number));
        }
    }
    // Diagonals
    if ([0, 1, 2, 3, 4].every(i => readBooks.has(blockBooks[i * 5 + i].number))) {
        [0, 1, 2, 3, 4].forEach(i => cells.add(blockBooks[i * 5 + i].number));
    }
    if ([0, 1, 2, 3, 4].every(i => readBooks.has(blockBooks[i * 5 + (4 - i)].number))) {
        [0, 1, 2, 3, 4].forEach(i => cells.add(blockBooks[i * 5 + (4 - i)].number));
    }
    return cells;
}

export function NumberView({ books, readBooks, onToggle, numberViewMode = 'bingo' }: NumberViewProps) {
    const blocks = useMemo(() => {
        const result: Book[][] = [];
        for (let i = 0; i < books.length; i += 25) {
            result.push(books.slice(i, i + 25));
        }
        return result;
    }, [books]);

    if (numberViewMode === 'grid') {
        // Simple grid mode
        return (
            <div className="number-grid">
                {books.map((book) => {
                    const isRead = readBooks.has(book.number);
                    return (
                        <div
                            key={book.number}
                            className={`number-cell-standard ${isRead ? 'is-read' : ''}`}
                            onClick={() => onToggle(book.number)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && onToggle(book.number)}
                            aria-label={`${book.number}번 ${book.title} - ${isRead ? '읽음' : '안 읽음'}`}
                        >
                            <span className="number-text">{book.number}</span>
                            <span className="tooltip">{book.title} - {book.author}</span>
                        </div>
                    );
                })}
            </div>
        );
    }

    // Bingo mode
    return (
        <div className="bingo-container">
            {blocks.map((block, blockIndex) => {
                const startNum = block[0]?.number ?? blockIndex * 25 + 1;
                const endNum = block[block.length - 1]?.number ?? (blockIndex + 1) * 25;
                const bingoLines = getBingoLines(block, readBooks);
                const bingoLineCells = getBingoLineCells(block, readBooks);

                return (
                    <div key={blockIndex} className="bingo-block-wrapper">
                        <div className="bingo-block-header">
                            <span className="bingo-block-range">{startNum} - {endNum} 블록</span>
                            {bingoLines > 0 && (
                                <span className="bingo-count-badge">{bingoLines} 빙고!</span>
                            )}
                        </div>
                        <div className="border-t border-dashed border-slate-200 dark:border-slate-700 mb-4"></div>
                        <div className="bingo-grid">
                            {block.map((book) => {
                                const isRead = readBooks.has(book.number);
                                const isBingoLine = bingoLineCells.has(book.number);
                                return (
                                    <div
                                        key={book.number}
                                        className={`bingo-cell ${isRead ? 'is-read' : ''} ${isBingoLine ? 'is-bingo-line' : ''}`}
                                        onClick={() => onToggle(book.number)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => e.key === 'Enter' && onToggle(book.number)}
                                        aria-label={`${book.number}번 ${book.title} - ${isRead ? '읽음' : '안 읽음'}`}
                                    >
                                        {isRead && (
                                            <div className="absolute top-1 right-1 text-[#facc15]">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                        )}
                                        <span className="bingo-number-text">{book.number}</span>
                                        <span className="tooltip">{book.title} - {book.author}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
