import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowRight, ExternalLink } from 'lucide-react'

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'maroon' | 'teal' | 'muted' | 'light'
  showArrow?: boolean
  isExternal?: boolean
  className?: string
  children: React.ReactNode
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  variant = 'maroon',
  showArrow = false,
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    maroon: 'text-[#8F0D19] hover:text-[#6F0A13] underline-offset-4 decoration-[#8F0D19]/40 hover:decoration-[#8F0D19]',
    teal: 'text-[#1D5B56] hover:text-[#14423E] underline-offset-4 decoration-[#1D5B56]/40 hover:decoration-[#1D5B56]',
    muted: 'text-[#736865] hover:text-[#1F1A19] underline-offset-4 decoration-[#736865]/40 hover:decoration-[#1F1A19]',
    light: 'text-[#FAF7F2]/90 hover:text-white underline-offset-4 decoration-white/40 hover:decoration-white',
  }

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center gap-1 font-medium underline transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F0D19] rounded-xs',
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
