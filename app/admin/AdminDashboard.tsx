'use client';

import { useState } from 'react';
import { Project, saveProject, deleteProject } from '../lib/projects';
import { Profile, saveProfile } from '../lib/profile';
import { logout } from '../lib/auth';
import { uploadImage } from '../lib/upload';
import styles from './Admin.module.css';
import {
    Plus, Edit, Trash2, LogOut, Save, X,
    User, Globe, Upload, Camera, LayoutDashboard,
    FolderKanban, Languages, ChevronRight
} from 'lucide-react';

const LANGUAGES = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'jp', name: '日本語', flag: '🇯🇵' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'su', name: 'Basa Sunda', flag: '💠' },
];

const TRANSLATIONS = {
    en: {
        dashboard: "Dashboard",
        projects: "Projects",
        profile: "Profile",
        logout: "Logout",
        welcome: "Welcome back,",
        overview: "Overview",
        totalProjects: "Total Projects",
        status: "System Status",
        active: "Active",
        editProject: "Edit Project",
        newProject: "New Project",
        projectTitle: "Project Title",
        category: "Category",
        description: "Description",
        techStack: "Tech Stack",
        save: "Save Changes",
        deleteConfirm: "Delete this project?",
        name: "Name",
        role: "Role",
        bio: "Bio",
        imageUrl: "Profile Image",
        updateProfile: "Update Profile",
        uploadNew: "Upload New Photo"
    },
    id: {
        dashboard: "Dasbor",
        projects: "Proyek",
        profile: "Profil",
        logout: "Keluar",
        welcome: "Selamat datang,",
        overview: "Ringkasan",
        totalProjects: "Total Proyek",
        status: "Status Sistem",
        active: "Aktif",
        editProject: "Edit Proyek",
        newProject: "Proyek Baru",
        projectTitle: "Judul Proyek",
        category: "Kategori",
        description: "Deskripsi",
        techStack: "Teknologi",
        save: "Simpan",
        deleteConfirm: "Hapus proyek ini?",
        name: "Nama",
        role: "Peran",
        bio: "Bio",
        imageUrl: "Foto Profil",
        updateProfile: "Perbarui Profil",
        uploadNew: "Upload Foto Baru"
    },
    es: {
        dashboard: "Tablero",
        projects: "Proyectos",
        profile: "Perfil",
        logout: "Salir",
        welcome: "Bienvenido,",
        overview: "Resumen",
        totalProjects: "Proyectos Totales",
        status: "Estado del Sistema",
        active: "Activo",
        editProject: "Editar Proyecto",
        newProject: "Nuevo Proyecto",
        projectTitle: "Título",
        category: "Categoría",
        description: "Descripción",
        techStack: "Tecnologías",
        save: "Guardar",
        deleteConfirm: "¿Eliminar proyecto?",
        name: "Nombre",
        role: "Rol",
        bio: "Biografía",
        imageUrl: "Imagen de Perfil",
        updateProfile: "Actualizar Perfil",
        uploadNew: "Subir Nueva Foto"
    },
    jp: {
        dashboard: "ダッシュボード",
        projects: "プロジェクト",
        profile: "プロフィール",
        logout: "ログアウト",
        welcome: "お帰りなさい、",
        overview: "概要",
        totalProjects: "プロジェクト数",
        status: "システム状態",
        active: "アクティブ",
        editProject: "プロジェクト編集",
        newProject: "新規プロジェクト",
        projectTitle: "タイトル",
        category: "カテゴリー",
        description: "説明",
        techStack: "技術スタック",
        save: "保存",
        deleteConfirm: "削除しますか？",
        name: "名前",
        role: "役割",
        bio: "自己紹介",
        imageUrl: "プロフィール画像",
        updateProfile: "更新する",
        uploadNew: "新しい写真をアップロード"
    },
    fr: {
        dashboard: "Tableau de bord",
        projects: "Projets",
        profile: "Profil",
        logout: "Déconnexion",
        welcome: "Bon retour,",
        overview: "Aperçu",
        totalProjects: "Total Projets",
        status: "État du Système",
        active: "Actif",
        editProject: "Modifier Projet",
        newProject: "Nouveau Projet",
        projectTitle: "Titre",
        category: "Catégorie",
        description: "Description",
        techStack: "Technologies",
        save: "Enregistrer",
        deleteConfirm: "Supprimer ce projet ?",
        name: "Nom",
        role: "Rôle",
        bio: "Bio",
        imageUrl: "Image de Profil",
        updateProfile: "Mettre à jour",
        uploadNew: "Télécharger une photo"
    },
    su: {
        dashboard: "Dasbor",
        projects: "Proyék",
        profile: "Profil",
        logout: "Kaluar",
        welcome: "Wilujeng sumping,",
        overview: "Ringkesan",
        totalProjects: "Total Proyék",
        status: "Status Sistem",
        active: "Aktif",
        editProject: "Édit Proyék",
        newProject: "Proyék Anyar",
        projectTitle: "Judul Proyék",
        category: "Katégori",
        description: "Déskripsi",
        techStack: "Téknologi",
        save: "Simpen",
        deleteConfirm: "Hapus proyék ieu?",
        name: "Nami",
        role: "Peran",
        bio: "Bio",
        imageUrl: "Poto Profil",
        updateProfile: "Perbarui Profil",
        uploadNew: "Upload Poto Anyar"
    }
};

type LanguageCode = 'en' | 'id' | 'es' | 'jp' | 'fr' | 'su';

export default function AdminDashboard({ initialProjects, initialProfile }: { initialProjects: Project[], initialProfile: Profile }) {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'projects' | 'profile'>('dashboard');
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [profile, setProfile] = useState<Profile>(initialProfile);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [lang, setLang] = useState<LanguageCode>('en');

    const t = TRANSLATIONS[lang];

    const handleEdit = (project: Project) => {
        setCurrentProject(project);
        setIsEditing(true);
    };

    const handleAdd = () => {
        setCurrentProject({
            id: Date.now().toString(),
            title: '',
            category: '',
            description: '',
            tech: []
        });
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm(t.deleteConfirm)) {
            await deleteProject(id);
            setProjects(projects.filter(p => p.id !== id));
        }
    };

    const handleSaveProject = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentProject) return;

        await saveProject(currentProject);

        const existingIndex = projects.findIndex(p => p.id === currentProject.id);
        if (existingIndex >= 0) {
            const newProjects = [...projects];
            newProjects[existingIndex] = currentProject;
            setProjects(newProjects);
        } else {
            setProjects([...projects, currentProject]);
        }

        setIsEditing(false);
        setCurrentProject(null);
    };

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        await saveProfile(profile);
        alert('Profile updated!');
    };

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logoArea}>
                    <h2>ADMIN<span className="gradient-text">PANEL</span></h2>
                </div>

                <nav className={styles.nav}>
                    <button
                        className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <LayoutDashboard size={20} /> {t.dashboard}
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'profile' ? styles.active : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <User size={20} /> {t.profile}
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'projects' ? styles.active : ''}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        <FolderKanban size={20} /> {t.projects}
                    </button>
                </nav>

                <div className={styles.sidebarFooter}>
                    <div className={styles.langWrapper}>
                        <Languages size={18} className={styles.langIcon} />
                        <select
                            value={lang}
                            onChange={(e) => setLang(e.target.value as LanguageCode)}
                            className={styles.langSelect}
                        >
                            {LANGUAGES.map(l => (
                                <option key={l.code} value={l.code}>{l.flag} {l.name}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={() => logout()} className={styles.logoutBtn}>
                        <LogOut size={18} /> {t.logout}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.main}>
                <header className={styles.topHeader}>
                    <div className={styles.welcomeMsg}>
                        <h1>{t.welcome} <span className={styles.highlight}>{profile.name}</span></h1>
                        <p className={styles.date}>{new Date().toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <div className={styles.userBadge}>
                        <img src={profile.imageUrl} alt="Profile" />
                    </div>
                </header>

                <div className={styles.contentArea}>
                    {activeTab === 'dashboard' && (
                        <div className={styles.dashboardView}>
                            <div className={styles.statsGrid}>
                                <div className={styles.statCard}>
                                    <h3>{t.totalProjects}</h3>
                                    <div className={styles.statValue}>{projects.length}</div>
                                    <div className={styles.statTrend}>+2 this month</div>
                                </div>
                                <div className={styles.statCard}>
                                    <h3>{t.status}</h3>
                                    <div className={styles.statValue} style={{ color: '#39ff14' }}>{t.active}</div>
                                    <div className={styles.statTrend}>Server online</div>
                                </div>
                                <div className={styles.statCard}>
                                    <h3>Profile Views</h3>
                                    <div className={styles.statValue}>1.2K</div>
                                    <div className={styles.statTrend}>+15% vs last week</div>
                                </div>
                            </div>

                            <div className={styles.recentActivity}>
                                <h3>Quick Actions</h3>
                                <div className={styles.actionButtons}>
                                    <button onClick={() => setActiveTab('projects')} className={styles.actionBtn}>
                                        Manage Projects <ChevronRight size={16} />
                                    </button>
                                    <button onClick={() => setActiveTab('profile')} className={styles.actionBtn}>
                                        Update Profile <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'profile' && (
                        <div className={`fade-in ${styles.profileView}`}>
                            <h2 className={styles.pageTitle}>{t.updateProfile}</h2>
                            <div className={styles.profileLayout}>
                                <div className={styles.profilePreviewSide}>
                                    <div className={`${styles.previewCard} neon-border`}>
                                        <img src={profile.imageUrl} alt="Preview" className={styles.largePreview} />
                                        <h3>{profile.name}</h3>
                                        <p>{profile.role}</p>
                                    </div>
                                </div>

                                <form className={styles.formContainer} onSubmit={handleSaveProfile}>
                                    <div className={styles.formGroup}>
                                        <label>{t.imageUrl}</label>
                                        <div className={styles.uploadBox}>
                                            <button
                                                type="button"
                                                className={styles.uploadBtn}
                                                onClick={() => document.getElementById('fileInput')?.click()}
                                            >
                                                <Camera size={18} /> {t.uploadNew}
                                            </button>
                                            <input
                                                id="fileInput"
                                                type="file"
                                                accept="image/*"
                                                className={styles.hiddenInput}
                                                onChange={async (e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const formData = new FormData();
                                                        formData.append('file', file);
                                                        try {
                                                            const url = await uploadImage(formData);
                                                            setProfile({ ...profile, imageUrl: url });
                                                        } catch (err) {
                                                            alert('Failed to upload image');
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.formGroup}>
                                            <label>{t.name}</label>
                                            <input
                                                value={profile.name}
                                                onChange={e => setProfile({ ...profile, name: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>{t.role}</label>
                                            <input
                                                value={profile.role}
                                                onChange={e => setProfile({ ...profile, role: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>{t.bio}</label>
                                        <textarea
                                            value={profile.bio}
                                            onChange={e => setProfile({ ...profile, bio: e.target.value })}
                                            rows={5}
                                        />
                                    </div>

                                    <button type="submit" className={styles.saveBtn}>
                                        <Save size={18} /> {t.save}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {activeTab === 'projects' && (
                        <div className={`fade-in ${styles.projectsView}`}>
                            <div className={styles.viewHeader}>
                                <h2 className={styles.pageTitle}>{t.projects}</h2>
                                <button onClick={handleAdd} className={styles.addBtn}>
                                    <Plus size={20} /> {t.newProject}
                                </button>
                            </div>

                            <div className={styles.grid}>
                                {projects.map((project) => (
                                    <div key={project.id} className={styles.card}>
                                        <div className={styles.cardHeader}>
                                            <h3>{project.title}</h3>
                                            <div className={styles.cardTools}>
                                                <button onClick={() => handleEdit(project)} className={styles.iconBtn}>
                                                    <Edit size={16} />
                                                </button>
                                                <button onClick={() => handleDelete(project.id)} className={`${styles.iconBtn} ${styles.danger}`}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                        <span className={styles.badge}>{project.category}</span>
                                        <p className={styles.cardDesc}>{project.description.substring(0, 100)}...</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Modal for Projects */}
            {isEditing && currentProject && (
                <div className={styles.modalOverlay}>
                    <div className={`${styles.modal} glass-card`}>
                        <div className={styles.modalHeader}>
                            <h3>{projects.find(p => p.id === currentProject.id) ? t.editProject : t.newProject}</h3>
                            <button onClick={() => setIsEditing(false)} className={styles.closeBtn}>
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSaveProject} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>{t.projectTitle}</label>
                                <input
                                    value={currentProject.title}
                                    onChange={e => setCurrentProject({ ...currentProject, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>{t.category}</label>
                                <input
                                    value={currentProject.category}
                                    onChange={e => setCurrentProject({ ...currentProject, category: e.target.value })}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>{t.description}</label>
                                <textarea
                                    value={currentProject.description}
                                    onChange={e => setCurrentProject({ ...currentProject, description: e.target.value })}
                                    required
                                    rows={4}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>{t.techStack} (comma separated)</label>
                                <input
                                    value={currentProject.tech.join(', ')}
                                    onChange={e => setCurrentProject({ ...currentProject, tech: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                                />
                            </div>
                            <div className={styles.formActions}>
                                <button type="submit" className={styles.saveBtn}>
                                    <Save size={20} /> {t.save}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
