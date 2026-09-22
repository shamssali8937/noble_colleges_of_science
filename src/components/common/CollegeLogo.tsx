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
      <img
        src="/images/college-logo.jpg"
        alt="Noble Science College Emblem"
        className={cn('w-12 h-12 rounded-full object-contain', className)}
      />
    )
  }

  return (
    <div className={cn('flex items-center gap-3 select-none', className)}>
      <img
        src="/images/college-logo.jpg"
        alt="Noble Science College Official Logo"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-contain shrink-0"
      />
      <div className="flex flex-col text-left">
        <span
          className={cn(
            'font-serif font-bold text-base sm:text-lg leading-tight tracking-tight',
            isLight ? 'text-white' : 'text-[#1F1A19]'
          )}
        >
          Noble Science College
        </span>
        <div className="flex items-center gap-2 mt-0.5">
          {showSubtitle && (
            <span
              className={cn(
                'text-[11px] sm:text-xs font-sans font-medium tracking-wide uppercase',
                isLight ? 'text-white/80' : 'text-[#736865]'
              )}
            >
              Wan Bhachran <span className="opacity-50">•</span> Est. 2009
            </span>
          )}
          {showUrdu && (
            <span
              className={cn(
                'hidden md:inline-block text-[11px] font-urdu font-normal px-1.5 py-0.2 rounded-xs',
                isLight ? 'bg-white/10 text-white/90' : 'bg-[#8F0D19]/10 text-[#8F0D19]'
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
