"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Save, Upload, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BlogPost, defaultBlogs } from "@/data/blogs";
import { addBlog, deleteBlog } from "@/actions/blogActions";

export default function AddBlogPage() {
    const router = useRouter();

    const [formData, setFormData] = useState<Partial<BlogPost>>({
        author: "Innodify Admin",
        date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }),
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.excerpt || !formData.category) {
            alert("Please fill in all required fields.");
            return;
        }

        const newPost: BlogPost = {
            title: formData.title || "Untitled",
            excerpt: formData.excerpt || "",
            author: formData.author || "Innodify Admin",
            date: formData.date || new Date().toLocaleDateString(),
            readTime: formData.readTime || "5 min read",
            category: formData.category || "General",
            image:
                formData.image ||
                "https://images.unsplash.com/photo-1499750310159-5254f4121c6d?w=600&q=80",
        };

        const result = await addBlog(newPost);

        if (result.success) {
            alert("Blog post added successfully!");
            router.push("/blog");
            router.refresh();
        } else {
            alert("Failed to add blog post. " + result.error);
        }
    };

    return (
        <section className="relative min-h-screen bg-[#0e1012] py-24 overflow-hidden">
            {/* Background elements to match Home */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0e1012] -z-10" />
            <div className="absolute inset-0 opacity-20 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00adef]/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 max-w-2xl relative z-10">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#9ca3af] hover:text-[#00adef] transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to Blog
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-serif text-[#e5e7eb] mb-8">
                        Create New Post
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter post title"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                placeholder:text-[#6b7280] border border-[#2a2f36]
                focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                outline-none transition-all"
                            />
                        </div>

                        {/* Excerpt */}
                        <div>
                            <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                Excerpt
                            </label>
                            <textarea
                                name="excerpt"
                                rows={3}
                                placeholder="Brief summary of the post"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                placeholder:text-[#6b7280] border border-[#2a2f36]
                focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                outline-none transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                  border border-[#2a2f36]
                  focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                  outline-none transition-all"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Development">Development</option>
                                    <option value="UX Design">UX Design</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Tutorial">Tutorial</option>
                                </select>
                            </div>

                            {/* Read Time */}
                            <div>
                                <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                    Read Time
                                </label>
                                <input
                                    type="text"
                                    name="readTime"
                                    placeholder="e.g. 5 min read"
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                  placeholder:text-[#6b7280] border border-[#2a2f36]
                  focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                  outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-medium text-[#b6bcc6] mb-2">
                                Image URL
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="url"
                                    name="image"
                                    placeholder="https://example.com/image.jpg"
                                    onChange={handleChange}
                                    className="flex-1 px-4 py-3 rounded-lg bg-[#15181c] text-[#e5e7eb]
                  placeholder:text-[#6b7280] border border-[#2a2f36]
                  focus:border-[#00adef] focus:ring-2 focus:ring-[#00adef]/30
                  outline-none transition-all"
                                />
                                <div className="px-4 py-3 bg-[#15181c] rounded-lg border border-[#2a2f36] text-[#6b7280]">
                                    <Upload size={20} />
                                </div>
                            </div>
                            <p className="text-xs text-[#6b7280] mt-1">
                                Leave blank for a default image.
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#00adef] text-[#0e1012] font-semibold py-4
              rounded-lg hover:bg-[#00adef]/90 active:scale-[0.99]
              transition-all flex items-center justify-center gap-2"
                        >
                            <Save size={20} />
                            Publish Post
                        </button>
                    </form>
                </motion.div>

                {/* Manage Blogs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-24"
                >
                    <h2 className="text-2xl font-serif text-[#e5e7eb] mb-8 border-b border-[#2a2f36] pb-4">
                        Manage Existing Posts
                    </h2>
                    <div className="space-y-4">
                        {defaultBlogs.map((post, index) => (
                            <div
                                key={index}
                                className="bg-[#15181c] p-4 rounded-lg border border-[#2a2f36] flex items-center justify-between group"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 rounded-md bg-cover bg-center shrink-0"
                                        style={{ backgroundImage: `url(${post.image})` }}
                                    />
                                    <div>
                                        <h3 className="text-[#e5e7eb] font-medium line-clamp-1">{post.title}</h3>
                                        <p className="text-xs text-[#6b7280]">{post.category} • {post.date}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={async () => {
                                        if (confirm(`Are you sure you want to delete "${post.title}"?`)) {
                                            const result = await deleteBlog(post.title);
                                            if (result.success) {
                                                alert("Post deleted successfully!");
                                                window.location.reload();
                                            } else {
                                                alert("Failed to delete: " + result.error);
                                            }
                                        }
                                    }}
                                    className="p-2 text-[#6b7280] hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                                    title="Delete Post"
                                >
                                    <Trash2 size={18} />
                                    <span className="sr-only">Delete</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

