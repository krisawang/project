import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — NovaEdge",
  description: "Learn how NovaEdge handles data and privacy for site visitors."
};

export default function PrivacyPage() {
  return (
    <main className="container py-16">
      <div className="max-w-3xl">
        <p className="badge">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-muted">
          <p>
            This is a template privacy policy for your landing page. Replace this content with your
            organization&apos;s policies before launch.
          </p>
          <div>
            <h2 className="text-base font-semibold text-text-main">Information we collect</h2>
            <p className="mt-2">
              We collect information you submit through the contact form, including name, email address,
              and message details.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-text-main">How we use information</h2>
            <p className="mt-2">
              We use submitted information to respond to inquiries, schedule demos, and improve our
              services. We never sell personal data.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-text-main">Your choices</h2>
            <p className="mt-2">
              You can request access, updates, or deletion of your data by contacting us directly.
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
