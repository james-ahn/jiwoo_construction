export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  summary: string;
  content: string;
}

export const casesData: CaseStudy[] = [
  {
    id: "asphalt-paving-01",
    title: "주차장 조성 및 부대 토목공사",
    category: "지반조성 포장공사업",
    date: "2024. 08",
    thumbnail: "/case-1.png",
    summary:
      "경산시 사동 스타벅스 신축공사 중 주차장 조성 및 부대토목공사",
    content:
      "### 공사 개요\n\n이 프로젝트는 스타벅스 신축 공사 중 주차장 조성 및 부대 토목공사를 통해 최적의 환경을 구축했습니다.\n\n### 주요 시공 내역\n\n- 주소: 경북 경산시 원료로 194\n- 발주처: (주)에스씨 산업개발\n- 공사기간: 2024.08.19 ~ 2024.10.19\n\n지우건설의 기술력으로 완벽한 품질을 달성하여 발주처의 높은 평가를 받았습니다.",
  },
  {
    id: "groundwork-industrial-02",
    title: "도로 포장 공사",
    category: "도로건설업",
    date: "2023. 10",
    thumbnail: "/case-2.png",
    summary:
      "장유여객터미널 도로 포장 공사를 통해 최적의 환경을 구축했습니다.",
    content:
      "### 공사 개요\n\n이 프로젝트는 장유여객터미널 도로 포장 공사를 통해 최적의 환경을 구축했습니다.\n\n### 주요 시공 내역\n\n- 주소: 경남 김해시 무계로 56\n- 발주처: (주)삼호디엔티\n- 공사기간: 2023.10.01 ~ 2024.04.30\n\n지우건설의 기술력으로 완벽한 품질을 달성하여 발주처의 높은 평가를 받았습니다.",
  },
  {
    id: "concrete-foundation-03",
    title: "주차장부지 조성공사",
    category: "지반조성 포장공사업",
    date: "2023. 05",
    thumbnail: "/case-3.png",
    summary:
      "장전제일교회 주차장부지 조성공사를 통해 최적의 환경을 구축했습니다.",
    content:
      "### 공사 개요\n\n이 프로젝트는 장전제일교회 주차장부지 조성공사를 통해 최적의 환경을 구축했습니다.\n\n### 주요 시공 내역\n\n- 주소: 부산시 금정구 금정로 50\n- 발주처: 장전제일교회\n- 공사기간: 2023.05.30 ~ 2023.06.28\n\n지우건설의 기술력으로 완벽한 품질을 달성하여 발주처의 높은 평가를 받았습니다.",
  },
];
