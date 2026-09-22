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
      <Section variant="alt" spacing="sm" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto p-4 sm:p-5 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#8F0D19] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-semibold text-[#1F1A19] font-sans">
                  Information-Only Website Notice
                </strong>
                <p className="text-xs text-[#453D3B] leading-relaxed mt-0.5 font-sans">
                  Noble Science College conducts admissions entirely in person. There is <strong>no online application form</strong>, file upload, or digital fee payment required.
                </p>
              </div>
            </div>
            <a
              href="tel:03336831370"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#8F0D19] hover:bg-[#6F0A13] text-white text-xs font-semibold shrink-0 transition-colors font-sans"
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
            <div className="text-left mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8F0D19] font-sans">
                Open & Accessible Access
              </span>
              <Heading as="h2" size="section" tone="default" className="mt-1">
                Zero Barriers to Education
              </Heading>
              <p className="text-sm text-[#756A67] max-w-2xl mt-1.5 font-sans">
                Designed to make joining Noble Science College as simple and welcoming as possible for parents and students in Wan Bhachran.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
              <div className="p-4 rounded-xs bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <FileX className="w-5 h-5 text-[#8F0D19]" />
                <h3 className="font-serif font-bold text-base text-[#1F1A19]">No Admission Form</h3>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  No cumbersome admission booklets to fill. Students enroll directly upon fee submission.
                </p>
              </div>

              <div className="p-4 rounded-xs bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <ClipboardX className="w-5 h-5 text-[#8F0D19]" />
                <h3 className="font-serif font-bold text-base text-[#1F1A19]">No Required Documents</h3>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  No complex documentary prerequisites are demanded for initial institutional admission.
                </p>
              </div>

              <div className="p-4 rounded-xs bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <FileCheck2 className="w-5 h-5 text-[#1D5B56]" />
                <h3 className="font-serif font-bold text-base text-[#1F1A19]">No Entry Test</h3>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  Replaced with a friendly personal interview with the Principal to assess mindset and readiness.
                </p>
              </div>

              <div className="p-4 rounded-xs bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                <HeartHandshake className="w-5 h-5 text-[#8F0D19]" />
                <h3 className="font-serif font-bold text-base text-[#1F1A19]">Open Eligibility</h3>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  Open to all students wishing to begin or advance their education at Noble Science College.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The 6-Step Visual Admission Journey with Walkin Slot */}
      <Section variant="alt" spacing="lg" hasBorderBottom>
        <Container>
          <SectionHeader
            kicker="Step-By-Step Process"
            title="The 6-Step Admission Journey"
            subtitle="From initial telephone inquiry to sitting in your first lecture in Wan Bhachran."
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            {/* Steps (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xs border border-[#E2DDD5] flex items-start gap-4"
                >
                  {/* Step Number Badge */}
                  <div className="w-9 h-9 rounded-xs bg-[#8F0D19] text-white flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    {step.num}
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-serif text-base font-bold text-[#1F1A19]">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#8F0D19] px-2 py-0.5 rounded-xs bg-[#8F0D19]/10 font-sans">
                        {step.actor}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#453D3B] leading-relaxed font-sans">
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

            {/* Right: Walkin Photo Slot & Desk Notice (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="overflow-hidden rounded-xs border border-[#E2DDD5] bg-[#FAF7F2]">
                <div className="p-2 border-b border-[#E2DDD5] bg-[#F2ECE1] text-[11px] uppercase tracking-wider font-semibold text-[#756A67] font-sans flex items-center justify-between">
                  <span>Campus Admissions Office</span>
                  <span className="text-[#8F0D19]">Wan Bhachran</span>
                </div>
                <img
                  src="/images/placeholders/admissions-walkin.svg"
                  alt="In-person admissions desk"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs space-y-2 text-xs text-[#453D3B] font-sans">
                <strong className="block text-[#1F1A19]">Principal Direct Appointment</strong>
                <p>
                  Principal Ehsanullah Malik conducts all admissions meetings personally to review the student's mindset and answer parent questions.
                </p>
                <div className="pt-1 text-[#756A67]">
                  <span>Campus Address: Piplan Road, Wan Bhachran</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Scholarships & Financial Assistance */}
      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          <div className="max-w-4xl mx-auto bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs p-5 sm:p-7 text-left space-y-4 font-sans">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#8F0D19]" />
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F0D19]">
                  Student Support
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1F1A19]">
                  Scholarships & Concessions
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#453D3B] leading-relaxed">
              In accordance with our founding mission to make education accessible to ordinary families, Noble Science College provides scholarships for:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 bg-[#FAF7F2] rounded-xs border border-[#E2DDD5]">
                <strong className="block text-[#1F1A19] font-serif text-base mb-1">
                  Needy Students
                </strong>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  Financial aid to support families who demonstrate financial hardship, ensuring no student is turned away due to lack of means.
                </p>
              </div>

              <div className="p-3.5 bg-[#FAF7F2] rounded-xs border border-[#E2DDD5]">
                <strong className="block text-[#1F1A19] font-serif text-base mb-1">
                  Academically Brilliant Students
                </strong>
                <p className="text-xs text-[#756A67] leading-relaxed">
                  Merit scholarships recognizing high marks, exceptional academic enthusiasm, and intellectual promise in matriculation.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#756A67] italic pt-1">
              Scholarship applications are reviewed during the personal meeting with Principal Ehsanullah Malik.
            </p>
          </div>
        </Container>
      </Section>

      {/* Action Banner for Parents and Applicants */}
      <Section variant="dark" spacing="md">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Heading as="h2" size="section" tone="light">
              Ready to Visit the Campus?
            </Heading>
            <p className="text-sm sm:text-base text-[#E2DDD5]/80 leading-relaxed max-w-xl mx-auto font-sans">
              Please call Principal Ehsanullah Malik or message the college on WhatsApp to coordinate your campus tour.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <a
                href="tel:03336831370"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#8F0D19] hover:bg-[#6F0A13] text-white font-semibold text-xs transition-colors font-sans"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly: 0333-6831370</span>
              </a>
              <div className="inline-flex items-center gap-2 text-[#E2DDD5]/80 text-xs px-3.5 py-2.5 rounded-xs bg-white/5 border border-white/10 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Near Old Musa Khel Road, Wan Bhachran</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
