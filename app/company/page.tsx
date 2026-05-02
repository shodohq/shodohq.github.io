import type { Metadata } from "next";
import {
  CompanyHero,
  CompanyInfo,
  CompanyPrinciples,
  CompanyPurpose,
  CompanyWhat,
} from "@/components/company";
import { Footer } from "@/components/Footer";
import { HomeCTA } from "@/components/home";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Company",
};

export default function CompanyPage() {
  return (
    <>
      <Nav active="company" />
      <CompanyHero />
      <CompanyPurpose />
      <CompanyWhat />
      <CompanyPrinciples />
      <CompanyInfo />
      <HomeCTA />
      <Footer />
    </>
  );
}
