import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA, type AcademicProgram } from '@/data/collegeData'
import { Award, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export const AcademicsSection: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('fsc')

  const programs = COLLEGE_DATA.academics.programs
  const activeProgram = programs.find((p) => p.id === selectedProgramId) || programs[0]

  const programImages: Record<string, { image: string; caption: string }> = {
    fsc: {
      image: '/images/campus/science-laboratory.jpg',
      caption: 'Science Practical Instruction: Physics, Chemistry & Biology Laboratory',
    },
    ics: {
      image: '/images/campus/computer-lab.jpg',
      caption: 'Computer Systems Facility: Information Technology & Computing Lab',
    },
    icom: {
      image: '/images/campus/commerce-study.jpg',
      caption: 'Commerce & Accounting: Financial Practice & Business Mathematics',
    },
    arts: {
      image: '/images/campus/humanities-arts.jpg',
      caption: 'Humanities & Social Sciences: Literature, Civics & Language Studies',
    },
  }

  const activeMedia = programImages[activeProgram.id] || programImages.fsc

  return (
    <Section id="academics" variant="alt" spacing="lg" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Curricular Structure"
          title="Educational Pathways: Nursery to Class 12"
          subtitle="All intermediate programs fully affiliated with the Board of Intermediate & Secondary Education (BISE) Sargodha."
        />

        {/* Nursery to Matric Foundations Banner */}
        <div className="mb-8 p-4 sm:p-5 bg-[#FAF7F2] border border-[#E2DDD5] max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <span className="font-sans uppercase tracking-[0.16em] text-[10.5px] font-semibold text-[#8F0D19] block">
              Foundational & Secondary Studies
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F1A19]">
              Schooling: Nursery through Class 10 (Matriculation)
            </h3>
            <p className="text-xs sm:text-sm text-[#453D3B] font-sans">
              Continuous academic grounding preparing young candidates for analytical rigor and higher secondary study.
            </p>
          </div>
          <div className="shrink-0 self-start md:self-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E2DDD5] text-xs font-medium text-[#1F1A19]">
              <Award className="w-3.5 h-3.5 text-[#8F0D19]" />
              Sargodha Board Aligned
            </span>
          </div>
        </div>

        {/* Asymmetric / Editorial Intermediate Program Showcase */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Program List (5 cols) */}
          <div className="lg:col-span-5 space-y-2 text-left">
            <span className="block font-sans uppercase tracking-[0.16em] text-[10.5px] font-semibold text-[#736865] mb-2 px-0.5">
              Select Intermediate Discipline (11–12)
            </span>

            {programs.map((program: AcademicProgram) => {
              const isSelected = program.id === selectedProgramId

              return (
                <button
                  key={program.id}
                  type="button"
                  onClick={() => setSelectedProgramId(program.id)}
                  className={cn(
                    'w-full p-3.5 sm:p-4 text-left transition-colors duration-150 border flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8F0D19]',
                    isSelected
                      ? 'bg-[#8F0D19] text-white border-[#8F0D19]'
                      : 'bg-[#FAF7F2] hover:bg-white text-[#1F1A19] border-[#E2DDD5]'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'font-serif text-xl font-bold tracking-tight',
                        isSelected ? 'text-[#D4AF37]' : 'text-[#8F0D19]'
                      )}
                    >
                      {program.code}
                    </span>
                    <div>
                      <h4
                        className={cn(
                          'text-sm font-semibold leading-snug font-sans',
                          isSelected ? 'text-white' : 'text-[#1F1A19]'
                        )}
                      >
                        {program.title}
                      </h4>
                      <span
                        className={cn(
                          'text-xs block font-sans',
                          isSelected ? 'text-white/80' : 'text-[#736865]'
                        )}
                      >
                        {program.level}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={cn(
                      'w-4 h-4',
                      isSelected ? 'text-[#D4AF37]' : 'text-[#736865] opacity-50 group-hover:opacity-100'
                    )}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Detailed Program Profile with Real Photography (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#E2DDD5] p-5 sm:p-6 flex flex-col justify-between text-left">
            <div className="space-y-4">
              {/* Program Header */}
              <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
                <div>
                  <span className="font-sans uppercase tracking-[0.16em] text-[10.5px] font-semibold text-[#8F0D19] block">
                    Curriculum Syllabus
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1A19] mt-0.5">
                    {activeProgram.fullName}
                  </h3>
                </div>
                <div className="p-2 bg-white border border-[#E2DDD5] text-[#8F0D19] hidden sm:block">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>

              {/* Real Program Photographic Plate */}
              <div className="border border-[#E2DDD5] p-1.5 bg-white">
                <div className="aspect-[16/9] overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1]">
                  <img
                    src={activeMedia.image}
                    alt={activeProgram.fullName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="block pt-1.5 px-0.5 text-[11px] font-serif italic text-[#1F1A19]">
                  {activeMedia.caption}
                </span>
              </div>

              <p className="text-sm text-[#453D3B] leading-relaxed font-sans">
                {activeProgram.summary}
              </p>

              <div className="p-3 bg-white border border-[#E2DDD5] space-y-1 font-sans">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1D5B56]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D5B56]" />
                  <span>Curricular Standards</span>
                </div>
                <p className="text-xs text-[#736865] pl-5">
                  {activeProgram.curriculumNote} Coursework strictly adheres to BISE Sargodha standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                <div className="p-2.5 bg-white border border-[#E2DDD5]">
                  <span className="block text-[#736865]">Examining Board</span>
                  <strong className="text-[#1F1A19] font-serif text-sm">{activeProgram.board}</strong>
                </div>
                <div className="p-2.5 bg-white border border-[#E2DDD5]">
                  <span className="block text-[#736865]">Program Span</span>
                  <strong className="text-[#1F1A19] font-serif text-sm">2 Academic Years</strong>
                </div>
              </div>
            </div>

            {/* Verified Faculty Note from SRS */}
            <div className="pt-3 mt-4 border-t border-[#E2DDD5] text-xs text-[#453D3B] flex items-center gap-2 font-sans">
              <Award className="w-4 h-4 text-[#8F0D19] shrink-0" />
              <span>
                Taught by qualified faculty members holding MPhil and Bachelor's degrees.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
