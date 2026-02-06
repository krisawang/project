# Engineering Guidelines

## Coding conventions
- Use TypeScript and functional React components.
- Keep sections modular and data-driven.
- Prefer Tailwind utility classes; keep custom CSS in `globals.css` minimal.
- Use Next.js App Router conventions (`app/` directory, metadata exports).

## Review checklist
- [ ] Copy and links updated for the client
- [ ] Contact form endpoint configured in `.env`
- [ ] Metadata, robots.txt, and sitemap.xml updated for production URL
- [ ] Images optimized and using `next/image`
- [ ] Accessibility review (headings order, labels, contrast)
- [ ] `npm run lint` and `npm run build` pass
