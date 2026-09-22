import React from 'react'
import { Container } from '@/components/ui/Container'
import { PrimaryCta, SecondaryCta } from '@/components/ui/CtaButton'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Award, BookOpen, GraduationCap, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import { transitionEase } from '@/lib/animations'

interface HeroSectionProps {
  onNavClick: (href: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E3DCD3]">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-px h-full bg-[#E3DCD3]" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-[#E3DCD3]/50 hidden lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: transitionEase }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Accreditation Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-sm bg-[#133826]/10 border border-[#133826]/20 text-[#133826] text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#C88E2E]" />
              <span>Affiliated with Sargodha Board</span>
              <span className="text-[#133826]/30">•</span>
              <span>Est. 2009</span>
            </div>

            {/* Main Institutional Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111F18] leading-[1.12]">
                Noble Science College
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-[#133826] font-medium italic">
                Wan Bhachran
              </p>
            </div>

            {/* SRS-Grounded Core Narrative */}
            <p className="text-base sm:text-lg text-[#384640] max-w-2xl font-sans leading-relaxed">
              Established in 2009 by Principal Ehsanullah Malik to provide quality education to ordinary students regardless of their background. Guided by the vision of a true <span className="font-medium text-[#111F18] italic">"heaven of knowledge"</span> — cultivating academic excellence, public speaking, and character from Nursery through Class 12.
            </p>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PrimaryCta
                iconType="arrow"
                onClick={() => onNavClick('#admissions')}
              >
                Admission Guidance
              </PrimaryCta>

              <SecondaryCta
                onClick={() => onNavClick('#academics')}
              >
                Academic Programs
              </SecondaryCta>

              <a
                href="tel:03336831370"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-[#133826] bg-[#133826]/5 hover:bg-[#133826]/10 border border-[#133826]/15 transition-colors"
                title="Call College Directly"
              >
                <Phone className="w-4 h-4 text-[#8D1B2D]" />
                <span>0333-6831370</span>
              </a>
            </div>

            {/* Key Facts Pill Strip from SRS */}
            <div className="pt-4 border-t border-[#E3DCD3] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#65756E] font-medium">Classes</span>
                <span className="font-serif text-base font-semibold text-[#111F18]">{COLLEGE_DATA.classesOffered}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#65756E] font-medium">Programs</span>
                <span className="font-serif text-base font-semibold text-[#111F18]">F.Sc • ICS • I.Com • Arts</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#65756E] font-medium">Admissions</span>
                <span className="font-serif text-base font-semibold text-[#8D1B2D]">Open • No Entry Test</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Collegiate Medallion & Editorial Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: transitionEase }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md bg-white p-6 sm:p-8 rounded-lg border border-[#E3DCD3] shadow-md">
              {/* Corner Architectural Notches */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#133826]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#133826]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#133826]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#133826]" />

              {/* Official College Logo Image */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative p-2 rounded-full bg-[#FAF8F5] border border-[#E3DCD3] shadow-inner">
                  <img
                    src="/images/college-logo.jpg"
                    alt="Official Emblem of Noble Science College, Wan Bhachran"
                    className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-full"
                    loading="eager"
                  />
                </div>

                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111F18]">
                    Noble Science College
                  </h2>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C88E2E] mt-0.5">
                    Wan Bhachran • Est. 2009
                  </p>
                  <p className="text-sm font-urdu font-medium text-[#133826] mt-1" dir="rtl">
                    نوبل سائنس کالج واں بھچراں
                  </p>
                </div>

                <div className="w-full border-t border-[#E3DCD3] pt-4 mt-2 space-y-3 text-left text-xs text-[#384640]">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#133826] shrink-0" />
                    <span>Nursery to Class 12 with Sargodha Board Syllabus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#8D1B2D] shrink-0" />
                    <span>Faculty includes MPhil and Bachelor's degree holders</span>
                  </div>
                </div>

                {/* Real Campus Image Slot ready for future photography */}
                <div className="w-full mt-3 p-3 bg-[#FAF8F5] rounded border border-dashed border-[#C88E2E]/40 text-center">
                  <span className="block text-[11px] font-medium uppercase tracking-wider text-[#65756E]">
                    Campus Photography
                  </span>
                  <span className="text-xs text-[#384640] italic">
                    Official photography category slots active as designated in SRS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
