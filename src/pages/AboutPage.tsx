import React from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading, SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Award, BookOpen } from 'lucide-react'

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Historical Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#8F0D19]/40" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F0D19] font-sans">
                  The Origin • Established 2009
                </span>
              </div>

              <Heading as="h2" size="display" tone="default">
                A Personal Ambition to Serve Wan Bhachran
              </Heading>

              <div className="space-y-4 text-base text-[#453D3B] leading-relaxed font-sans">
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

              <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium text-[#756A67] font-sans">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] border border-[#E2DDD5]">
                  <Award className="w-3.5 h-3.5 text-[#8F0D19]" />
                  Affiliated with Sargodha Board
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] border border-[#E2DDD5]">
                  <BookOpen className="w-3.5 h-3.5 text-[#1D5B56]" />
                  Nursery through Class 12
                </span>
              </div>
            </div>

            {/* Right: Principal Portrait Frame + Campus Architecture Plate (5 cols) */}
            <div className="lg:col-span-5 space-y-5 text-center">
              <div className="relative mx-auto max-w-sm border border-[#E2DDD5] bg-[#FAF7F2] p-3 text-left">
                <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1]">
                  <img
                    src={COLLEGE_DATA.principal.photoUrl}
                    alt={`Principal ${COLLEGE_DATA.principal.name}`}
                    className="w-full h-auto object-cover aspect-[3/4]"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2.5 mt-2 border-t border-[#E2DDD5]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8F0D19] font-semibold block font-sans">
                    Founder & Principal
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#1F1A19] mt-0.5">
                    {COLLEGE_DATA.principal.name}
                  </h3>
                  <p className="font-serif italic text-xs text-[#756A67] mt-0.5">
                    Figure: Principal Ehsanullah Malik, Founder and Institutional Head.
                  </p>
                </div>
              </div>

              {/* Campus Building Plate */}
              <div className="max-w-sm mx-auto border border-[#E2DDD5] bg-[#FAF7F2] p-3 text-left">
                <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1] aspect-[16/10]">
                  <img
                    src="/images/campus/campus-building.jpg"
                    alt="Wan Bhachran Campus Building"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 mt-2 border-t border-[#E2DDD5]">
                  <p className="font-serif italic text-xs text-[#756A67]">
                    Figure: Campus academic wings and entrance grounds at Wan Bhachran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Chapter 2: The Core Mission */}
      <Section variant="alt" spacing="lg" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto text-left space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#8F0D19]/40" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] font-sans">
                Our Foundation
              </span>
            </div>
            
            <Heading as="h2" size="section" tone="default">
              The Mission: Quality for Ordinary Students
            </Heading>

            {/* Formal Editorial Pull-Quote Block */}
            <div className="my-6 border-y border-[#E2DDD5] py-6 space-y-4">
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#1F1A19] leading-relaxed max-w-3xl">
                "{COLLEGE_DATA.mission}"
              </blockquote>
              <div className="flex items-center gap-2 text-xs font-sans text-[#756A67]">
                <span className="w-4 h-px bg-[#8F0D19]" />
                <span className="uppercase tracking-[0.15em] font-semibold text-[#8F0D19]">Mission Statement</span>
                <span>•</span>
                <span>Foundational Charter, Established 2009</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#453D3B] leading-relaxed font-sans max-w-3xl">
              In practical terms, this mission means that Noble Science College does not filter candidates by socioeconomic privilege or impose rigid academic exclusion. Admissions are open to all students wishing to learn, supported by fee assistance and scholarships for needy and academically brilliant youth.
            </p>
          </div>
        </Container>
      </Section>

      {/* Chapter 3: Vision of "A Heaven of Knowledge" — Heritage Charter Layout */}
      <Section variant="white" spacing="lg" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div className="space-y-2 border-b border-[#E2DDD5] pb-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#8F0D19]/40" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] font-sans">
                  Educational Philosophy
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1A19] tracking-tight">
                A "Heaven of Knowledge"
              </h2>
              <p className="text-sm font-urdu text-[#8F0D19] pt-1" dir="rtl">
                علم و حکمت کا گہوارہ
              </p>
            </div>

            {/* Formal Vision Pull-Quote */}
            <div className="border-l-2 border-[#8F0D19] pl-6 py-2">
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#1F1A19] leading-relaxed">
                "{COLLEGE_DATA.vision}"
              </blockquote>
            </div>

            {/* The Three Pillars Derived from the Vision */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans">
              <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F0D19] block pb-1 border-b border-[#E2DDD5]/70">
                  Oratory Discipline
                </span>
                <h3 className="font-serif text-base font-bold text-[#1F1A19]">Public Speaking</h3>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  Cultivating oral expression, articulation, and the poise to speak clearly before assemblies and peers without hesitation.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1D5B56] block pb-1 border-b border-[#E2DDD5]/70">
                  Mindset & Poise
                </span>
                <h3 className="font-serif text-base font-bold text-[#1F1A19]">Building Confidence</h3>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  Going beyond standard rote memorization to instill self-belief, critical reasoning, and an eagerness to take intellectual initiative.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F0D19] block pb-1 border-b border-[#E2DDD5]/70">
                  Moral Formation
                </span>
                <h3 className="font-serif text-base font-bold text-[#1F1A19]">Shaping Character</h3>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  Fostering moral responsibility, personal integrity, and humane conduct to prepare students to contribute meaningfully to society.
                </p>
              </div>
            </div>

            {/* Visual Documentation of Campus Character Building */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-[#E2DDD5] bg-[#FAF7F2] p-3 text-left">
                <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1] aspect-[16/10]">
                  <img
                    src="/images/campus/student-public-speaking-speech.jpg"
                    alt="Student Orator Delivering Speech at Assembly"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2.5 mt-2 border-t border-[#E2DDD5]">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#8F0D19] font-sans block">
                    Public Speaking & Confidence
                  </span>
                  <p className="font-serif italic text-xs text-[#756A67] mt-0.5">
                    Figure: A student practicing declamation and public speaking at the microphone during a college assembly.
                  </p>
                </div>
              </div>

              <div className="border border-[#E2DDD5] bg-[#FAF7F2] p-3 text-left">
                <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1] aspect-[16/10]">
                  <img
                    src="/images/campus/student-gathering-assembly.jpg"
                    alt="Noble Science College Student Body Assembly"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2.5 mt-2 border-t border-[#E2DDD5]">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#1D5B56] font-sans block">
                    Student Community
                  </span>
                  <p className="font-serif italic text-xs text-[#756A67] mt-0.5">
                    Figure: Noble Science College students gathered attentively for an academic convocation session in Wan Bhachran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Chapter 4: Historical Milestone Progression */}
      <Section variant="alt" spacing="lg">
        <Container>
          <SectionHeader
            kicker="Chronology"
            title="Institutional Milestones"
            subtitle="Anchored in the verified history of Noble Science College, Wan Bhachran."
          />

          <div className="max-w-3xl mx-auto divide-y divide-[#E2DDD5] border-y border-[#E2DDD5] text-left font-sans">
            <div className="py-5 flex items-start gap-5">
              <span className="font-serif font-bold text-xl text-[#8F0D19] shrink-0 w-20">2009</span>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#1F1A19]">Establishment in Wan Bhachran</h4>
                <p className="text-xs sm:text-sm text-[#756A67] leading-relaxed">
                  Founded by Principal Ehsanullah Malik while transitioning from government employment, driven by the personal ambition to establish an independent college serving local students.
                </p>
              </div>
            </div>

            <div className="py-5 flex items-start gap-5">
              <span className="font-serif font-bold text-xl text-[#1D5B56] shrink-0 w-20">Academic</span>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#1F1A19]">Sargodha Board Alignment & Higher Secondary Tracks</h4>
                <p className="text-xs sm:text-sm text-[#756A67] leading-relaxed">
                  Integration of intermediate programs in F.Sc, ICS, I.Com, and Arts alongside foundational schooling from Nursery through Class 10.
                </p>
              </div>
            </div>

            <div className="py-5 flex items-start gap-5">
              <span className="font-serif font-bold text-xl text-[#8F0D19] shrink-0 w-20">Present</span>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#1F1A19]">Accessible Open Admissions & Community Mentorship</h4>
                <p className="text-xs sm:text-sm text-[#756A67] leading-relaxed">
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
