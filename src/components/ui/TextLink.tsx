import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight, ExternalLink } from 'lucide-react'

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'pine' | 'crimson' | 'muted' | 'light'
  showArrow?: boolean
  isExternal?: boolean
  className?: string
  children: React.ReactNode
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  variant = 'pine',
  showArrow = false,
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    pine: 'text-[#133826] hover:text-[#0E2A1C] underline-offset-4 decoration-[#133826]/40 hover:decoration-[#133826]',
    crimson: 'text-[#8D1B2D] hover:text-[#741725] underline-offset-4 decoration-[#8D1B2D]/40 hover:decoration-[#8D1B2D]',
    muted: 'text-[#525F5A] hover:text-[#111F18] underline-offset-4 decoration-[#525F5A]/40 hover:decoration-[#111F18]',
    light: 'text-white/90 hover:text-white underline-offset-4 decoration-white/40 hover:decoration-white',
  }

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center gap-1 font-medium underline transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826] rounded-xs',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      )}
      {isExternal && (
        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
      )}
    </a>
  )
}
