'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
    const password = formData.get('password');

    if (password === 'admin123') {
        const cookieStore = await cookies();
        cookieStore.set('auth_token', 'valid_token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 // 1 day
        });
    } else {
        return { error: 'Invalid password' };
    }

    // Redirect must be outside the try/catch or logic flow for useActionState sometimes, 
    // but here we just return or redirect. 
    // IMPORTANT: redirect throws an error so we should do it at the end.
    if (password === 'admin123') {
        redirect('/admin');
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');
    redirect('/');
}

export async function checkAuth() {
    const cookieStore = await cookies();
    return cookieStore.has('auth_token');
}
