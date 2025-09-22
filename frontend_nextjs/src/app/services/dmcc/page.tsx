import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCC Company Setup",
  description: "Form your business in the award-winning DMCC Free Zone.",
  alternates: { canonical: "/services/dmcc" },
};

export default function DMCCServicePage() {
  return (
    <section className="section">
      <h1>DMCC Company Setup</h1>
      <p style={{ color: "var(--color-muted)" }}>
        DMCC offers world-class infrastructure and a vibrant business ecosystem.
      </p>
      <div className="card" style={{ padding: "1rem" }}>
        <h2>Highlights</h2>
        <ul>
          <li>Global trading hub</li>
          <li>Premium facilities and address</li>
          <li>Broad range of activities</li>
        </ul>
      </div>
    </section>
  );
}
