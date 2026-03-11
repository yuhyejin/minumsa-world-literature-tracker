# 📚 민음사 세계문학전집 도장깨기

민음사 세계문학전집 475권의 독서 현황을 추적하고 관리하는 웹 애플리케이션입니다.

## ✨ 주요 기능

- **표지 모드**: 책 표지 이미지로 한눈에 독서 현황 확인
- **숫자 모드**: 빙고 스타일의 컴팩트한 5×5 블록 뷰
- **빙고 시스템**: 25권씩 블록으로 묶어 빙고 라인 달성 추적
- **실시간 저장**: 클릭 한 번으로 읽은 책 기록 (Supabase DB 연동)
- **자동 로그인**: 브라우저 재방문 시 세션 자동 유지
- **반응형 디자인**: 모바일 / 태블릿 / 데스크탑 최적화

## 🛠 기술 스택

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 3
- **Backend**: Supabase (Auth + PostgreSQL)
- **Deployment**: Vercel

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`env.example`을 `.env.local`로 복사하고 Supabase 프로젝트 정보를 입력하세요.

```bash
cp env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Supabase 데이터베이스 설정

Supabase Dashboard > SQL Editor에서 `supabase-setup.sql` 파일의 내용을 실행하세요.

### 4. 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css       # 글로벌 스타일 + Tailwind
│   ├── layout.tsx        # 루트 레이아웃
│   └── page.tsx          # 메인 페이지
├── components/
│   ├── AuthModal.tsx     # 로그인/회원가입 모달
│   ├── CoverView.tsx     # 표지 모드 그리드
│   ├── Header.tsx        # 상단 헤더
│   ├── NumberView.tsx    # 숫자/빙고 모드
│   ├── ProgressBar.tsx   # 읽은 권수 / 전체 권수 카드
│   └── ResetPasswordModal.tsx
├── data/
│   └── books.ts          # 475권 도서 데이터
└── lib/
    └── supabase.ts       # Supabase 클라이언트
```

## 🔗 Vercel 배포

1. GitHub에 레포지토리를 Push합니다.
2. [Vercel](https://vercel.com)에서 해당 레포지토리를 Import합니다.
3. Environment Variables에 `NEXT_PUBLIC_SUPABASE_URL`과 `NEXT_PUBLIC_SUPABASE_ANON_KEY`를 설정합니다.
4. Deploy를 클릭하면 완료됩니다.

## 📄 라이선스

MIT
