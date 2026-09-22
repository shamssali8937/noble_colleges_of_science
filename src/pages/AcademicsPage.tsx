import React, { useState } from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { PrimaryCta } from '@/components/ui/CtaButton'
import { COLLEGE_DATA, type AcademicProgram } from '@/data/collegeData'
import { Award, BookOpen, GraduationCap, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'

interface AcademicsPageProps {
  onNavClick: (href: string) => void
}

const PROGRAM_IMAGES: Record<string, { src: string; caption: string }> = {
  fsc: {
    src: '/images/campus/science-laboratory.jpg',
    caption: 'Figure: Science laboratory practical station for F.Sc Pre-Medical and Pre-Engineering.',
  },
  ics: {
    src: '/images/campus/computer-lab.jpg',
    caption: 'Figure: Dedicated computing laboratory workstation for ICS computer science students.',
  },
  icom: {
    src: '/images/campus/commerce-study.jpg',
    caption: 'Figure: Intermediate commerce lecture environment for accounting and business studies.',
  },
  arts: {
    src: '/images/campus/humanities-arts.jpg',
    caption: 'Figure: Humanities and general science lecture hall for arts curriculum study.',
  },
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onNavClick }) => {
  const [selectedId, setSelectedId] = useState<string>('fsc')
  const programs = COLLEGE_DATA.academics.programs
  const currentProgram = programs.find((p) => p.id === selectedId) || programs[0]
  const currentImageMeta = PROGRAM_IMAGES[currentProgram.id] || PROGRAM_IMAGES.fsc

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
      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto text-left font-sans">
            <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5]">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] block pb-1 border-b border-[#E2DDD5]/70">
                Class Scope
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1F1A19] mt-2">
                Nursery through Class 12
              </h3>
              <p className="text-xs text-[#756A67] mt-1.5 leading-relaxed">
                Seamless progression spanning primary schooling, middle grades, matriculation, and intermediate college streams.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5]">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1D5B56] block pb-1 border-b border-[#E2DDD5]/70">
                Board Affiliation
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1F1A19] mt-2">
                Sargodha Board
              </h3>
              <p className="text-xs text-[#756A67] mt-1.5 leading-relaxed">
                Full examination and curricular alignment with the Board of Intermediate and Secondary Education (BISE) Sargodha.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5]">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] block pb-1 border-b border-[#E2DDD5]/70">
                Teaching Faculty
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1F1A19] mt-2">
                MPhil & Bachelor's Degrees
              </h3>
              <p className="text-xs text-[#756A67] mt-1.5 leading-relaxed">
                Staffed by qualified educators dedicated to curriculum mastery, public speaking, and confidence building.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Primary & Matric Foundations */}
      <Section variant="alt" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-5xl mx-auto bg-[#FAF7F2] p-5 sm:p-7 border border-[#E2DDD5] text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5 border-b border-[#E2DDD5]">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] font-sans">
                  Foundational Grades
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1A19]">
                  Schooling: Nursery through Class 10
                </h2>
                <p className="text-xs sm:text-sm text-[#453D3B] max-w-2xl font-sans leading-relaxed">
                  Providing young learners with foundational literacy, mathematics, science, language development, and self-confidence before entering intermediate college tracks.
                </p>
              </div>
              <div className="shrink-0 p-2.5 bg-[#F2ECE1] border border-[#E2DDD5] text-[#8F0D19] self-start md:self-auto">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5 text-xs text-[#453D3B] font-sans">
              <div className="p-3.5 bg-white border border-[#E2DDD5]">
                <strong className="block text-[#1F1A19] font-serif font-bold text-sm mb-1">Early Education</strong>
                <span>Nursery to Kindergarten emphasizing curiosity, basic numeracy, and communicative confidence.</span>
              </div>
              <div className="p-3.5 bg-white border border-[#E2DDD5]">
                <strong className="block text-[#1F1A19] font-serif font-bold text-sm mb-1">Primary to Middle</strong>
                <span>Classes 1 to 8 building core academic discipline, handwriting, and public speaking readiness.</span>
              </div>
              <div className="p-3.5 bg-white border border-[#E2DDD5]">
                <strong className="block text-[#1F1A19] font-serif font-bold text-sm mb-1">Secondary (Matric)</strong>
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

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            {/* Interactive Program Selector (5 cols) */}
            <div className="lg:col-span-5 space-y-2 text-left">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#756A67] mb-2 px-1 font-sans">
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
                      'w-full p-3.5 sm:p-4 text-left transition-colors duration-150 border flex items-center justify-between group cursor-pointer focus-visible:outline-none',
                      isSelected
                        ? 'bg-[#8F0D19] text-white border-[#8F0D19]'
                        : 'bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#1F1A19] border-[#E2DDD5]'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'w-8 h-8 font-serif font-bold text-xs flex items-center justify-center shrink-0 border',
                          isSelected ? 'bg-white/15 text-white border-white/20' : 'bg-[#F2ECE1] text-[#8F0D19] border-[#E2DDD5]'
                        )}
                      >
                        {program.code}
                      </div>
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
                            isSelected ? 'text-white/70' : 'text-[#756A67]'
                          )}
                        >
                          {program.level}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      className={cn(
                        'w-4 h-4',
                        isSelected ? 'text-white' : 'text-[#756A67] opacity-40 group-hover:opacity-100'
                      )}
                    />
                  </button>
                )
              })}
            </div>

            {/* Program Profile Canvas (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF7F2] border border-[#E2DDD5] p-5 sm:p-6 flex flex-col justify-between text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProgram.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] font-sans">
                        Group Profile
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1A19] mt-0.5">
                        {currentProgram.fullName}
                      </h3>
                    </div>
                    <div className="p-1.5 bg-[#F2ECE1] border border-[#E2DDD5] text-[#8F0D19] hidden sm:block">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Program Photography Plate with Caption */}
                  <div className="space-y-2">
                    <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1] aspect-[16/10]">
                      <img
                        src={currentImageMeta.src}
                        alt={`${currentProgram.title} Program`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="pt-1.5 border-t border-[#E2DDD5]/70 flex items-center justify-between text-[11px] text-[#756A67] italic font-serif">
                      <span>{currentImageMeta.caption}</span>
                      <span className="not-italic text-[10px] font-sans uppercase tracking-widest text-[#8F0D19] font-semibold ml-2">Verified</span>
                    </div>
                  </div>

                  <div className="space-y-3 font-sans">
                    <p className="text-xs sm:text-sm text-[#453D3B] leading-relaxed">
                      {currentProgram.summary}
                    </p>

                    <div className="p-3 bg-white border border-[#E2DDD5] space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#1D5B56]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D5B56]" />
                        <span>Curriculum & Subject Standards</span>
                      </div>
                      <p className="text-xs text-[#756A67] pl-5">
                        {currentProgram.curriculumNote} Coursework complies with syllabus issued by the BISE Sargodha Board.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 bg-white border border-[#E2DDD5]">
                        <span className="block text-[#756A67]">Examination Body</span>
                        <strong className="text-[#1F1A19] font-serif text-sm">{currentProgram.board}</strong>
                      </div>
                      <div className="p-2.5 bg-white border border-[#E2DDD5]">
                        <span className="block text-[#756A67]">Program Length</span>
                        <strong className="text-[#1F1A19] font-serif text-sm">2 Academic Years</strong>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Path to Admissions */}
              <div className="pt-4 mt-4 border-t border-[#E2DDD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-sans">
                <div className="text-xs text-[#756A67]">
                  <span>Meet Principal Ehsanullah Malik directly for enrollment.</span>
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
      <Section variant="alt" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto p-6 bg-[#FAF7F2] border border-[#E2DDD5] text-center space-y-3 font-sans">
            <Award className="w-5 h-5 text-[#8F0D19] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#1F1A19]">
              Standardized Excellence Aligned with BISE Sargodha
            </h3>
            <p className="text-xs sm:text-sm text-[#453D3B] max-w-2xl mx-auto leading-relaxed">
              From science laboratories to library study spaces, Noble Science College delivers the complete curriculum as per standard course requirements for each academic group.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  )
}
