import type { Metadata } from "next";
import { ContactForm, ContactHero } from "@/components/contact";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Nav active="contact" />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
}
