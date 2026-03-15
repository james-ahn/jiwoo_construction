export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <div className="text-center space-y-6 px-6">
        {/* 로고 / 아이콘 */}
        <div className="flex items-center justify-center mb-4">
          <span className="text-6xl">🏗️</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
          Hello World
        </h1>

        {/* 서브 텍스트 */}
        <p className="text-lg md:text-2xl text-slate-400 font-medium">
          지우 건설 — Next.js 프로젝트에 오신 것을 환영합니다 🎉
        </p>

        {/* 배지 */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "pnpm"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-semibold text-white border border-white/20 shadow-inner"
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* CTA 버튼 */}
        <div className="pt-6">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-base shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-200"
          >
            Next.js 공식 문서 →
          </a>
        </div>
      </div>

      {/* 배경 장식 */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-700/20 rounded-full blur-3xl" />
      </div>
    </main>
  );
}
