import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Target, Sparkles, Mic, HeartHandshake } from 'lucide-react'

export const MissionVisionSection: React.FC = () => {
  return (
    <Section variant="parchment" spacing="md" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Guiding Philosophy"
          title="Mission & Vision"
          subtitle="A purposeful institution rooted in academic discipline, self-confidence, and character building."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Mission Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-lg border border-[#E3DCD3] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-md bg-[#133826]/10 text-[#133826] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#65756E]">
                  Institutional Purpose
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#111F18] mt-1">
                  Our Mission
                </h3>
              </div>

              <p className="font-serif italic text-lg text-[#133826] leading-relaxed pt-2">
                "{COLLEGE_DATA.mission}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E3DCD3] text-xs text-[#65756E] leading-normal">
              Ensuring merit, encouragement, and equal academic focus for every student in Wan Bhachran.
            </div>
          </div>

          {/* Vision Card: "Heaven of Knowledge" (7 cols) */}
          <div className="lg:col-span-7 bg-[#133826] text-white p-8 sm:p-10 rounded-lg shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Subtle architectural background texture */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#C88E2E]/10 to-transparent pointer-events-none rounded-full -mr-20 -mt-20" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-md bg-white/10 text-[#C88E2E] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C88E2E] px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  Institutional Vision
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  A "Heaven of Knowledge"
                </h3>
                <p className="text-xs font-urdu text-white/80 mt-1" dir="rtl">
                  علم و آگہی کا گہوارہ
                </p>
              </div>

              <blockquote className="font-serif text-lg sm:text-xl text-white/95 leading-relaxed italic border-l-2 border-[#C88E2E] pl-4">
                "{COLLEGE_DATA.vision}"
              </blockquote>

              {/* Three Specific Vision Outcomes from SRS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="bg-white/5 border border-white/10 p-3 rounded text-left">
                  <Mic className="w-4 h-4 text-[#C88E2E] mb-1.5" />
                  <span className="block text-xs font-semibold text-white">Public Speaking</span>
                  <span className="text-[11px] text-white/70">Overcoming hesitation and articulating ideas clearly</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded text-left">
                  <Sparkles className="w-4 h-4 text-[#C88E2E] mb-1.5" />
                  <span className="block text-xs font-semibold text-white">Student Confidence</span>
                  <span className="text-[11px] text-white/70">Instilling self-belief and academic ambition</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded text-left">
                  <HeartHandshake className="w-4 h-4 text-[#C88E2E] mb-1.5" />
                  <span className="block text-xs font-semibold text-white">Character Building</span>
                  <span className="text-[11px] text-white/70">Shaping students into upright, responsible human beings</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-xs text-white/70 flex items-center justify-between relative z-10">
              <span>Noble Science College Foundation</span>
              <span className="italic text-[#C88E2E]">Holistic Development</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
