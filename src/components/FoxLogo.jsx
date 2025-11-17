import React from "react";

const FoxLogo = ({ className = "w-10 h-10" }) => (
  <svg
    className={className}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="foxGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff7a18" />
        <stop offset="100%" stopColor="#ff3d00" />
      </linearGradient>
      <linearGradient id="foxDark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0b0b0f" />
        <stop offset="100%" stopColor="#161618" />
      </linearGradient>
    </defs>
    <g filter="url(#shadow)">
      <path d="M64 10C74 24 92 32 110 34c-6 20-20 34-46 38C38 68 24 54 18 34 36 32 54 24 64 10z" fill="url(#foxGrad)"/>
      <path d="M28 62c8 18 20 30 36 30s28-12 36-30c-12 4-24 6-36 6s-24-2-36-6z" fill="url(#foxDark)"/>
      <path d="M44 74c4 4 12 8 20 8s16-4 20-8c-6 14-14 22-20 22s-14-8-20-22z" fill="#ffefe5"/>
      <circle cx="50" cy="62" r="4" fill="#121214"/>
      <circle cx="78" cy="62" r="4" fill="#121214"/>
      <path d="M60 86c2 2 6 2 8 0" stroke="#ff7a18" strokeWidth="3" strokeLinecap="round"/>
    </g>
  </svg>
);

export default FoxLogo;
