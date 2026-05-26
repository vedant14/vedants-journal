import { useState } from "react";
import Head from "next/head";

export default function BoardGamesDiscovery() {
  const [searchQuery, setSearchQuery] = useState(
    "Strategy games like Catan but for 2 players"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setEmail("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Board Game Discovery | Coming Soon</title>
        <meta
          name="description"
          content="Find your next game night obsession with AI-powered board game recommendations"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 bg-amber-500 rounded-lg rotate-12 opacity-20 animate-pulse" />
          <div className="absolute top-40 right-20 w-20 h-20 bg-emerald-500 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-rose-500 rotate-45 opacity-20 animate-pulse" style={{ animationDuration: '2.5s' }} />
          <div className="absolute top-1/3 right-1/3 w-24 h-8 bg-cyan-500 rounded-full opacity-10 rotate-[-15deg]" />
          <div className="absolute bottom-20 right-10 w-14 h-14 bg-violet-500 rounded-lg rotate-[30deg] opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
          
          <div className="absolute top-1/4 left-[15%] opacity-10">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="currentColor" className="text-yellow-400">
              <path d="M30 0C20 0 12 8 12 18C12 26 17 32 24 35C10 38 0 50 0 65V80H60V65C60 50 50 38 36 35C43 32 48 26 48 18C48 8 40 0 30 0Z" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 right-[20%] opacity-10">
            <svg width="50" height="70" viewBox="0 0 60 80" fill="currentColor" className="text-pink-400">
              <path d="M30 0C20 0 12 8 12 18C12 26 17 32 24 35C10 38 0 50 0 65V80H60V65C60 50 50 38 36 35C43 32 48 26 48 18C48 8 40 0 30 0Z" />
            </svg>
          </div>
          <div className="absolute top-[60%] left-[5%] opacity-10">
            <svg width="40" height="55" viewBox="0 0 60 80" fill="currentColor" className="text-green-400">
              <path d="M30 0C20 0 12 8 12 18C12 26 17 32 24 35C10 38 0 50 0 65V80H60V65C60 50 50 38 36 35C43 32 48 26 48 18C48 8 40 0 30 0Z" />
            </svg>
          </div>

          <div className="absolute top-[10%] right-[10%] grid grid-cols-3 gap-2 opacity-10">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-white rounded-full" />
            ))}
          </div>
          <div className="absolute bottom-[15%] left-[8%] grid grid-cols-2 gap-3 opacity-10">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-white rounded-full" />
            ))}
          </div>

          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-3xl opacity-20" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium tracking-wide">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
              Coming Soon
            </span>
          </div>

          <div className="mb-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
                    <circle cx="15.5" cy="8.5" r="1.5" fill="white" />
                    <circle cx="8.5" cy="15.5" r="1.5" fill="white" />
                    <circle cx="15.5" cy="15.5" r="1.5" fill="white" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl tracking-tight">
                    Board Game Geek
                  </h2>
                  <p className="text-white/60 text-sm">Rankings Powered</p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Find Your Next
            </span>
            <br />
            <span className="text-white">Game Night Obsession</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 text-center max-w-2xl mb-12 leading-relaxed">
            Describe the game you want to play in plain English. We translate
            your ideas into perfect board game recommendations from the
            BoardGameGeek database.
          </p>

          <form onSubmit={handleSearch} className="w-full max-w-2xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-pink-500 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-2 flex items-center">
              <svg
                className="w-6 h-6 text-white/50 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for games..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 px-4 py-3 text-lg"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-400 hover:to-pink-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg"
              >
                Search
              </button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["Smart Recommendations", "BGG Rankings", "Player Count Filters", "Complexity Ratings"].map(
              (feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 text-sm hover:bg-white/10 hover:text-white/80 transition-colors cursor-default"
                >
                  {feature}
                </span>
              )
            )}
          </div>

          <div className="mt-16 flex gap-4 opacity-40">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-24 h-32 bg-gradient-to-br from-white/20 to-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
                style={{
                  transform: `rotate(${(i - 1) * 8}deg) translateY(${
                    i === 1 ? -10 : 0
                  }px)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-white/30 text-sm">
            Powered by Board Game Geek API
          </p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Coming Soon
                </h2>
                <p className="text-slate-600">
                  We are building something amazing. Be the first to know when we launch.
                </p>
              </div>

              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Join Waitlist
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 text-center mb-4">
                  Want to learn more?
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Project Roadmap
                  </a>
                  <span className="text-slate-300">|</span>
                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Developer Blog
                  </a>
                  <span className="text-slate-300">|</span>
                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    BGG Data Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
