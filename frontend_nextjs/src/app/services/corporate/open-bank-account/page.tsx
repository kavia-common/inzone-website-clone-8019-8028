import type { Metadata } from "next";
import { ServiceDetail } from "../_components/ServiceDetail";
import { SITE } from "../../../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Open Bank Account",
  description: "Guided support to open your UAE business bank account with leading banks.",
  alternates: { canonical: "/services/corporate/open-bank-account" },
  openGraph: { title: "Open Bank Account", description: "Support with bank account opening.", url: `${SITE.url}/services/corporate/open-bank-account` },
};

export default function Page() {
  return (
    <div className="section">
      <ServiceDetail
        title="Open Bank Account"
        description="We coordinate with reputable banks and prepare your documents for a smooth account opening experience."
        bullets={[
          "Bank selection and introductions",
          "KYC documentation guidance",
          "Application preparation and scheduling",
          "Follow-ups until account activation",
        ]}
      />
    </div>
  );
}
