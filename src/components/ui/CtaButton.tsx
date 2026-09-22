import React from 'react'
import { Button, type ButtonProps } from '@/components/ui/Button'
import { Phone, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PrimaryCtaProps extends Omit<ButtonProps, 'variant'> {
  iconType?: 'arrow' | 'phone' | 'none'
}

export const PrimaryCta: React.FC<PrimaryCtaProps> = ({
  iconType = 'arrow',
  className,
  children,
  ...props
}) => {
  return (
    <Button
      variant="primary"
      size="md"
      className={cn('font-semibold shadow-xs', className)}
      rightIcon={iconType === 'arrow' ? <ArrowRight className="w-4 h-4" /> : undefined}
      leftIcon={iconType === 'phone' ? <Phone className="w-4 h-4" /> : undefined}
      {...props}
    >
      {children}
    </Button>
  )
}

export interface SecondaryCtaProps extends Omit<ButtonProps, 'variant'> {
  iconType?: 'arrow' | 'phone' | 'none'
}

export const SecondaryCta: React.FC<SecondaryCtaProps> = ({
  iconType = 'none',
  className,
  children,
  ...props
}) => {
  return (
    <Button
      variant="secondary"
      size="md"
      className={cn('font-medium', className)}
      rightIcon={iconType === 'arrow' ? <ArrowRight className="w-4 h-4" /> : undefined}
      leftIcon={iconType === 'phone' ? <Phone className="w-4 h-4 text-[#8D1B2D]" /> : undefined}
      {...props}
    >
      {children}
    </Button>
  )
}
