'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageCode = 'en' | 'id' | 'es' | 'jp' | 'fr' | 'su';

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
        },
        content: {
            bio: "I am Abdul Gani, a software developer focused on web-based solutions. With experience in PHP, JavaScript, HTML, CSS, and modern frameworks like Laravel, I am used to building applications that are not only functional but also user-friendly.\n\nThroughout my academic journey and personal projects, I have developed POS and inventory systems for small businesses, as well as library management applications. Each of my works is designed with attention to efficiency, reliability, and a user-friendly interface.\n\nI have a great interest in UI/UX design and technology integration that supports productivity. I am committed to being a professional developer creating useful digital solutions for education, business, and society.",
            projects: {
                "1": {
                    title: "Neon Dashboard",
                    description: "A futuristic dashboard with real-time data visualization."
                },
                "2": {
                    title: "E-Commerce Ultra",
                    description: "High-performance shopping platform with headless architecture."
                },
                "3": {
                    title: "Cyber Portfolio",
                    description: "Personal portfolio website with immersive WebGL animations."
                }
            }
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
        },
        content: {
            bio: "Saya, Abdul Gani, adalah seorang programmer dan pengembang perangkat lunak yang berfokus pada solusi berbasis web. Dengan pengalaman dalam PHP, JavaScript, HTML, CSS, serta framework modern seperti Laravel, saya terbiasa membangun aplikasi yang tidak hanya fungsional tetapi juga mudah digunakan.\n\nSelama perjalanan akademik dan proyek pribadi, saya telah mengembangkan sistem kasir dan manajemen inventori untuk usaha kecil, serta aplikasi manajemen perpustakaan yang membantu pengelolaan koleksi buku secara digital. Setiap karya saya dirancang dengan perhatian pada efisiensi, keandalan, dan tampilan antarmuka yang ramah pengguna.\n\nSaya memiliki minat besar pada UI/UX design dan integrasi teknologi yang mendukung produktivitas. Saya berkomitmen menjadi pengembang profesional yang menciptakan solusi digital bermanfaat bagi dunia pendidikan, bisnis, dan masyarakat luas.",
            projects: {
                "1": {
                    title: "Dasbor Neon",
                    description: "Dasbor futuristik dengan visualisasi data waktu nyata."
                },
                "2": {
                    title: "E-Commerce Ultra",
                    description: "Platform belanja performa tinggi dengan arsitektur headless."
                },
                "3": {
                    title: "Portofolio Cyber",
                    description: "Situs web portofolio pribadi dengan animasi WebGL yang imersif."
                }
            }
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
        },
        content: {
            bio: "Soy Abdul Gani, un desarrollador de software enfocado en soluciones basadas en web. Con experiencia en PHP, JavaScript, HTML, CSS y marcos modernos como Laravel, estoy acostumbrado a crear aplicaciones que no solo son funcionales sino también fáciles de usar.",
            projects: {
                "1": { title: "Dasbor Neon", description: "Tablero futurista con visualización de datos en tiempo real." },
                "2": { title: "E-Commerce Ultra", description: "Plataforma de compras de alto rendimiento con arquitectura headless." },
                "3": { title: "Portafolio Cyber", description: "Sitio web de portafolio personal con animaciones WebGL inmersivas." }
            }
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
        },
        content: {
            bio: "私はアブドゥル・ガニです。ウェブベースのソリューションに焦点を当てたソフトウェア開発者です。PHP、JavaScript、HTML、CSS、およびLaravelなどの最新のフレームワークの経験があり、機能的であるだけでなく使いやすいアプリケーションの構築に慣れています。",
            projects: {
                "1": { title: "ネオンダッシュボード", description: "リアルタイムのデータ視覚化を備えた未来的なダッシュボード。" },
                "2": { title: "E-Commerce Ultra", description: "ヘッドレスアーキテクチャを備えた高性能ショッピングプラットフォーム。" },
                "3": { title: "サイバーポートフォリオ", description: "没入型のWebGLアニメーションを備えた個人のポートフォリオウェブサイト。" }
            }
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
        },
        content: {
            bio: "Je suis Abdul Gani, un développeur de logiciels spécialisé dans les solutions basées sur le web. Avec une expérience en PHP, JavaScript, HTML, CSS et des frameworks modernes comme Laravel, j'ai l'habitude de créer des applications fonctionnelles et conviviales.",
            projects: {
                "1": { title: "Tableau de Bord Néon", description: "Un tableau de bord futuriste avec visualisation des données en temps réel." },
                "2": { title: "E-Commerce Ultra", description: "Plateforme de shopping haute performance dengan architecture headless." },
                "3": { title: "Portfolio Cyber", description: "Site web de portfolio personnel avec animations WebGL immersives." }
            }
        }
    },
    su: {
        navbar: {
            about: 'Perkawis',
            projects: 'Proyék',
            login: 'Asup',
            contact: 'Kontak',
        },
        hero: {
            greeting: 'SAMPURASUN, SIM KURING',
            subtitle: 'Ngadamel pangalaman digital kalayan presisi sareng kréativitas.',
            viewWork: 'Tingali Karya',
            moreAbout: 'Langlang Perkawis',
            scroll: 'Gulung ka handap'
        },
        about: {
            title: 'Perkawis',
            me: 'Sim Kuring',
            greeting: "Wilujeng, sim kuring",
            yearsExp: 'Taun Pangalaman',
            projects: 'Proyék',
            satisfied: 'Sugema'
        },
        projects: {
            title: 'Pilihan',
            works: 'Karya',
            viewProject: 'Tingali Proyék',
            tech: 'Téknologi'
        },
        footer: {
            heading: "Hayu Urang Ngadamel Hal Anu",
            amazing: "Saé Pisan",
            together: "Sasarengan",
            text: "Sim kuring sok sumanget pikeun kolaborasi dina proyék inovatif sareng ngawujudkeun ide janten nyata.",
            touch: "Hubungi Sim Kuring",
            rights: "Didamel ku"
        },
        content: {
            bio: "Sim kuring, Abdul Gani, saurang programmer sareng pamekar parangkat lunak anu fokus kana solusi berbasis wéb. Kalayan pangalaman dina PHP, JavaScript, HTML, CSS, sarta framework modérn sapertos Laravel, sim kuring biasa ngawangun aplikasi anu henteu ngan ukur fungsional tapi ogé gampang dianggo.\n\nSalila perjalanan akademik sareng proyék pribadi, sim kuring parantos ngembangkeun sistem kasir sareng manajemén inventori kanggo usaha alit, ogé aplikasi manajemén perpustakaan. Unggal karya sim kuring dirancang kalayan merhatoskeun efisiensi, kaandalan, sareng tampilan antarmuka anu ramah pangguna.\n\nSim kuring gaduh karesep anu ageung kana desain UI/UX sareng integrasi téknologi anu ngarojong produktivitas. Sim kuring boga komitmen janten pamekar profésional anu nyiptakeun solusi digital mangpaat kanggo dunya pendidikan, bisnis, sareng masarakat lega.",
            projects: {
                "1": {
                    title: "Dasbor Neon",
                    description: "Dasbor futuristik kalayan visualisasi data sacara real-time."
                },
                "2": {
                    title: "E-Commerce Ultra",
                    description: "Platform balanja performa luhur kalayan arsitéktur headless."
                },
                "3": {
                    title: "Portofolio Cyber",
                    description: "Situs wéb portofolio pribadi kalayan animasi WebGL anu imersif."
                }
            }
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
