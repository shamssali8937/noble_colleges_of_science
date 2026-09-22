import React from 'react'
import { PageContainer } from '@/components/layout/PageContainer'
import { HeroSection } from '@/components/sections/HeroSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { MissionVisionSection } from '@/components/sections/MissionVisionSection'
import { AcademicsSection } from '@/components/sections/AcademicsSection'
import { PrincipalSection } from '@/components/sections/PrincipalSection'
import { FacilitiesSection } from '@/components/sections/FacilitiesSection'
import { AdmissionsSection } from '@/components/sections/AdmissionsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { ClosingCtaSection } from '@/components/sections/ClosingCtaSection'

export const App: React.FC = () => {
  return (
    <PageContainer>
      {({ handleNavClick }) => (
        <>
          <HeroSection onNavClick={handleNavClick} />
          <IntroSection />
          <MissionVisionSection />
          <AcademicsSection />
          <PrincipalSection />
          <FacilitiesSection />
          <AdmissionsSection />
          <GallerySection />
          <ClosingCtaSection onNavClick={handleNavClick} />
        </>
      )}
    </PageContainer>
  )
}

export default App
