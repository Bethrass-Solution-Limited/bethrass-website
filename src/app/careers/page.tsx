import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { COMPANY_CONTENT } from "@/constants/company";

export const metadata: Metadata = {
  title: "Careers | Bethrass",
  description: "Explore Bethrass career opportunities and the kind of technical work the company values.",
};

export default function CareersPage() {
  return <ContentPageLayout content={COMPANY_CONTENT.careers} />;
}
