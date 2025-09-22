import type { Metadata } from "next";
import { ServiceCard } from "../../components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore all our UAE company setup services across Free Zones and Mainland.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="section">
      <h1>Services</h1>
      <p style={{ color: "var(--color-muted)" }}>
        Choose from popular Free Zones and Mainland packages tailored to your needs.
      </p>
      <div className="grid-3">
        <ServiceCard
          title="IFZA Free Zone"
          description="Affordable, flexible licensing in Dubai."
          img="/assets/ifza-round-image.png"
          alt="IFZA"
          href="/services/ifza"
        />
        <ServiceCard
          title="DMCC Company Setup"
          description="Premier global trading hub in Dubai."
          img="/assets/dmcc-round-image.png"
          alt="DMCC"
          href="/services/dmcc"
        />
        <ServiceCard
          title="Meydan Free Zone"
          description="Digital-first setup for modern businesses."
          img="/assets/meydan-round-image.png"
          alt="Meydan"
          href="/services/meydan"
        />
        <ServiceCard
          title="Shams Free Zone"
          description="Media-focused licensing options in Sharjah."
          img="/assets/shams-round-image.png"
          alt="Shams"
          href="/services/shams"
        />
        <ServiceCard
          title="RAK ICC Offshore"
          description="Offshore company formation with RAK ICC."
          img="/assets/rakicc-round-image.png"
          alt="RAK ICC"
          href="/services/rakicc"
        />
      </div>
    </section>
  );
}
