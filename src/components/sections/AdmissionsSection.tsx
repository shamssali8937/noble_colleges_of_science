import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA, type AdmissionStep } from '@/data/collegeData'
import { Users, ShieldAlert, ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/common/BrandIcons'

export const AdmissionsSection: React.FC = () => {
  const { admissions } = COLLEGE_DATA

  return (
    <Section id="admissions" variant="white" spacing="lg" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Admissions Journey"
          title="Direct Walk-In Admission"
          subtitle="Open to all students with no entrance examination and no complex paperwork. Meet Principal Ehsanullah Malik directly."
        />

        {/* Heritage Notice Bar */}
        <div className="mb-10 max-w-4xl mx-auto p-4 sm:p-5 bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#8F0D19] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#8F0D19] font-sans">
                Notice Regarding Application Procedure
              </strong>
              <span className="text-xs text-[#453D3B] font-sans block mt-0.5">
                Admissions are conducted in person at the Wan Bhachran campus. There is no digital application or online portal.
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/923336831370?text=Hello%20Noble%20Science%20College%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-[#1D5B56] hover:bg-[#164440] text-white text-xs font-semibold tracking-wider uppercase transition-colors font-sans"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>WhatsApp Admissions</span>
          </a>
        </div>

        {/* Editorial Split: Line-Divided Steps + Rectangular Plate Photo */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Step Sequence (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-[#E2DDD5] border-y border-[#E2DDD5]">
            {admissions.steps.map((step: AdmissionStep) => (
              <div
                key={step.stepNumber}
                className="py-4.5 sm:py-5 flex items-start gap-4 transition-colors duration-150 hover:bg-[#FAF7F2]/60 px-2"
              >
                {/* Step Numeral */}
                <div className="w-8 h-8 bg-[#F2ECE1] border border-[#E2DDD5] text-[#8F0D19] flex items-center justify-center font-serif font-bold text-sm shrink-0">
                  {step.stepNumber}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#1F1A19]">
                      {step.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#8F0D19] font-sans">
                      {step.summary}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#453D3B] leading-relaxed font-sans pt-0.5">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Plate: Admissions In-person Consultation (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="border border-[#E2DDD5] bg-[#FAF7F2] p-2.5">
              <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1] aspect-[4/3]">
                <img
                  src="/images/campus/admissions-desk.jpg"
                  alt="In-person Walk-in Admissions Consultation Desk"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pt-2 mt-2 border-t border-[#E2DDD5] text-left">
                <p className="font-serif italic text-xs text-[#756A67]">
                  Figure: In-person walk-in consultation and direct administrative admissions desk at Noble Science College.
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

        {/* Essential Admission Policies (SRS Institutional Rules) */}
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-left font-sans">
          {/* Rule 1: No Entry Test */}
          <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F0D19] block pb-1 border-b border-[#E2DDD5]/70">
              Evaluation
            </span>
            <h4 className="font-serif text-base font-bold text-[#1F1A19] mt-2">
              No Entry Test Required
            </h4>
            <p className="text-xs text-[#756A67] mt-1.5 leading-relaxed">
              Instead of entrance exams, an informal interview with the Principal evaluates the candidate’s mindset, confidence, and readiness.
            </p>
          </div>

          {/* Rule 2: Open Eligibility */}
          <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1D5B56] block pb-1 border-b border-[#E2DDD5]/70">
              Eligibility & Paperwork
            </span>
            <h4 className="font-serif text-base font-bold text-[#1F1A19] mt-2">
              Open to All Students
            </h4>
            <p className="text-xs text-[#756A67] mt-1.5 leading-relaxed">
              No specific eligibility barriers or complex prerequisite documents required. Enrollment is completed upon fee submission.
            </p>
          </div>

          {/* Rule 3: Scholarships */}
          <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F0D19] block pb-1 border-b border-[#E2DDD5]/70">
              Financial Assistance
            </span>
            <h4 className="font-serif text-base font-bold text-[#1F1A19] mt-2">
              Scholarships Available
            </h4>
            <p className="text-xs text-[#756A67] mt-1.5 leading-relaxed">
              Available for deserving, needy students and academically brilliant candidates seeking intermediate and secondary studies.
            </p>
          </div>
        </div>

        {/* Meeting Notice */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-[#453D3B] bg-[#FAF7F2] px-4 py-2 border border-[#E2DDD5] font-sans">
            <Users className="w-3.5 h-3.5 text-[#8F0D19]" />
            <span>Meet Principal Ehsanullah Malik directly during your campus visit</span>
            <ArrowRight className="w-3 h-3 text-[#1D5B56]" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
