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
        return '/images/placeholders/facility-lab.svg'
      case 'library':
        return '/images/placeholders/facility-library.svg'
      case 'sports-grounds':
        return '/images/placeholders/facility-sports.svg'
      case 'security':
        return '/images/placeholders/facility-security.svg'
      default:
        return '/images/placeholders/facility-lab.svg'
    }
  }

  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'laboratories':
        return <FlaskConical className="w-5 h-5 text-[#8F0D19]" />
      case 'library':
        return <BookMarked className="w-5 h-5 text-[#8F0D19]" />
      case 'sports-grounds':
        return <Trophy className="w-5 h-5 text-[#1D5B56]" />
      case 'security':
        return <ShieldCheck className="w-5 h-5 text-[#1D5B56]" />
      default:
        return <FlaskConical className="w-5 h-5 text-[#8F0D19]" />
    }
  }

  return (
    <Section id="facilities" variant="alt" spacing="lg" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Campus Infrastructure"
          title="Essential Learning Facilities"
          subtitle="Four core institutional pillars dedicated to student experimentation, inquiry, athletics, and safety."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {COLLEGE_DATA.facilities.map((facility: Facility) => (
            <div
              key={facility.id}
              className="bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs p-5 sm:p-6 transition-colors duration-200 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                {/* Header Lockup */}
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xs bg-[#F2ECE1] border border-[#E2DDD5]">
                    {getFacilityIcon(facility.id)}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#756A67] bg-[#F2ECE1] px-2 py-0.5 rounded-xs border border-[#E2DDD5] font-sans">
                    {facility.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1F1A19]">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-[#453D3B] leading-relaxed mt-1.5 font-sans">
                    {facility.description}
                  </p>
                </div>

                {/* Actual Placeholder Image Component */}
                <div className="overflow-hidden rounded-xs border border-[#E2DDD5] bg-[#F2ECE1] aspect-[16/9]">
                  <img
                    src={getFacilityImage(facility.id)}
                    alt={`${facility.name} placeholder`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Specifications / Functional Points */}
                <ul className="space-y-1.5 pt-2 border-t border-[#E2DDD5] text-xs text-[#453D3B] font-sans">
                  {facility.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#1D5B56] shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E2DDD5] text-[11px] text-[#756A67] flex items-center justify-between font-sans">
                <span>Noble Science College</span>
                <span className="font-medium text-[#8F0D19]">Verified Facility</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
