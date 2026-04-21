# Innodify Website

One-line description: Corporate website for Innodify — AI, Web & Mobile Development company.

## Tech Stack
- **Frontend**: Next.js (App Router), React, TypeScript, Framer Motion
- **Styling**: Tailwind CSS
- **Backend**: Express.js (separate `server/` directory)
- **Database**: MongoDB (via Mongoose)
- **Hosting**: Hostinger (deployment scripts in `hostinger_deploy/`)
- **Domain**: innodify.in

## Directory Structure
```
src/
├── app/                # Next.js app router pages
│   ├── blog/           # Blog system (listing, [slug], add/edit)
│   ├── products/       # Product pages (CRM, real-estate)
│   └── ...
├── components/         # Shared React components
├── data/               # TypeScript data types (blogs.ts, etc.)
├── lib/                # API helpers, server-api, utilities
└── actions/            # Server actions (blogActions)
server/
├── models/             # Mongoose models (Blog.js)
├── routes/             # Express routes (blogRoutes, uploadRoutes)
├── config/             # DB connection config
└── server.js           # Express entry point
```

## Reading Order
| Order | File | Description |
|-------|------|-------------|
| 1 | README.md | This file — project overview |
| 2 | changelog.md | Chronological change history |

## Critical Rules
- Blog slugs are stored in MongoDB and must be unique (lowercase, trimmed)
- The blog admin panel is at `/blog/add` with session-based auth (username: admin)
- Blog URLs follow pattern: `https://innodify.in/blog/{slug}`
- Custom URL slugs can be set via the SEO & Metadata tab; if empty, auto-generated from title
- SEO fields (metaTitle, metaDescription, keywords, canonicalUrl) are optional

## Quick Facts
| Item | Value |
|------|-------|
| Domain | innodify.in |
| Blog URL pattern | /blog/{slug} |
| Dev server (frontend) | localhost:3001 |
| Backend server | separate Express app |
| DB | MongoDB |
