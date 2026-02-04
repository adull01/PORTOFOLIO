'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { useLanguage } from '../context/LanguageContext';
import { Profile } from '../lib/profile';

const Hero = ({ profile }: { profile: Profile }) => {
    const { t } = useLanguage();
    const firstName = profile.name.split(' ')[0];

    return (
        <section className={styles.hero}>
            <div className={styles.backgroundEffect}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gradientOrb3}></div>
            </div>

            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <h2 className={styles.greeting}>{t.hero.greeting} {firstName}</h2>

                        <h1 className={styles.title}>
                            <span className="gradient-text">{profile.role.split(' ')[0]}</span><br />
                            {profile.role.split(' ').slice(1).join(' ')}
                        </h1>

                        <p className={styles.subtitle}>
                            {t.hero.subtitle}
                        </p>

                        <div className={styles.buttons}>
                            <a href="#projects" className={styles.primaryButton}>
                                <span>{t.hero.viewWork}</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="#about" className={styles.secondaryButton}>
                                <span>{t.hero.moreAbout}</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Hero;

