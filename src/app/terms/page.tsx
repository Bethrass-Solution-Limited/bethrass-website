import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { COMPANY_CONTENT } from "@/constants/company";

export const metadata: Metadata = {
  title: "Terms | Bethrass",
  description: "Bethrass website terms and conditions.",
};

export default function TermsPage() {
  return <ContentPageLayout content={COMPANY_CONTENT.terms} />;
}
