import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — NovaEdge",
  description: "Review the terms of service template for NovaEdge."
};

export default function TermsPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="badge">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold">Terms of Service</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-muted">
          <p>
            This is a template terms of service page. Replace it with your official terms before going
            live.
          </p>
          <div>
            <h2 className="text-base font-semibold text-text-main">Use of service</h2>
            <p className="mt-2">
              By using this site, you agree to use it for lawful purposes and respect applicable
              regulations.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-text-main">Availability</h2>
            <p className="mt-2">
              We may update or discontinue features at any time without notice.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-text-main">Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent through the contact form on the home page.
            </p>
          </div>
        </div>

        <Link href="/" className="button-secondary mt-10 inline-flex">
          Back to home
        </Link>
      </div>
    </main>
  );
}
