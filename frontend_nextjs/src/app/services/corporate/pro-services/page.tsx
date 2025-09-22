import type { Metadata } from "next";
import { ServiceDetail } from "../_components/ServiceDetail";
import { SITE } from "../../../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "PRO Services",
  description: "End-to-end PRO services: attestations, government liaison, document clearances.",
  alternates: { canonical: "/services/corporate/pro-services" },
  openGraph: { title: "PRO Services", description: "End-to-end PRO services.", url: `${SITE.url}/services/corporate/pro-services` },
};

export default function Page() {
  return (
    <div className="section">
      <ServiceDetail
        title="PRO Services"
        description="Government liaison and documentation handled by experts for fast processing and compliance."
        bullets={[
          "Document attestation and translation",
          "MOHRE, Immigration, and other approvals",
          "Trade license renewals and amendments",
          "Timely reminders and compliance tracking",
        ]}
      />
    </div>
  );
}
