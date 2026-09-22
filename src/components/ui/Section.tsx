import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  variant?: 'parchment' | 'white' | 'sandstone' | 'pine'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  hasBorderTop?: boolean
  hasBorderBottom?: boolean
  className?: string
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({
  id,
  variant = 'parchment',
  spacing = 'md',
  hasBorderTop = false,
  hasBorderBottom = false,
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    parchment: 'bg-[#FAF8F5] text-[#111F18]',
    white: 'bg-white text-[#111F18]',
    sandstone: 'bg-[#F3EFE8] text-[#111F18]',
    pine: 'bg-[#133826] text-white',
  }

  const spacingClasses = {
    none: 'py-0',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  }

  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        variantClasses[variant],
        spacingClasses[spacing],
        hasBorderTop && 'border-t border-[#E3DCD3]',
        hasBorderBottom && 'border-b border-[#E3DCD3]',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
