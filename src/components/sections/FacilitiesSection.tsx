import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA, type Facility } from '@/data/collegeData'
import { FlaskConical, BookMarked, Trophy, ShieldCheck, Check } from 'lucide-react'

export const FacilitiesSection: React.FC = () => {
  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'laboratories':
        return <FlaskConical className="w-6 h-6 text-[#133826]" />
      case 'library':
        return <BookMarked className="w-6 h-6 text-[#8D1B2D]" />
      case 'sports-grounds':
        return <Trophy className="w-6 h-6 text-[#C88E2E]" />
      case 'security':
        return <ShieldCheck className="w-6 h-6 text-[#133826]" />
      default:
        return <FlaskConical className="w-6 h-6 text-[#133826]" />
    }
  }

  return (
    <Section id="facilities" variant="sandstone" spacing="md" hasBorderBottom>
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
              className="bg-white border border-[#E3DCD3] rounded-lg p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group text-left hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                {/* Header Lockup */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-md bg-[#FAF8F5] border border-[#E3DCD3] group-hover:border-[#133826]/30 transition-colors">
                    {getFacilityIcon(facility.id)}
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#65756E] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E3DCD3]">
                    {facility.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111F18] group-hover:text-[#133826] transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-[#384640] leading-relaxed mt-2">
                    {facility.description}
                  </p>
                </div>

                {/* Architectural Photo Slot for future imagery */}
                <div className="p-3.5 bg-[#FAF8F5] border border-dashed border-[#E3DCD3] rounded text-center">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#65756E]">
                    Campus Photography Slot
                  </span>
                  <span className="text-xs text-[#525F5A] italic">
                    Structured for official campus {facility.name.toLowerCase()} media as specified in SRS
                  </span>
                </div>

                {/* Specifications / Functional Points */}
                <ul className="space-y-2 pt-2 border-t border-[#E3DCD3] text-xs text-[#384640]">
                  {facility.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#133826] shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E3DCD3] text-[11px] text-[#65756E] flex items-center justify-between">
                <span>Noble Science College Wan Bhachran</span>
                <span className="font-semibold text-[#133826]">Verified Campus Facility</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
