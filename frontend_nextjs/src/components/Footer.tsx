import Link from "next/link";
import Image from "next/image";

// PUBLIC_INTERFACE
export function Footer() {
  /** Footer with quick links and contact info */
  return (
    <>
      <div className="footer-grid">
        <div>
          <h3 style={{ marginTop: 0 }}>InZone Clone</h3>
          <p style={{ color: "#9CA3AF" }}>
            Your trusted partner for UAE business setup. Free Zone, Mainland, and Offshore
            formation made simple with transparent pricing and expert guidance.
          </p>
          <div aria-label="Accepted cards">
            <Image
              src="/assets/payment-cards-2only2.png"
              alt="Accepted VISA and MasterCard"
              width={240}
              height={40}
              style={{ width: "240px", height: "auto" }}
            />
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.9" }}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/podcast">Podcast</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/referral">Referral</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "1.9" }}>
            <li><Link href="/services/ifza">IFZA</Link></li>
            <li><Link href="/services/dmcc">DMCC</Link></li>
            <li><Link href="/services/meydan">Meydan</Link></li>
            <li><Link href="/services/shams">Shams</Link></li>
            <li><Link href="/services/rakicc">RAK ICC</Link></li>
            <li><Link href="/services/corporate">Corporate Services</Link></li>
            <li><Link href="/services/corporate/pro-services">— PRO Services</Link></li>
            <li><Link href="/services/corporate/visa-services">— Visa Services</Link></li>
            <li><Link href="/services/corporate/open-bank-account">— Open Bank Account</Link></li>
            <li><Link href="/services/corporate/vat-registration">— VAT Registration</Link></li>
            <li><Link href="/services/corporate/corporate-tax-consulting">— Corporate Tax</Link></li>
            <li><Link href="/services/corporate/accounting-bookkeeping">— Accounting</Link></li>
            <li><Link href="/services/corporate/audit">— Audit</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <address style={{ fontStyle: "normal", color: "#9CA3AF" }}>
            Dubai, United Arab Emirates<br />
            Phone: <a className="link" href="tel:+9710000000">+971 00 000 000</a><br />
            Email: <a className="link" href="mailto:info@example.com">info@example.com</a>
          </address>
          <div style={{ marginTop: ".75rem" }}>
            <Link className="btn btn-secondary" href="/contact" aria-label="Contact support">
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div>© {new Date().getFullYear()} InZone Clone. All rights reserved.</div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </>
  );
}
