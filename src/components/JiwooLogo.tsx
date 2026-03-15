export default function JiwooLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="지우건설 로고 아이콘"
    >
      {/* 
        로고 아이콘 (텍스트 제외, 순수 심볼)
        W 형태의 파란색 3D 구조 
      */}
      <g transform="translate(10, 15)">
        {/* 왼쪽 3D 프레임 (연한 파란색 / 테두리 역할) */}
        <path
          d="M 23,8 L 0,8 L 0,10 L 19,10 L 19,45 L 0,60 L 0,64 L 23,80 L 40,64 L 40,60 L 25,74 L 23,74 L 5,60 L 5,12 L 23,12 Z"
          fill="#5ea5d6"
        />
        {/* 왼쪽 기둥 (진한 파란색) */}
        <polygon points="23,12 37,12 37,61 23,74" fill="#ffffffff" />

        {/* 오른쪽 기둥 (진한 파란색) */}
        <polygon points="42,12 56,12 56,74 42,61" fill="#467fd0" />
        {/* 오른쪽 3D 프레임 (연한 파란색 / 테두리 역할) */}
        <path
          d="M 56,12 L 74,12 L 74,10 L 56,10 Z"
          fill="#5ea5d6"
        />
        <path
          d="M 56,74 L 58,74 L 75,58 L 75,54 L 56,72 Z"
          fill="#5ea5d6"
        />
      </g>
    </svg>
  );
}
