import type { Metadata } from "next";

import ContactPage from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Lama Telecom — secure logistics, recycling, and network services.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
