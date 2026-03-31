import { BlogPost } from '@/data/blogs';

/**
 * Client-safe fetch for blogs via API route (relative URL).
 * Used by client components that can't access MongoDB directly.
 * This file must NOT import any server-only modules (mongoose, connectDB, etc).
 */
export async function fetchBlogsClient(): Promise<BlogPost[]> {
    try {
        const res = await fetch('/api/blogs', { cache: 'no-store' });
        if (!res.ok) {
            console.error('Failed to fetch blogs from API');
            return [];
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}
