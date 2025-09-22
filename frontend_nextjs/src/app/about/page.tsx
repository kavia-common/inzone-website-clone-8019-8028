import type { Metadata } from "next";
import Image from "next/image";
import { SITE, buildBreadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our mission, values, and team helping entrepreneurs set up and grow their UAE businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE.url}/` },
    { name: "About", url: `${SITE.url}/about` },
  ]);

  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="card" style={{ padding: "1.25rem" }}>
        <h1>About InZone Clone</h1>
        <p style={{ color: "var(--color-muted)" }}>
          We empower founders with transparent company formation services and continuous support. Our
          team brings extensive experience across free zones and mainland jurisdictions in the UAE.
        </p>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr", marginTop: "1rem" }}>
          <div>
            <Image
              src="/assets/ded-round-image.png"
              width={160}
              height={160}
              alt="DED certification illustration"
            />
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>
              To simplify business setup through expert guidance, clear pricing, and modern tools, so
              you can focus on growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
