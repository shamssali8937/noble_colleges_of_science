import React from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { COLLEGE_DATA, type Facility } from '@/data/collegeData'
import { FlaskConical, BookMarked, Trophy, ShieldCheck, Check } from 'lucide-react'

interface FacilitiesPageProps {
  onNavClick: (href: string) => void
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavClick }) => {
  const facilityVisualDetails: Record<
    string,
    {
      kicker: string
      icon: React.ReactNode
      image: string
      accent: string
      details: string[]
      highlight: string
    }
  > = {
    laboratories: {
      kicker: 'Scientific Inquiry & Practical Coursework',
      icon: <FlaskConical className="w-6 h-6 text-[#8F0D19]" />,
      image: '/images/placeholders/facility-lab.svg',
      accent: 'border-l-3 border-l-[#8F0D19]',
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
      icon: <BookMarked className="w-6 h-6 text-[#8F0D19]" />,
      image: '/images/placeholders/facility-library.svg',
      accent: 'border-l-3 border-l-[#8F0D19]',
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
      icon: <Trophy className="w-6 h-6 text-[#1D5B56]" />,
      image: '/images/placeholders/facility-sports.svg',
      accent: 'border-l-3 border-l-[#1D5B56]',
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
      icon: <ShieldCheck className="w-6 h-6 text-[#1D5B56]" />,
      image: '/images/placeholders/facility-security.svg',
      accent: 'border-l-3 border-l-[#1D5B56]',
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
          <div className="max-w-4xl mx-auto text-left space-y-3 mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8F0D19] font-sans">
              Verified Infrastructure
            </span>
            <Heading as="h2" size="section" tone="default">
              Supporting the "Heaven of Knowledge"
            </Heading>
            <p className="text-sm sm:text-base text-[#756A67] max-w-2xl font-sans leading-relaxed">
              Every facility at Noble Science College is purposefully maintained to provide ordinary students with the resources, quietude, and safety required for exceptional achievement.
            </p>
          </div>

          {/* Asymmetric / Editorial Facility Explorations */}
          <div className="space-y-8 max-w-5xl mx-auto text-left">
            {COLLEGE_DATA.facilities.map((facility: Facility, index: number) => {
              const isEven = index % 2 === 0
              const visual = facilityVisualDetails[facility.id] || {
                kicker: facility.category,
                icon: <FlaskConical className="w-6 h-6 text-[#8F0D19]" />,
                image: '/images/placeholders/facility-lab.svg',
                accent: 'border-l-3 border-l-[#8F0D19]',
                details: facility.specifications,
                highlight: facility.description,
              }

              return (
                <div
                  key={facility.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-7 items-center bg-[#FAF7F2] p-5 sm:p-7 rounded-xs border border-[#E2DDD5] ${visual.accent}`}
                >
                  {/* Text Column (7 cols) */}
                  <div className={`space-y-3.5 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xs bg-[#F2ECE1] border border-[#E2DDD5]">
                        {visual.icon}
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F0D19] block font-sans">
                          {visual.kicker}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1A19]">
                          {facility.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-[#453D3B] leading-relaxed font-sans">
                      {facility.description}
                    </p>

                    <div className="p-3 bg-[#FAF7F2] rounded-xs border border-[#E2DDD5] text-xs text-[#1D5B56] font-medium font-sans">
                      {visual.highlight}
                    </div>

                    <ul className="space-y-1.5 pt-1 text-xs text-[#453D3B] font-sans">
                      {visual.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#1D5B56] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architectural Image Placeholder Frame (5 cols) */}
                  <div className={`space-y-2 ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                    <div className="aspect-[16/9] rounded-xs bg-[#F2ECE1] border border-[#E2DDD5] overflow-hidden">
                      <img
                        src={visual.image}
                        alt={`${facility.name} facility slot`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="text-[11px] text-[#756A67] text-center flex items-center justify-center gap-1.5 font-sans">
                      <span>{facility.name} — Verified Facility</span>
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
