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
          <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg shadow-xs text-left space-y-4">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#C88E2E]" />
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8D1B2D]">
                  Official Academic Standard
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#111F18]">
                  Faculty Credentials & Qualifications
                </h2>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#384640] leading-relaxed">
              "{COLLEGE_DATA.academics.facultyQualification}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 bg-white rounded border border-[#E3DCD3]">
                <strong className="block text-[#111F18] font-semibold text-sm mb-1">
                  MPhil Degree Holders
                </strong>
                <span className="text-[#525F5A]">
                  Advanced postgraduate educators delivering rigorous academic analysis and subject depth across Intermediate programs.
                </span>
              </div>
              <div className="p-4 bg-white rounded border border-[#E3DCD3]">
                <strong className="block text-[#111F18] font-semibold text-sm mb-1">
                  Bachelor's Degree Holders
                </strong>
                <span className="text-[#525F5A]">
                  Dedicated graduate teachers fostering solid foundational literacy, mathematics, and science mastery from Nursery to Matric.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership Profile: Principal Ehsanullah Malik */}
      <Section variant="parchment" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto bg-white border border-[#E3DCD3] rounded-lg p-6 sm:p-8 shadow-xs text-left">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-4 text-center">
                <img
                  src={COLLEGE_DATA.principal.photoUrl}
                  alt={`Principal ${COLLEGE_DATA.principal.name}`}
                  className="w-48 h-auto mx-auto rounded-md border border-[#E3DCD3] shadow-xs"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-8 space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#133826]">
                  Academic Leadership
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#111F18]">
                  {COLLEGE_DATA.principal.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#8D1B2D] font-medium">
                  {COLLEGE_DATA.principal.title}
                </p>
                <p className="text-sm text-[#384640] leading-relaxed">
                  Principal Ehsanullah Malik provides daily pedagogical direction, personally conducts student readiness interviews, and leads the faculty team with the ambition of shaping students into capable, good human beings.
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

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg space-y-3">
              <div className="p-2.5 rounded bg-[#133826]/10 text-[#133826] w-fit">
                <Mic className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#111F18]">Public Speaking Development</h3>
              <p className="text-xs sm:text-sm text-[#525F5A] leading-relaxed">
                Faculty actively mentor students to overcome hesitation, formulate arguments, and present with poise during discussions and classroom exercises.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg space-y-3">
              <div className="p-2.5 rounded bg-[#8D1B2D]/10 text-[#8D1B2D] w-fit">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#111F18]">Confidence & Self-Belief</h3>
              <p className="text-xs sm:text-sm text-[#525F5A] leading-relaxed">
                Teachers focus on encouraging ordinary students, giving them individual attention to overcome academic hurdles and realize their potential.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg space-y-3">
              <div className="p-2.5 rounded bg-[#C88E2E]/10 text-[#C88E2E] w-fit">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#111F18]">Board Syllabus Mastery</h3>
              <p className="text-xs sm:text-sm text-[#525F5A] leading-relaxed">
                Structured preparation according to standard course requirements prescribed by the Sargodha Board for science, computer, commerce, and arts groups.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Flexible Faculty Architecture Notice */}
      <Section variant="sandstone" spacing="md">
        <Container>
          <div className="max-w-3xl mx-auto p-6 bg-white border border-[#E3DCD3] rounded-lg text-center space-y-3">
            <Users className="w-8 h-8 text-[#133826] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#111F18]">
              Departmental Roster Integration
            </h3>
            <p className="text-xs sm:text-sm text-[#525F5A] max-w-xl mx-auto leading-relaxed">
              In accordance with our strict data integrity policy, individual faculty member directories and departmental profiles will be added as official rosters are published by college administration.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  )
}
