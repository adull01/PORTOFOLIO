'use client';

import { motion } from 'framer-motion';
import { Project } from '../lib/projects';
import styles from './Projects.module.css';

const containerVars = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

import { useLanguage } from '../context/LanguageContext';

const Projects = ({ projects }: { projects: Project[] }) => {
    const { t } = useLanguage();

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.sectionTitle}
                >
                    {t.projects.title} <span className="gradient-text">{t.projects.works}</span>
                </motion.h2>

                <motion.div
                    className={styles.grid}
                    variants={containerVars}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`${styles.card} neon-border`}
                            variants={itemVars}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={styles.cardContent}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.title}>
                                    {t.content?.projects?.[project.id as keyof typeof t.content.projects]?.title || project.title}
                                </h3>
                                <p className={styles.description}>
                                    {t.content?.projects?.[project.id as keyof typeof t.content.projects]?.description || project.description}
                                </p>
                                <div className={styles.techStack}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} className={styles.tag}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
