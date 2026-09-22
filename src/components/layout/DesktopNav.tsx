import React from 'react'
import { NAV_ITEMS, type NavItem } from '@/types/navigation'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface DesktopNavProps {
  activeId: string
  onNavClick: (href: string) => void
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ activeId, onNavClick }) => {
  return (
    <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
      {NAV_ITEMS.map((item: NavItem) => {
        const itemId = item.href.replace('#', '')
        const isActive = activeId === itemId

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              onNavClick(item.href)
            }}
            className={cn(
              'relative px-3 py-2 text-sm font-sans font-medium transition-all duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826]',
              isActive
                ? 'text-[#133826] font-semibold bg-[#133826]/5'
                : 'text-[#384640] hover:text-[#133826] hover:bg-[#133826]/5'
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}

            {isActive && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#8D1B2D] rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
          </a>
        )
      })}
    </nav>
  )
}
