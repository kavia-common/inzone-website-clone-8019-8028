import type { Metadata } from "next";
import { ServiceDetail } from "../_components/ServiceDetail";
import { SITE } from "../../../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "VAT Registration",
  description: "Consultation and assistance to register your UAE business for VAT.",
  alternates: { canonical: "/services/corporate/vat-registration" },
  openGraph: {
    title: "VAT Registration",
    description: "VAT consultation and registration.",
    url: `${SITE.url}/services/corporate/vat-registration`,
    images: ["/assets/default-image-blue.png"],
    type: "website",
  },
};

export default function Page() {
  return (
    <div className="section">
      <ServiceDetail
        title="VAT Registration"
        description="Ensure your business meets UAE VAT requirements with our registration support."
        bullets={[
          "Threshold assessment and advisory",
          "TRN application preparation",
          "VAT registration submissions",
          "Guidance on invoicing and records",
        ]}
      />
    </div>
  );
}
