import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Hear from our happy clients. Video and text testimonials about UAE company formation and corporate services.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Client Testimonials",
    description:
      "Hear from our happy clients. Video and text testimonials about UAE company formation and corporate services.",
    url: `${SITE.url}/testimonials`,
    images: ["/assets/default-image-blue.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials",
    description:
      "Hear from our happy clients. Video and text testimonials about UAE company formation and corporate services.",
    images: ["/assets/default-image-blue.png"],
  },
};

const videoTestimonials = [
  { id: 1, title: "DMCC Setup Success", href: "https://www.youtube.com/", thumb: "/assets/client-1.jpg" },
  { id: 2, title: "IFZA Free Zone Journey", href: "https://www.youtube.com/", thumb: "/assets/client-4.jpg" },
  { id: 3, title: "Shams: From Idea to License", href: "https://www.youtube.com/", thumb: "/assets/client-6.jpg" },
];

const textTestimonials = [
  {
    id: "t1",
    name: "Aisha K.",
    role: "E-commerce Founder",
    quote:
      "The process was transparent and fast. InZone’s team guided us at every step — bank account included.",
  },
  {
    id: "t2",
    name: "David P.",
    role: "Consulting Partner",
    quote:
      "Honest advice and impeccable execution. We had our IFZA license sooner than expected.",
  },
  {
    id: "t3",
    name: "Maria S.",
    role: "Restaurant Owner",
    quote:
      "Clear pricing, friendly team, and excellent post-setup support for visas and VAT registration.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="section">
      <nav aria-label="Breadcrumb" style={{ fontSize: ".9rem", color: "var(--color-muted)", marginBottom: "1rem" }}>
        <ol style={{ display: "flex", gap: ".5rem", listStyle: "none", padding: 0, margin: 0 }}>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Testimonials</li>
        </ol>
      </nav>

      <header className="hero card" style={{ padding: "2rem" }}>
        <h1 style={{ marginTop: 0 }}>What Our Clients Say</h1>
        <p style={{ color: "var(--color-muted)", maxWidth: 760 }}>
          We’re proud to have helped thousands of entrepreneurs set up their businesses in the UAE.
          Explore their stories below — videos and quotes covering DMCC, IFZA, Shams, RAKEZ and more.
        </p>
      </header>

      <section className="section" aria-labelledby="video-reviews">
        <h2 id="video-reviews">Video Testimonials</h2>
        <div className="grid-3" role="list">
          {videoTestimonials.map((v) => (
            <article key={v.id} role="listitem" className="card" style={{ overflow: "hidden" }}>
              <a href={v.href} target="_blank" rel="noopener noreferrer" aria-label={`Watch: ${v.title}`}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                  <Image
                    src={v.thumb}
                    alt={`${v.title} thumbnail`}
                    fill
                    sizes="(max-width: 960px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      placeItems: "center",
                      background: "linear-gradient(to bottom, rgba(0,0,0,.0), rgba(0,0,0,.25))",
                    }}
                  >
                    <span
                      className="btn btn-primary"
                      style={{
                        borderRadius: 999,
                        padding: ".5rem .875rem",
                        background: "rgba(0,0,0,.6)",
                        border: "1px solid rgba(255,255,255,.25)",
                      }}
                    >
                      ▶ Play
                    </span>
                  </div>
                </div>
              </a>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{v.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="text-reviews">
        <h2 id="text-reviews">Text Reviews</h2>
        <div className="grid-3" role="list">
          {textTestimonials.map((t) => (
            <blockquote key={t.id} role="listitem" className="card" style={{ padding: "1.25rem" }}>
              <p style={{ marginTop: 0, fontSize: "1.05rem" }}>&ldquo;{t.quote}&rdquo;</p>
              <footer style={{ marginTop: ".75rem", color: "var(--color-muted)" }}>
                — <strong>{t.name}</strong>, {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section card" style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <Image
            src="/assets/payment-cards-2only2.png"
            alt="We accept Visa and MasterCard"
            width={220}
            height={40}
          />
          <div aria-label="Why choose us" style={{ color: "var(--color-muted)" }}>
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              <li>30-day money-back guarantee</li>
              <li>100% confidentiality</li>
              <li>Dedicated account manager</li>
              <li>Bank account assistance</li>
            </ul>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <Link className="btn btn-primary" href="/contact" aria-label="Get a Free Quote">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
