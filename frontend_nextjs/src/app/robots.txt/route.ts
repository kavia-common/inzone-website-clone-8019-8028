import type { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  const body = `User-agent: *
Allow: /

Sitemap: /sitemap.xml
`;
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
