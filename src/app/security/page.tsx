import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { COMPANY_CONTENT } from "@/constants/company";

export const metadata: Metadata = {
  title: "Security | Bethrass",
  description: "Bethrass security commitments and the principles behind its trusted infrastructure approach.",
};

export default function SecurityPage() {
  return <ContentPageLayout content={COMPANY_CONTENT.security} />;
}
