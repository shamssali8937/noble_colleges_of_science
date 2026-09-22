import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Target, Sparkles, Mic, HeartHandshake } from 'lucide-react'

export const MissionVisionSection: React.FC = () => {
  return (
    <Section variant="alt" spacing="md" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Guiding Philosophy"
          title="Mission & Vision"
          subtitle="A purposeful institution rooted in academic discipline, self-confidence, and character building."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto text-left">
          {/* Mission Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xs border border-[#E2DDD5] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xs bg-[#8F0D19]/10 text-[#8F0D19] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#736865]">
                  Institutional Purpose
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F1A19] mt-0.5">
                  Our Mission
                </h3>
              </div>

              <blockquote className="font-serif italic text-lg text-[#8F0D19] leading-relaxed pt-1">
                "{COLLEGE_DATA.mission}"
              </blockquote>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E2DDD5] text-xs text-[#736865]">
              Ensuring merit, encouragement, and equal academic focus for every student in Wan Bhachran.
            </div>
          </div>

          {/* Vision Card: "Heaven of Knowledge" (7 cols) - Uses logo secondary Pine Teal #1D5B56 */}
          <div className="lg:col-span-7 bg-[#1D5B56] text-white p-6 sm:p-8 rounded-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#F2ECE1] px-2.5 py-0.5 rounded-xs bg-white/10 border border-white/20">
                  Institutional Vision
                </span>
                <span className="text-xs font-urdu text-white/80" dir="rtl">
                  علم و آگہی کا گہوارہ
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  A "Heaven of Knowledge"
                </h3>
              </div>

              <blockquote className="font-serif text-base sm:text-lg text-white/95 leading-relaxed italic border-l-2 border-[#FAF7F2] pl-4">
                "{COLLEGE_DATA.vision}"
              </blockquote>

              {/* Three Specific Vision Outcomes from SRS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 border border-white/15 p-3 rounded-xs text-left">
                  <Mic className="w-4 h-4 text-[#F2ECE1] mb-1" />
                  <span className="block text-xs font-semibold text-white">Public Speaking</span>
                  <span className="text-[11px] text-white/75 leading-tight block mt-0.5">Articulating ideas clearly without hesitation</span>
                </div>
                <div className="bg-white/10 border border-white/15 p-3 rounded-xs text-left">
                  <Sparkles className="w-4 h-4 text-[#F2ECE1] mb-1" />
                  <span className="block text-xs font-semibold text-white">Student Confidence</span>
                  <span className="text-[11px] text-white/75 leading-tight block mt-0.5">Instilling self-belief and academic ambition</span>
                </div>
                <div className="bg-white/10 border border-white/15 p-3 rounded-xs text-left">
                  <HeartHandshake className="w-4 h-4 text-[#F2ECE1] mb-1" />
                  <span className="block text-xs font-semibold text-white">Character Building</span>
                  <span className="text-[11px] text-white/75 leading-tight block mt-0.5">Shaping students into upright human beings</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/15 text-xs text-white/70 flex items-center justify-between">
              <span>Noble Science College Ethos</span>
              <span className="italic text-[#F2ECE1]">Holistic Development</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
