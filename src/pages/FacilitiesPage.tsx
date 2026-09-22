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
      caption: string
      details: string[]
      highlight: string
    }
  > = {
    laboratories: {
      kicker: 'Scientific Inquiry & Practical Coursework',
      icon: <FlaskConical className="w-5 h-5 text-[#8F0D19]" />,
      image: '/images/campus/science-laboratory.jpg',
      caption: 'Figure: Science laboratory station supporting practical chemistry, physics, and biology curricula.',
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
      icon: <BookMarked className="w-5 h-5 text-[#8F0D19]" />,
      image: '/images/campus/library-reading.jpg',
      caption: 'Figure: Reference collection and dedicated silent reading desks for intermediate students.',
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
      icon: <Trophy className="w-5 h-5 text-[#1D5B56]" />,
      image: '/images/campus/sports-grounds.jpg',
      caption: 'Figure: Campus athletic grounds for cricket, outdoor sports, and physical recreation.',
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
      icon: <ShieldCheck className="w-5 h-5 text-[#1D5B56]" />,
      image: '/images/campus/campus-gate.jpg',
      caption: 'Figure: Controlled institutional boundary gates and dedicated security staff post.',
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
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#8F0D19]/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F0D19] font-sans">
                Verified Infrastructure
              </span>
            </div>
            <Heading as="h2" size="section" tone="default">
              Supporting the "Heaven of Knowledge"
            </Heading>
            <p className="text-sm sm:text-base text-[#453D3B] max-w-2xl font-sans leading-relaxed">
              Every facility at Noble Science College is purposefully maintained to provide ordinary students with the resources, quietude, and safety required for exceptional achievement.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto text-left">
            {COLLEGE_DATA.facilities.map((facility: Facility, index: number) => {
              const visual = facilityVisualDetails[facility.id]
              const isEven = index % 2 === 1

              return (
                <div
                  key={facility.id}
                  className="bg-[#FAF7F2] border border-[#E2DDD5] p-6 sm:p-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Media Plate */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                      <div className="border border-[#E2DDD5] bg-[#F2ECE1] p-2">
                        <div className="overflow-hidden border border-[#E2DDD5] aspect-[16/10]">
                          <img
                            src={visual?.image || '/images/campus/science-laboratory.jpg'}
                            alt={facility.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="pt-2 mt-1.5 border-t border-[#E2DDD5]/70 flex items-center justify-between text-[11px] text-[#756A67] italic font-serif">
                          <span>{visual?.caption}</span>
                          <span className="not-italic text-[10px] font-sans uppercase tracking-widest text-[#8F0D19] font-semibold ml-2">Verified</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-6 space-y-4 font-sans ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] block">
                          {visual?.kicker}
                        </span>
                        <div className="flex items-center gap-2.5 pt-0.5">
                          <div className="p-1.5 bg-[#F2ECE1] border border-[#E2DDD5]">
                            {visual?.icon}
                          </div>
                          <h3 className="font-serif text-2xl font-bold text-[#1F1A19]">
                            {facility.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-[#453D3B] leading-relaxed">
                        {facility.description}
                      </p>

                      <div className="p-3 bg-white border border-[#E2DDD5] text-xs text-[#1D5B56]">
                        <strong>Purpose:</strong> {visual?.highlight}
                      </div>

                      {/* Detail Checklist */}
                      <ul className="space-y-1.5 pt-2 border-t border-[#E2DDD5] text-xs text-[#453D3B]">
                        {visual?.details.map((detail: string, dIdx: number) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#1D5B56] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
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
