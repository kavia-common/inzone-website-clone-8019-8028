import type { Metadata } from "next";
import { ServiceDetail } from "../_components/ServiceDetail";
import { SITE } from "../../../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Visa Services",
  description: "Investor, employee, and family visa services in the UAE.",
  alternates: { canonical: "/services/corporate/visa-services" },
  openGraph: { title: "Visa Services", description: "Investor, employee, and family visas.", url: `${SITE.url}/services/corporate/visa-services` },
};

export default function Page() {
  return (
    <div className="section">
      <ServiceDetail
        title="Visa Services"
        description="Hassle-free visa processing for investors, employees, and dependents — across free zones and mainland."
        bullets={[
          "Investor and partner visas",
          "Employment visa processing",
          "Family/dependent visas",
          "Medical tests and Emirates ID assistance",
        ]}
      />
    </div>
  );
}
