import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>404 — Page not found</h1>
        <p style={{ color: "var(--color-muted)" }}>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <Link href="/" className="btn btn-primary" aria-label="Go back home">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
