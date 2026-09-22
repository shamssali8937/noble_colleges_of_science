import React, { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { UtilityBar } from './UtilityBar'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import { CollegeLogo } from '@/components/common/CollegeLogo'
import { Button } from '@/components/ui/Button'
import { Menu, ArrowRight } from 'lucide-react'
import { FacebookIcon, WhatsAppIcon } from '@/components/common/BrandIcons'
import { COLLEGE_DATA } from '@/data/collegeData'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface HeaderProps {
  activeId: string
  onNavClick: (href: string) => void
}

export const Header: React.FC<HeaderProps> = ({ activeId, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappUrl = `https://wa.me/923336831370?text=${encodeURIComponent(
    'Hello Noble Science College, I would like to inquire about admissions.'
  )}`

  // Track scroll position to update header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="sticky top-0 z-40 w-full"
      >
        {/* Institutional Utility Bar */}
        <UtilityBar />

        {/* Main Navigation Bar */}
        <div
          className={cn(
            'w-full transition-colors duration-200 border-b',
            isScrolled
              ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-[#E2DDD5] py-2.5 sm:py-3'
              : 'bg-[#FAF7F2] border-[#E2DDD5]/70 py-3 sm:py-3.5'
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
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F0D19] rounded-xs"
              aria-label="Noble Science College, Wan Bhachran - Back to top"
            >
              <CollegeLogo />
            </a>

            {/* Desktop Navigation Links */}
            <DesktopNav activeId={activeId} onNavClick={onNavClick} />

            {/* Right Action: Facebook, WhatsApp, Admission CTA + Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Top Facebook Link with Icon */}
              <a
                href={COLLEGE_DATA.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#453D3B] hover:text-[#8F0D19] hover:bg-[#F2ECE1] transition-colors border border-transparent hover:border-[#E2DDD5]"
                title="Official Facebook Page"
                aria-label="Official Facebook Page"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              {/* Top WhatsApp API Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1D5B56] hover:bg-[#164440] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

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
                className="lg:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 text-[#1F1A19] hover:bg-[#F2ECE1] rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F0D19]"
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
