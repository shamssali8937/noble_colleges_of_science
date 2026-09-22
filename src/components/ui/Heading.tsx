import React from 'react'
import { cn } from '@/lib/utils'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  size?: 'hero' | 'display' | 'section' | 'title' | 'subtitle'
  tone?: 'default' | 'maroon' | 'teal' | 'light' | 'muted'
  className?: string
  children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size,
  tone = 'default',
  className,
  children,
  ...props
}) => {
  const defaultSizeForTag: Record<string, 'hero' | 'display' | 'section' | 'title' | 'subtitle'> = {
    h1: 'hero',
    h2: 'section',
    h3: 'title',
    h4: 'subtitle',
    h5: 'subtitle',
  }

  const effectiveSize = size || defaultSizeForTag[Component] || 'section'

  const sizeClasses = {
    hero: 'text-2xl sm:text-4xl md:text-[2.75rem] font-serif font-bold tracking-tight leading-[1.18]',
    display: 'text-xl sm:text-3xl md:text-[2.2rem] font-serif font-semibold tracking-tight leading-snug',
    section: 'text-xl sm:text-2xl md:text-[1.85rem] font-serif font-semibold tracking-tight leading-snug',
    title: 'text-lg sm:text-xl font-serif font-semibold leading-snug',
    subtitle: 'text-sm sm:text-base font-sans font-semibold leading-normal',
  }

  const toneClasses = {
    default: 'text-[#1F1A19]',
    maroon: 'text-[#8F0D19]',
    teal: 'text-[#1D5B56]',
    light: 'text-[#FAF7F2]',
    muted: 'text-[#736865]',
  }

  return (
    <Component
      className={cn(sizeClasses[effectiveSize], toneClasses[tone], className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export interface SectionHeaderProps {
  kicker?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'light'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  align = 'left',
  tone = 'default',
  className,
}) => {
  const isLight = tone === 'light'
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'mb-8 md:mb-10 text-left',
        isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
        className
      )}
    >
      {kicker && (
        <div className="mb-2">
          <span
            className={cn(
              'inline-block font-sans uppercase tracking-[0.2em] text-[11px] font-semibold',
              isLight
                ? 'text-[#D4AF37]'
                : 'text-[#8F0D19]'
            )}
          >
            {kicker}
          </span>
          <div className={cn('h-px w-8 mt-1', isLight ? 'bg-[#D4AF37]/50' : 'bg-[#8F0D19]/40', isCenter && 'mx-auto')} />
        </div>
      )}
      <Heading
        as="h2"
        size="section"
        tone={isLight ? 'light' : 'default'}
        className="mb-2 text-[#1F1A19]"
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            'text-sm sm:text-base leading-relaxed font-sans max-w-2xl',
            isLight ? 'text-[#FAF7F2]/80' : 'text-[#453D3B]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
