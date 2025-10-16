import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-medium font-sans">Products</h3>
            <ul className="space-y-2 text-sm text-white/70 font-sans">
              <li>
                <Link href="#" className="hover:text-white">
                  Pixie Shield
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Pixie NaaS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Pixie Lab
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium font-sans">Company</h3>
            <ul className="space-y-2 text-sm text-white/70 font-sans">
              <li>
                <Link href="/company" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium font-sans">Help</h3>
            <ul className="space-y-2 text-sm text-white/70 font-sans">
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
          <p className="text-sm text-white/70 font-mono">© 2025 株式会社衝動</p>
          <div className="flex gap-4">
            <Link
              href="https://x.com/shodohq"
              className="text-white/70 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">X</span>
              <FaXTwitter className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.facebook.com/shodohq"
              className="text-white/70 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/shodohq"
              className="text-white/70 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="https://github.com/shodohq"
              className="text-white/70 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
