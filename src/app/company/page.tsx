import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { COMPANY_CONTENT } from "@/constants/company";

export const metadata: Metadata = {
  title: "Company | Bethrass",
  description: "Learn about Bethrass and its focus on trusted infrastructure, intelligence, and institutional systems.",
};

export default function CompanyPage() {
  return <ContentPageLayout content={COMPANY_CONTENT.company} />;
}
