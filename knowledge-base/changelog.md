# Changelog

## 2026-07-14 — Added Markdown Table Support to Blog Editor
**What**: Added the ability to insert and render markdown tables in blog posts.
**Why**: Users needed to include structured tabular data (e.g., pricing tables, feature comparisons) in blog content, which was previously unsupported.
**Files Changed**:
- `src/app/blog/add/page.tsx` — Added Table icon import and toolbar button
- `src/components/BlogContentRenderer.tsx` — Added table parsing and rendering logic

**Details**:
- Added a **Table** button to the content editor toolbar (between the Link button and the end of the toolbar)
- Clicking the button prompts for number of columns and rows, then inserts a markdown table template
- Table syntax uses standard markdown: `| Header | Header |` / `| --- | --- |` / `| Cell | Cell |`
- `BlogContentRenderer` now groups consecutive `|`-starting lines into table blocks
- Tables render with dark-themed styling: bordered, alternating row backgrounds, hover effects
- Supports bold text and links inside table cells via existing `renderText()` parser
- Updated the markdown hint text to include `| Table |`
- Build verified successfully

## 2026-04-21 — Added E-Commerce App Coming Soon Page
**What**: Created a customized "Coming Soon" page for the `/products/e-commerce-app` route.
**Why**: The e-commerce app route was missing and returning a 404 error, creating a poor user experience. It's now replaced with a styled "Coming Soon" UI.
**Files Changed**:
- `src/app/products/e-commerce-app/page.tsx`
- `src/app/products/e-commerce-app/Content.tsx`

**Details**:
- Implemented `ECommerceComingSoonContent` client component using Framer Motion for sleek animations.
- Added a dark theme UI matching Innodify's premium styling.
- Configured SEO metadata in `page.tsx` for optimal discovery.

## 2026-04-21 — Added URL Slug Field to Blog SEO Settings
**What**: Added a custom URL Slug input field in the SEO & Metadata tab of the blog add/edit page.
**Why**: Previously, blog slugs were always auto-generated from the title. Users needed the ability to set custom, SEO-friendly URL slugs (e.g., `blog1` → `https://innodify.in/blog/blog1`).
**Files Changed**:
- `src/app/blog/add/page.tsx`
- Slug generation logic, SEO tab UI, SEO preview updated

**Details**:
- Added `generateSlugFromTitle()` helper function for clean slug generation
- Added `handleSlugChange()` with input sanitization (lowercase, alphanumeric + hyphens only)
- New "URL Slug" field in SEO & Metadata tab with:
  - Input field with monospace font
  - "Auto Generate" button to populate from title
  - Live URL preview (`https://innodify.in/blog/{slug}` with cyan-highlighted slug)
  - Helper text explaining allowed characters
- Updated `handleSubmit` to use custom slug when provided, fallback to auto-generated
- Updated SEO search preview to reflect the custom/actual slug
- No backend changes needed — the existing `slug` field in the Blog model already supports custom values
