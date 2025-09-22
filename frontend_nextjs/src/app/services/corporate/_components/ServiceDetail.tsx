import Link from "next/link";

export type DetailProps = {
  title: string;
  description: string;
  bullets: string[];
};

// PUBLIC_INTERFACE
export function ServiceDetail({ title, description, bullets }: DetailProps) {
  /** Service detail content block with CTA and key features. */
  return (
    <article className="card" style={{ padding: "1.25rem" }}>
      <header>
        <h1 style={{ marginTop: 0 }}>{title}</h1>
        <p style={{ color: "var(--color-muted)", maxWidth: 780 }}>{description}</p>
      </header>
      <section>
        <h2>Key Benefits</h2>
        <ul style={{ lineHeight: 1.9 }}>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </section>
      <footer style={{ marginTop: "1rem" }}>
        <Link href="/contact" className="btn btn-primary" aria-label="Get a Free Quote">
          Get a Free Quote
        </Link>
      </footer>
    </article>
  );
}
