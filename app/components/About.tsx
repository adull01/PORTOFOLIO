'use client';

import Image from 'next/image';
import styles from './About.module.css';
import { useLanguage } from '../context/LanguageContext';
import { Profile } from '../lib/profile';

export default function About({ profile }: { profile: Profile }) {
    const { t } = useLanguage();

    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <h2 className={styles.sectionTitle}>{t.about.title} <span className="gradient-text">{t.about.me}</span></h2>

                <div className={styles.content}>
                    <div className={styles.imageCol}>
                        <div className={`${styles.imageWrapper} neon-border`}>
                            <Image
                                src={profile.imageUrl}
                                alt={profile.name}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                            <div className={styles.imageGlow}></div>
                        </div>
                    </div>

                    <div className={styles.textCol}>
                        <h3 className={styles.greeting}>{t.about.greeting} {profile.name}</h3>
                        <h4 className={styles.role}>{profile.role}</h4>

                        <div className={styles.bio}>
                            {(t.content?.bio || profile.bio).split('\n').filter(line => line.trim() !== '').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>3+</span>
                                <span className={styles.statLabel}>{t.about.yearsExp}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>10+</span>
                                <span className={styles.statLabel}>{t.about.projects}</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statLabel}>{t.about.satisfied}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

