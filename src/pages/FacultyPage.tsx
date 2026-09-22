import React from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Award, Users, BookOpen, Mic, Sparkles } from 'lucide-react'

interface FacultyPageProps {
  onNavClick: (href: string) => void
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onNavClick }) => {
  return (
    <div className="w-full">
      <PageHeader
        kicker="Academic Staff"
        title="Teaching Faculty & Mentorship"
        subtitle="Staffed by highly qualified educators, including MPhil and Bachelor's degree holders, dedicated to exceptional education in Wan Bhachran."
        breadcrumb="Faculty"
        onHomeClick={() => onNavClick('#home')}
      />

      {/* Verified Faculty Standard Banner */}
      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-[#FAF7F2] border border-[#E2DDD5] text-left space-y-4 font-sans">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#8F0D19]" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19]">
                  Official Academic Standard
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1A19]">
                  Faculty Credentials & Qualifications
                </h2>
              </div>
            </div>

            <p className="text-base text-[#453D3B] leading-relaxed font-serif italic border-l-2 border-[#8F0D19] pl-4 py-1">
              "{COLLEGE_DATA.academics.facultyQualification}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 bg-white border border-[#E2DDD5]">
                <strong className="block text-[#1F1A19] font-serif font-bold text-sm mb-1">
                  MPhil Degree Holders
                </strong>
                <span className="text-[#756A67]">
                  Advanced postgraduate educators delivering rigorous academic analysis and subject depth across Intermediate programs.
                </span>
              </div>
              <div className="p-4 bg-white border border-[#E2DDD5]">
                <strong className="block text-[#1F1A19] font-serif font-bold text-sm mb-1">
                  Bachelor's Degree Holders
                </strong>
                <span className="text-[#756A67]">
                  Dedicated graduate teachers fostering solid foundational literacy, mathematics, and science mastery from Nursery to Matric.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership Profile: Principal Ehsanullah Malik */}
      <Section variant="alt" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto bg-[#FAF7F2] border border-[#E2DDD5] p-6 sm:p-8 text-left font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              <div className="sm:col-span-5 text-center">
                <div className="border border-[#E2DDD5] bg-[#F2ECE1] p-2 inline-block">
                  <div className="overflow-hidden border border-[#E2DDD5]">
                    <img
                      src={COLLEGE_DATA.principal.photoUrl}
                      alt={`Principal ${COLLEGE_DATA.principal.name}`}
                      className="w-48 h-auto mx-auto object-cover aspect-[3/4]"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-2 mt-1.5 border-t border-[#E2DDD5] text-left">
                    <p className="font-serif italic text-xs text-[#756A67]">
                      Figure: Principal Ehsanullah Malik
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-7 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19]">
                  Academic Leadership
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F1A19]">
                  {COLLEGE_DATA.principal.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#1D5B56] font-semibold">
                  {COLLEGE_DATA.principal.title}
                </p>
                <p className="text-sm text-[#453D3B] leading-relaxed">
                  Principal Ehsanullah Malik provides daily pedagogical direction, personally conducts student readiness interviews, and leads the faculty team with the ambition of shaping ordinary students into capable, good human beings.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Teaching Ethos: Beyond the Textbook */}
      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          <SectionHeader
            kicker="Pedagogical Values"
            title="Beyond Ordinary Coursework"
            subtitle="How our teaching staff implements the vision of a 'heaven of knowledge'."
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 text-left font-sans">
            <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2.5">
              <div className="p-1.5 bg-[#F2ECE1] border border-[#E2DDD5] text-[#8F0D19] w-fit">
                <Mic className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#1F1A19]">Public Speaking Development</h3>
              <p className="text-xs text-[#756A67] leading-relaxed">
                Faculty actively mentor students to overcome hesitation, formulate arguments, and present with poise during discussions and classroom exercises.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2.5">
              <div className="p-1.5 bg-[#F2ECE1] border border-[#E2DDD5] text-[#1D5B56] w-fit">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#1F1A19]">Confidence & Self-Belief</h3>
              <p className="text-xs text-[#756A67] leading-relaxed">
                Teachers focus on encouraging ordinary students, giving them individual attention to overcome academic hurdles and realize their potential.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2.5">
              <div className="p-1.5 bg-[#F2ECE1] border border-[#E2DDD5] text-[#8F0D19] w-fit">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#1F1A19]">Board Syllabus Mastery</h3>
              <p className="text-xs text-[#756A67] leading-relaxed">
                Structured preparation according to standard course requirements prescribed by the Sargodha Board for science, computer, commerce, and arts groups.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Flexible Faculty Architecture Notice */}
      <Section variant="alt" spacing="md">
        <Container>
          <div className="max-w-3xl mx-auto p-5 bg-[#FAF7F2] border border-[#E2DDD5] text-center space-y-2 font-sans">
            <Users className="w-5 h-5 text-[#8F0D19] mx-auto" />
            <h3 className="font-serif text-lg font-bold text-[#1F1A19]">
              Departmental Roster Integration
            </h3>
            <p className="text-xs text-[#756A67] max-w-xl mx-auto leading-relaxed">
              In accordance with our strict data integrity policy, individual faculty member directories and departmental profiles will be added as official rosters are published by college administration.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  )
}
