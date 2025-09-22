import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order details. (Static clone placeholder)",
  alternates: { canonical: "/checkout" },
  openGraph: {
    title: "Checkout",
    description: "Complete your order details. (Static clone placeholder)",
    url: `${SITE.url}/checkout`,
    images: ["/assets/default-image-blue.png"],
    type: "website",
  },
};

export default function CheckoutPage() {
  return (
    <div className="section">
      <header className="hero card" style={{ padding: "2rem" }}>
        <h1 style={{ marginTop: 0 }}>Checkout</h1>
        <p style={{ color: "var(--color-muted)" }}>
          This is a static clone. Checkout processing is not implemented.
        </p>
      </header>

      <div className="card" style={{ padding: "1.25rem" }}>
        <p>To proceed, please <Link href="/contact">contact our team</Link> to finalize your order.</p>
      </div>
    </div>
  );
}
