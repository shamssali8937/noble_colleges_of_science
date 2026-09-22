import React from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading, SectionHeader } from '@/components/ui/Heading'
import {
  Phone,
  ShieldAlert,
  Award,
  FileX,
  ClipboardX,
  FileCheck2,
  MapPin,
  HeartHandshake,
} from 'lucide-react'

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
      <Section variant="parchment" spacing="sm" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto p-5 sm:p-6 bg-white border border-[#E3DCD3] rounded-lg shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
            <div className="flex items-start gap-3.5">
              <ShieldAlert className="w-6 h-6 text-[#8D1B2D] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-base font-semibold text-[#111F18]">
                  Information-Only Website Notice
                </strong>
                <p className="text-xs sm:text-sm text-[#384640] leading-relaxed mt-0.5">
                  Noble Science College conducts admissions entirely in person. There is <strong>no online application form</strong>, file upload, or digital fee payment required.
                </p>
              </div>
            </div>
            <a
              href="tel:03336831370"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#133826] hover:bg-[#0E2A1C] text-white text-xs font-semibold shrink-0 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 0333-6831370</span>
            </a>
          </div>
        </Container>
      </Section>

      {/* Core Admission Pillars (What is NOT required) */}
      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-5xl mx-auto text-left">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8D1B2D]">
                Open & Accessible Access
              </span>
              <Heading as="h2" size="section" tone="default" className="mt-1">
                Zero Barriers to Education
              </Heading>
              <p className="text-sm text-[#525F5A] max-w-2xl mx-auto mt-2">
                Designed to make joining Noble Science College as simple and welcoming as possible for parents and students in Wan Bhachran.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E3DCD3] space-y-2">
                <FileX className="w-6 h-6 text-[#8D1B2D]" />
                <h3 className="font-serif font-bold text-base text-[#111F18]">No Admission Form</h3>
                <p className="text-xs text-[#525F5A] leading-relaxed">
                  No cumbersome admission booklets to fill. Students enroll directly upon fee submission.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E3DCD3] space-y-2">
                <ClipboardX className="w-6 h-6 text-[#8D1B2D]" />
                <h3 className="font-serif font-bold text-base text-[#111F18]">No Required Documents</h3>
                <p className="text-xs text-[#525F5A] leading-relaxed">
                  No complex documentary prerequisites are demanded for initial institutional admission.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E3DCD3] space-y-2">
                <FileCheck2 className="w-6 h-6 text-[#133826]" />
                <h3 className="font-serif font-bold text-base text-[#111F18]">No Entry Test</h3>
                <p className="text-xs text-[#525F5A] leading-relaxed">
                  Replaced with a friendly personal interview with the Principal to assess mindset and readiness.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E3DCD3] space-y-2">
                <HeartHandshake className="w-6 h-6 text-[#C88E2E]" />
                <h3 className="font-serif font-bold text-base text-[#111F18]">Open Eligibility</h3>
                <p className="text-xs text-[#525F5A] leading-relaxed">
                  Open to all students wishing to begin or advance their education at Noble Science College.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The 6-Step Visual Admission Journey */}
      <Section variant="sandstone" spacing="lg" hasBorderBottom>
        <Container>
          <SectionHeader
            kicker="Step-By-Step Process"
            title="The 6-Step Admission Journey"
            subtitle="From initial telephone inquiry to sitting in your first lecture in Wan Bhachran."
          />

          <div className="max-w-4xl mx-auto space-y-5 text-left">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white p-6 rounded-lg border border-[#E3DCD3] shadow-xs flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-[#133826]/40 transition-colors"
              >
                {/* Step Number Badge */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#133826] text-white flex items-center justify-center font-serif font-bold text-xl shadow-xs group-hover:scale-105 transition-transform">
                    {step.num}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-serif text-xl font-bold text-[#111F18]">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D1B2D] px-2.5 py-0.5 rounded bg-[#8D1B2D]/10">
                      {step.actor}
                    </span>
                  </div>

                  <p className="text-sm text-[#384640] leading-relaxed font-sans">
                    {step.description}
                  </p>

                  <div className="pt-1">
                    <span className="inline-block text-xs font-medium text-[#133826] bg-[#133826]/5 px-2.5 py-1 rounded border border-[#133826]/10">
                      Key Note: {step.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Scholarships & Financial Assistance */}
      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg p-6 sm:p-8 text-left space-y-5">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#C88E2E]" />
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8D1B2D]">
                  Student Support
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#111F18]">
                  Scholarships & Concessions
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#384640] leading-relaxed">
              In accordance with our founding mission to make education accessible to ordinary families, Noble Science College provides scholarships for:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 bg-white rounded border border-[#E3DCD3]">
                <strong className="block text-[#111F18] font-serif text-base mb-1">
                  Needy Students
                </strong>
                <p className="text-xs text-[#525F5A] leading-relaxed">
                  Financial aid to support families who demonstrate financial hardship, ensuring no student is turned away due to lack of means.
                </p>
              </div>

              <div className="p-4 bg-white rounded border border-[#E3DCD3]">
                <strong className="block text-[#111F18] font-serif text-base mb-1">
                  Academically Brilliant Students
                </strong>
                <p className="text-xs text-[#525F5A] leading-relaxed">
                  Merit scholarships recognizing high marks, exceptional academic enthusiasm, and intellectual promise in matriculation.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#65756E] italic pt-2">
              Scholarship applications are reviewed during the personal meeting with Principal Ehsanullah Malik.
            </p>
          </div>
        </Container>
      </Section>

      {/* Action Banner for Parents and Applicants */}
      <Section variant="pine" spacing="md">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Heading as="h2" size="section" tone="light">
              Ready to Visit the Campus?
            </Heading>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto">
              Please call Principal Ehsanullah Malik or message the college on WhatsApp to coordinate your campus tour.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="tel:03336831370"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#8D1B2D] hover:bg-[#741725] text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly: 0333-6831370</span>
              </a>
              <div className="inline-flex items-center gap-2 text-white/80 text-xs px-4 py-3 rounded-md bg-white/10 border border-white/20">
                <MapPin className="w-3.5 h-3.5 text-[#C88E2E]" />
                <span>Near Old Musa Khel Road, Wan Bhachran</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
