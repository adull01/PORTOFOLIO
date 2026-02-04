'use client';

import { useActionState } from 'react';
import { login } from '../lib/auth';
import styles from './Login.module.css';
import { Lock, ArrowRight } from 'lucide-react';

const initialState = {
    error: '',
};

export default function LoginPage() {
    const [state, formAction] = useActionState(login, initialState);

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.orb1}></div>
                <div className={styles.orb2}></div>
            </div>

            <div className={`${styles.card} neon-border`}>
                <div className={styles.iconWrapper}>
                    <Lock size={40} className={styles.icon} />
                </div>

                <h1 className={styles.title}>Admin Access</h1>
                <p className={styles.subtitle}>Enter credentials to continue</p>

                <form action={formAction} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className={styles.input}
                            required
                        />
                    </div>

                    {state?.error && (
                        <div className={styles.error}>
                            ⚠️ {state.error}
                        </div>
                    )}

                    <button type="submit" className={styles.button}>
                        <span>Access System</span>
                        <ArrowRight size={20} />
                    </button>
                </form>

                <p className={styles.hint}>
                    {/* Default password: <code>admin123</code> */}
                </p>
            </div>
        </div>
    );
}
