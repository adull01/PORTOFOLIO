'use server';

import fs from 'fs/promises';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data/profile.json');

export interface Profile {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export async function getProfile(): Promise<Profile> {
    try {
        const data = await fs.readFile(dataPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return {
            name: "Creative Developer",
            role: "Full Stack Engineer",
            bio: "Building digital experiences with Code & Passion.",
            imageUrl: "/profile.png"
        };
    }
}

export async function saveProfile(profile: Profile) {
    await fs.writeFile(dataPath, JSON.stringify(profile, null, 2));
    return { success: true };
}
