import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading, SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Compass, Award } from 'lucide-react'

export const IntroSection: React.FC = () => {
  return (
    <Section id="about" variant="white" spacing="lg" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Origins & Foundations"
          title="The Founding of Noble Science College"
          subtitle="Established in 2009 to bring rigorous academic standards and personal mentorship to Wan Bhachran."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          {/* Left Column: Authentic Founding Narrative & Formal Pull-Quote (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <span className="font-sans uppercase tracking-[0.2em] text-[11px] font-semibold text-[#8F0D19]">
                Historical Context • 2009
              </span>
              <Heading as="h3" size="display" tone="default">
                Transforming Ordinary Lives Through Disciplined Education
              </Heading>
            </div>

            <div className="space-y-4 text-base sm:text-[1.05rem] text-[#453D3B] leading-relaxed font-sans">
              <p>
                {COLLEGE_DATA.foundingStory.context}
              </p>
              <p>
                Rather than seeking an established urban center, Principal Ehsanullah Malik chose to anchor this institution where opportunity was needed most: in Wan Bhachran. His commitment was direct: to ensure ordinary students receive rigorous coursework, personal guidance, and genuine encouragement to excel.
              </p>
            </div>

            {/* Formal Heritage Pull-Quote Device */}
            <div className="pt-2 pb-1 border-y border-[#E2DDD5] my-4">
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#1F1A19] py-2 leading-relaxed">
                "Our purpose has never been commercial expansion. It is to take ordinary students and give them the confidence, scholarship, and moral foundation to achieve extraordinary lives."
              </blockquote>
              <span className="font-sans uppercase tracking-[0.14em] text-[10.5px] font-semibold text-[#8F0D19] block pb-1">
                — Principal Ehsanullah Malik, Founder
              </span>
            </div>

            <div className="pt-1 flex flex-wrap gap-3 text-xs font-medium text-[#736865] font-sans">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] border border-[#E2DDD5]">
                <Award className="w-3.5 h-3.5 text-[#8F0D19]" />
                BISE Sargodha Affiliated
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] border border-[#E2DDD5]">
                <Compass className="w-3.5 h-3.5 text-[#1D5B56]" />
                Wan Bhachran, District Mianwali
              </span>
            </div>
          </div>

          {/* Right Column: 2 Real Educational Plates with Formal Captions (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Plate 1: Academic Building */}
            <div className="bg-[#FAF7F2] p-2 border border-[#E2DDD5] text-left">
              <div className="aspect-[4/3] overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1]">
                <img
                  src="/images/campus/campus-building.jpg"
                  alt="Noble Science College Academic Building"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pt-2 px-0.5 space-y-0.5">
                <span className="font-serif italic text-xs text-[#1F1A19] block">
                  Figure I: College Academic Wing & Lecture Rooms
                </span>
                <p className="text-[11px] text-[#736865] font-sans border-t border-[#E2DDD5]/60 pt-1">
                  Structured classrooms configured for focused study from primary schooling through higher secondary matriculation and intermediate.
                </p>
              </div>
            </div>

            {/* Plate 2: Assembly & Public Speaking */}
            <div className="bg-[#FAF7F2] p-2 border border-[#E2DDD5] text-left">
              <div className="aspect-[16/10] overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1]">
                <img
                  src="/images/campus/student-public-speaking-speech.jpg"
                  alt="Student Public Speaking and Declamation Practice"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pt-2 px-0.5 space-y-0.5">
                <span className="font-serif italic text-xs text-[#1F1A19] block">
                  Figure II: Student Public Speaking & Declamation Exercise
                </span>
                <p className="text-[11px] text-[#736865] font-sans border-t border-[#E2DDD5]/60 pt-1">
                  Students actively participating in oration, confidence building, and assembly presentations at Wan Bhachran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
