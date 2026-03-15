import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "회사소개 | 지우건설 (Jiwoo Construction)",
  description: "미래를 만드는 지우건설의 기업 개요 및 연혁을 소개합니다.",
};

const historyData = [
  {
    year: "2024",
    events: [
      { month: "12", desc: "주요 고속도로 유지보수 연간 단가계약 체결" },
      { month: "10", desc: "친환경 아스콘 포장 공법 신기술 인증 획득" },
      { month: "03", desc: "ISO 45001 (안전보건경영시스템) 인증 취득" },
    ],
  },
  {
    year: "2023",
    events: [
      { month: "11", desc: "국토교통부 우수시공업체 표창 수상" },
      { month: "07", desc: "스마트 건설기술 도입 및 3D 머신컨트롤 포장 장비 확충" },
      { month: "02", desc: "본사 확장 이전 및 기술연구전담부서 설립" },
    ],
  },
  {
    year: "2021",
    events: [
      { month: "09", desc: "대한전문건설협회 도로포장공사업 부문 수주대상 수상" },
      { month: "05", desc: "조달청 우수물품 지정 (재생아스콘 분야)" },
    ],
  },
  {
    year: "2018",
    events: [
      { month: "10", desc: "지반조성 및 도로건설업 면허 갱신 및 자본금 증자" },
      { month: "04", desc: "관급공사 적격심사 우수업체 선정" },
    ],
  },
  {
    year: "2015",
    events: [
      { month: "06", desc: "포장공사업, 철근콘크리트공사업 전문건설업 면허 취득" },
      { month: "03", desc: "주식회사 지우건설 법인 설립" },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/case-2.png" // 기존에 만든 지반조성 배경 임시 활용
            alt="지우건설 전경"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight drop-shadow-md">
            회사소개
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium drop-shadow">
            미래를 짓는 든든한 파트너, 지우건설입니다.
          </p>
        </div>
      </section>

      {/* 회사 개요 Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                기본에 충실한 기술력으로 <br />
                <span className="text-blue-600">최상의 가치</span>를 실현합니다.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                <strong className="text-gray-900">주식회사 지우건설</strong>은 아스팔트 포장, 도로 건설, 지반 조성, 그리고 콘크리트 및 철근 공사에 이르기까지 토목 건설 전반에 걸쳐 탄탄한 기술력과 풍부한 시공 경험을 축적해왔습니다.
                안전과 품질을 타협하지 않는 원칙으로 고객의 신뢰에 보답하며, 지속 가능한 미래 건설 사업을 선도해 나가겠습니다.
              </p>

              <div className="space-y-4">
                {[
                  "안전과 품질을 최우선으로 하는 책임 시공",
                  "스마트 건설장비 및 친환경 기술 도입",
                  "고객 만족을 넘어 감동을 주는 파트너십",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/case-1.png"
                alt="지우건설 시공 현장"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">탁일래 대표이사</h3>
                  <p className="text-gray-600 text-sm">
                    "변화하는 환경 속에서도 흔들리지 않는 품질과 신뢰로 보답하겠습니다."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 연혁 Section (Timeline) */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-sm font-bold mb-4">
              HISTORY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">회사 연혁</h2>
            <p className="text-gray-600 text-lg">지우건설이 걸어온 끊임없는 도전과 성장의 발자취입니다.</p>
          </div>

          <div className="relative">
            {/* 세로 타임라인 선 */}
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-blue-300 to-transparent md:left-1/2 md:-translate-x-px"></div>

            <div className="space-y-12">
              {historyData.map((data, index) => (
                <div key={data.year} className="relative flex flex-col md:flex-row items-start md:even:flex-row-reverse group">

                  {/* 중앙 마커 */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-md transform -translate-x-1.5 md:-translate-x-2 mt-2 z-10 group-hover:scale-125 group-hover:border-blue-500 transition-transform duration-300"></div>

                  {/* 연도 표시 영역 (모바일: 오른쪽, 데스크탑: 마주보는 쪽) */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-12 mb-4 md:mb-0 text-left md:text-right md:group-even:text-left">
                    <h3 className="text-4xl md:text-5xl font-black text-gray-200 group-hover:text-blue-100 transition-colors inline-block relative">
                      {data.year}
                    </h3>
                  </div>

                  {/* 상세 내용 영역 */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-12 pt-2 md:pt-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <ul className="space-y-4">
                        {data.events.map((event, idx) => (
                          <li key={idx} className="flex gap-4 items-start group/item">
                            <span className="text-blue-600 font-bold shrink-0 w-8 flex items-center justify-center bg-blue-50 rounded-lg py-1">
                              {event.month}
                            </span>
                            <span className="text-gray-700 pt-1 group-hover/item:text-gray-900 transition-colors">
                              {event.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">성공적인 파트너십을 원하시나요?</h2>
          <p className="text-blue-100 mb-10 text-lg">
            지우건설의 전문가들이 고객님의 프로젝트를 완벽하게 수행하기 위해 대기하고 있습니다.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all shadow-lg"
          >
            프로젝트 문의하기
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
