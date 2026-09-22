import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA, type AcademicProgram } from '@/data/collegeData'
import { Award, BookOpen, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'

export const AcademicsSection: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('fsc')

  const programs = COLLEGE_DATA.academics.programs
  const activeProgram = programs.find((p) => p.id === selectedProgramId) || programs[0]

  const programImages: Record<string, string> = {
    fsc: '/images/placeholders/program-fsc.svg',
    ics: '/images/placeholders/program-ics.svg',
    icom: '/images/placeholders/program-icom.svg',
    arts: '/images/placeholders/program-arts.svg',
  }

  return (
    <Section id="academics" variant="alt" spacing="md" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Academic Programs"
          title="Educational Pathways from Nursery to Class 12"
          subtitle="All intermediate streams fully affiliated with Sargodha Board (BISE Sargodha)."
        />

        {/* Nursery to Matric Foundations Banner */}
        <div className="mb-8 p-5 sm:p-6 bg-white border border-[#E2DDD5] rounded-xs max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xs bg-[#8F0D19]/10 text-[#8F0D19] shrink-0 mt-0.5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F0D19]">
                Primary & Secondary Foundation
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1F1A19]">
                Nursery through Class 10 (Matriculation)
              </h3>
              <p className="text-xs sm:text-sm text-[#453D3B] mt-0.5">
                Comprehensive foundational learning preparing young students for advanced scientific and analytical inquiry.
              </p>
            </div>
          </div>
          <div className="shrink-0 self-start md:self-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#FAF7F2] border border-[#E2DDD5] text-xs font-medium text-[#1F1A19]">
              <Award className="w-3.5 h-3.5 text-[#8F0D19]" />
              Sargodha Board Aligned
            </span>
          </div>
        </div>

        {/* Asymmetric / Editorial Intermediate Program Showcase */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Interactive Program List (5 cols) */}
          <div className="lg:col-span-5 space-y-2 text-left">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#736865] mb-2 px-1">
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
                    'w-full p-4 rounded-xs text-left transition-colors duration-150 border flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F0D19]',
                    isSelected
                      ? 'bg-[#8F0D19] text-white border-[#8F0D19]'
                      : 'bg-white hover:bg-[#FAF7F2] text-[#1F1A19] border-[#E2DDD5]'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'font-serif text-2xl font-bold tracking-tight',
                        isSelected ? 'text-[#F2ECE1]' : 'text-[#8F0D19]'
                      )}
                    >
                      {program.code}
                    </span>
                    <div>
                      <h4
                        className={cn(
                          'text-sm font-semibold leading-snug',
                          isSelected ? 'text-white' : 'text-[#1F1A19]'
                        )}
                      >
                        {program.title}
                      </h4>
                      <span
                        className={cn(
                          'text-xs block',
                          isSelected ? 'text-white/80' : 'text-[#736865]'
                        )}
                      >
                        {program.level}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={cn(
                      'w-4 h-4 transition-transform',
                      isSelected ? 'text-[#F2ECE1] translate-x-0.5' : 'text-[#736865] opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5'
                    )}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Detailed Program Profile with Placeholder Image (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E2DDD5] rounded-xs p-5 sm:p-6 flex flex-col justify-between text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProgram.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.16 }}
                className="space-y-4"
              >
                {/* Program Header */}
                <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F0D19]">
                      Program Specification
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1A19] mt-0.5">
                      {activeProgram.fullName}
                    </h3>
                  </div>
                  <div className="p-2 rounded-xs bg-[#FAF7F2] border border-[#E2DDD5] text-[#8F0D19] hidden sm:block">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>

                {/* Program Placeholder Image */}
                <div className="aspect-[16/9] rounded-xs overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1]">
                  <img
                    src={programImages[activeProgram.id] || '/images/placeholders/program-fsc.svg'}
                    alt={`${activeProgram.fullName} Classroom Environment`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <p className="text-sm text-[#453D3B] leading-relaxed">
                  {activeProgram.summary}
                </p>

                <div className="p-3.5 bg-[#FAF7F2] rounded-xs border border-[#E2DDD5] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1F1A19]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1D5B56]" />
                    <span>Curriculum Structure</span>
                  </div>
                  <p className="text-xs text-[#453D3B] pl-5 font-sans">
                    {activeProgram.curriculumNote} Coursework strictly adheres to BISE Sargodha standards.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 bg-[#FAF7F2] rounded-xs border border-[#E2DDD5]">
                    <span className="block text-[#736865]">Board Affiliation</span>
                    <strong className="text-[#1F1A19]">{activeProgram.board}</strong>
                  </div>
                  <div className="p-2.5 bg-[#FAF7F2] rounded-xs border border-[#E2DDD5]">
                    <span className="block text-[#736865]">Program Duration</span>
                    <strong className="text-[#1F1A19]">2 Academic Years</strong>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Verified Faculty Note from SRS */}
            <div className="pt-4 mt-4 border-t border-[#E2DDD5] text-xs text-[#453D3B] flex items-center gap-2">
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
