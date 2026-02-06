import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="badge">404</p>
      <h1 className="mt-6 text-4xl font-semibold">Page not found</h1>
      <p className="mt-4 max-w-md text-sm text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist. Head back to the landing page to continue.
      </p>
      <Link href="/" className="button-primary mt-8">
        Back to home
      </Link>
    </main>
  );
}
