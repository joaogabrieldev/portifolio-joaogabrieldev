import { ubuntu } from '@/utils/fonts';
import React from 'react'

interface IPriceBadgeProps {
  label: string;
}

const Badge = ({label}: IPriceBadgeProps) => {
  return (
    <div>
      <div className="flex items-center justify-center rounded-2xl bg-[#7C7ABF]">
      <span className={`px-3 py-1 text-xs font-bold text-white select-none ${ubuntu.className}`}>
        {label.toUpperCase()}
      </span>
    </div>
    </div>
  )
}

export default Badge
