import Link from "next/link";

export default function SitemapPage() {
  const links = [
    "/", "/about", "/contact",
    "/services", "/services/ifza", "/services/dmcc", "/services/meydan", "/services/shams", "/services/rakicc",
    "/blog", "/blog/uae-free-zone-vs-mainland", "/blog/trade-license-requirements", "/blog/bank-account-opening",
    "/faq", "/podcast"
  ];

  return (
    <section className="section">
      <h1>Sitemap</h1>
      <ul>
        {links.map((l) => (
          <li key={l}><Link href={l}>{l}</Link></li>
        ))}
      </ul>
    </section>
  );
}
