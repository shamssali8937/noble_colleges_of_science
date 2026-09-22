import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'

export const MissionVisionSection: React.FC = () => {
  return (
    <Section variant="alt" spacing="lg" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Guiding Charter"
          title="Mission & Educational Philosophy"
          subtitle="A purposeful institution rooted in academic discipline, self-confidence, and character building."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-6xl mx-auto text-left">
          {/* Column 1: The Institutional Mission (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between border-t-2 border-[#8F0D19] pt-5 bg-[#FAF7F2] p-6 border-x border-b border-[#E2DDD5]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans uppercase tracking-[0.2em] text-[11px] font-semibold text-[#8F0D19]">
                  Institutional Mission
                </span>
                <span className="text-xs text-[#736865]">Core Commitment</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1F1A19]">
                To Educate & Elevate Ordinary Students
              </h3>

              {/* Formal Pull-Quote */}
              <div className="border-l-3 border-[#8F0D19] pl-4 py-1 my-2">
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#1F1A19] leading-relaxed">
                  "{COLLEGE_DATA.mission}"
                </blockquote>
              </div>

              <p className="text-sm text-[#453D3B] leading-relaxed font-sans pt-1">
                Ensuring equal academic focus, disciplined encouragement, and accessible education for every aspiring youth in Wan Bhachran regardless of socioeconomic privilege.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E2DDD5] text-xs text-[#736865] font-sans flex items-center justify-between">
              <span>Noble Science College Charter</span>
              <span className="font-semibold text-[#8F0D19]">Equality of Opportunity</span>
            </div>
          </div>

          {/* Column 2: The Vision "A Heaven of Knowledge" (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between border-t-2 border-[#1D5B56] pt-5 bg-[#FAF7F2] p-6 border-x border-b border-[#E2DDD5]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans uppercase tracking-[0.2em] text-[11px] font-semibold text-[#1D5B56]">
                  Institutional Vision
                </span>
                <span className="text-xs font-urdu text-[#8F0D19]" dir="rtl">
                  علم و حکمت کا گہوارہ
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1F1A19]">
                A "Heaven of Knowledge"
              </h3>

              {/* Formal Pull-Quote */}
              <div className="border-l-3 border-[#1D5B56] pl-4 py-1 my-2">
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#1F1A19] leading-relaxed">
                  "{COLLEGE_DATA.vision}"
                </blockquote>
              </div>

              {/* Three Specific Vision Outcomes from SRS in Structured Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left font-sans">
                <div className="border border-[#E2DDD5] bg-white p-3">
                  <span className="font-serif font-bold text-sm text-[#1F1A19] block">Public Speaking</span>
                  <span className="text-[11px] text-[#736865] leading-tight block mt-1">Articulating ideas with poise and clarity before assemblies</span>
                </div>
                <div className="border border-[#E2DDD5] bg-white p-3">
                  <span className="font-serif font-bold text-sm text-[#1F1A19] block">Self-Confidence</span>
                  <span className="text-[11px] text-[#736865] leading-tight block mt-1">Instilling self-belief, dignity, and academic ambition</span>
                </div>
                <div className="border border-[#E2DDD5] bg-white p-3">
                  <span className="font-serif font-bold text-sm text-[#1F1A19] block">Character</span>
                  <span className="text-[11px] text-[#736865] leading-tight block mt-1">Shaping students into upright, humane community leaders</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E2DDD5] text-xs text-[#736865] font-sans flex items-center justify-between">
              <span>Curricular & Moral Objective</span>
              <span className="font-semibold text-[#1D5B56]">Character & Mind</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
