import React from 'react'
import { cn } from '@/lib/utils'

interface CollegeLogoProps {
  variant?: 'light' | 'dark'
  showSubtitle?: boolean
  showUrdu?: boolean
  className?: string
  crestOnly?: boolean
}

export const CollegeLogo: React.FC<CollegeLogoProps> = ({
  variant = 'dark',
  showSubtitle = true,
  showUrdu = true,
  className,
  crestOnly = false,
}) => {
  const isLight = variant === 'light'

  if (crestOnly) {
    return (
      <div className={cn('p-0.5 rounded-full bg-white border border-[#E2DDD5] shadow-xs inline-block', className)}>
        <img
          src="/images/college-logo.jpg"
          alt="Noble Science College Crest"
          className="w-12 h-12 rounded-full object-contain"
        />
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-3 select-none', className)}>
      <div className="p-0.5 rounded-full bg-white border border-[#E2DDD5] shrink-0">
        <img
          src="/images/college-logo.jpg"
          alt="Noble Science College Official Seal"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-contain"
        />
      </div>
      <div className="flex flex-col text-left">
        <span
          className={cn(
            'font-serif font-bold text-base sm:text-[1.18rem] leading-tight tracking-tight',
            isLight ? 'text-[#FAF7F2]' : 'text-[#1F1A19]'
          )}
        >
          Noble Science College
        </span>
        <div className="flex items-center gap-2 mt-0.5">
          {showSubtitle && (
            <span
              className={cn(
                'text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.12em] uppercase',
                isLight ? 'text-[#D4AF37]' : 'text-[#8F0D19]'
              )}
            >
              Wan Bhachran <span className="opacity-40 text-[#736865]">•</span> Est. 2009
            </span>
          )}
          {showUrdu && (
            <span
              className={cn(
                'hidden md:inline-block text-[11px] font-urdu font-normal px-1.5 py-0.2 rounded-xs',
                isLight ? 'bg-white/10 text-white/90' : 'bg-[#FAF7F2] border border-[#E2DDD5] text-[#8F0D19]'
              )}
              dir="rtl"
            >
              واں بھچراں
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
