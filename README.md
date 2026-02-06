# NovaEdge Landing Page Template

NovaEdge is a reusable landing page starter for AI, SaaS, and service-based teams. It ships with a full home page, legal pages, contact form integration, SEO primitives, and a clean Tailwind design system.

## Quick start (local)

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## 接单改版最短路径

1. 只修改 `src/content/landing.ts` 的文案与模块内容。
2. 在 `.env` 设置以下两个环境变量。
3. 部署即可交付。

## Update copy & sections

Edit these files to customize the content:

- Home page sections: `src/content/landing.ts`
- Privacy policy: `src/app/privacy/page.tsx`
- Terms of service: `src/app/terms/page.tsx`
- Metadata and social preview image: `src/app/layout.tsx` + `public/og-image.svg`

## Update the theme color

The template uses CSS variables mapped into Tailwind.

1. Update the palette in `src/app/globals.css` under `:root`.
2. (Optional) Extend additional theme colors in `tailwind.config.ts`.

## Contact form configuration

This project uses Formspree (free tier) to handle submissions.

1. Create a Formspree form and copy the endpoint URL.
2. Add the endpoint to `.env` using the key below:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
```

> The contact section displays a reminder if the environment variable is missing.

## Site URL configuration

`NEXT_PUBLIC_SITE_URL` drives metadata, `robots.txt`, and `sitemap.xml`. Set it before deploying.

```bash
NEXT_PUBLIC_SITE_URL=https://project-nine-alpha-37.vercel.app
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel, click **New Project** and import the repo.
3. Set the `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_FORMSPREE_ENDPOINT` environment variables.
4. Confirm the build settings (defaults work for Next.js).
5. Deploy.

## Scripts

- `npm run dev` — start the development server
- `npm run lint` — run ESLint
- `npm run build` — build for production
