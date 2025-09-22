import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on UAE company setup, compliance, and growth strategies.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "uae-free-zone-vs-mainland",
    title: "UAE Free Zone vs. Mainland: Which is Right for You?",
    excerpt: "Compare benefits, costs, and requirements to choose the best jurisdiction.",
  },
  {
    slug: "trade-license-requirements",
    title: "Trade License Requirements Explained",
    excerpt: "Understand licensing categories and documentation to avoid delays.",
  },
  {
    slug: "bank-account-opening",
    title: "Bank Account Opening Tips",
    excerpt: "Best practices to ensure smooth business account opening in the UAE.",
  },
];

export default function BlogListing() {
  return (
    <section className="section">
      <h1>Blog</h1>
      <div className="grid-3">
        {posts.map((p) => (
          <article key={p.slug} className="card" style={{ padding: "1rem" }}>
            <h3 style={{ marginTop: 0 }}>{p.title}</h3>
            <p style={{ color: "var(--color-muted)" }}>{p.excerpt}</p>
            <Link className="link" href={`/blog/${p.slug}`} aria-label={`Read article: ${p.title}`}>
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
