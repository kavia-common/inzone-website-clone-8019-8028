import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Corporate Services",
  description:
    "Explore PRO, Visa, Bank Account Opening, VAT Registration, Corporate Tax, Accounting & Bookkeeping, and Audit services.",
  alternates: { canonical: "/services/corporate" },
  openGraph: {
    title: "Corporate Services",
    description:
      "Explore PRO, Visa, Bank Account Opening, VAT Registration, Corporate Tax, Accounting & Bookkeeping, and Audit services.",
    url: `${SITE.url}/services/corporate`,
    images: ["/assets/default-image-blue.png"],
    type: "website",
  },
};

const items = [
  { slug: "pro-services", title: "PRO Services", blurb: "Government liaison and document processing." },
  { slug: "visa-services", title: "Visa Services", blurb: "Investor, employee, and family visas." },
  { slug: "open-bank-account", title: "Open Bank Account", blurb: "End-to-end support with leading UAE banks." },
  { slug: "vat-registration", title: "VAT Registration", blurb: "VAT consultation and registration assistance." },
  { slug: "corporate-tax-consulting", title: "Corporate Tax Consulting", blurb: "Plan and comply with UAE corporate tax." },
  { slug: "accounting-bookkeeping", title: "Accounting & Bookkeeping", blurb: "Compliant records and monthly reporting." },
  { slug: "audit", title: "Audit", blurb: "External audits for compliance and credibility." },
];

export default function CorporateServicesPage() {
  return (
    <div className="section">
      <header className="hero card" style={{ padding: "2rem" }}>
        <h1 style={{ marginTop: 0 }}>Corporate Services</h1>
        <p style={{ color: "var(--color-muted)", maxWidth: 760 }}>
          Comprehensive corporate solutions supporting your UAE business after license issuance.
        </p>
      </header>

      <div className="grid-3">
        {items.map((s) => (
          <article key={s.slug} className="card" style={{ padding: "1.25rem" }}>
            <h2 style={{ marginTop: 0, fontSize: "1.25rem" }}>{s.title}</h2>
            <p style={{ color: "var(--color-muted)" }}>{s.blurb}</p>
            <Link className="btn btn-primary" href={`/services/corporate/${s.slug}`} aria-label={`Explore ${s.title}`}>
              Learn More
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
