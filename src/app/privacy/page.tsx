import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { COMPANY_CONTENT } from "@/constants/company";

export const metadata: Metadata = {
  title: "Privacy | Bethrass",
  description: "Bethrass privacy commitments and information handling principles.",
};

export default function PrivacyPage() {
  return <ContentPageLayout content={COMPANY_CONTENT.privacy} />;
}
