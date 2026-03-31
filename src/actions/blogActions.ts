'use server';

import { BlogPost } from '@/data/blogs';
import { revalidatePath } from 'next/cache';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';

export async function addBlog(newBlog: BlogPost) {
    try {
        await connectDB();

        // Auto-generate slug from title
        const slug = newBlog.title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');

        // Check if slug already exists
        const existing = await Blog.findOne({ slug });
        if (existing) {
            return { success: false, error: 'A blog with this title/slug already exists' };
        }

        await Blog.create({
            title: newBlog.title,
            slug,
            excerpt: newBlog.excerpt,
            content: newBlog.content,
            author: newBlog.author || 'Innodify Admin',
            date: newBlog.date || new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            }),
            readTime: newBlog.readTime || '5 min read',
            category: newBlog.category,
            image: newBlog.image || '',
            metaTitle: newBlog.metaTitle || '',
            metaDescription: newBlog.metaDescription || '',
            keywords: newBlog.keywords || [],
            canonicalUrl: newBlog.canonicalUrl || '',
        });

        revalidatePath('/blog');
        return { success: true };
    } catch (error: any) {
        console.error('Failed to add blog:', error);
        return { success: false, error: error.message || 'Failed to save blog to database.' };
    }
}

export async function deleteBlog(slug: string) {
    try {
        await connectDB();

        const blog = await Blog.findOneAndDelete({ slug });
        if (!blog) {
            return { success: false, error: 'Blog not found' };
        }

        revalidatePath('/blog');
        return { success: true };
    } catch (error: any) {
        console.error('Failed to delete blog:', error);
        return { success: false, error: error.message || 'Failed to delete blog from database.' };
    }
}

export async function updateBlog(oldSlug: string, updatedBlog: BlogPost) {
    try {
        await connectDB();

        const existing = await Blog.findOne({ slug: oldSlug });
        if (!existing) {
            return { success: false, error: 'Blog not found' };
        }

        // If title changed, regenerate slug
        const updateData: any = { ...updatedBlog };
        if (updatedBlog.title && updatedBlog.title !== existing.title) {
            updateData.slug = updatedBlog.title
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
        }

        await Blog.findOneAndUpdate(
            { slug: oldSlug },
            updateData,
            { new: true, runValidators: true }
        );

        revalidatePath('/blog');
        revalidatePath(`/blog/${oldSlug}`);
        if (updateData.slug && updateData.slug !== oldSlug) {
            revalidatePath(`/blog/${updateData.slug}`);
        }

        return { success: true };
    } catch (error: any) {
        console.error('Failed to update blog:', error);
        return { success: false, error: error.message || 'Failed to update blog in database.' };
    }
}
