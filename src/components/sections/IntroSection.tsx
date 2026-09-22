import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading, SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Landmark, Compass, Award } from 'lucide-react'

export const IntroSection: React.FC = () => {
  return (
    <Section id="about" variant="white" spacing="md" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Institutional History"
          title="The Founding of Noble Science College"
          subtitle="Established in 2009 to bring academic quality and opportunity to the youth of Wan Bhachran."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Founding Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8D1B2D]">
              <Landmark className="w-4 h-4" />
              <span>Established 2009 • Wan Bhachran</span>
            </div>

            <Heading as="h3" size="display" tone="default" className="text-2xl sm:text-3xl">
              Transforming Ordinary Lives Through Quality Education
            </Heading>

            <div className="space-y-4 text-base sm:text-lg text-[#384640] leading-relaxed font-sans">
              <p>
                {COLLEGE_DATA.foundingStory.context}
              </p>
              <p>
                Rather than seeking a commercial urban center, Principal Ehsanullah Malik chose to anchor this institution where it was needed most: in Wan Bhachran. His commitment was simple yet profound — to ensure ordinary students, regardless of socioeconomic background, have access to rigorous coursework, personal encouragement, and the opportunity to excel academically.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#65756E]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FAF8F5] border border-[#E3DCD3]">
                <Award className="w-3.5 h-3.5 text-[#C88E2E]" />
                BISE Sargodha Affiliation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FAF8F5] border border-[#E3DCD3]">
                <Compass className="w-3.5 h-3.5 text-[#133826]" />
                Serving Wan Bhachran & Surrounding Regions
              </span>
            </div>
          </div>

          {/* Right Column: Institutional Heritage Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg p-6 sm:p-8 space-y-6">
              <div className="border-b border-[#E3DCD3] pb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#133826]">
                  Foundational Pillars
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#111F18] mt-1">
                  Noble Science College Ethos
                </h4>
              </div>

              <div className="space-y-4 text-sm text-[#384640]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#133826] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="block text-[#111F18] font-medium">Accessible Education</strong>
                    <span>Providing quality education to ordinary students without discrimination.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8D1B2D] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="block text-[#111F18] font-medium">Beyond Coursework</strong>
                    <span>Building personal confidence, public speaking capability, and human character.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C88E2E] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="block text-[#111F18] font-medium">Qualified Mentorship</strong>
                    <span>Staffed by MPhil and Bachelor's degree educators aligned with Sargodha Board curricula.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E3DCD3] text-xs text-[#65756E] flex justify-between items-center">
                <span>Wan Bhachran Campus</span>
                <span className="font-semibold text-[#133826]">Since 2009</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
