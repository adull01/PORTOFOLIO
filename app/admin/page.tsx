import { redirect } from 'next/navigation';
import { checkAuth } from '../lib/auth';
import AdminDashboard from './AdminDashboard';
import { getProjects } from '../lib/projects';
import { getProfile } from '../lib/profile';

export default async function AdminPage() {
    const customIsAuthenticated = await checkAuth();

    if (!customIsAuthenticated) {
        redirect('/login');
    }

    const initialProjects = await getProjects();
    const initialProfile = await getProfile();

    return <AdminDashboard initialProjects={initialProjects} initialProfile={initialProfile} />;
}
