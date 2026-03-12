'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface AuthModalProps {
    onClose: () => void;
}

export function AuthModal({ onClose }: AuthModalProps) {
    const [mode, setMode] = useState<'login' | 'signup' | 'reset'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);

        try {
            if (mode === 'signup') {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: `${window.location.origin}/`,
                    }
                });
                if (error) throw error;
                setMessage('확인 이메일을 전송했습니다. 이메일을 확인해주세요!');
            } else if (mode === 'reset') {
                const { error } = await supabase.auth.resetPasswordForEmail(email, {
                    redirectTo: `${window.location.origin}?reset=true`,
                });
                if (error) throw error;
                setMessage('비밀번호 재설정 링크를 이메일로 전송했습니다. 확인 후 링크를 클릭해 주세요.');
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                
                console.log('[Auth] Login success, closing modal');
                onClose();
            }
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : '오류가 발생했습니다';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="닫기">
                    ✕
                </button>
                <h2 className="modal-title">
                    {mode === 'signup' ? '회원가입' : mode === 'reset' ? '비밀번호 재설정' : '로그인'}
                </h2>
                <p className="modal-subtitle">
                    {mode === 'signup'
                        ? '이메일과 비밀번호로 계정을 만드세요'
                        : mode === 'reset'
                        ? '가입하신 이메일을 입력하시면 재설정 링크를 보내드립니다'
                        : '이메일과 비밀번호로 로그인하세요'}
                </p>

                {error && <div className="form-error">{error}</div>}
                {message && (
                    <div className="form-error" style={{ background: 'var(--accent-bg)', color: 'var(--accent)', borderColor: 'var(--accent-light)' }}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">이메일</label>
                        <input
                            className="form-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    {mode !== 'reset' && (
                        <div className="form-group">
                            <label className="form-label">비밀번호</label>
                            <input
                                className="form-input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="6자 이상 입력"
                                minLength={6}
                                required
                            />
                        </div>
                    )}

                    <button
                        className="form-submit"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? '처리 중...' : mode === 'signup' ? '가입하기' : mode === 'reset' ? '링크 전송' : '로그인'}
                    </button>
                </form>

                <div className="form-toggle">
                    {mode === 'login' && (
                        <div style={{ marginBottom: '12px' }}>
                            <button onClick={() => { setMode('reset'); setError(''); setMessage(''); }}>
                                비밀번호를 잊으셨나요?
                            </button>
                        </div>
                    )}
                    
                    {mode === 'signup' ? '이미 계정이 있으신가요? ' : '계정이 없으신가요? '}
                    <button onClick={() => { setMode(mode === 'signup' ? 'login' : 'signup'); setError(''); setMessage(''); }}>
                        {mode === 'signup' ? '로그인' : '회원가입'}
                    </button>
                    
                    {mode === 'reset' && (
                        <div style={{ marginTop: '12px' }}>
                            <button onClick={() => { setMode('login'); setError(''); setMessage(''); }}>
                                로그인으로 돌아가기
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
