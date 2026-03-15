import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, ChevronRight } from "lucide-react";
import { casesData } from "@/data/cases";

// 정적 경로 생성 (SSG)
export function generateStaticParams() {
  return casesData.map((item) => ({
    id: item.id,
  }));
}

export default async function CaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const caseItem = casesData.find((item) => item.id === resolvedParams.id);

  if (!caseItem) {
    notFound();
  }

  // 간단한 마크다운 파서 (h3와 ul/li 정도만 변환)
  const renderContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2">
            <div className="w-2 h-6 bg-blue-600 rounded-full" />
            {paragraph.replace("### ", "")}
          </h3>
        );
      } else if (paragraph.startsWith("- ")) {
        return (
          <ul key={index} className="space-y-3 my-6 pl-4 border-l-2 border-blue-100">
            {paragraph.split("\n").map((item, i) => (
              <li key={i} className="flex items-start text-gray-700 leading-relaxed text-lg">
                <span className="text-blue-500 mr-3 mt-1 font-bold">•</span>
                {item.replace("- ", "")}
              </li>
            ))}
          </ul>
        );
      } else {
        return (
          <p key={index} className="text-gray-600 leading-loose text-lg mb-6 whitespace-pre-line">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      {/* 1. 상단 타이틀 영역 */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">홈</Link>
            <ChevronRight size={14} />
            <Link href="/#cases" className="hover:text-blue-600 transition-colors">시공사례</Link>
            <ChevronRight size={14} />
            <span className="text-blue-600 shadow-sm">{caseItem.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            {caseItem.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full font-semibold text-gray-700">
              {caseItem.category}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-blue-500" />
              <span>작업 일자: <strong className="text-gray-900">{caseItem.date}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 메인 콘텐츠 영역 (블로그 스타일) */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* 대표 이미지 (Hero Image) */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-16 group">
          <Image
            src={caseItem.thumbnail}
            alt={caseItem.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
        </div>

        {/* 요약 박스 */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 mb-16 text-xl text-gray-800 font-medium leading-relaxed italic border-l-4 border-l-blue-500 relative">
          <span className="absolute -top-4 -left-2 text-6xl text-blue-100 pointer-events-none rotate-12">"</span>
          {caseItem.summary}
        </div>

        {/* 본문 (Markdown 처리된 내용) */}
        <article className="prose prose-lg prose-blue max-w-none">
          {renderContent(caseItem.content)}
        </article>

        {/* 하단 네비게이션 */}
        <div className="mt-20 pt-10 border-t border-gray-200 flex justify-center">
          <Link
            href="/#cases"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 hover:shadow-lg transition-all"
          >
            <ArrowLeft size={20} />
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
