import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAK ICC Offshore",
  description: "Form an offshore company with RAK ICC for global operations.",
  alternates: { canonical: "/services/rakicc" },
};

export default function RAKICCServicePage() {
  return (
    <section className="section">
      <h1>RAK ICC Offshore</h1>
      <p style={{ color: "var(--color-muted)" }}>
        Offshore entity formation with international credibility and flexibility.
      </p>
      <div className="card" style={{ padding: "1rem" }}>
        <h2>Key Features</h2>
        <ul>
          <li>International recognition</li>
          <li>Flexible corporate structures</li>
          <li>Confidentiality and compliance</li>
        </ul>
      </div>
    </section>
  );
}
