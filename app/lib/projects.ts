'use server';

import fs from 'fs/promises';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data/projects.json');

export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tech: string[];
}

export async function getProjects(): Promise<Project[]> {
    try {
        const data = await fs.readFile(dataPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export async function saveProject(project: Project) {
    const projects = await getProjects();
    const index = projects.findIndex((p) => p.id === project.id);

    if (index >= 0) {
        projects[index] = project;
    } else {
        projects.push(project);
    }

    await fs.writeFile(dataPath, JSON.stringify(projects, null, 2));
    return { success: true };
}

export async function deleteProject(id: string) {
    const projects = await getProjects();
    const filtered = projects.filter((p) => p.id !== id);
    await fs.writeFile(dataPath, JSON.stringify(filtered, null, 2));
    return { success: true };
}
