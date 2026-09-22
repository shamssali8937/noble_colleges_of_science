import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface PageContainerProps {
  activeId: string
  onNavClick: (href: string) => void
  children: React.ReactNode
}

export const PageContainer: React.FC<PageContainerProps> = ({
  activeId,
  onNavClick,
  children,
}) => {
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
      <Header activeId={activeId} onNavClick={onNavClick} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {children}
      </main>

      {/* Global Footer */}
      <Footer onNavClick={onNavClick} />
    </div>
  )
}
