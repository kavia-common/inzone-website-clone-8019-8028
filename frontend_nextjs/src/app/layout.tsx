import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SITE, defaultOpenGraph } from "../lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: "%s | InZone Clone",
    default: "InZone | Business Setup in UAE (Clone)",
  },
  description:
    "A static, accessible, and SEO-optimized clone of the InZone.ae website. Explore services, company info, resources, and contact.",
  keywords: ["UAE business setup", "free zone", "company formation", "InZone clone"],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: defaultOpenGraph,
  twitter: {
    card: "summary_large_image",
    title: "InZone Clone",
    description:
      "Explore our static, high‑fidelity replica of InZone.ae with Ocean Professional theme.",
    images: ["/assets/default-image-blue.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="visually-hidden" href="#main">Skip to content</a>
        <header className="site-header" role="banner" aria-label="Site Header">
          <div className="container">
            <Header />
          </div>
        </header>
        <main id="main" className="container" role="main">
          {children}
        </main>
        <footer className="site-footer" role="contentinfo" aria-label="Site Footer">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
