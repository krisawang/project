import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { landingContent } from "@/content/landing";

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
            {landingContent.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-text-main">
                {item.label}
              </Link>
            ))}
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
              <p className="badge">{landingContent.hero.eyebrow}</p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {landingContent.hero.title}
              </h1>
              <p className="section-subtitle max-w-xl text-left">{landingContent.hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={landingContent.hero.primaryCta.href} className="button-primary">
                  {landingContent.hero.primaryCta.label}
                </Link>
                <Link href={landingContent.hero.secondaryCta.href} className="button-secondary">
                  {landingContent.hero.secondaryCta.label}
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-text-muted">
                {landingContent.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-semibold text-text-main">{stat.value}</p>
                    <p>{stat.label}</p>
                  </div>
                ))}
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
              {landingContent.logos.title}
            </p>
            <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-4">
              {landingContent.logos.items.map((logo) => (
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
              eyebrow={landingContent.features.eyebrow}
              title={landingContent.features.title}
              subtitle={landingContent.features.subtitle}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {landingContent.features.items.map((feature) => (
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
                eyebrow={landingContent.useCases.eyebrow}
                title={landingContent.useCases.title}
                subtitle={landingContent.useCases.subtitle}
              />
            </div>
            <div className="grid gap-6">
              {landingContent.useCases.items.map((item) => (
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
              eyebrow={landingContent.socialProof.eyebrow}
              title={landingContent.socialProof.title}
              subtitle={landingContent.socialProof.subtitle}
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {landingContent.socialProof.testimonials.map((item) => (
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
              eyebrow={landingContent.pricing.eyebrow}
              title={landingContent.pricing.title}
              subtitle={landingContent.pricing.subtitle}
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {landingContent.pricing.tiers.map((tier) => (
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
              eyebrow={landingContent.faq.eyebrow}
              title={landingContent.faq.title}
              subtitle={landingContent.faq.subtitle}
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {landingContent.faq.items.map((faq) => (
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
                <p className="badge">{landingContent.cta.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold">{landingContent.cta.title}</h2>
                <p className="mt-3 text-sm text-text-muted">{landingContent.cta.subtitle}</p>
              </div>
              <Link href={landingContent.cta.button.href} className="button-primary">
                {landingContent.cta.button.label}
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow={landingContent.contact.eyebrow}
                title={landingContent.contact.title}
                subtitle={landingContent.contact.subtitle}
              />
              <div className="mt-8 space-y-4 text-sm text-text-muted">
                <p>{landingContent.contact.reminder}</p>
                <p>{landingContent.contact.note}</p>
              </div>
            </div>
            <div className="card">
              <form action={formspreeEndpoint || "#"} method="POST" className="space-y-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">
                    {landingContent.contact.form.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                    placeholder={landingContent.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    {landingContent.contact.form.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                    placeholder={landingContent.contact.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="message">
                    {landingContent.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                    placeholder={landingContent.contact.form.messagePlaceholder}
                  />
                </div>
                <button type="submit" className="button-primary w-full">
                  {landingContent.contact.form.submitLabel}
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
            <p className="mt-2 max-w-sm">{landingContent.footer.description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {landingContent.footer.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-text-main">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
