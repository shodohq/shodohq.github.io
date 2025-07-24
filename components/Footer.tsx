import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo-square.svg" alt="株式会社衝動" className="h-10 w-10" />
              <h3 className="text-2xl font-bold text-white">株式会社衝動</h3>
            </div>
            <p className="text-sm mb-4">
              We provide "Nation as a Service".<br />
              次世代のセキュリティとインフラストラクチャで社会の新しい形を創造します。
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/shodohq" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://x.com/shodohq" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/shodohq/" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://zenn.dev/p/shodohq" className="hover:text-white transition-colors">
                <span className="text-sm font-semibold">Zenn</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">プロダクト</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://github.com/shodohq/pixie-shield" className="hover:text-white transition-colors">
                  Pixie Shield
                </Link>
              </li>
              <li>
                <span className="text-gray-500">Pixie NaaS (開発中)</span>
              </li>
              <li>
                <span className="text-gray-500">Pixie Lab (構想中)</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-white transition-colors">
                  事業内容
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-white mb-2">本社</p>
              <p>〒150-0002<br />
              東京都渋谷区渋谷2-19-15 宮益坂ビルディング609</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">会津オフィス</p>
              <p>〒965-0003<br />
              福島県会津若松市一箕町大字八幡墓料107番地1</p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2025 株式会社衝動 / Shodo Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}