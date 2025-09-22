import type { Metadata } from "next";
import { ServiceDetail } from "../_components/ServiceDetail";
import { SITE } from "../../../../lib/seo";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Accounting & Bookkeeping",
  description: "Accurate bookkeeping and monthly management accounts for your UAE business.",
  alternates: { canonical: "/services/corporate/accounting-bookkeeping" },
  openGraph: { title: "Accounting & Bookkeeping", description: "Bookkeeping and accounts.", url: `${SITE.url}/services/corporate/accounting-bookkeeping` },
};

export default function Page() {
  return (
    <div className="section">
      <ServiceDetail
        title="Accounting & Bookkeeping"
        description="Maintain compliant records and clear financial insights with our accounting services."
        bullets={[
          "Monthly bookkeeping",
          "Management accounts and reports",
          "Expense categorization and reconciliations",
          "Audit-ready documentation",
        ]}
      />
    </div>
  );
}
