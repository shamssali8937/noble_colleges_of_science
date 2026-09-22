import React from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading, SectionHeader } from '@/components/ui/Heading'
import {
  ShieldAlert,
  FileX,
  ClipboardX,
  FileCheck2,
  HeartHandshake,
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/common/BrandIcons'

interface AdmissionsPageProps {
  onNavClick: (href: string) => void
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onNavClick }) => {
  const steps = [
    {
      num: '01',
      title: 'Contact the College',
      actor: 'Student / Parent',
      description:
        'Interested students or parents reach out via phone or WhatsApp at 0333-6831370 or through the official Facebook page to introduce themselves and arrange a convenient campus visit.',
      highlight: 'Direct call or WhatsApp to 0333-6831370',
    },
    {
      num: '02',
      title: 'Visit the Campus in Person',
      actor: 'In-Person Visit',
      description:
        'Visit the college near Old Musa Khel Road in Wan Bhachran. You will receive complete information about the institution, tour the scientific laboratories, visit the library, and inspect the sports grounds.',
      highlight: 'Full institutional walkthrough & orientation',
    },
    {
      num: '03',
      title: 'Direct Meeting with Principal',
      actor: 'Principal Ehsanullah Malik',
      description:
        'Prospective students and parents get the opportunity to meet Principal Ehsanullah Malik directly to ask questions and openly discuss all aspects of academic life, discipline, and expectations.',
      highlight: 'Direct access to institutional leadership',
    },
    {
      num: '04',
      title: 'Student Readiness Interview',
      actor: 'Informal Conversation',
      description:
        'There is NO formal entrance test. Instead, the Principal conducts an informal interview to understand the student’s mindset, academic interests, public speaking aptitude, and readiness for college studies.',
      highlight: 'Evaluates attitude and potential, not exam anxiety',
    },
    {
      num: '05',
      title: 'Fee Submission & Record Entry',
      actor: 'Official Enrollment',
      description:
        'No complicated admission forms or prerequisite documents are required. Students enroll simply by submitting the applicable fee, after which their name is formally entered into the official college register.',
      highlight: 'Immediate registration without paperwork hurdles',
    },
    {
      num: '06',
      title: 'Scholarship Assessment',
      actor: 'Deserving & Merit Candidates',
      description:
        'Scholarships and financial support are made available for needy students and academically brilliant candidates to ensure financial constraints never prevent talent from blossoming.',
      highlight: 'Need-based and merit-based assistance',
    },
  ]

  return (
    <div className="w-full">
      <PageHeader
        kicker="Admissions Process"
        title="Walk-In Admission Journey"
        subtitle="A welcoming, transparent admission procedure without entrance exams, complicated paperwork, or online forms. Meet Principal Ehsanullah Malik directly."
        breadcrumb="Admissions"
        onHomeClick={() => onNavClick('#home')}
      />

      {/* Critical Institutional Notice (No Online Application) */}
      <Section variant="alt" spacing="sm" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto p-4 sm:p-5 bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#8F0D19] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#8F0D19] font-sans">
                  Information-Only Website Notice
                </strong>
                <p className="text-xs text-[#453D3B] leading-relaxed mt-0.5 font-sans">
                  Noble Science College conducts admissions entirely in person. There is <strong>no online application form</strong>, file upload, or digital fee payment required.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/923336831370?text=Hello%20Noble%20Science%20College%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D5B56] hover:bg-[#164440] text-white text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors font-sans"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Admissions</span>
            </a>
          </div>
        </Container>
      </Section>

      {/* Core Admission Pillars */}
      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-5xl mx-auto text-left">
            <div className="text-left mb-8">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#8F0D19]/40" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F0D19] font-sans">
                  Open & Accessible Access
                </span>
              </div>
              <Heading as="h2" size="section" tone="default" className="mt-1">
                Zero Barriers to Education
              </Heading>
              <p className="text-sm text-[#756A67] max-w-2xl mt-1.5 font-sans">
                Designed to make joining Noble Science College as simple and welcoming as possible for parents and students in Wan Bhachran.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
              <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] block pb-1 border-b border-[#E2DDD5]/70">
                  Paperwork
                </span>
                <div className="flex items-center gap-2 pt-1">
                  <FileX className="w-4 h-4 text-[#8F0D19]" />
                  <h3 className="font-serif font-bold text-base text-[#1F1A19]">No Forms</h3>
                </div>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  No cumbersome admission booklets to fill. Students enroll directly upon fee submission.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] block pb-1 border-b border-[#E2DDD5]/70">
                  Prerequisites
                </span>
                <div className="flex items-center gap-2 pt-1">
                  <ClipboardX className="w-4 h-4 text-[#8F0D19]" />
                  <h3 className="font-serif font-bold text-base text-[#1F1A19]">No Pre-Docs</h3>
                </div>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  No complex documentary prerequisites are demanded for initial institutional admission.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1D5B56] block pb-1 border-b border-[#E2DDD5]/70">
                  Evaluation
                </span>
                <div className="flex items-center gap-2 pt-1">
                  <FileCheck2 className="w-4 h-4 text-[#1D5B56]" />
                  <h3 className="font-serif font-bold text-base text-[#1F1A19]">No Entry Test</h3>
                </div>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  Replaced with a friendly personal interview with the Principal to assess mindset and readiness.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] block pb-1 border-b border-[#E2DDD5]/70">
                  Inclusion
                </span>
                <div className="flex items-center gap-2 pt-1">
                  <HeartHandshake className="w-4 h-4 text-[#8F0D19]" />
                  <h3 className="font-serif font-bold text-base text-[#1F1A19]">Open Eligibility</h3>
                </div>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  Open to all students wishing to begin or advance their education at Noble Science College.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The 6-Step Visual Admission Journey with Real Plate */}
      <Section variant="alt" spacing="lg" hasBorderBottom>
        <Container>
          <SectionHeader
            kicker="Step-By-Step Process"
            title="The 6-Step Admission Journey"
            subtitle="From initial telephone inquiry to sitting in your first lecture in Wan Bhachran."
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            {/* Steps (7 cols) */}
            <div className="lg:col-span-7 divide-y divide-[#E2DDD5] border-y border-[#E2DDD5]">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="py-4.5 sm:py-5 flex items-start gap-4 transition-colors duration-150 hover:bg-[#FAF7F2]/60 px-2"
                >
                  {/* Step Numeral */}
                  <div className="w-8 h-8 bg-[#F2ECE1] border border-[#E2DDD5] text-[#8F0D19] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    {step.num}
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-serif text-base font-bold text-[#1F1A19]">
                        {step.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#8F0D19] font-sans">
                        {step.actor}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#453D3B] leading-relaxed font-sans pt-0.5">
                      {step.description}
                    </p>

                    <div className="pt-0.5">
                      <span className="inline-block text-[11px] text-[#1D5B56] font-medium font-sans">
                        Note: {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Walkin Photo Plate (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="border border-[#E2DDD5] bg-[#FAF7F2] p-2.5">
                <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1] aspect-[4/3]">
                  <img
                    src="/images/campus/admissions-desk.jpg"
                    alt="In-person admissions desk"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 mt-2 border-t border-[#E2DDD5]">
                  <p className="font-serif italic text-xs text-[#756A67]">
                    Figure: Campus admissions office and administrative registration station.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] text-xs text-[#453D3B] font-sans space-y-1.5">
                <span className="font-serif font-bold text-sm text-[#1F1A19] block">
                  Campus Admissions Office
                </span>
                <p className="text-[#756A67]">
                  Near Old Musa Khel Road, Wan Bhachran, District Mianwali, Punjab.
                </p>
                <div className="pt-1 text-[11px] text-[#8F0D19] font-semibold uppercase tracking-wider">
                  Hours: 8:00 AM – 2:00 PM (Monday to Saturday)
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
