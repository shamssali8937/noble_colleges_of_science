import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'crimson' | 'secondary' | 'outline' | 'outline-light' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      target,
      rel,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium font-sans rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer'

    const variantStyles = {
      primary: 'bg-[#133826] text-white hover:bg-[#0E2A1C] shadow-sm active:translate-y-px',
      crimson: 'bg-[#8D1B2D] text-white hover:bg-[#741725] shadow-sm active:translate-y-px',
      secondary: 'bg-[#F3EFE8] text-[#133826] hover:bg-[#E7DFD3] border border-[#E3DCD3]',
      outline: 'border border-[#133826] text-[#133826] hover:bg-[#133826] hover:text-white',
      'outline-light': 'border border-white/60 text-white hover:bg-white hover:text-[#133826]',
      ghost: 'text-[#133826] hover:bg-[#133826]/10',
    }

    const sizeStyles = {
      sm: 'text-sm min-h-[44px] sm:min-h-[38px] px-3.5 py-1.5 gap-1.5',
      md: 'text-sm md:text-base min-h-[44px] px-5 py-2.5 gap-2',
      lg: 'text-base min-h-[50px] px-6 py-3 gap-2.5',
    }

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
      </>
    )

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
