export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Mirror Sync</div>
          <div className="space-x-6">
            <a href="#features" className="hover:text-purple-400">Features</a>
            <a href="#whitepaper" className="hover:text-purple-400">Whitepaper</a>
            <a href="mailto:mirrorsyncofficial@gmail.com" className="bg-purple-600 px-4 py-2 rounded">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Copy Successful Solana Traders.<br/>
          <span className="text-purple-400">Automatically.</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          The first Solana-native copy trading platform with AI-powered trader verification.
          Mirror profitable strategies in real-time with transparent fees and non-custodial security.
        </p>
        <div className="space-x-4">
          <a href="mailto:mirrorsyncofficial@gmail.com" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold inline-block">
            Join Waitlist
          </a>
          <a href="/whitepaper.pdf" className="border border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-lg text-lg font-semibold inline-block">
            Read Whitepaper
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          🚧 Currently in development • Looking for Technical Co-Founder
        </p>
      </section>

      {/* Rest of sections... */}
    </div>
  );
}
