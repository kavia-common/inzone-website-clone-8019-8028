import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: "Information on limitations of liability and general legal disclaimers for this static clone.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Legal Disclaimer",
    description: "Information on limitations of liability and general legal disclaimers for this static clone.",
    url: `${SITE.url}/disclaimer`,
    images: ["/assets/default-image-blue.png"],
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="section">
      <header className="hero card" style={{ padding: "2rem" }}>
        <h1 style={{ marginTop: 0 }}>Legal Disclaimer</h1>
        <p style={{ color: "var(--color-muted)", maxWidth: 760 }}>
          This website is a non-commercial, educational clone for demonstration purposes only
          and is not affiliated with the original brand.
        </p>
      </header>

      <article className="card" style={{ padding: "1.25rem" }}>
        <h2>General Information</h2>
        <p>
          The content provided on this site is a best-effort replication. No warranties are made
          regarding accuracy, completeness, or suitability for any purpose.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All product names, logos, and brands are property of their respective owners. Use of these
          names, logos, and brands does not imply endorsement.
        </p>

        <h2>Contact</h2>
        <p>
          For inquiries about this project, please <Link href="/contact">contact us</Link>.
        </p>
      </article>
    </div>
  );
}
