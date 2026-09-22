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
              'relative px-3 py-1.5 text-sm font-sans font-medium transition-colors rounded-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8F0D19]',
              isActive
                ? 'text-[#8F0D19] font-semibold bg-[#8F0D19]/8'
                : 'text-[#453D3B] hover:text-[#8F0D19] hover:bg-[#8F0D19]/5'
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}

            {isActive && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#8F0D19]"
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
          </a>
        )
      })}
    </nav>
  )
}
