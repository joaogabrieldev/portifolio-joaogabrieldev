"use client";

import { useId } from "react";

export function GridPattern() {
  const id = useId().replace(/:/g, "");

  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.18]"
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`grid-${id}`}
            width={40}
            height={40}
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={1}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${id})`} />
      </svg>
    </div>
  );
}
