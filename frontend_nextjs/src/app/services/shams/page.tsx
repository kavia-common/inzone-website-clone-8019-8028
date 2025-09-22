import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shams Free Zone",
  description: "Sharjah Media City (Shams) for media and creative businesses.",
  alternates: { canonical: "/services/shams" },
};

export default function ShamsServicePage() {
  return (
    <section className="section">
      <h1>Shams Free Zone</h1>
      <p style={{ color: "var(--color-muted)" }}>
        Ideal for creative industries with attractive pricing and packages.
      </p>
      <div className="card" style={{ padding: "1rem" }}>
        <h2>Advantages</h2>
        <ul>
          <li>Media-focused licensing</li>
          <li>Budget-friendly options</li>
          <li>Streamlined processes</li>
        </ul>
      </div>
    </section>
  );
}
