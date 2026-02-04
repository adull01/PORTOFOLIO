'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: "easeInOut" as const }
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.5, ease: "easeInOut" as const }
    }
  };

  const LANGUAGES = [
    { code: 'en', flag: '🇺🇸' },
    { code: 'id', flag: '🇮🇩' },
    { code: 'su', flag: '💠' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'jp', flag: '🇯🇵' },
    { code: 'fr', flag: '🇫🇷' },
  ] as const;

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          PORTFO<span className="gradient-text">LIO</span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopActions}>
          <ul className={styles.navLinks}>
            <li><Link href="/#about">{t.navbar.about}</Link></li>
            <li><Link href="/#projects">{t.navbar.projects}</Link></li>
            <li><Link href="/login" className={styles.loginLink}>{t.navbar.login}</Link></li>
          </ul>

          <div className={styles.langSelector}>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className={styles.langSelect}
            >
              {LANGUAGES.map(l => (
                <option key={l.code} value={l.code}>{l.flag}</option>
              ))}
            </select>
          </div>

          <Link href="/#contact" className={styles.ctaButton}>{t.navbar.contact}</Link>
        </div>

        {/* Mobile Toggle */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.mobileMenu}
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className={styles.mobileHeader}>
                <span className={styles.logo}>MENU</span>
                <button onClick={toggleMenu}>
                  <X size={24} color="white" />
                </button>
              </div>

              <div className={styles.mobileLinks}>
                <motion.div whileHover={{ x: 10 }} onClick={toggleMenu}>
                  <Link href="/#about">{t.navbar.about}</Link>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} onClick={toggleMenu}>
                  <Link href="/#projects">{t.navbar.projects}</Link>
                </motion.div>
                <motion.div whileHover={{ x: 10 }}>
                  <div className={styles.mobileLang}>
                    {LANGUAGES.map(l => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); toggleMenu(); }}
                        className={lang === l.code ? styles.activeLang : ''}
                      >
                        {l.flag}
                      </button>
                    ))}
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} onClick={toggleMenu}>
                  <Link href="/login">Admin {t.navbar.login}</Link>
                </motion.div>
                <motion.div whileHover={{ x: 10 }} onClick={toggleMenu}>
                  <Link href="/#contact" className={styles.mobileCta}>{t.navbar.contact}</Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
