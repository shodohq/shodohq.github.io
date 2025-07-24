import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-purple-300 bg-purple-900/30 rounded-full border border-purple-700/50">
              We provide "Nation as a Service"
            </span>
          </div>
          
          <div className="mb-8">
            <img src="/logo.png" alt="株式会社衝動" className="h-24 md:h-32 w-auto mx-auto mb-6 brightness-0 invert" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            次世代のセキュリティとインフラストラクチャで<br />
            社会の新しい形を創造する
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#products" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors md:py-4 md:text-lg md:px-10">
              プロダクトを見る
            </Link>
            <Link href="#about" className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 transition-colors md:py-4 md:text-lg md:px-10">
              会社について
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">プロダクト</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              テクノロジーで社会課題を解決する革新的なソリューション
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pixie Shield */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pixie Shield</h3>
              <p className="text-gray-600 mb-6">
                AIを活用した次世代セキュリティ診断プラットフォーム。Code Property Graphを用いて、ソースコードの脆弱性を高精度で検出します。
              </p>
              <Link href="https://github.com/shodohq/pixie-shield" className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center">
                GitHub で見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            {/* Pixie NaaS */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pixie NaaS</h3>
              <p className="text-gray-600 mb-6">
                Nation as a Service - 災害時や緊急時に迅速に展開可能なモジュラー型インフラストラクチャ。7日以内に仮設都市を構築します。
              </p>
              <span className="text-blue-600 font-medium">開発中</span>
            </div>

            {/* Pixie Lab */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pixie Lab</h3>
              <p className="text-gray-600 mb-6">
                生命科学・医学研究の再現性に特化したセルフドライビングラボ。研究プロセスの自動化と標準化を実現します。
              </p>
              <span className="text-green-600 font-medium">構想中</span>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">お知らせ</h2>
            <p className="text-xl text-gray-600">最新情報をお届けします</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <article className="border-b border-gray-200 pb-8">
                <time className="text-sm text-gray-500">2025.07.24</time>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                  会社ウェブサイトをリニューアルしました
                </h3>
                <p className="text-gray-600">
                  株式会社衝動の公式ウェブサイトをリニューアルしました。今後とも宜しくお願いいたします。
                </p>
              </article>
              
              <article className="border-b border-gray-200 pb-8">
                <time className="text-sm text-gray-500">2025.05.01</time>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                  株式会社衝動を設立しました
                </h3>
                <p className="text-gray-600">
                  2025年5月1日、株式会社衝動を設立いたしました。「Nation as a Service」というビジョンのもと、次世代のセキュリティとインフラストラクチャで社会の新しい形を創造してまいります。
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">会社概要</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">社名</h3>
                  <p>株式会社衝動 / Shodo Inc.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">本社所在地</h3>
                  <p>〒150-0002<br />東京都渋谷区渋谷2-19-15 宮益坂ビルディング609</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">会津オフィス</h3>
                  <p>〒965-0003<br />福島県会津若松市一箕町大字八幡墓料107番地1</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">設立</h3>
                  <p>2025年5月</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">メンバー</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img src="https://github.com/yoseio.png" alt="髙木皓介" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">髙木 皓介</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src="https://github.com/npJxx.png" alt="土屋孝弘" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">土屋 孝弘</p>
                    <p className="text-sm text-gray-600">COO</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src="https://github.com/shinbunbun.png" alt="髙棟雄斗" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">髙棟 雄斗</p>
                    <p className="text-sm text-gray-600">CTO</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <img src="https://github.com/Hina524.png" alt="小西姫奈" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">小西 姫奈</p>
                    <p className="text-sm text-gray-600">CDO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IR Section */}
      <section id="ir" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IR情報</h2>
            <p className="text-xl text-gray-600">投資家の皆様へ</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">財務情報</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>資本金</span>
                  <span className="font-medium">10万円</span>
                </li>
                <li className="flex justify-between">
                  <span>設立年月日</span>
                  <span className="font-medium">2025年5月1日</span>
                </li>
                <li className="flex justify-between">
                  <span>決算期</span>
                  <span className="font-medium">4月</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">電子公告</h3>
              <p className="text-gray-600">
                当社の公告は、電子公告により行います。
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            一緒に未来を創りましょう
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            革新的なアイデアとテクノロジーで、社会に新しい価値を提供します
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://github.com/shodohq" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="https://x.com/shodohq" className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X (Twitter)
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}