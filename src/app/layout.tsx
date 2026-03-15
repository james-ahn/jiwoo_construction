import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Building2 } from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "지우건설 (Jiwoo Construction)",
  description: "미래를 만드는 지우건설 - 지반조성 포장공사, 도로건설, 콘크리트 및 철근공사 전문기업",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`} suppressHydrationWarning>
        {/* 네비게이션 헤더 */}
        <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group hover:opacity-85 transition-opacity">
              <Image
                src="/logo2.png"
                alt="지우건설 로고 아이콘"
                width={48}
                height={48}
                className="w-12 h-auto object-contain mix-blend-multiply"
              />
              <div className="flex flex-col pt-0.5">
                <span className="text-[10px] font-bold text-gray-500 tracking-widest leading-none mb-1">
                  주식회사
                </span>
                <span className="text-2xl font-black text-gray-900 tracking-tighter leading-none group-hover:text-blue-600 transition-colors">
                  지우건설
                </span>
              </div>
            </Link>

            {/* PC 네비게이션 메뉴 */}
            <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
              <Link href="/about" className="hover:text-blue-600 transition-colors">
                회사소개
              </Link>
              <Link href="/#business" className="hover:text-blue-600 transition-colors">
                사업영역
              </Link>
              <Link href="/#cases" className="hover:text-blue-600 transition-colors">
                시공사례
              </Link>
              <Link
                href="/#contact"
                className="px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all font-bold"
              >
                문의하기
              </Link>
            </nav>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <div className="flex-grow pt-0">{children}</div>

        {/* 푸터 영역 */}
        <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex flex-col pt-0.5">
                <span className="text-[9px] font-semibold text-gray-500 tracking-widest leading-none mb-1">
                  주식회사
                </span>
                <span className="text-lg font-bold text-gray-300 tracking-tighter leading-none">
                  지우건설
                </span>
              </div>
            </div>
            <div className="text-sm text-center md:text-right space-y-1">
              <p>주식회사 지우건설 대표이사: 탁일래</p>
              <p>부산광역시 강서구 대저로221번나길 118</p>
              <p className="mt-4 text-xs text-gray-600">
                © {new Date().getFullYear()} Jiwoo Construction. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* 플로팅 스크롤 탑 버튼 */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
