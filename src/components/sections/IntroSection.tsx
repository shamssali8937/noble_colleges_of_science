import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading, SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Compass, Award } from 'lucide-react'

export const IntroSection: React.FC = () => {
  return (
    <Section id="about" variant="white" spacing="md" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Institutional History"
          title="The Founding of Noble Science College"
          subtitle="Established in 2009 to bring academic quality and opportunity to the youth of Wan Bhachran."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          {/* Left Column: Authentic Founding Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F0D19]">
              <Compass className="w-4 h-4" />
              <span>Established 2009 • Wan Bhachran</span>
            </div>

            <Heading as="h3" size="display" tone="default">
              Transforming Ordinary Lives Through Quality Education
            </Heading>

            <div className="space-y-4 text-base sm:text-lg text-[#453D3B] leading-relaxed font-sans">
              <p>
                {COLLEGE_DATA.foundingStory.context}
              </p>
              <p>
                Rather than seeking a commercial urban center, Principal Ehsanullah Malik chose to anchor this institution where it was needed most: in Wan Bhachran. His commitment was simple yet profound — to ensure ordinary students, regardless of socioeconomic background, have access to rigorous coursework, personal encouragement, and the opportunity to excel academically.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium text-[#736865]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#FAF7F2] border border-[#E2DDD5]">
                <Award className="w-3.5 h-3.5 text-[#8F0D19]" />
                BISE Sargodha Affiliated
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#FAF7F2] border border-[#E2DDD5]">
                <Compass className="w-3.5 h-3.5 text-[#1D5B56]" />
                Serving Wan Bhachran & Surrounding Regions
              </span>
            </div>
          </div>

          {/* Right Column: 2 Placeholder Images (Building & Campus Life) (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Image 1: Academic Block Placeholder */}
            <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#E2DDD5]">
              <div className="aspect-[4/3] rounded-xs overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1]">
                <img
                  src="/images/placeholders/intro-building.svg"
                  alt="Noble Science College Academic Block"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="block pt-2 text-[11px] text-[#736865] px-1 font-medium">
                Academic Block & Classrooms — Wan Bhachran
              </span>
            </div>

            {/* Image 2: Campus Grounds Placeholder */}
            <div className="bg-[#FAF7F2] p-2.5 rounded-xs border border-[#E2DDD5]">
              <div className="aspect-[16/10] rounded-xs overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1]">
                <img
                  src="/images/placeholders/intro-campus.svg"
                  alt="Noble Science College Campus Grounds"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="block pt-2 text-[11px] text-[#736865] px-1 font-medium">
                Campus Grounds & Learning Environment
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
