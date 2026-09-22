import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA, type AcademicProgram } from '@/data/collegeData'
import { Award, BookOpen, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export const AcademicsSection: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('fsc')

  const programs = COLLEGE_DATA.academics.programs
  const activeProgram = programs.find((p) => p.id === selectedProgramId) || programs[0]

  return (
    <Section id="academics" variant="sandstone" spacing="md" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Academic Programs"
          title="Educational Pathways from Nursery to Class 12"
          subtitle="All intermediate streams fully affiliated with Sargodha Board (BISE Sargodha)."
        />

        {/* Nursery to Matric Foundations Banner */}
        <div className="mb-8 p-6 bg-white border border-[#E3DCD3] rounded-lg max-w-5xl mx-auto shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-full bg-[#133826]/10 text-[#133826] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8D1B2D]">
                Primary & Secondary Foundation
              </span>
              <h3 className="font-serif text-xl font-bold text-[#111F18]">
                Nursery through Class 10 (Matriculation)
              </h3>
              <p className="text-sm text-[#525F5A]">
                Comprehensive foundational learning preparing young students for advanced scientific and analytical inquiry.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FAF8F5] border border-[#E3DCD3] text-xs font-medium text-[#133826]">
              <Award className="w-3.5 h-3.5 text-[#C88E2E]" />
              Sargodha Board Aligned
            </span>
          </div>
        </div>

        {/* Asymmetric / Editorial Intermediate Program Showcase */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Interactive Program List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#65756E] mb-2 px-1 text-left">
              Intermediate Programs (Classes 11–12)
            </span>

            {programs.map((program: AcademicProgram) => {
              const isSelected = program.id === selectedProgramId

              return (
                <button
                  key={program.id}
                  type="button"
                  onClick={() => setSelectedProgramId(program.id)}
                  className={cn(
                    'w-full p-4 rounded-md text-left transition-all duration-200 border flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826]',
                    isSelected
                      ? 'bg-[#133826] text-white border-[#133826] shadow-sm translate-x-1'
                      : 'bg-white hover:bg-[#FAF8F5] text-[#111F18] border-[#E3DCD3]'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'font-serif text-2xl font-bold tracking-tight',
                        isSelected ? 'text-[#C88E2E]' : 'text-[#8D1B2D]'
                      )}
                    >
                      {program.code}
                    </span>
                    <div>
                      <h4
                        className={cn(
                          'text-sm font-semibold leading-snug',
                          isSelected ? 'text-white' : 'text-[#111F18]'
                        )}
                      >
                        {program.title}
                      </h4>
                      <span
                        className={cn(
                          'text-xs block',
                          isSelected ? 'text-white/70' : 'text-[#65756E]'
                        )}
                      >
                        {program.level}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={cn(
                      'w-5 h-5 transition-transform',
                      isSelected ? 'text-[#C88E2E] translate-x-0.5' : 'text-[#65756E] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5'
                    )}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Detailed Program Profile (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E3DCD3] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-5 text-left">
              <div className="flex items-center justify-between border-b border-[#E3DCD3] pb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8D1B2D]">
                    Program Specification
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111F18] mt-0.5">
                    {activeProgram.fullName}
                  </h3>
                </div>
                <div className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#E3DCD3] text-[#133826] hidden sm:block">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-base text-[#384640] leading-relaxed">
                  {activeProgram.summary}
                </p>

                <div className="p-4 bg-[#FAF8F5] rounded border border-[#E3DCD3] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#133826]">
                    <CheckCircle2 className="w-4 h-4 text-[#133826]" />
                    <span>Curriculum Structure</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#525F5A] pl-6 font-medium">
                    {activeProgram.curriculumNote}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-white rounded border border-[#E3DCD3]">
                    <span className="block text-[#65756E]">Affiliation</span>
                    <strong className="text-[#111F18]">{activeProgram.board}</strong>
                  </div>
                  <div className="p-3 bg-white rounded border border-[#E3DCD3]">
                    <span className="block text-[#65756E]">Duration</span>
                    <strong className="text-[#111F18]">2 Academic Years</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Faculty Note from SRS */}
            <div className="pt-5 mt-5 border-t border-[#E3DCD3] text-xs text-[#525F5A] flex items-center gap-2 text-left">
              <Award className="w-4 h-4 text-[#C88E2E] shrink-0" />
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
