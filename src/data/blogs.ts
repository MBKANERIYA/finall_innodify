export interface BlogPost {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

export const defaultBlogs: BlogPost[] = [
{
        title: "Build eCommerce Website From Scratch in 9 Easy Steps",
        excerpt: "A comprehensive guide to launching your first online store, from planning to deployment.",
        author: "Team Innodify",
        date: "Dec 20, 2024",
        readTime: "8 min read",
        category: "Development",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    },
{
        title: "eCommerce UX Audit Checklist: Finding and Fixing UX Issues",
        excerpt: "Learn how to identify and resolve user experience problems that hurt your conversion rate.",
        author: "Team Innodify",
        date: "Dec 15, 2024",
        readTime: "6 min read",
        category: "UX Design",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
    },
{
        title: "Shopify vs Magento: Which Platform Is Right for Your Business?",
        excerpt: "An in-depth comparison of the two leading eCommerce platforms to help you make the right choice.",
        author: "Team Innodify",
        date: "Dec 10, 2024",
        readTime: "10 min read",
        category: "Platforms",
        image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80",
    },
{
        title: "The Complete Guide to Headless Commerce",
        excerpt: "Everything you need to know about modern headless architecture and composable commerce.",
        author: "Team Innodify",
        date: "Dec 5, 2024",
        readTime: "12 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    },
{
        title: "How to Improve Your Magento Store's Core Web Vitals",
        excerpt: "Practical tips to boost your Magento performance and improve your Google rankings.",
        author: "Team Innodify",
        date: "Nov 28, 2024",
        readTime: "7 min read",
        category: "Performance",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
{
        title: "Hyvä Theme: A Game Changer for Magento Performance",
        excerpt: "Discover how Hyvä themes can dramatically improve your Magento 2 store's speed.",
        author: "Team Innodify",
        date: "Nov 20, 2024",
        readTime: "5 min read",
        category: "Magento",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
    "title": "E-commerce Growth Hacks That Actually Work",
    "excerpt": "Discover proven e-commerce growth hacks that drive traffic, boost conversions, and increase repeat sales—no fluff, just strategies that work.",
    "author": "Innodify Admin",
    "date": "Jan 23, 2026",
    "readTime": "7 min read",
    "category": "Technology",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zSRv3D2XGd-GBdY025Oy7yW9sI1jp_vkqA&s"
},
];
