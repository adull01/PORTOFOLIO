'use server';

import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function uploadImage(formData: FormData) {
    const file = formData.get('file') as File;
    if (!file) {
        throw new Error('No file uploaded');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = file.name.split('.').pop();
    const filename = `profile-${uniqueSuffix}.${ext}`;

    // Save to public/uploads
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    const filepath = join(uploadDir, filename);

    await writeFile(filepath, buffer);

    return `/uploads/${filename}`;
}
