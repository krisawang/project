import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const features = [
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
];

const useCases = [
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
];

const testimonials = [
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
];

const pricingTiers = [
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
];

const faqs = [
  {
    question: "How do I change the copy?",
    answer:
      "Update the content inside src/app/page.tsx and the legal pages in src/app/privacy and src/app/terms."
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
];

const logos = [
  "/logos/nova.svg",
  "/logos/pulse.svg",
  "/logos/vertex.svg",
  "/logos/bright.svg"
];

export default function Home() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

  return (
    <div className="bg-white">
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-lg font-semibold">
            NovaEdge
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-text-muted md:flex">
            <Link href="#features" className="hover:text-text-main">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-text-main">
              Pricing
            </Link>
            <Link href="#contact" className="hover:text-text-main">
              Contact
            </Link>
          </nav>
          <Link href="#contact" className="button-primary">
            Book a demo
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pb-16 pt-20">
          <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="badge">AI + SaaS landing page</p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Launch your customer story in days, not months.
              </h1>
              <p className="section-subtitle max-w-xl text-left">
                NovaEdge is a reusable landing page template built for modern AI and SaaS teams. Replace the
                copy, update the theme, and ship a conversion-focused site fast.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#contact" className="button-primary">
                  Start your launch
                </Link>
                <Link href="#pricing" className="button-secondary">
                  View pricing
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-text-muted">
                <div>
                  <p className="text-xl font-semibold text-text-main">2x</p>
                  <p>faster launches</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-text-main">+38%</p>
                  <p>demo requests</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-text-main">24h</p>
                  <p>delivery window</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
              <div className="card relative">
                <Image
                  src="/hero-illustration.svg"
                  alt="Dashboard preview"
                  width={520}
                  height={420}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-surface py-12">
          <div className="container">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-text-muted">
              Trusted by modern teams
            </p>
            <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-4">
              {logos.map((logo) => (
                <Image
                  key={logo}
                  src={logo}
                  alt="Client logo"
                  width={140}
                  height={48}
                  className="h-10 w-auto opacity-80"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container">
            <SectionHeading
              eyebrow="Why NovaEdge"
              title="Everything you need to ship a confident first impression"
              subtitle="A complete landing page structure designed for speed, clarity, and conversions."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="card">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm text-text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Use cases"
                title="Built for the teams shipping AI, SaaS, and services"
                subtitle="Highlight your specific outcomes and pair them with trusted proof points."
              />
            </div>
            <div className="grid gap-6">
              {useCases.map((item) => (
                <div key={item.title} className="card">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <SectionHeading
              eyebrow="Social proof"
              title="Trusted by teams who value clear messaging"
              subtitle="Replace these testimonials with quotes from your best customers."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.name} className="card">
                  <p className="text-base text-text-main">“{item.quote}”</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-sm text-text-muted">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-surface py-20">
          <div className="container">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple tiers that scale with your launch"
              subtitle="Transparent packages you can quickly replace with your own pricing model."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`card flex h-full flex-col ${
                    tier.highlighted ? "border-brand shadow-soft" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    {tier.highlighted ? (
                      <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                        Most popular
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-3xl font-semibold">
                    {tier.price}
                    <span className="text-sm font-normal text-text-muted"> / month</span>
                  </p>
                  <p className="mt-3 text-sm text-text-muted">{tier.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-text-muted">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-brand" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="button-primary mt-8 w-full">
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <SectionHeading
              eyebrow="FAQ"
              title="Answers for a fast launch"
              subtitle="Everything you need to know before customizing the template."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-sm text-text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="container">
            <div className="card flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="badge">Ready to launch</p>
                <h2 className="mt-4 text-3xl font-semibold">Turn visitors into demos this week.</h2>
                <p className="mt-3 text-sm text-text-muted">
                  Customize the template, plug in your form endpoint, and ship.
                </p>
              </div>
              <Link href="#contact" className="button-primary">
                Schedule a walkthrough
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Request a tailored landing page"
                subtitle="Use the form to collect qualified leads. Replace Formspree with any provider later."
              />
              <div className="mt-8 space-y-4 text-sm text-text-muted">
                <p>
                  Deployment reminder: set{" "}
                  <span className="font-semibold text-text-main">NEXT_PUBLIC_FORMSPREE_ENDPOINT</span> in{" "}
                  <span className="font-semibold text-text-main">.env</span> before going live.
                </p>
                <p>Prefer another provider? Swap the form action URL and keep the same fields.</p>
              </div>
            </div>
            <div className="card">
              <form action={formspreeEndpoint || "#"} method="POST" className="space-y-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                    placeholder="Tell us about your launch goals."
                  />
                </div>
                <button type="submit" className="button-primary w-full">
                  Send request
                </button>
                {!formspreeEndpoint ? (
                  <p className="text-xs text-amber-600">
                    Form endpoint missing. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to enable submissions.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white py-10">
        <div className="container flex flex-col gap-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-text-main">NovaEdge</p>
            <p className="mt-2 max-w-sm">
              A clean landing page template for AI and SaaS teams ready to convert interest into pipeline.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-text-main">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text-main">
              Terms of Service
            </Link>
            <Link href="#contact" className="hover:text-text-main">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
