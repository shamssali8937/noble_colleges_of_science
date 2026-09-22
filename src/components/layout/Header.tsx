import React, { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { UtilityBar } from './UtilityBar'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import { CollegeLogo } from '@/components/common/CollegeLogo'
import { Button } from '@/components/ui/Button'
import { Menu, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface HeaderProps {
  activeId: string
  onNavClick: (href: string) => void
}

export const Header: React.FC<HeaderProps> = ({ activeId, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track scroll position to update header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="sticky top-0 z-40 w-full"
      >
        {/* Institutional Utility Bar */}
        <UtilityBar />

        {/* Main Navigation Bar */}
        <div
          className={cn(
            'w-full transition-all duration-200 border-b',
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-xs border-[#E3DCD3] py-2.5 sm:py-3'
              : 'bg-[#FAF8F5] border-[#E3DCD3]/70 py-3 sm:py-4'
          )}
        >
          <Container className="flex items-center justify-between gap-4">
            {/* Logo Lockup */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                onNavClick('#home')
              }}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826] rounded-xs"
              aria-label="Noble Science College, Wan Bhachran - Back to top"
            >
              <CollegeLogo />
            </a>

            {/* Desktop Navigation Links */}
            <DesktopNav activeId={activeId} onNavClick={onNavClick} />

            {/* Right Action: Admission CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => onNavClick('#admissions')}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Admissions
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#133826] hover:bg-[#F3EFE8] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826]"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </Container>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeId={activeId}
        onNavClick={onNavClick}
      />
    </>
  )
}
