import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Cart",
  description: "Review selected services before checkout.",
  alternates: { canonical: "/cart" },
  openGraph: {
    title: "Cart",
    description: "Review selected services before checkout.",
    url: `${SITE.url}/cart`,
    images: ["/assets/default-image-blue.png"],
    type: "website",
  },
};

export default function CartPage() {
  return (
    <div className="section">
      <header className="hero card" style={{ padding: "2rem" }}>
        <h1 style={{ marginTop: 0 }}>Your Cart</h1>
        <p style={{ color: "var(--color-muted)" }}>
          This is a static clone. Cart functionality is out of scope; page included for structure parity.
        </p>
      </header>

      <div className="card" style={{ padding: "1.25rem" }}>
        <p>Your cart is empty.</p>
        <Link href="/services" className="btn btn-primary" aria-label="Browse services">
          Browse Services
        </Link>
      </div>
    </div>
  );
}
