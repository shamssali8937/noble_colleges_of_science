import React from 'react'
import { Container } from '@/components/ui/Container'
import { PrimaryCta, SecondaryCta } from '@/components/ui/CtaButton'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Award, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import { transitionEase } from '@/lib/animations'

interface HeroSectionProps {
  onNavClick: (href: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-14 md:pt-14 md:pb-20 border-b border-[#E2DDD5]">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/3 w-px h-full bg-[#E2DDD5]" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-[#E2DDD5]/50 hidden lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center text-left">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: transitionEase }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Accreditation Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-2.5 py-1 rounded-xs bg-[#8F0D19]/10 border border-[#8F0D19]/20 text-[#8F0D19] text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#8F0D19]" />
              <span>Affiliated with Sargodha Board</span>
              <span className="text-[#8F0D19]/30">•</span>
              <span>Est. 2009</span>
            </div>

            {/* Main Institutional Heading */}
            <div className="space-y-1.5">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1A19] leading-[1.14]">
                Noble Science College
              </h1>
              <p className="font-serif text-lg sm:text-xl text-[#8F0D19] font-medium italic">
                Wan Bhachran
              </p>
            </div>

            {/* SRS-Grounded Core Narrative */}
            <p className="text-base sm:text-lg text-[#453D3B] max-w-2xl font-sans leading-relaxed">
              Established in 2009 by Principal Ehsanullah Malik to provide quality education to ordinary students regardless of their background. Guided by the vision of a true <span className="font-serif italic text-[#1F1A19]">"heaven of knowledge"</span> — cultivating academic excellence, public speaking, and character from Nursery through Class 12.
            </p>

            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <PrimaryCta
                iconType="arrow"
                onClick={() => onNavClick('#admissions')}
                className="w-full sm:w-auto justify-center"
              >
                Admission Guidance
              </PrimaryCta>

              <SecondaryCta
                onClick={() => onNavClick('#academics')}
                className="w-full sm:w-auto justify-center"
              >
                Academic Programs
              </SecondaryCta>

              <a
                href="tel:03336831370"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xs text-sm font-semibold text-[#1F1A19] bg-[#F2ECE1] hover:bg-[#E2DDD5] border border-[#E2DDD5] transition-colors w-full sm:w-auto min-h-[44px]"
                title="Call College Directly"
              >
                <Phone className="w-4 h-4 text-[#8F0D19]" />
                <span>0333-6831370</span>
              </a>
            </div>

            {/* Key Facts Pill Strip from SRS */}
            <div className="pt-4 border-t border-[#E2DDD5] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-3 bg-white rounded-xs border border-[#E2DDD5]">
                <span className="block text-[11px] uppercase tracking-wider text-[#736865] font-medium">Classes</span>
                <span className="font-serif text-base font-semibold text-[#1F1A19]">{COLLEGE_DATA.classesOffered}</span>
              </div>
              <div className="p-3 bg-white rounded-xs border border-[#E2DDD5]">
                <span className="block text-[11px] uppercase tracking-wider text-[#736865] font-medium">Programs</span>
                <span className="font-serif text-base font-semibold text-[#1F1A19]">F.Sc • ICS • I.Com • Arts</span>
              </div>
              <div className="p-3 bg-white rounded-xs border border-[#E2DDD5]">
                <span className="block text-[11px] uppercase tracking-wider text-[#736865] font-medium">Admissions</span>
                <span className="font-serif text-base font-semibold text-[#8F0D19]">Open • No Entry Test</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Campus Placeholder Image & Emblem Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.1, ease: transitionEase }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md bg-white p-3 rounded-xs border border-[#E2DDD5]">
              {/* Campus Exterior Image Slot */}
              <div className="relative overflow-hidden rounded-xs border border-[#E2DDD5] aspect-[16/10] bg-[#F2ECE1]">
                <img
                  src="/images/placeholders/hero-campus.svg"
                  alt="Noble Science College Campus Façade — Wan Bhachran"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Overlaid Institutional Badge */}
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs p-2.5 rounded-xs border border-[#E2DDD5] flex items-center gap-3">
                  <img
                    src="/images/college-logo.jpg"
                    alt="Emblem"
                    className="w-9 h-9 rounded-full object-contain shrink-0"
                  />
                  <div className="text-left text-xs leading-tight">
                    <span className="font-serif font-bold text-[#1F1A19] block">
                      Noble Science College
                    </span>
                    <span className="text-[10px] text-[#736865] font-sans">
                      Wan Bhachran • Est. 2009
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Institutional Seal Note */}
              <div className="pt-2 px-1 flex items-center justify-between text-[11px] text-[#736865]">
                <span>BISE Sargodha Affiliated</span>
                <span className="font-urdu text-[#8F0D19]" dir="rtl">نوبل سائنس کالج</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
