import React, { useState } from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { PrimaryCta } from '@/components/ui/CtaButton'
import { COLLEGE_DATA, type AcademicProgram } from '@/data/collegeData'
import { Award, BookOpen, GraduationCap, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AcademicsPageProps {
  onNavClick: (href: string) => void
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onNavClick }) => {
  const [selectedId, setSelectedId] = useState<string>('fsc')
  const programs = COLLEGE_DATA.academics.programs
  const currentProgram = programs.find((p) => p.id === selectedId) || programs[0]

  return (
    <div className="w-full">
      <PageHeader
        kicker="Educational Structure"
        title="Academics & Study Programs"
        subtitle="Complete academic continuum from foundational Nursery classes through Higher Secondary Class 12, affiliated with Sargodha Board."
        breadcrumb="Academics"
        onHomeClick={() => onNavClick('#home')}
      />

      {/* Scope Overview Ribbon */}
      <Section variant="white" spacing="sm" hasBorderBottom>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E3DCD3]">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8D1B2D] block">
                Class Scope
              </span>
              <h3 className="font-serif text-xl font-bold text-[#111F18] mt-1">
                Nursery to Class 12
              </h3>
              <p className="text-xs text-[#525F5A] mt-1 leading-relaxed">
                Seamless progression spanning primary schooling, middle grades, matriculation, and intermediate college streams.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E3DCD3]">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#133826] block">
                Board Affiliation
              </span>
              <h3 className="font-serif text-xl font-bold text-[#111F18] mt-1">
                Sargodha Board
              </h3>
              <p className="text-xs text-[#525F5A] mt-1 leading-relaxed">
                Full examination and curricular alignment with the Board of Intermediate and Secondary Education (BISE) Sargodha.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E3DCD3]">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#C88E2E] block">
                Teaching Faculty
              </span>
              <h3 className="font-serif text-xl font-bold text-[#111F18] mt-1">
                MPhil & Bachelor's Degrees
              </h3>
              <p className="text-xs text-[#525F5A] mt-1 leading-relaxed">
                Staffed by qualified educators dedicated to curriculum mastery, public speaking, and confidence building.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Primary & Matric Foundations */}
      <Section variant="parchment" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-lg border border-[#E3DCD3] shadow-xs text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E3DCD3]">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#133826]">
                  Foundational Grades
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111F18]">
                  Schooling: Nursery through Class 10
                </h2>
                <p className="text-sm text-[#525F5A] max-w-2xl">
                  Providing young learners with foundational literacy, mathematics, science, language development, and self-confidence before entering intermediate college tracks.
                </p>
              </div>
              <div className="shrink-0 p-3 rounded-full bg-[#133826]/10 text-[#133826] self-start md:self-auto">
                <GraduationCap className="w-8 h-8" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 text-xs text-[#384640]">
              <div className="p-3.5 bg-[#FAF8F5] rounded border border-[#E3DCD3]">
                <strong className="block text-[#111F18] text-sm font-semibold mb-1">Early Education</strong>
                <span>Nursery to Kindergarten emphasizing curiosity, basic numeracy, and communicative confidence.</span>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] rounded border border-[#E3DCD3]">
                <strong className="block text-[#111F18] text-sm font-semibold mb-1">Primary to Middle</strong>
                <span>Classes 1 to 8 building core academic discipline and public speaking readiness.</span>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] rounded border border-[#E3DCD3]">
                <strong className="block text-[#111F18] text-sm font-semibold mb-1">Secondary (Matric)</strong>
                <span>Classes 9 and 10 aligned with Sargodha Board standards preparing students for higher studies.</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Intermediate College Showcase (Classes 11–12) */}
      <Section variant="white" spacing="lg" hasBorderBottom>
        <Container>
          <SectionHeader
            kicker="Higher Secondary (Classes 11–12)"
            title="Intermediate Academic Streams"
            subtitle="Select a program below to explore stream outlines, curriculum alignment, and board compliance."
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive Program Selector (5 cols) */}
            <div className="lg:col-span-5 space-y-2 text-left">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#65756E] mb-3 px-1">
                Choose Intermediate Group
              </span>

              {programs.map((program: AcademicProgram) => {
                const isSelected = program.id === selectedId

                return (
                  <button
                    key={program.id}
                    type="button"
                    onClick={() => setSelectedId(program.id)}
                    className={cn(
                      'w-full p-4 sm:p-5 rounded-md text-left transition-all duration-200 border flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826]',
                      isSelected
                        ? 'bg-[#133826] text-white border-[#133826] shadow-sm translate-x-1.5'
                        : 'bg-[#FAF8F5] hover:bg-white text-[#111F18] border-[#E3DCD3]'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-10 h-10 rounded font-serif font-bold text-lg flex items-center justify-center shrink-0',
                          isSelected ? 'bg-white/15 text-[#C88E2E]' : 'bg-white text-[#8D1B2D] border border-[#E3DCD3]'
                        )}
                      >
                        {program.code}
                      </div>
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

            {/* Program Profile Canvas (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-xs text-left">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E3DCD3] pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8D1B2D]">
                      Group Profile
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111F18] mt-1">
                      {currentProgram.fullName}
                    </h3>
                  </div>
                  <div className="p-3 rounded-full bg-white border border-[#E3DCD3] text-[#133826] hidden sm:block">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-base text-[#384640] leading-relaxed">
                    {currentProgram.summary}
                  </p>

                  <div className="p-4 bg-white rounded border border-[#E3DCD3] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#133826]">
                      <CheckCircle2 className="w-4 h-4 text-[#133826]" />
                      <span>Curriculum & Subject Standards</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#525F5A] pl-6">
                      {currentProgram.curriculumNote} All coursework strictly conforms to the prescribed syllabus issued by the Sargodha Board.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded border border-[#E3DCD3]">
                      <span className="block text-[#65756E] font-medium">Examination Body</span>
                      <strong className="text-[#111F18] font-serif text-sm">{currentProgram.board}</strong>
                    </div>
                    <div className="p-3 bg-white rounded border border-[#E3DCD3]">
                      <span className="block text-[#65756E] font-medium">Program Length</span>
                      <strong className="text-[#111F18] font-serif text-sm">2 Academic Years</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Path to Admissions */}
              <div className="pt-6 mt-6 border-t border-[#E3DCD3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-[#525F5A]">
                  <span>Interested in this group? Meet Principal Ehsanullah Malik to discuss readiness.</span>
                </div>
                <PrimaryCta
                  size="sm"
                  onClick={() => onNavClick('#admissions')}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="shrink-0"
                >
                  Admission Process
                </PrimaryCta>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Academic Quality Banner */}
      <Section variant="sandstone" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto p-6 bg-white border border-[#E3DCD3] rounded-lg text-center space-y-4">
            <Award className="w-8 h-8 text-[#C88E2E] mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-[#111F18]">
              Standardized Excellence Aligned with BISE Sargodha
            </h3>
            <p className="text-sm sm:text-base text-[#384640] max-w-2xl mx-auto leading-relaxed">
              From science laboratories to library study spaces, Noble Science College delivers the complete curriculum as per standard course requirements for each academic group.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  )
}
