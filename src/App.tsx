import React, { useState, useEffect, useCallback } from 'react'
import { PageContainer } from '@/components/layout/PageContainer'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { AcademicsPage } from '@/pages/AcademicsPage'
import { AdmissionsPage } from '@/pages/AdmissionsPage'
import { FacultyPage } from '@/pages/FacultyPage'
import { FacilitiesPage } from '@/pages/FacilitiesPage'
import { GalleryPage } from '@/pages/GalleryPage'
import { ContactPage } from '@/pages/ContactPage'
import { motion, AnimatePresence } from 'motion/react'
import { transitionEase } from '@/lib/animations'

type RoutePath = 'home' | 'about' | 'academics' | 'admissions' | 'faculty' | 'facilities' | 'gallery' | 'contact'

export const App: React.FC = () => {
  const getRouteFromHash = (): RoutePath => {
    const hash = window.location.hash.replace('#', '').toLowerCase()
    const validRoutes: RoutePath[] = ['home', 'about', 'academics', 'admissions', 'faculty', 'facilities', 'gallery', 'contact']
    if (validRoutes.includes(hash as RoutePath)) {
      return hash as RoutePath
    }
    return 'home'
  }

  const [currentRoute, setCurrentRoute] = useState<RoutePath>(getRouteFromHash)

  // Sync route on hash change (supports back/forward browser buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash()
      setCurrentRoute(nextRoute)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavClick = useCallback((href: string) => {
    const targetRoute = href.replace('#', '').toLowerCase() as RoutePath
    setCurrentRoute(targetRoute)
    window.location.hash = href
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const renderActivePage = () => {
    switch (currentRoute) {
      case 'about':
        return <AboutPage onNavClick={handleNavClick} />
      case 'academics':
        return <AcademicsPage onNavClick={handleNavClick} />
      case 'admissions':
        return <AdmissionsPage onNavClick={handleNavClick} />
      case 'faculty':
        return <FacultyPage onNavClick={handleNavClick} />
      case 'facilities':
        return <FacilitiesPage onNavClick={handleNavClick} />
      case 'gallery':
        return <GalleryPage onNavClick={handleNavClick} />
      case 'contact':
        return <ContactPage onNavClick={handleNavClick} />
      case 'home':
      default:
        return <HomePage onNavClick={handleNavClick} />
    }
  }

  return (
    <PageContainer activeId={currentRoute} onNavClick={handleNavClick}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRoute}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: transitionEase }}
        >
          {renderActivePage()}
        </motion.div>
      </AnimatePresence>
    </PageContainer>
  )
}

export default App
