'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail, Heart, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.wave}>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.wavePath}></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.wavePath}></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.wavePath}></path>
                </svg>
            </div>

            <div className="container">
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.heading}>
                            {t.footer.heading} <span className="gradient-text">{t.footer.amazing}</span> {t.footer.together}
                        </h2>
                        <p className={styles.text}>
                            {t.footer.text}
                        </p>
                    </motion.div>

                    <motion.a
                        href="mailto:agani1393@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Abdul%20Gani,%0D%0A%0D%0A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mailButton}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail size={20} />
                        <span>{t.footer.touch}</span>
                    </motion.a>

                    <motion.div
                        className={styles.socials}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a href="https://github.com/adull01" target="_blank" rel="noopener noreferrer" aria-label="Github" className={styles.socialLink}>
                            <Github size={22} />
                            <span>Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/abdul-gani-0275b831b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                            <Linkedin size={22} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://www.instagram.com/madeby.masgan?igsh=MXFxaDQ5dmUxeWplag==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                            <Instagram size={22} />
                            <span>Instagram</span>
                        </a>
                    </motion.div>

                    <motion.div
                        className={styles.address}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <MapPin size={18} />
                        <p>Plaza Asia Tasikmalaya, Jl. HZ. Mustofa No.326, Tugujaya, Kec. Cihideung, Kota. Tasikmalaya, Jawa Barat 46125</p>
                    </motion.div>

                    <div className={styles.divider}></div>

                    <p className={styles.copyright}>
                        © {year} {t.footer.rights} <Heart size={16} className={styles.heart} /> by Creative Developer
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
