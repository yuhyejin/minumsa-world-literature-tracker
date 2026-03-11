-- 민음사 세계문학전집 도장깨기 - Supabase 설정 SQL
-- Supabase Dashboard > SQL Editor 에서 실행하세요.

-- 1. 읽기 기록 테이블 생성
CREATE TABLE IF NOT EXISTS reading_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  book_number INTEGER NOT NULL,
  is_read BOOLEAN DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, book_number)
);

-- 2. Row Level Security 활성화
ALTER TABLE reading_records ENABLE ROW LEVEL SECURITY;

-- 3. RLS 정책 생성
CREATE POLICY "Users can view own records"
  ON reading_records FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own records"
  ON reading_records FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own records"
  ON reading_records FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own records"
  ON reading_records FOR DELETE
  USING (auth.uid() = user_id);

-- 4. 인덱스 생성 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_reading_records_user_id
  ON reading_records(user_id);

CREATE INDEX IF NOT EXISTS idx_reading_records_user_book
  ON reading_records(user_id, book_number);
