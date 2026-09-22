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
    hero: 'text-2xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-[1.15]',
    display: 'text-2xl sm:text-3xl md:text-4xl font-serif font-semibold tracking-tight leading-snug',
    section: 'text-xl sm:text-2xl md:text-3xl font-serif font-semibold tracking-tight leading-snug',
    title: 'text-lg sm:text-xl font-serif font-semibold leading-snug',
    subtitle: 'text-base sm:text-lg font-sans font-semibold leading-normal',
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
        'mb-8 md:mb-12',
        isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left',
        className
      )}
    >
      {kicker && (
        <span
          className={cn(
            'inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-xs mb-2.5',
            isLight
              ? 'bg-white/10 text-white/90 border border-white/20'
              : 'bg-[#8F0D19]/10 text-[#8F0D19] border border-[#8F0D19]/20'
          )}
        >
          {kicker}
        </span>
      )}
      <Heading
        as="h2"
        size="section"
        tone={isLight ? 'light' : 'default'}
        className="mb-2.5"
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            'text-sm sm:text-base leading-relaxed font-sans',
            isLight ? 'text-white/80' : 'text-[#453D3B]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
