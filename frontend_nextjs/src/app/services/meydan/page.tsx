import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meydan Free Zone",
  description: "Launch a digital-first business at Meydan Free Zone.",
  alternates: { canonical: "/services/meydan" },
};

export default function MeydanServicePage() {
  return (
    <section className="section">
      <h1>Meydan Free Zone</h1>
      <p style={{ color: "var(--color-muted)" }}>
        Smart solutions for modern entrepreneurs with quick, paperless setup.
      </p>
      <div className="card" style={{ padding: "1rem" }}>
        <h2>Benefits</h2>
        <ul>
          <li>Fast e-setup</li>
          <li>Flexible packages</li>
          <li>E-commerce support</li>
        </ul>
      </div>
    </section>
  );
}
