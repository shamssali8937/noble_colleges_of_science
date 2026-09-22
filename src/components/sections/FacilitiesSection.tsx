import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA, type Facility } from '@/data/collegeData'
import { FlaskConical, BookMarked, Trophy, ShieldCheck, Check } from 'lucide-react'

export const FacilitiesSection: React.FC = () => {
  const getFacilityImage = (id: string) => {
    switch (id) {
      case 'laboratories':
        return '/images/campus/science-laboratory.jpg'
      case 'library':
        return '/images/campus/library-reading.jpg'
      case 'sports-grounds':
        return '/images/campus/sports-grounds.jpg'
      case 'security':
        return '/images/campus/campus-gate.jpg'
      default:
        return '/images/campus/science-laboratory.jpg'
    }
  }

  const getFacilityCaption = (id: string) => {
    switch (id) {
      case 'laboratories':
        return 'Figure: Science laboratory station supporting practical chemistry, physics, and biology curricula.'
      case 'library':
        return 'Figure: Reference collection and dedicated silent reading desks for intermediate students.'
      case 'sports-grounds':
        return 'Figure: Campus athletic grounds for cricket, outdoor sports, and physical recreation.'
      case 'security':
        return 'Figure: Controlled institutional boundary gates and dedicated security staff post.'
      default:
        return 'Figure: Campus facility at Noble Science College.'
    }
  }

  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'laboratories':
        return <FlaskConical className="w-4 h-4 text-[#8F0D19]" />
      case 'library':
        return <BookMarked className="w-4 h-4 text-[#8F0D19]" />
      case 'sports-grounds':
        return <Trophy className="w-4 h-4 text-[#1D5B56]" />
      case 'security':
        return <ShieldCheck className="w-4 h-4 text-[#1D5B56]" />
      default:
        return <FlaskConical className="w-4 h-4 text-[#8F0D19]" />
    }
  }

  return (
    <Section id="facilities" variant="alt" spacing="lg" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Campus Infrastructure"
          title="Essential Learning Facilities"
          subtitle="Four core institutional pillars dedicated to student experimentation, inquiry, athletics, and safety in Wan Bhachran."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {COLLEGE_DATA.facilities.map((facility: Facility) => (
            <div
              key={facility.id}
              className="bg-[#FAF7F2] border border-[#E2DDD5] p-5 sm:p-6 transition-colors duration-200 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                {/* Header Lockup */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-[#F2ECE1] border border-[#E2DDD5]">
                      {getFacilityIcon(facility.id)}
                    </div>
                    <span className="font-serif font-bold text-lg text-[#1F1A19]">
                      {facility.name}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] bg-[#F2ECE1] px-2 py-0.5 border border-[#E2DDD5] font-sans">
                    {facility.category}
                  </span>
                </div>

                <p className="text-sm text-[#453D3B] leading-relaxed font-sans">
                  {facility.description}
                </p>

                {/* Rectangular Image Mount with Line Caption */}
                <div className="space-y-2">
                  <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1] aspect-[16/10]">
                    <img
                      src={getFacilityImage(facility.id)}
                      alt={facility.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-1.5 border-t border-[#E2DDD5]/70 flex items-center justify-between text-[11px] text-[#756A67] italic font-serif">
                    <span>{getFacilityCaption(facility.id)}</span>
                    <span className="not-italic text-[10px] font-sans uppercase tracking-widest text-[#8F0D19] font-medium shrink-0 ml-2">Verified</span>
                  </div>
                </div>

                {/* Specifications / Functional Points */}
                <ul className="space-y-1.5 pt-3 border-t border-[#E2DDD5] text-xs text-[#453D3B] font-sans">
                  {facility.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#1D5B56] shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E2DDD5] text-[11px] text-[#756A67] flex items-center justify-between font-sans">
                <span className="uppercase tracking-[0.15em] text-[10px]">Wan Bhachran Campus</span>
                <span className="font-medium text-[#8F0D19]">Noble Science College</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
