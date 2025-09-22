import type { NextRequest } from "next/server";

const routes = [
  "/", "/about", "/contact",
  "/services", "/services/ifza", "/services/dmcc", "/services/meydan", "/services/shams", "/services/rakicc",
  "/blog", "/blog/uae-free-zone-vs-mainland", "/blog/trade-license-requirements", "/blog/bank-account-opening",
  "/faq", "/podcast", "/sitemap"
];

export async function GET(_req: NextRequest) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date().toISOString();

  const urls = routes
    .map((p) => `<url><loc>${base}${p === "/" ? "" : p}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`)
    .join("");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
