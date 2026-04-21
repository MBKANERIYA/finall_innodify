# Changelog

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
