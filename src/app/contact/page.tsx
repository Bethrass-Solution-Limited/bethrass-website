import type { Metadata } from "next";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Bethrass | Institutional Technology Enquiries",
  description:
    "Get in touch with Bethrass Solution Limited for enquiries about trusted infrastructure, analytics, and institutional technology.",
};

export default function ContactPage() {
  return <ContactFormSection />;
}
