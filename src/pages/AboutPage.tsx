import React from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading, SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Award, Compass, Heart, Mic, Sparkles, BookOpen, Quote } from 'lucide-react'

interface AboutPageProps {
  onNavClick: (href: string) => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavClick }) => {
  return (
    <div className="w-full">
      <PageHeader
        kicker="Institutional Profile"
        title="About Noble Science College"
        subtitle="The story of an educational institution built in Wan Bhachran to bring academic excellence and personal mentorship to ordinary students."
        breadcrumb="About"
        onHomeClick={() => onNavClick('#home')}
      />

      {/* Chapter 1: The Founding Ambition (2009) */}
      <Section variant="white" spacing="lg" hasBorderBottom>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Deep Historical Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8D1B2D]">
                <Compass className="w-4 h-4" />
                <span>The Origin • 2009</span>
              </div>

              <Heading as="h2" size="display" tone="default">
                A Personal Ambition to Serve Wan Bhachran
              </Heading>

              <div className="space-y-4 text-base sm:text-lg text-[#384640] leading-relaxed font-sans">
                <p>
                  Noble Science College was established in 2009 by Principal Ehsanullah Malik. At the time, he was working as a government employee, but held a strong personal ambition to run his own college.
                </p>
                <p>
                  Rather than locating the institution in an established commercial district, he made the deliberate decision to build in the underprivileged area of Wan Bhachran. His goal was straightforward yet transformative: to change the trajectory of ordinary students by providing them with high quality education that had previously been out of reach.
                </p>
                <p>
                  Since its founding year, the college has operated with the principle that every student, regardless of family background or circumstance, deserves the opportunity to excel academically and grow into an upright, capable human being.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#65756E]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FAF8F5] border border-[#E3DCD3]">
                  <Award className="w-3.5 h-3.5 text-[#C88E2E]" />
                  Affiliated with Sargodha Board
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FAF8F5] border border-[#E3DCD3]">
                  <BookOpen className="w-3.5 h-3.5 text-[#133826]" />
                  Continuous Educational Journey: Nursery to Class 12
                </span>
              </div>
            </div>

            {/* Right: Principal Portrait Frame (5 cols) */}
            <div className="lg:col-span-5 text-center">
              <div className="relative mx-auto max-w-sm">
                <div className="p-3 bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg shadow-md">
                  <div className="overflow-hidden rounded border border-[#133826]/20">
                    <img
                      src={COLLEGE_DATA.principal.photoUrl}
                      alt={`Principal ${COLLEGE_DATA.principal.name}`}
                      className="w-full h-auto object-cover aspect-[3/4]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-4 p-4 bg-[#133826] text-white rounded-md text-left">
                  <span className="text-[11px] uppercase tracking-wider text-[#C88E2E] font-semibold block">
                    Founder & Principal
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                    {COLLEGE_DATA.principal.name}
                  </h3>
                  <p className="text-xs text-white/80 font-sans mt-1">
                    Guided the establishment and academic growth of the college in Wan Bhachran since 2009.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Chapter 2: The Core Mission */}
      <Section variant="parchment" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#133826]">
              Our Foundation
            </span>
            <Heading as="h2" size="section" tone="default">
              The Mission: Quality for Ordinary Students
            </Heading>

            <div className="p-6 sm:p-8 bg-white border border-[#E3DCD3] rounded-lg shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#133826]/10 text-[#133826] shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <blockquote className="font-serif italic text-xl sm:text-2xl text-[#111F18] leading-relaxed">
                    "{COLLEGE_DATA.mission}"
                  </blockquote>
                  <p className="text-sm sm:text-base text-[#525F5A] leading-relaxed pt-2">
                    In practical terms, this mission means that Noble Science College does not filter candidates by socioeconomic privilege or impose rigid academic exclusion. Admissions are open to all students wishing to learn, supported by fee assistance and scholarships for needy and academically brilliant youth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Chapter 3: Vision of "A Heaven of Knowledge" */}
      <Section variant="pine" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#C88E2E] px-3 py-1 rounded bg-white/10 border border-white/20 inline-block">
                Educational Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                A "Heaven of Knowledge"
              </h2>
              <p className="text-sm font-urdu text-white/80" dir="rtl">
                علم و حکمت کا گہوارہ
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white/5 border border-white/15 rounded-lg space-y-4">
              <Quote className="w-8 h-8 text-[#C88E2E] opacity-75" />
              <blockquote className="font-serif italic text-xl sm:text-2xl text-white leading-relaxed">
                "{COLLEGE_DATA.vision}"
              </blockquote>
            </div>

            {/* The Three Pillars Derived from the Vision */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 bg-white/5 border border-white/10 rounded-md space-y-2">
                <Mic className="w-6 h-6 text-[#C88E2E]" />
                <h3 className="font-serif text-lg font-semibold text-white">Public Speaking</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  Cultivating oral expression, articulation, and the ability to speak clearly before peers and assemblies without apprehension.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-md space-y-2">
                <Sparkles className="w-6 h-6 text-[#C88E2E]" />
                <h3 className="font-serif text-lg font-semibold text-white">Building Confidence</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  Going beyond standard memorization to instill self-belief, critical reasoning, and an eagerness to take intellectual initiative.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-md space-y-2">
                <Heart className="w-6 h-6 text-[#C88E2E]" />
                <h3 className="font-serif text-lg font-semibold text-white">Shaping Character</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  Fostering moral responsibility, discipline, and humane conduct to prepare students to contribute meaningfully to society.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Chapter 4: Historical Milestone Progression */}
      <Section variant="white" spacing="md">
        <Container>
          <SectionHeader
            kicker="Chronology"
            title="Institutional Milestones"
            subtitle="Anchored in the verified history of Noble Science College, Wan Bhachran."
          />

          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div className="flex items-start gap-4 p-5 bg-[#FAF8F5] border border-[#E3DCD3] rounded-md">
              <span className="font-serif font-bold text-2xl text-[#8D1B2D] shrink-0 pt-0.5">2009</span>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#111F18]">Establishment in Wan Bhachran</h4>
                <p className="text-xs sm:text-sm text-[#525F5A] leading-relaxed">
                  Founded by Principal Ehsanullah Malik while transitioning from government employment, driven by the personal ambition to establish an independent college serving local students.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#FAF8F5] border border-[#E3DCD3] rounded-md">
              <span className="font-serif font-bold text-2xl text-[#133826] shrink-0 pt-0.5">Academic</span>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#111F18]">Sargodha Board Alignment & Higher Secondary Tracks</h4>
                <p className="text-xs sm:text-sm text-[#525F5A] leading-relaxed">
                  Integration of intermediate programs in F.Sc, ICS, I.Com, and Arts alongside foundational schooling from Nursery through Class 10.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#FAF8F5] border border-[#E3DCD3] rounded-md">
              <span className="font-serif font-bold text-2xl text-[#C88E2E] shrink-0 pt-0.5">Present</span>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#111F18]">Accessible Open Admissions & Community Mentorship</h4>
                <p className="text-xs sm:text-sm text-[#525F5A] leading-relaxed">
                  Continuing the policy of open walk-in admissions, personal Principal interviews, and scholarships for needy and academically brilliant students.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
