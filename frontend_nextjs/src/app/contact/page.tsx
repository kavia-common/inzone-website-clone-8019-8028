import type { Metadata } from "next";
import { SITE, buildBreadcrumbJsonLd } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for a free consultation on UAE business setup. Call, email, or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Home", url: `${SITE.url}/` },
    { name: "Contact", url: `${SITE.url}/contact` },
  ]);

  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="card" style={{ padding: "1.25rem" }}>
        <h1>Contact Us</h1>
        <p style={{ color: "var(--color-muted)" }}>
          Fill the form and our specialists will reach out soon.
        </p>
        {/* Server Component forms cannot use client event handlers. This is a static, non-functional form. */}
        <form className="section" aria-label="Contact form" method="post" action="#">
          <noscript>
            <p style={{ color: "var(--color-muted)" }}>
              Note: This static demo disables form submission. Enable JavaScript or integrate an API to handle submissions.
            </p>
          </noscript>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr", maxWidth: 720 }}>
            <div>
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" required aria-required="true"
                style={{ width: "100%", padding: ".625rem", borderRadius: "8px", border: "1px solid #e5e7eb" }} />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required aria-required="true"
                style={{ width: "100%", padding: ".625rem", borderRadius: "8px", border: "1px solid #e5e7eb" }} />
            </div>
            <div>
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel"
                style={{ width: "100%", padding: ".625rem", borderRadius: "8px", border: "1px solid #e5e7eb" }} />
            </div>
            <div>
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" rows={5} required aria-required="true"
                style={{ width: "100%", padding: ".625rem", borderRadius: "8px", border: "1px solid #e5e7eb" }} />
            </div>
            <div>
              <button className="btn btn-primary" type="submit" aria-label="Submit contact form" disabled>
                Submit
              </button>
            </div>
          </div>
        </form>

        <div role="region" aria-label="Office location">
          <div className="card" style={{ padding: "1rem" }}>
            <p style={{ margin: 0, color: "var(--color-muted)" }}>
              Dubai, United Arab Emirates — Map embed placeholder for static export.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
