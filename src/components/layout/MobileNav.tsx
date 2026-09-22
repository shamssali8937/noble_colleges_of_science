import React, { useEffect, useRef } from 'react'
import { NAV_ITEMS, type NavItem } from '@/types/navigation'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'
import { X, Phone, Award, ArrowRight } from 'lucide-react'
import { CollegeLogo } from '@/components/common/CollegeLogo'
import { Button } from '@/components/ui/Button'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  activeId: string
  onNavClick: (href: string) => void
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  activeId,
  onNavClick,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0E2A1C]/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FAF8F5] border-l border-[#E3DCD3] shadow-2xl flex flex-col z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#E3DCD3] bg-white">
              <CollegeLogo showSubtitle={false} showUrdu={false} />
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-[#384640] hover:text-[#133826] hover:bg-[#F3EFE8] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826]"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Affiliation Strip in Mobile */}
            <div className="px-5 py-2.5 bg-[#0E2A1C] text-white/90 text-xs flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C88E2E]" />
                <span>Affiliated with Sargodha Board</span>
              </div>
              <span className="text-[#C88E2E] font-medium">Est. 2009</span>
            </div>

            {/* Navigation Links with slight stagger */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item: NavItem, index: number) => {
                const itemId = item.href.replace('#', '')
                const isActive = activeId === itemId

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        onNavClick(item.href)
                        onClose()
                      }}
                      className={cn(
                        'flex items-center justify-between px-4 py-3 rounded-md text-base font-sans font-medium transition-colors',
                        isActive
                          ? 'bg-[#133826] text-white font-semibold shadow-xs'
                          : 'text-[#111F18] hover:bg-[#F3EFE8]'
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={cn(
                          'w-4 h-4 transition-transform',
                          isActive ? 'text-white' : 'text-[#65756E] opacity-60'
                        )}
                      />
                    </a>
                  </motion.div>
                )
              })}
            </nav>

            {/* Quick Action Footer in Mobile */}
            <div className="p-5 border-t border-[#E3DCD3] bg-white space-y-3">
              <Button
                variant="primary"
                className="w-full justify-center"
                onClick={() => {
                  onNavClick('#admissions')
                  onClose()
                }}
              >
                Admission Guidance
              </Button>

              <a
                href="tel:03336831370"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#F3EFE8] hover:bg-[#E7DFD3] text-[#133826] rounded-md text-sm font-semibold transition-colors border border-[#E3DCD3]"
              >
                <Phone className="w-4 h-4 text-[#8D1B2D]" />
                <span>Call Principal: 0333-6831370</span>
              </a>

              <p className="text-[11px] text-center text-[#65756E] pt-1">
                Near Old Musa Khel Road, Wan Bhachran
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
