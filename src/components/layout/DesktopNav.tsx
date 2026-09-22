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
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
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
              'relative px-3 py-2 text-sm font-sans font-medium transition-colors duration-200 rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826] focus-visible:ring-offset-2',
              isActive
                ? 'text-[#133826] font-semibold'
                : 'text-[#384640] hover:text-[#133826]'
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}

            {isActive && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#8D1B2D]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        )
      })}
    </nav>
  )
}
