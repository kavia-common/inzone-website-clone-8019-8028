import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IFZA Free Zone",
  description: "Set up your business in IFZA with flexible and affordable packages.",
  alternates: { canonical: "/services/ifza" },
};

export default function IFZAServicePage() {
  return (
    <section className="section">
      <h1>IFZA Free Zone</h1>
      <p style={{ color: "var(--color-muted)" }}>
        Enjoy competitive pricing, fast setup, and a wide range of activities in IFZA Dubai.
      </p>
      <div className="card" style={{ padding: "1rem" }}>
        <h2>Why choose IFZA?</h2>
        <ul>
          <li>Flexible shareholding and activities</li>
          <li>Quick, streamlined licensing</li>
          <li>Cost-effective packages</li>
        </ul>
      </div>
    </section>
  );
}
