export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wave base */}
      <path
        d="M4 40 Q12 30, 20 36 Q28 42, 36 34 Q44 26, 52 32 Q58 36, 60 34"
        stroke="url(#wave-grad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Sun */}
      <circle cx="48" cy="16" r="8" fill="#f97316" opacity="0.9" />
      <circle cx="48" cy="16" r="5" fill="#fbbf24" />
      {/* Palm trunk */}
      <path
        d="M16 44 Q18 28, 22 18"
        stroke="#a78bfa"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Palm leaves */}
      <path
        d="M22 18 Q30 10, 36 14"
        stroke="#22c55e"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 18 Q14 8, 10 12"
        stroke="#22c55e"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 18 Q28 6, 32 8"
        stroke="#4ade80"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Water line */}
      <path
        d="M2 48 Q10 44, 18 48 Q26 52, 34 48 Q42 44, 50 48 Q56 51, 62 48"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="wave-grad" x1="4" y1="36" x2="60" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
      </defs>
    </svg>
  );
}
