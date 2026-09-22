import React from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { MissionVisionSection } from '@/components/sections/MissionVisionSection'
import { AcademicsSection } from '@/components/sections/AcademicsSection'
import { PrincipalSection } from '@/components/sections/PrincipalSection'
import { FacilitiesSection } from '@/components/sections/FacilitiesSection'
import { AdmissionsSection } from '@/components/sections/AdmissionsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ClosingCtaSection } from '@/components/sections/ClosingCtaSection'

interface HomePageProps {
  onNavClick: (href: string) => void
}

export const HomePage: React.FC<HomePageProps> = ({ onNavClick }) => {
  return (
    <>
      <HeroSection onNavClick={onNavClick} />
      <IntroSection />
      <MissionVisionSection />
      <AcademicsSection />
      <PrincipalSection />
      <FacilitiesSection />
      <AdmissionsSection />
      <GallerySection />
      <ClosingCtaSection onNavClick={onNavClick} />
    </>
  )
}
