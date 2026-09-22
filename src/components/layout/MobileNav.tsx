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
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus management & Escape key listener
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()
    }

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
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FAF7F2] border-l border-[#E2DDD5] flex flex-col z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#E2DDD5] bg-[#FAF7F2]">
              <CollegeLogo showSubtitle={false} showUrdu={false} />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="min-w-[40px] min-h-[40px] inline-flex items-center justify-center p-2 text-[#453D3B] hover:text-[#8F0D19] hover:bg-[#F2ECE1] rounded-xs transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Affiliation Strip in Mobile */}
            <div className="px-5 py-2.5 bg-[#1A0C0E] text-[#FAF7F2] text-xs flex items-center justify-between font-sans border-b border-[#8F0D19]/40">
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Affiliated with Sargodha Board</span>
              </div>
              <span className="text-[#D4AF37] font-medium">Est. 2009</span>
            </div>

            {/* Navigation Links with slight stagger */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item: NavItem, index: number) => {
                const itemId = item.href.replace('#', '')
                const isActive = activeId === itemId

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.02 * index, duration: 0.15 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        onNavClick(item.href)
                        onClose()
                      }}
                      className={cn(
                        'min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-xs text-sm font-sans font-medium transition-colors',
                        isActive
                          ? 'bg-[#8F0D19] text-white font-semibold'
                          : 'text-[#1F1A19] hover:bg-[#F2ECE1]'
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={cn(
                          'w-4 h-4',
                          isActive ? 'text-white' : 'text-[#756A67] opacity-60'
                        )}
                      />
                    </a>
                  </motion.div>
                )
              })}
            </nav>

            {/* Quick Action Footer in Mobile */}
            <div className="p-4 border-t border-[#E2DDD5] bg-[#FAF7F2] space-y-2.5 font-sans">
              <Button
                variant="primary"
                className="w-full justify-center min-h-[44px]"
                onClick={() => {
                  onNavClick('#admissions')
                  onClose()
                }}
              >
                Admission Guidance
              </Button>

              <a
                href="tel:03336831370"
                className="flex items-center justify-center gap-2 w-full min-h-[44px] px-4 bg-[#F2ECE1] hover:bg-[#E2DDD5] text-[#1F1A19] rounded-xs text-xs font-semibold transition-colors border border-[#E2DDD5]"
              >
                <Phone className="w-3.5 h-3.5 text-[#8F0D19]" />
                <span>Call Principal: 0333-6831370</span>
              </a>

              <p className="text-[11px] text-center text-[#756A67] pt-0.5">
                Near Old Musa Khel Road, Wan Bhachran
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
