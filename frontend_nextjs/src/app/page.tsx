import Image from "next/image";
import Link from "next/link";
import { ClientsBar } from "../components/ClientsBar";
import { ServiceCard } from "../components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero section" aria-label="Hero banner">
        <div className="hero-grid">
          <div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0 0 .75rem" }}>
              Business Setup in the UAE, Simplified
            </h1>
            <p style={{ color: "var(--color-muted)", fontSize: "1.125rem" }}>
              Launch and grow your company with expert guidance for Free Zone, Mainland,
              and Offshore formation. Transparent pricing, fast turnaround, and ongoing support.
            </p>
            <div style={{ display: "flex", gap: ".75rem", marginTop: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary" aria-label="Get a free consultation">
                Get Free Consultation
              </Link>
              <Link href="/about" className="btn btn-secondary" aria-label="Learn about our company">
                Learn About Us
              </Link>
            </div>
          </div>
          <div>
            <div className="card" style={{ padding: "1rem" }}>
              <Image
                src="/assets/right-girl-leading-sec.png"
                alt="Consultant guiding a client through UAE business setup"
                width={720}
                height={540}
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section" aria-label="Trusted by clients section">
        <ClientsBar />
      </section>

      {/* Featured Services */}
      <section className="section" aria-label="Featured services">
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
          Popular Free Zone Packages
        </h2>
        <div className="grid-3">
          <ServiceCard
            title="IFZA Free Zone"
            description="Affordable and flexible licensing options with quick setup in Dubai."
            img="/assets/ifza-round-image.png"
            alt="IFZA free zone logo"
            href="/services/ifza"
          />
          <ServiceCard
            title="DMCC Company Setup"
            description="Premier global trading hub in Dubai with world-class infrastructure."
            img="/assets/dmcc-round-image.png"
            alt="DMCC free zone logo"
            href="/services/dmcc"
          />
          <ServiceCard
            title="Meydan Free Zone"
            description="Digital-first company formation with e-commerce support in Dubai."
            img="/assets/meydan-round-image.png"
            alt="Meydan free zone logo"
            href="/services/meydan"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Link href="/services" className="link" aria-label="View all services">
            View all services →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-label="Call to action">
        <div className="card" style={{ padding: "1.5rem" }}>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div>
              <h2 style={{ margin: "0 0 .5rem" }}>Not sure where to start?</h2>
              <p style={{ color: "var(--color-muted)", margin: 0 }}>
                Speak with our specialists and get a tailored recommendation in minutes.
              </p>
            </div>
            <div>
              <Link href="/contact" className="btn btn-primary" aria-label="Speak to a specialist">
                Speak to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
