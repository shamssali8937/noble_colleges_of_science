import React from 'react'
import { cn } from '@/lib/utils'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  size?: 'hero' | 'display' | 'section' | 'title' | 'subtitle'
  tone?: 'default' | 'pine' | 'crimson' | 'light' | 'muted'
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
    hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.12]',
    display: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold tracking-tight leading-tight',
    section: 'text-2xl sm:text-3xl md:text-4xl font-serif font-semibold tracking-tight leading-snug',
    title: 'text-xl sm:text-2xl font-serif font-semibold leading-snug',
    subtitle: 'text-lg sm:text-xl font-sans font-semibold leading-normal',
  }

  const toneClasses = {
    default: 'text-[#111F18]',
    pine: 'text-[#133826]',
    crimson: 'text-[#8D1B2D]',
    light: 'text-white',
    muted: 'text-[#65756E]',
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
  align = 'center',
  tone = 'default',
  className,
}) => {
  const isLight = tone === 'light'
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left',
        className
      )}
    >
      {kicker && (
        <span
          className={cn(
            'inline-block text-xs md:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-sm mb-3.5',
            isLight
              ? 'bg-white/10 text-white/90 border border-white/20'
              : 'bg-[#133826]/10 text-[#133826] border border-[#133826]/20'
          )}
        >
          {kicker}
        </span>
      )}
      <Heading
        as="h2"
        size="section"
        tone={isLight ? 'light' : 'default'}
        className="mb-4"
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed font-sans',
            isLight ? 'text-white/80' : 'text-[#384640]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
