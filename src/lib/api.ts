function getBaseUrl() {
  if (typeof window !== 'undefined') return ''; // Browser uses relative URIs
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT || 3000}`; // Dev environment
}

const API_URL = getBaseUrl();
import { BlogPost } from '@/data/blogs';

export async function fetchBlogs(): Promise<BlogPost[]> {
    try {
        const res = await fetch(`${API_URL}/api/blogs`, { cache: 'no-store' });
        if (!res.ok) {
            console.error('Failed to fetch blogs from backend');
            return [];
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const res = await fetch(`${API_URL}/api/blogs/${slug}`, { cache: 'no-store' });
        if (!res.ok) {
            if (res.status === 404) return null;
            console.error('Failed to fetch blog post from backend');
            return null;
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}
