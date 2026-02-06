export const landingContent = {
  nav: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "AI + SaaS landing page",
    title: "Launch your customer story in days, not months.",
    subtitle:
      "NovaEdge is a reusable landing page template built for modern AI and SaaS teams. Replace the copy, update the theme, and ship a conversion-focused site fast.",
    primaryCta: { label: "Start your launch", href: "#contact" },
    secondaryCta: { label: "View pricing", href: "#pricing" },
    stats: [
      { value: "2x", label: "faster launches" },
      { value: "+38%", label: "demo requests" },
      { value: "24h", label: "delivery window" }
    ]
  },
  logos: {
    title: "Trusted by modern teams",
    items: ["/logos/nova.svg", "/logos/pulse.svg", "/logos/vertex.svg", "/logos/bright.svg"]
  },
  features: {
    eyebrow: "Why NovaEdge",
    title: "Everything you need to ship a confident first impression",
    subtitle: "A complete landing page structure designed for speed, clarity, and conversions.",
    items: [
      {
        title: "Launch-ready positioning",
        description:
          "Clarify your value proposition with crisp messaging, benefit-led bullets, and a clear CTA."
      },
      {
        title: "Conversion-first layout",
        description:
          "A balanced section flow that guides visitors from pain points to proof and pricing."
      },
      {
        title: "Global-ready performance",
        description:
          "Built with Next.js 14, optimized fonts, and responsive images by default."
      },
      {
        title: "Flexible design system",
        description:
          "Swap theme colors in one place and reuse the template for multiple client launches."
      }
    ]
  },
  useCases: {
    eyebrow: "Use cases",
    title: "Built for the teams shipping AI, SaaS, and services",
    subtitle: "Highlight your specific outcomes and pair them with trusted proof points.",
    items: [
      {
        title: "AI copilots",
        description: "Showcase how your assistant saves teams hours each week."
      },
      {
        title: "B2B SaaS",
        description: "Position your platform as the system of record your buyers trust."
      },
      {
        title: "Agencies & studios",
        description: "Present services, proof, and a direct inquiry path without the noise."
      }
    ]
  },
  socialProof: {
    eyebrow: "Social proof",
    title: "Trusted by teams who value clear messaging",
    subtitle: "Replace these testimonials with quotes from your best customers.",
    testimonials: [
      {
        quote:
          "NovaEdge gave us a clean, confident launch in a single afternoon. The sections were exactly what our buyers expect.",
        name: "Avery Chen",
        title: "Founder, Signal Ops"
      },
      {
        quote:
          "We swapped colors, updated copy, and shipped. The template feels premium without the heavy design time.",
        name: "Jordan Lee",
        title: "Growth Lead, Cloudbridge"
      }
    ]
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Simple tiers that scale with your launch",
    subtitle: "Transparent packages you can quickly replace with your own pricing model.",
    tiers: [
      {
        name: "Starter",
        price: "$29",
        description: "For early-stage launches and pilot customers.",
        features: ["Single product", "Core sections", "Email support"],
        cta: "Choose Starter"
      },
      {
        name: "Growth",
        price: "$79",
        description: "For scaling teams that need stronger proof.",
        features: ["Everything in Starter", "Social proof", "Priority support"],
        cta: "Choose Growth",
        highlighted: true
      },
      {
        name: "Scale",
        price: "$149",
        description: "For mature teams with multi-segment messaging.",
        features: ["Everything in Growth", "Custom sections", "Launch review"],
        cta: "Choose Scale"
      }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Answers for a fast launch",
    subtitle: "Everything you need to know before customizing the template.",
    items: [
      {
        question: "How do I change the copy?",
        answer:
          "Update the content inside src/content/landing.ts and the legal pages in src/app/privacy and src/app/terms."
      },
      {
        question: "Can I switch the theme color?",
        answer:
          "Yes. Update the CSS variables in src/app/globals.css or extend Tailwind colors in tailwind.config.ts."
      },
      {
        question: "How does the contact form work?",
        answer:
          "The form posts to a Formspree endpoint. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env before deploying."
      }
    ]
  },
  cta: {
    eyebrow: "Ready to launch",
    title: "Turn visitors into demos this week.",
    subtitle: "Customize the template, plug in your form endpoint, and ship.",
    button: { label: "Schedule a walkthrough", href: "#contact" }
  },
  contact: {
    eyebrow: "Contact",
    title: "Request a tailored landing page",
    subtitle: "Use the form to collect qualified leads. Replace Formspree with any provider later.",
    reminder:
      "Deployment reminder: set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env before going live.",
    note: "Prefer another provider? Swap the form action URL and keep the same fields.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Email",
      emailPlaceholder: "jane@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your launch goals.",
      submitLabel: "Send request"
    }
  },
  footer: {
    description:
      "A clean landing page template for AI and SaaS teams ready to convert interest into pipeline.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact", href: "#contact" }
    ]
  }
};
