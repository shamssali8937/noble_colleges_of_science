import React from 'react'
import { cn } from '@/lib/utils'

interface CollegeLogoProps {
  variant?: 'light' | 'dark'
  showSubtitle?: boolean
  showUrdu?: boolean
  className?: string
  crestOnly?: boolean
}

export const CollegeCrest: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      role="img"
      aria-label="Noble Science College Official Crest"
    >
      {/* Outer Collegiate Circle */}
      <circle cx="50" cy="50" r="48" fill="#133826" stroke="#C88E2E" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#FAF8F5" strokeWidth="1" strokeDasharray="2 2" />

      {/* Stars on sides */}
      <path d="M16 48 L17.5 52 L22 52 L18.5 54.5 L20 59 L16 56 L12 59 L13.5 54.5 L10 52 L14.5 52 Z" fill="#C88E2E" />
      <path d="M84 48 L85.5 52 L90 52 L86.5 54.5 L88 59 L84 56 L80 59 L81.5 54.5 L78 52 L82.5 52 Z" fill="#C88E2E" />

      {/* Center Shield / Medallion */}
      <circle cx="50" cy="44" r="28" fill="#FAF8F5" stroke="#133826" strokeWidth="1.5" />

      {/* Graduation Mortarboard */}
      <path
        d="M50 25 L68 33 L50 41 L32 33 Z"
        fill="#133826"
      />
      <path
        d="M40 37.5 L40 44 C40 47 45 49 50 49 C55 49 60 47 60 44 L60 37.5"
        fill="#133826"
      />
      {/* Cap Tassel */}
      <path d="M50 33 L64 36 L64 45" stroke="#C88E2E" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="64" cy="45" r="1.5" fill="#C88E2E" />

      {/* Open Book of Knowledge */}
      <path
        d="M34 56 C39 54 46 54 50 56 C54 54 61 54 66 56 L66 65 C61 63 54 63 50 65 C46 63 39 63 34 65 Z"
        fill="#FFFFFF"
        stroke="#133826"
        strokeWidth="1.5"
      />
      <path d="M50 56 L50 65" stroke="#133826" strokeWidth="1.5" />
      <path d="M37 59 C41 57.5 45 57.5 48 59" stroke="#384640" strokeWidth="0.75" />
      <path d="M37 62 C41 60.5 45 60.5 48 62" stroke="#384640" strokeWidth="0.75" />
      <path d="M52 59 C55 57.5 59 57.5 63 59" stroke="#384640" strokeWidth="0.75" />
      <path d="M52 62 C55 60.5 59 60.5 63 62" stroke="#384640" strokeWidth="0.75" />

      {/* Crimson Ribbon at bottom with WAN BHACHRAN */}
      <path
        d="M20 74 L27 68 L73 68 L80 74 L76 83 L70 77 L30 77 L24 83 Z"
        fill="#8D1B2D"
      />
      <path
        d="M27 68 L73 68 L70 77 L30 77 Z"
        fill="#A61F36"
      />
      <text
        x="50"
        y="75"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="5.5"
        fontWeight="bold"
        fontFamily="sans-serif"
        letterSpacing="0.8"
      >
        WAN BHACHRAN
      </text>

      {/* Three stars under ribbon */}
      <path d="M43 83 L44 85 L46 85 L44.5 86.5 L45 88.5 L43 87.5 L41 88.5 L41.5 86.5 L40 85 L42 85 Z" fill="#C88E2E" />
      <path d="M50 83 L51 85 L53 85 L51.5 86.5 L52 88.5 L50 87.5 L48 88.5 L48.5 86.5 L47 85 L49 85 Z" fill="#C88E2E" />
      <path d="M57 83 L58 85 L60 85 L58.5 86.5 L59 88.5 L57 87.5 L55 88.5 L55.5 86.5 L54 85 L56 85 Z" fill="#C88E2E" />
    </svg>
  )
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
    return <CollegeCrest size={48} className={className} />
  }

  return (
    <div className={cn('flex items-center gap-3 sm:gap-3.5 select-none', className)}>
      <CollegeCrest size={46} className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-xs" />
      <div className="flex flex-col text-left">
        <span
          className={cn(
            'font-serif font-bold text-base sm:text-lg md:text-xl leading-tight tracking-tight',
            isLight ? 'text-white' : 'text-[#111F18]'
          )}
        >
          Noble Science College
        </span>
        <div className="flex items-center gap-2 mt-0.5">
          {showSubtitle && (
            <span
              className={cn(
                'text-[11px] sm:text-xs font-sans font-medium tracking-wide uppercase',
                isLight ? 'text-white/80' : 'text-[#65756E]'
              )}
            >
              Wan Bhachran <span className="opacity-50">•</span> Est. 2009
            </span>
          )}
          {showUrdu && (
            <span
              className={cn(
                'hidden md:inline-block text-[11px] font-urdu font-normal px-1.5 py-0.2 rounded-xs',
                isLight ? 'bg-white/10 text-white/90' : 'bg-[#133826]/10 text-[#133826]'
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
