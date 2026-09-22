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
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F1A19] selection:bg-[#8F0D19] selection:text-white">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#8F0D19] focus:text-white focus:rounded-xs focus:outline-none focus:ring-2 focus:ring-[#8F0D19]"
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
