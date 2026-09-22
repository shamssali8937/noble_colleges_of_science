import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA, type AdmissionStep } from '@/data/collegeData'
import { Phone, Users, ShieldAlert, ArrowRight } from 'lucide-react'

export const AdmissionsSection: React.FC = () => {
  const { admissions } = COLLEGE_DATA

  return (
    <Section id="admissions" variant="white" spacing="lg" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Admission Journey"
          title="Straightforward Walk-In Admission"
          subtitle="Open to all students with no entrance examination and no complex paperwork. Meet Principal Ehsanullah Malik directly."
        />

        {/* Important SRS Requirement Notice */}
        <div className="mb-10 max-w-4xl mx-auto p-4 sm:p-5 rounded-xs bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#8F0D19] shrink-0" />
            <div>
              <strong className="block text-sm font-semibold text-[#1F1A19] font-sans">
                Informational Portal Notice
              </strong>
              <span className="text-xs text-[#756A67] font-sans">
                Admissions are conducted entirely in person. No online application form or submission portal is required.
              </span>
            </div>
          </div>
          <a
            href="tel:03336831370"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-[#8F0D19] hover:bg-[#6F0A13] text-white text-xs font-semibold rounded-xs transition-colors font-sans"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 0333-6831370</span>
          </a>
        </div>

        {/* Editorial Split: Timeline + Supporting Walk-in Photo Slot */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Timeline / Step-by-Step Flow (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="space-y-4">
              {admissions.steps.map((step: AdmissionStep) => (
                <div
                  key={step.stepNumber}
                  className="flex items-start gap-4 bg-[#FAF7F2] p-4 sm:p-5 rounded-xs border border-[#E2DDD5]"
                >
                  {/* Step Square Badge */}
                  <div className="w-9 h-9 rounded-xs bg-[#8F0D19] text-white flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    {step.stepNumber}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#1F1A19]">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#8F0D19] bg-[#8F0D19]/10 px-2 py-0.5 rounded-xs font-sans">
                        {step.summary}
                      </span>
                    </div>

                    <p className="text-sm text-[#453D3B] leading-relaxed pt-0.5 font-sans">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Supporting Placeholder: In-person walk-in consultation slot (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="overflow-hidden rounded-xs border border-[#E2DDD5] bg-[#FAF7F2]">
              <div className="p-2 border-b border-[#E2DDD5] bg-[#F2ECE1] text-[11px] uppercase tracking-wider font-semibold text-[#756A67] font-sans flex items-center justify-between">
                <span>In-Person Walk-In Admissions</span>
                <span className="text-[#8F0D19]">Campus Desk</span>
              </div>
              <img
                src="/images/placeholders/admissions-walkin.svg"
                alt="Admissions Consultation Desk"
                className="w-full h-auto aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs text-xs text-[#453D3B] font-sans space-y-1">
              <span className="font-semibold text-[#1F1A19] block">Admissions Office Location:</span>
              <p>Noble Science College, Piplan Road, Wan Bhachran, District Mianwali, Punjab.</p>
              <p className="text-[#756A67] pt-1">Visiting Hours: 8:00 AM – 2:00 PM (Monday to Saturday)</p>
            </div>
          </div>
        </div>

        {/* Essential Admission Policies Banner (SRS Rules) */}
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-left font-sans">
          {/* Rule 1: No Entry Test */}
          <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8F0D19] block">
              Evaluation
            </span>
            <h4 className="font-serif text-base font-bold text-[#1F1A19] mt-1">
              No Entry Test Required
            </h4>
            <p className="text-xs text-[#756A67] mt-1 leading-relaxed">
              Instead of formal tests, an informal interview with the Principal evaluates the student's mindset and readiness.
            </p>
          </div>

          {/* Rule 2: Open Eligibility & No Documents */}
          <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1D5B56] block">
              Eligibility & Paperwork
            </span>
            <h4 className="font-serif text-base font-bold text-[#1F1A19] mt-1">
              Open to All Students
            </h4>
            <p className="text-xs text-[#756A67] mt-1 leading-relaxed">
              No specific eligibility barriers or prerequisite documents required. Enrollment is completed upon fee submission.
            </p>
          </div>

          {/* Rule 3: Scholarships */}
          <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8F0D19] block">
              Financial Assistance
            </span>
            <h4 className="font-serif text-base font-bold text-[#1F1A19] mt-1">
              Scholarships Available
            </h4>
            <p className="text-xs text-[#756A67] mt-1 leading-relaxed">
              Available for deserving, needy students and academically brilliant candidates seeking higher secondary studies.
            </p>
          </div>
        </div>

        {/* In-Person Meeting Callout */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-[#453D3B] bg-[#FAF7F2] px-3.5 py-1.5 rounded-xs border border-[#E2DDD5] font-sans">
            <Users className="w-3.5 h-3.5 text-[#8F0D19]" />
            <span>Meet Principal Ehsanullah Malik directly during your visit</span>
            <ArrowRight className="w-3 h-3 text-[#1D5B56]" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
