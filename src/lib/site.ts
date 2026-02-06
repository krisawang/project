const fallbackUrl = "http://localhost:3000";

const normalizedUrl = (url: string) => url.replace(/\/$/, "");

export const siteConfig = {
  name: "NovaEdge",
  url: normalizedUrl(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl),
  description:
    "NovaEdge is a modern landing page template for AI, SaaS, and professional services teams ready to launch fast."
};
