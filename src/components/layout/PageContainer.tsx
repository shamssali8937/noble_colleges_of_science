import React, { useState, useEffect, useCallback } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface PageContainerProps {
  children: (props: { activeId: string; handleNavClick: (href: string) => void }) => React.ReactNode
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const [activeId, setActiveId] = useState<string>('home')

  // Smooth scroll handler with offset for sticky header
  const handleNavClick = useCallback((href: string) => {
    const id = href.replace('#', '')
    setActiveId(id)

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetElement = document.getElementById(id)
    if (targetElement) {
      const headerOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  // Scroll spy to update active navigation item
  useEffect(() => {
    const sections = ['home', 'about', 'academics', 'admissions', 'faculty', 'facilities', 'gallery', 'contact']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveId(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111F18] selection:bg-[#133826] selection:text-white">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#133826] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C88E2E]"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header activeId={activeId} onNavClick={handleNavClick} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {children({ activeId, handleNavClick })}
      </main>

      {/* Global Footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  )
}
