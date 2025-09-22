import type { Metadata } from "next";
import { ServiceDetail } from "../_components/ServiceDetail";
import { SITE } from "../../../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Audit",
  description: "External audits for compliance, lenders, and partners.",
  alternates: { canonical: "/services/corporate/audit" },
  openGraph: { title: "Audit", description: "Independent audits for your business.", url: `${SITE.url}/services/corporate/audit` },
};

export default function Page() {
  return (
    <div className="section">
      <ServiceDetail
        title="Audit"
        description="Enhance credibility with audited financial statements meeting regulatory and stakeholder needs."
        bullets={[
          "External audit coordination",
          "Audit schedules and requirements",
          "Support during fieldwork",
          "Issue resolution and finalization",
        ]}
      />
    </div>
  );
}
