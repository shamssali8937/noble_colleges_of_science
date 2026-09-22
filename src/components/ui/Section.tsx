import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  variant?: 'base' | 'alt' | 'white' | 'dark'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  hasBorderTop?: boolean
  hasBorderBottom?: boolean
  className?: string
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({
  id,
  variant = 'base',
  spacing = 'md',
  hasBorderTop = false,
  hasBorderBottom = false,
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    base: 'bg-[#FAF7F2] text-[#1F1A19]',
    alt: 'bg-[#F2ECE1] text-[#1F1A19]',
    white: 'bg-white text-[#1F1A19]',
    dark: 'bg-[#1A0C0E] text-[#FAF7F2]',
  }

  const spacingClasses = {
    none: 'py-0',
    sm: 'py-10 md:py-14',
    md: 'py-14 md:py-20',
    lg: 'py-16 md:py-24',
  }

  const borderClass = variant === 'dark' ? 'border-[#2D1B1E]' : 'border-[#E2DDD5]'

  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        variantClasses[variant],
        spacingClasses[spacing],
        hasBorderTop && cn('border-t', borderClass),
        hasBorderBottom && cn('border-b', borderClass),
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
