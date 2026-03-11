import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '민음사 세계문학전집 도장깨기',
  description: '민음사 세계문학전집 읽기 진행 상황을 기록하고 관리하세요',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
