# imrohitvk.github.io

Personal website of **Rohit Sharma**, Ph.D. Scholar in Computer Science & Engineering at IIT Ropar.

**Live site:** https://imrohitvk.github.io

Built with [Astro](https://astro.build) as a fully static site and deployed to GitHub Pages with GitHub Actions.

## Pages

| Page | Path | What it shows |
|---|---|---|
| Home | `/` | Intro, research focus, featured projects, latest papers and posts |
| About | `/about/` | Story, experience timeline, education, skills, certifications |
| Research | `/research/` | Research themes and papers with abstracts |
| Projects | `/projects/` | All projects with filters |
| Teaching | `/teaching/` | NPTEL and IIT Ropar teaching |
| Blog | `/blog/` | Posts, with an RSS feed at `/rss.xml` |
| Contact | `/contact/` | Email and social links |

## Updating content

Content lives in data files, so most updates never touch layout code.

| To change | Edit |
|---|---|
| Name, tagline, intro, socials, stats | `src/data/profile.ts` |
| Experience, education, skills, certifications | `src/data/profile.ts` |
| Projects | `src/data/projects.ts` |
| Papers, research themes, teaching | `src/data/research.ts` |
| Blog posts | add a Markdown file to `src/content/blog/` |

A new blog post needs this front matter:

```yaml
---
title: "Post title"
date: 2026-10-24
description: "One-line summary shown in lists and link previews."
tags: [research]
---
```

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev       # http://localhost:4321 with live reload
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run check     # type-check the project
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
One-time setup: in the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.

## Structure

```
src/
  components/   Header, footer, cards, icons, hero animation
  content/blog/ Blog posts (Markdown)
  data/         Site content (profile, projects, research, teaching)
  layouts/      Base page layout (SEO, theme, fonts)
  pages/        One file per page; blog/[id].astro renders posts
  styles/       Global design tokens and utilities
public/         Favicon, link-preview image, robots.txt
```

## License

[MIT](LICENSE)
