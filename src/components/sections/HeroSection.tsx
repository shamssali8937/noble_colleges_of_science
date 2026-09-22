import React from 'react'
import { Container } from '@/components/ui/Container'
import { PrimaryCta, SecondaryCta } from '@/components/ui/CtaButton'
import { COLLEGE_DATA } from '@/data/collegeData'
import { WhatsAppIcon } from '@/components/common/BrandIcons'

interface HeroSectionProps {
  onNavClick: (href: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-14 md:pt-12 md:pb-16 border-b border-[#E2DDD5]">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-left">
          {/* Left Column: Editorial Heritage Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Collegiate Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="font-sans uppercase tracking-[0.22em] text-[11px] font-semibold text-[#8F0D19]">
                Board of Intermediate & Secondary Education Sargodha
              </span>
              <div className="h-px flex-1 bg-[#E2DDD5]" />
            </div>

            {/* Main Institutional Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.85rem] font-bold tracking-tight text-[#1F1A19] leading-[1.15]">
                Noble Science College
              </h1>
              <p className="font-serif text-lg sm:text-xl text-[#1D5B56] font-normal italic tracking-normal">
                Wan Bhachran, District Mianwali • Founded 2009
              </p>
            </div>

            {/* Formal Thin Divider Rule */}
            <div className="w-16 h-0.5 bg-[#8F0D19]" />

            {/* SRS-Grounded Core Narrative */}
            <p className="text-base sm:text-[1.05rem] text-[#453D3B] max-w-2xl font-sans leading-relaxed">
              Founded by Principal Ehsanullah Malik to provide exceptional, accessible education to ordinary students. Conceived as an academic sanctuary — a true <span className="font-serif italic text-[#1F1A19]">"heaven of knowledge"</span> — dedicated to intellectual discipline, public speaking, and moral character from Nursery through Class 12.
            </p>

            {/* Formal Action Group */}
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
                href="https://wa.me/923336831370?text=Hello%20Noble%20Science%20College%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-none text-xs font-semibold uppercase tracking-wider text-white bg-[#1D5B56] hover:bg-[#164440] transition-colors w-full sm:w-auto min-h-[42px]"
                title="WhatsApp College Directly"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp: 0333-6831370</span>
              </a>
            </div>

            {/* Structured Collegiate Metric Strip */}
            <div className="pt-5 mt-4 border-t border-[#E2DDD5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="border-l-2 border-[#8F0D19] pl-3 py-0.5">
                <span className="block font-sans uppercase tracking-[0.14em] text-[10.5px] text-[#736865] font-semibold">Educational Scope</span>
                <span className="font-serif text-base font-semibold text-[#1F1A19]">{COLLEGE_DATA.classesOffered}</span>
              </div>
              <div className="border-l-2 border-[#1D5B56] pl-3 py-0.5">
                <span className="block font-sans uppercase tracking-[0.14em] text-[10.5px] text-[#736865] font-semibold">Intermediate Groups</span>
                <span className="font-serif text-base font-semibold text-[#1F1A19]">F.Sc • ICS • I.Com • Arts</span>
              </div>
              <div className="border-l-2 border-[#8F0D19] pl-3 py-0.5">
                <span className="block font-sans uppercase tracking-[0.14em] text-[10.5px] text-[#736865] font-semibold">Admission Standard</span>
                <span className="font-serif text-base font-semibold text-[#8F0D19]">Open • No Entry Test</span>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Architectural Plate & Caption (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF7F2] p-2 sm:p-2.5 border border-[#E2DDD5] text-left">
              {/* Rectangular Campus Photography */}
              <div className="overflow-hidden border border-[#E2DDD5] aspect-[16/11] bg-[#F2ECE1]">
                <img
                  src="/images/campus/campus-exterior.jpg"
                  alt="Noble Science College Campus Grounds"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Formal Academic Caption Underneath */}
              <div className="pt-2 px-1 text-left space-y-1">
                <div className="flex items-center justify-between text-[11px] text-[#736865]">
                  <span className="font-serif italic text-[#1F1A19]">Campus Building & Grounds</span>
                  <span className="font-sans uppercase tracking-wider text-[10px] text-[#8F0D19] font-semibold">Wan Bhachran</span>
                </div>
                <p className="text-[11px] text-[#736865] leading-normal font-sans border-t border-[#E2DDD5]/60 pt-1">
                  Central academic facilities and learning grounds established in 2009 for students of Wan Bhachran and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
