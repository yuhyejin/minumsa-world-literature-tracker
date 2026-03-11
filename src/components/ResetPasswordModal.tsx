'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface ResetPasswordModalProps {
    onClose: () => void;
}

export function ResetPasswordModal({ onClose }: ResetPasswordModalProps) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (password !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (password.length < 6) {
            setError('비밀번호는 6자 이상이어야 합니다.');
            return;
        }

        setLoading(true);

        try {
            const { error } = await supabase.auth.updateUser({
                password: password
            });
            
            if (error) throw error;
            
            setMessage('비밀번호가 성공적으로 변경되었습니다!');
            setTimeout(() => {
                onClose();
            }, 2000);
            
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : '비밀번호 변경 중 오류가 발생했습니다.';
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
                <h2 className="modal-title">새 비밀번호 설정</h2>
                <p className="modal-subtitle">
                    새롭게 사용할 비밀번호를 입력해 주세요.
                </p>

                {error && <div className="form-error">{error}</div>}
                {message && (
                    <div className="form-error" style={{ background: 'var(--success-light)', color: 'var(--success)', borderColor: 'var(--success)' }}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">새 비밀번호</label>
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
                    
                    <div className="form-group">
                        <label className="form-label">새 비밀번호 확인</label>
                        <input
                            className="form-input"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="비밀번호 다시 입력"
                            minLength={6}
                            required
                        />
                    </div>

                    <button
                        className="form-submit"
                        type="submit"
                        disabled={loading || Boolean(message)}
                    >
                        {loading ? '변경 중...' : '비밀번호 변경하기'}
                    </button>
                </form>
            </div>
        </div>
    );
}
