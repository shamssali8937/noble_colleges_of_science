import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA, type AdmissionStep } from '@/data/collegeData'
import { Phone, Users, ShieldAlert, ArrowRight } from 'lucide-react'

export const AdmissionsSection: React.FC = () => {
  const { admissions } = COLLEGE_DATA

  return (
    <Section id="admissions" variant="white" spacing="md" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Admission Journey"
          title="Straightforward Walk-In Admission"
          subtitle="Open to all students with no entrance examination and no complex paperwork. Meet Principal Ehsanullah Malik directly."
        />

        {/* Important SRS Requirement Notice */}
        <div className="mb-10 max-w-4xl mx-auto p-4 sm:p-5 rounded-md bg-[#FAF8F5] border border-[#E3DCD3] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#8D1B2D] shrink-0" />
            <div>
              <strong className="block text-sm font-semibold text-[#111F18]">
                Informational Portal Notice
              </strong>
              <span className="text-xs text-[#525F5A]">
                Admissions are conducted entirely in person. No online application form or submission portal is required.
              </span>
            </div>
          </div>
          <a
            href="tel:03336831370"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-[#133826] hover:bg-[#0E2A1C] text-white text-xs font-semibold rounded-md transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 0333-6831370</span>
          </a>
        </div>

        {/* Timeline / Step-by-Step Flow */}
        <div className="max-w-4xl mx-auto relative text-left">
          {/* Vertical Connecting Line */}
          <div className="absolute top-8 bottom-8 left-6 md:left-8 w-0.5 bg-[#E3DCD3] hidden sm:block" />

          <div className="space-y-6">
            {admissions.steps.map((step: AdmissionStep) => (
              <div
                key={step.stepNumber}
                className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-lg border border-[#E3DCD3] shadow-xs hover:border-[#133826]/40 transition-colors"
              >
                {/* Step Circle Badge */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#133826] text-white flex items-center justify-center font-serif font-bold text-lg shrink-0 shadow-sm">
                  {step.stepNumber}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111F18]">
                      {step.title}
                    </h3>
                    <span className="text-xs font-medium text-[#8D1B2D] bg-[#8D1B2D]/10 px-2 py-0.5 rounded">
                      {step.summary}
                    </span>
                  </div>

                  <p className="text-sm text-[#384640] leading-relaxed pt-1 font-sans">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Admission Policies Banner (SRS Rules) */}
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {/* Rule 1: No Entry Test */}
          <div className="p-5 bg-[#FAF8F5] border border-[#E3DCD3] rounded-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#133826] block">
              Evaluation
            </span>
            <h4 className="font-serif text-base font-bold text-[#111F18] mt-1">
              No Entry Test Required
            </h4>
            <p className="text-xs text-[#525F5A] mt-1 leading-relaxed">
              Instead of formal tests, an informal interview with the Principal evaluates the student’s mindset and readiness.
            </p>
          </div>

          {/* Rule 2: Open Eligibility & No Documents */}
          <div className="p-5 bg-[#FAF8F5] border border-[#E3DCD3] rounded-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8D1B2D] block">
              Eligibility & Paperwork
            </span>
            <h4 className="font-serif text-base font-bold text-[#111F18] mt-1">
              Open to All Students
            </h4>
            <p className="text-xs text-[#525F5A] mt-1 leading-relaxed">
              No specific eligibility barriers or prerequisite documents required. Enrollment is completed upon fee submission.
            </p>
          </div>

          {/* Rule 3: Scholarships */}
          <div className="p-5 bg-[#FAF8F5] border border-[#E3DCD3] rounded-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C88E2E] block">
              Financial Assistance
            </span>
            <h4 className="font-serif text-base font-bold text-[#111F18] mt-1">
              Scholarships Available
            </h4>
            <p className="text-xs text-[#525F5A] mt-1 leading-relaxed">
              Available for deserving, needy students and academically brilliant candidates seeking higher secondary studies.
            </p>
          </div>
        </div>

        {/* In-Person Meeting Callout */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-[#384640] bg-[#FAF8F5] px-4 py-2 rounded-full border border-[#E3DCD3]">
            <Users className="w-4 h-4 text-[#133826]" />
            <span>Meet Principal Ehsanullah Malik directly during your visit</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8D1B2D]" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
