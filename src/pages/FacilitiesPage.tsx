import React from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { COLLEGE_DATA, type Facility } from '@/data/collegeData'
import { FlaskConical, BookMarked, Trophy, ShieldCheck, Check, Camera, Sparkles } from 'lucide-react'

interface FacilitiesPageProps {
  onNavClick: (href: string) => void
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavClick }) => {
  const facilityVisualDetails: Record<
    string,
    {
      kicker: string
      icon: React.ReactNode
      accent: string
      details: string[]
      highlight: string
    }
  > = {
    laboratories: {
      kicker: 'Scientific Inquiry & Practical Coursework',
      icon: <FlaskConical className="w-8 h-8 text-[#133826]" />,
      accent: 'border-l-4 border-l-[#133826]',
      details: [
        'Dedicated experimental laboratory rooms for science students',
        'Practical demonstration of physics, chemistry, and biology principles',
        'Standard safety equipment and organized apparatus storage',
        'Direct alignment with Sargodha Board practical evaluation requirements',
      ],
      highlight: 'Structured for hands-on experiment verification under faculty supervision.',
    },
    library: {
      kicker: 'Academic Reference & Quiet Study',
      icon: <BookMarked className="w-8 h-8 text-[#8D1B2D]" />,
      accent: 'border-l-4 border-l-[#8D1B2D]',
      details: [
        'Curated collection of intermediate textbooks and board-approved syllabus guides',
        'Dedicated silent study desks for focused independent revision',
        'Academic reference literature across sciences, computer, commerce, and humanities',
        'Promoting disciplined reading habits and intellectual curiosity',
      ],
      highlight: 'A tranquil academic space designed for focused concentration and study.',
    },
    'sports-grounds': {
      kicker: 'Physical Education & Athletics',
      icon: <Trophy className="w-8 h-8 text-[#C88E2E]" />,
      accent: 'border-l-4 border-l-[#C88E2E]',
      details: [
        'Spacious outdoor campus sports grounds for physical fitness',
        'Space for student athletics, cricket, football, and physical activities',
        'Promotes teamwork, healthy recreation, and physical well-being',
        'Integral to the college’s goal of shaping well-rounded, healthy human beings',
      ],
      highlight: 'Outdoor space fostering athletic vigor, camaraderie, and student health.',
    },
    security: {
      kicker: 'Campus Safety & Perimeter Protection',
      icon: <ShieldCheck className="w-8 h-8 text-[#133826]" />,
      accent: 'border-l-4 border-l-[#133826]',
      details: [
        'Gated institutional perimeter with controlled visitor access',
        'Dedicated security staff stationed during campus operating hours',
        'Safe and orderly arrival and departure procedures for all students',
        'Disciplined and secure educational sanctuary for students and parents alike',
      ],
      highlight: 'Ensuring a protected, peaceful atmosphere where learning thrives uninterrupted.',
    },
  }

  return (
    <div className="w-full">
      <PageHeader
        kicker="Campus Life"
        title="College Facilities & Infrastructure"
        subtitle="Explore the four core campus facilities supporting student learning, scientific inquiry, physical health, and safety in Wan Bhachran."
        breadcrumb="Facilities"
        onHomeClick={() => onNavClick('#home')}
      />

      {/* Facilities Overview Grid */}
      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8D1B2D]">
              Verified Infrastructure
            </span>
            <Heading as="h2" size="section" tone="default">
              Supporting the "Heaven of Knowledge"
            </Heading>
            <p className="text-sm sm:text-base text-[#525F5A] max-w-2xl mx-auto leading-relaxed">
              Every facility at Noble Science College is purposefully maintained to provide ordinary students with the resources, quietude, and safety required for exceptional achievement.
            </p>
          </div>

          {/* Asymmetric / Editorial Facility Explorations */}
          <div className="space-y-12 max-w-5xl mx-auto text-left">
            {COLLEGE_DATA.facilities.map((facility: Facility, index: number) => {
              const isEven = index % 2 === 0
              const visual = facilityVisualDetails[facility.id] || {
                kicker: facility.category,
                icon: <FlaskConical className="w-8 h-8 text-[#133826]" />,
                accent: 'border-l-4 border-l-[#133826]',
                details: facility.specifications,
                highlight: facility.description,
              }

              return (
                <div
                  key={facility.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F5] p-6 sm:p-8 rounded-lg border border-[#E3DCD3] ${visual.accent} shadow-xs hover:shadow-md transition-shadow`}
                >
                  {/* Text Column (7 cols) */}
                  <div className={`space-y-4 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-md bg-white border border-[#E3DCD3]">
                        {visual.icon}
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#8D1B2D] block">
                          {visual.kicker}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111F18]">
                          {facility.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-[#384640] leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="p-3.5 bg-white rounded border border-[#E3DCD3] text-xs sm:text-sm text-[#133826] font-medium">
                      {visual.highlight}
                    </div>

                    <ul className="space-y-2 pt-2 text-xs text-[#384640]">
                      {visual.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#133826] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architectural Image Placeholder Frame (5 cols) */}
                  <div className={`space-y-3 ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                    <div className="aspect-[4/3] rounded-lg bg-white border border-dashed border-[#E3DCD3] flex flex-col items-center justify-center p-6 text-center shadow-xs">
                      <div className="p-3 rounded-full bg-[#FAF8F5] border border-[#E3DCD3] text-[#133826] mb-2">
                        <Camera className="w-6 h-6" />
                      </div>
                      <span className="font-serif font-bold text-base text-[#111F18]">
                        {facility.name} Photography Slot
                      </span>
                      <p className="text-xs text-[#65756E] mt-1 max-w-xs">
                        Prepared to display official campus photographs of {facility.name.toLowerCase()} as specified in SRS Section 5.
                      </p>
                    </div>

                    <div className="text-[11px] text-[#65756E] text-center flex items-center justify-center gap-2">
                      <Sparkles className="w-3 h-3 text-[#C88E2E]" />
                      <span>Wan Bhachran Campus Infrastructure</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>
    </div>
  )
}
