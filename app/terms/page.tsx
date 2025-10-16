import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="font-serif text-5xl font-normal mb-8 text-balance">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none font-sans">
          <p className="text-lg text-gray-600 mb-12">
            Last updated: January 2025
          </p>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed mb-4">
              By accessing and using the services provided by 株式会社衝動
              ("we," "us," or "our"), you accept and agree to be bound by the
              terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              2. Use of Services
            </h2>
            <p className="leading-relaxed mb-4">
              Our services, including Pixie Shield and related infrastructure
              solutions, are provided for legitimate disaster response, security
              assessment, and resilience planning purposes only.
            </p>
            <p className="leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Use our services for any unlawful purpose or in violation of any
                applicable laws
              </li>
              <li>
                Attempt to gain unauthorized access to our systems or networks
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of our
                services
              </li>
              <li>
                Use our services to harm, threaten, or harass any person or
                entity
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              3. Intellectual Property
            </h2>
            <p className="leading-relaxed mb-4">
              All content, features, and functionality of our services are owned
              by 株式会社衝動 and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              4. Data and Privacy
            </h2>
            <p className="leading-relaxed mb-4">
              Your use of our services is also governed by our Privacy Policy.
              We collect and process data in accordance with applicable data
              protection laws and our commitment to transparency.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              5. Service Availability
            </h2>
            <p className="leading-relaxed mb-4">
              We strive to maintain high availability of our services but do not
              guarantee uninterrupted access. We reserve the right to modify,
              suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              6. Limitation of Liability
            </h2>
            <p className="leading-relaxed mb-4">
              To the maximum extent permitted by law, 株式会社衝動 shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of or inability to use
              our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              7. Governing Law
            </h2>
            <p className="leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of Japan, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              8. Changes to Terms
            </h2>
            <p className="leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes by posting the new Terms of
              Service on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-3xl font-normal mb-4">
              9. Contact Information
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="leading-relaxed">
              株式会社衝動
              <br />
              Email: legal@shodohq.com
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
