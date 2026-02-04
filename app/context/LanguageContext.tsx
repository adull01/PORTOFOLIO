'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageCode = 'en' | 'id' | 'es' | 'jp' | 'fr';

const TRANSLATIONS = {
    en: {
        navbar: {
            about: 'About',
            projects: 'Projects',
            login: 'Login',
            contact: 'Contact',
        },
        hero: {
            greeting: 'HELLO, I AM',
            subtitle: 'Crafting digital experiences with precision and creativity.',
            viewWork: 'View My Work',
            moreAbout: 'More About Me',
            scroll: 'Scroll Down'
        },
        about: {
            title: 'About',
            me: 'Me',
            greeting: "Hi, I'm",
            yearsExp: 'Years Exp.',
            projects: 'Projects',
            satisfied: 'Satisfied'
        },
        projects: {
            title: 'Selected',
            works: 'Works',
            viewProject: 'View Project',
            tech: 'Tech Stack'
        },
        footer: {
            heading: "Let's Build Something",
            amazing: "Amazing",
            together: "Together",
            text: "I'm always excited to collaborate on innovative projects and bring ideas to life.",
            touch: "Get In Touch",
            rights: "Made with"
        }
    },
    id: {
        navbar: {
            about: 'Tentang',
            projects: 'Proyek',
            login: 'Masuk',
            contact: 'Kontak',
        },
        hero: {
            greeting: 'HALO, SAYA ADALAH',
            subtitle: 'Menciptakan pengalaman digital dengan presisi dan kreativitas.',
            viewWork: 'Lihat Karya',
            moreAbout: 'Lebih Banyak',
            scroll: 'Gulir ke Bawah'
        },
        about: {
            title: 'Tentang',
            me: 'Saya',
            greeting: "Hai, saya",
            yearsExp: 'Tahun Pengalaman',
            projects: 'Proyek',
            satisfied: 'Puas'
        },
        projects: {
            title: 'Karya',
            works: 'Pilihan',
            viewProject: 'Lihat Proyek',
            tech: 'Teknologi'
        },
        footer: {
            heading: "Mari Bangun Sesuatu yang",
            amazing: "Luar Biasa",
            together: "Bersama",
            text: "Saya selalu bersemangat untuk berkolaborasi dalam proyek inovatif dan mewujudkan ide menjadi nyata.",
            touch: "Hubungi Saya",
            rights: "Dibuat dengan"
        }
    },
    es: {
        navbar: {
            about: 'Sobre mí',
            projects: 'Proyectos',
            login: 'Entrar',
            contact: 'Contacto',
        },
        hero: {
            greeting: 'HOLA, SOY',
            subtitle: 'Creando experiencias digitales con precisión y creatividad.',
            viewWork: 'Ver Trabajos',
            moreAbout: 'Más Sobre Mí',
            scroll: 'Deslizar'
        },
        about: {
            title: 'Sobre',
            me: 'Mí',
            greeting: "Hola, soy",
            yearsExp: 'Años Exp.',
            projects: 'Proyectos',
            satisfied: 'Satisfecho'
        },
        projects: {
            title: 'Trabajos',
            works: 'Seleccionados',
            viewProject: 'Ver Proyecto',
            tech: 'Tecnología'
        },
        footer: {
            heading: "Construyamos Algo",
            amazing: "Increíble",
            together: "Juntos",
            text: "Siempre estoy emocionado de colaborar en proyectos innovadores y dar vida a las ideas.",
            touch: "Contáctame",
            rights: "Hecho con"
        }
    },
    jp: {
        navbar: {
            about: '私について',
            projects: 'プロジェクト',
            login: 'ログイン',
            contact: '連絡先',
        },
        hero: {
            greeting: 'こんにちは、私は',
            subtitle: '精度と創造性を持ってデジタル体験を作り上げます。',
            viewWork: '作品を見る',
            moreAbout: 'もっと知る',
            scroll: 'スクロール'
        },
        about: {
            title: '私に',
            me: 'ついて',
            greeting: "こんにちは、",
            yearsExp: '年の経験',
            projects: 'プロジェクト',
            satisfied: '満足'
        },
        projects: {
            title: '厳選された',
            works: '作品',
            viewProject: 'プロジェクトを見る',
            tech: '技術スタック'
        },
        footer: {
            heading: "一緒に",
            amazing: "素晴らしい",
            together: "ものを作りましょう",
            text: "革新的なプロジェクトに協力し、アイデアを実現することに常に興奮しています。",
            touch: "連絡する",
            rights: "作成者"
        }
    },
    fr: {
        navbar: {
            about: 'À propos',
            projects: 'Projets',
            login: 'Connexion',
            contact: 'Contact',
        },
        hero: {
            greeting: 'BONJOUR, JE SUIS',
            subtitle: 'Créer des expériences numériques avec précision et créativité.',
            viewWork: 'Voir Projets',
            moreAbout: 'Plus Sur Moi',
            scroll: 'Défiler'
        },
        about: {
            title: 'À',
            me: 'Propos',
            greeting: "Salut, je suis",
            yearsExp: 'Ans Exp.',
            projects: 'Projets',
            satisfied: 'Satisfait'
        },
        projects: {
            title: 'Travaux',
            works: 'Sélectionnés',
            viewProject: 'Voir Projet',
            tech: 'Technologies'
        },
        footer: {
            heading: "Construisons Quelque Chose",
            amazing: "D'incroyable",
            together: "Ensemble",
            text: "Je suis toujours ravi de collaborer sur des projets innovants et de donner vie à des idées.",
            touch: "Contactez-moi",
            rights: "Fait avec"
        }
    }
};

interface LanguageContextType {
    lang: LanguageCode;
    setLang: (lang: LanguageCode) => void;
    t: typeof TRANSLATIONS['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<LanguageCode>('en');

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
