import type { Metadata } from "next";
import { notFound } from "next/navigation";

const POSTS = {
  "uae-free-zone-vs-mainland": {
    title: "UAE Free Zone vs. Mainland: Which is Right for You?",
    body:
      "Choosing between Free Zone and Mainland depends on your target market, activity, and ownership needs. Free Zones offer 100% ownership and simplified processes, while Mainland provides broader onshore access.",
  },
  "trade-license-requirements": {
    title: "Trade License Requirements Explained",
    body:
      "Licensing categories vary by activity and jurisdiction. Prepare identity documents, business plan, and tenancy/office evidence depending on the chosen authority.",
  },
  "bank-account-opening": {
    title: "Bank Account Opening Tips",
    body:
      "Providing accurate KYC documents, proof of address, and clear activity details helps streamline account opening with UAE banks.",
  },
};

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = POSTS[params.slug as keyof typeof POSTS];
  if (!post) return {};
  return {
    title: post.title,
    description: post.body.slice(0, 140),
    alternates: { canonical: `/blog/${params.slug}` },
  };
}

export default function BlogPost({ params }: Params) {
  const post = POSTS[params.slug as keyof typeof POSTS];
  if (!post) return notFound();

  return (
    <section className="section">
      <article className="card" style={{ padding: "1.25rem" }}>
        <h1>{post.title}</h1>
        <p style={{ color: "var(--color-muted)" }}>{post.body}</p>
      </article>
    </section>
  );
}
