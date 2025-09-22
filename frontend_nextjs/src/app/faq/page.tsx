import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about UAE company formation.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  { q: "How long does company setup take?", a: "Timelines vary by authority, typically 3–10 business days with complete documentation." },
  { q: "Do I need a local sponsor?", a: "Free Zones generally allow 100% foreign ownership; Mainland may require local service agents depending on activity." },
  { q: "Can I open a bank account remotely?", a: "Some banks require in-person verification; others support remote onboarding with proper KYC." },
];

export default function FAQPage() {
  return (
    <section className="section">
      <h1>Frequently Asked Questions</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {faqs.map((f, i) => (
          <details key={i} className="card" style={{ padding: "1rem" }}>
            <summary style={{ fontWeight: 600 }}>{f.q}</summary>
            <p style={{ color: "var(--color-muted)" }}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
