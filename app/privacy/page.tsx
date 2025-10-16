import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="font-serif text-5xl font-normal mb-8 text-balance">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none font-sans">
          <p className="text-lg text-gray-600 mb-12">
            Last updated: January 2025
          </p>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              1. Introduction
            </h2>
            <p className="leading-relaxed mb-4">
              株式会社衝動 ("we," "us," or "our") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Account information (name, email address, organization details)
              </li>
              <li>
                Usage data from our security scanning and infrastructure
                services
              </li>
              <li>
                Technical information (IP addresses, browser type, device
                information)
              </li>
              <li>Communications you send to us</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and security alerts</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns to improve our products</li>
              <li>
                Detect, prevent, and address technical issues and security
                vulnerabilities
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              4. Data Security
            </h2>
            <p className="leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              5. Data Retention
            </h2>
            <p className="leading-relaxed mb-4">
              We retain your information for as long as necessary to provide our
              services and fulfill the purposes outlined in this Privacy Policy,
              unless a longer retention period is required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              6. Sharing of Information
            </h2>
            <p className="leading-relaxed mb-4">
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              7. Your Rights
            </h2>
            <p className="leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              8. International Data Transfers
            </h2>
            <p className="leading-relaxed mb-4">
              Your information may be transferred to and processed in countries
              other than your country of residence. We ensure appropriate
              safeguards are in place for such transfers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              9. Changes to This Policy
            </h2>
            <p className="leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              10. Contact Us
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="leading-relaxed">
              株式会社衝動
              <br />
              Email: privacy@shodohq.com
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
