import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Referral Program",
  description:
    "Refer a business and earn rewards. Share our UAE company formation services with your network.",
  alternates: { canonical: "/referral" },
  openGraph: {
    title: "Referral Program",
    description:
      "Refer a business and earn rewards. Share our UAE company formation services with your network.",
    url: `${SITE.url}/referral`,
    images: ["/assets/default-image-blue.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Program",
    description:
      "Refer a business and earn rewards. Share our UAE company formation services with your network.",
    images: ["/assets/default-image-blue.png"],
  },
};

export default function ReferralPage() {
  return (
    <div className="section">
      <nav aria-label="Breadcrumb" style={{ fontSize: ".9rem", color: "var(--color-muted)", marginBottom: "1rem" }}>
        <ol style={{ display: "flex", gap: ".5rem", listStyle: "none", padding: 0, margin: 0 }}>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Referral</li>
        </ol>
      </nav>

      <header className="hero card" style={{ padding: "2rem" }}>
        <h1 style={{ marginTop: 0 }}>Referral Program</h1>
        <p style={{ color: "var(--color-muted)", maxWidth: 760 }}>
          Invite your network to set up their company with us and receive rewards for every successful referral.
        </p>
      </header>

      <section className="section" aria-labelledby="how-it-works">
        <h2 id="how-it-works">How it works</h2>
        <ol style={{ lineHeight: 1.9 }}>
          <li>Share your unique referral link with friends or clients.</li>
          <li>When they sign up and complete a service, you get rewarded.</li>
          <li>Track referrals via email updates from our team.</li>
        </ol>
      </section>

      <section className="card" style={{ padding: "1.25rem" }}>
        <h2 style={{ marginTop: 0 }}>Start Referring</h2>
        <p>Contact our team to get your referral link and program details.</p>
        <Link className="btn btn-primary" href="/contact">Contact Us</Link>
      </section>
    </div>
  );
}
