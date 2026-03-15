import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Printer,
  Smartphone,
  Mail,
  ArrowRight,
  HardHat,
  Tractor,
  Construction,
} from "lucide-react";
import { casesData } from "@/data/cases";

export default function Home() {
  return (
    <main className="w-full relative overflow-hidden bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 애니메이션 들어간 배경 이미지 */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        {/* 오버레이 그라데이션 */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl leading-tight">
            미래를 만드는
            <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 ml-4">
              지우건설
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium drop-shadow-md">
            당신의 일상과 맞닿는 처음부터 끝까지.
            <br />
            아스팔트 포장과 토목 공사의 새로운 기준을 제시합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
            >
              회사소개
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About Section (Teaser) */}
      <section className="py-24 bg-gray-50 flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
            탄탄한 기반 위에서 <br className="hidden md:block" />
            안전한 내일을 건설합니다.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            주식회사 지우건설은 다년간 축적된 현장 경험과 전문적인 기술력을 바탕으로 도로 포장, 지반 조성 등 최고의 토목 건설 솔루션을 제공합니다.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-bold transition-colors mb-10 group"
          >
            회사소개 자세히 보기
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mt-4"></div>
        </div>
      </section>

      {/* 3. Business Section */}
      <section id="business" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extrabold text-gray-900">핵심 사업 영역</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 사업 1 */}
            <div className="group bg-gray-50 rounded-3xl p-10 hover:bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 border border-gray-100 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Tractor size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                지반조성 포장공사업
              </h4>
              <p className="text-gray-600 leading-relaxed">
                각종 건축물 및 구조물의 기초가 되는 튼튼한 토대를 구축합니다. 토공사부터
                연약지반 개량, 안전한 대지 조성까지 완벽한 평탄화 작업을 제공합니다.
              </p>
            </div>

            {/* 사업 2 */}
            <div className="group bg-gray-50 rounded-3xl p-10 hover:bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 border border-gray-100 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Construction size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">도로건설업</h4>
              <p className="text-gray-600 leading-relaxed">
                국도, 지방도, 산간 도로 등 다양한 지형과 용도에 맞춘 최적의 아스팔트
                도로 포장을 시공합니다. 쾌적한 주행성과 높은 내구성을 자랑합니다.
              </p>
            </div>

            {/* 사업 3 */}
            <div className="group bg-gray-50 rounded-3xl p-10 hover:bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 border border-gray-100 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <HardHat size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                콘크리트 및 철근공사업
              </h4>
              <p className="text-gray-600 leading-relaxed">
                안전의 최전선에서 구조물의 수명을 결정짓는 골조 공사를 수행합니다. 정밀한
                철근 배근 기술과 빈틈없는 콘크리트 타설을 원칙으로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Cases Section */}
      <section id="cases" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">
                Portfolio
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                최근 시공 사례
              </h3>
            </div>
            <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
              지우건설은 최고의 장비와 최상의 기술력으로 어떠한 환경에서도 완벽한 성과를
              이끌어냅니다. 하이퀄리티 시공 기록을 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casesData.map((item) => (
              <Link
                key={item.id}
                href={`/cases/${item.id}`}
                className="group block relative rounded-2xl overflow-hidden bg-gray-800 hover:-translate-y-2 transition-transform duration-300 border border-gray-700 hover:border-blue-500 shadow-xl"
              >
                {/* 썸네일 이미지 영역 */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* 카테고리 뱃지 */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </div>
                {/* 텍스트 영역 */}
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2 font-medium">{item.date}</div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="mt-6 flex items-center text-blue-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    자세히 보기 <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* 장식용 배경 요소 */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-70 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-3xl -z-10 opacity-70 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:items-center">
          {/* 텍스트 안내 영역 */}
          <div className="lg:w-5/12">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">
              Contact Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              도움이
              <br />
              필요하신가요?
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              지우건설의 전문가들이 고객님의 현장에 가장 적합한 해답을 제안해 드립니다.
              언제든지 편하게 문의해 주시면 친절하고 신속하게 상담해 드리겠습니다.
            </p>
          </div>

          {/* 명함 정보 카드 영역 */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/5 p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-10">

              {/* 왼쪽 정보 */}
              <div className="md:w-1/2 space-y-8">
                <div>
                  <h4 className="text-2xl font-black text-gray-900 mb-1">지우건설</h4>
                  <p className="text-gray-500 text-sm font-medium">주식회사</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 text-gray-800">
                    <span className="block text-sm text-gray-500 mb-1">대표이사</span>
                    <span className="text-xl font-bold tracking-widest">탁 일 래</span>
                  </div>
                </div>

                <div className="pt-2">
                  <h5 className="text-sm font-bold text-gray-900 mb-4 bg-gray-100 inline-block px-3 py-1 rounded-md">
                    전문 건설 면허
                  </h5>
                  <ul className="text-sm font-medium text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      지반조성 포장공사업
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      도로건설업
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      콘크리트 및 철근공사업
                    </li>
                  </ul>
                </div>
              </div>

              <div className="hidden md:block w-px bg-gray-100"></div>

              {/* 오른쪽 연락처 */}
              <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
                <a
                  href="https://maps.google.com/?q=부산광역시+강서구+대저로221번나길+118"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 mb-1">주소</span>
                    <span className="text-sm font-semibold text-gray-900 leading-snug break-keep">
                      부산광역시 강서구<br />대저로221번나길 118
                    </span>
                  </div>
                </a>

                <a
                  href="tel:051-338-7883"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 mb-0.5">TEL</span>
                    <span className="text-base font-bold text-gray-900">
                      (051) 338-7883
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                    <Printer size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 mb-0.5">FAX</span>
                    <span className="text-base font-bold text-gray-700">
                      (051) 338-7884
                    </span>
                  </div>
                </div>

                <a
                  href="tel:010-9833-7731"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 mb-0.5">Mobile</span>
                    <span className="text-base font-bold text-gray-900">
                      010-9833-7731
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:jiwoo_asp@kakao.com"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 mb-0.5">E-mail</span>
                    <span className="text-base font-bold text-gray-900">
                      jiwoo_asp@kakao.com
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
