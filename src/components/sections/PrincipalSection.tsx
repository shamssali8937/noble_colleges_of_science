import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Award, UserCheck, Check } from 'lucide-react'

export const PrincipalSection: React.FC = () => {
  const { principal } = COLLEGE_DATA

  return (
    <Section id="faculty" variant="white" spacing="lg" hasBorderBottom>
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Kicker */}
          <div className="text-left mb-8">
            <span className="font-sans uppercase tracking-[0.2em] text-[11px] font-semibold text-[#8F0D19] block">
              Institutional Leadership
            </span>
            <div className="h-px w-8 bg-[#8F0D19]/40 mt-1 mb-2" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#1F1A19] tracking-tight">
              From the Principal's Desk
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Official Principal Portrait (5 cols) */}
            <div className="lg:col-span-5 text-center">
              <div className="relative inline-block mx-auto max-w-sm w-full">
                {/* Academic Hairline Mount */}
                <div className="p-2 bg-[#FAF7F2] border border-[#E2DDD5]">
                  <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1]">
                    <img
                      src={principal.photoUrl}
                      alt={`Principal ${principal.name} - Founder of Noble Science College`}
                      className="w-full h-auto object-cover aspect-[3/4]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Nameplate & Formal Caption */}
                <div className="mt-2.5 p-3.5 bg-[#FAF7F2] text-[#1F1A19] border border-[#E2DDD5] text-left space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold tracking-tight text-[#1F1A19]">
                      {principal.name}
                    </h3>
                    <span className="text-[11px] font-urdu text-[#8F0D19]" dir="rtl">
                      پرنسپل احسان اللہ ملک
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#8F0D19] font-sans font-semibold">
                    {principal.title} • Founder
                  </p>
                  <p className="text-[11px] text-[#736865] font-sans border-t border-[#E2DDD5]/60 pt-1">
                    Directly conducts student readiness evaluations and leads faculty instruction in Wan Bhachran.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Profile & Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="space-y-4 text-base sm:text-[1.05rem] text-[#453D3B] leading-relaxed font-sans">
                <p>
                  {principal.background}
                </p>

                <p>
                  Under his leadership, Noble Science College was established not as a commercial enterprise, but as a community sanctuary for learning where every aspiring student in Wan Bhachran receives personal guidance, structured discipline, and genuine encouragement.
                </p>
              </div>

              {/* Verified Vision Callout Quote with Thin Rules */}
              <div className="py-3.5 border-y border-[#E2DDD5] space-y-1.5 my-3">
                <span className="font-sans uppercase tracking-[0.14em] text-[10.5px] font-semibold text-[#8F0D19] block">
                  The Core Commitment
                </span>
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#1F1A19] leading-relaxed">
                  "{principal.visionQuote}"
                </blockquote>
              </div>

              {/* Direct Principal Role in Admissions (SRS Verified) */}
              <div className="pt-1 space-y-2">
                <span className="block font-sans uppercase tracking-[0.14em] text-[10.5px] font-semibold text-[#736865]">
                  Direct Leadership Engagement
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#453D3B] font-sans">
                  <div className="flex items-start gap-2.5 p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
                    <UserCheck className="w-4 h-4 text-[#8F0D19] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1F1A19] font-medium">Personal Meeting</strong>
                      <span>Parents meet Principal Ehsanullah Malik directly to review all academic aspects.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
                    <Check className="w-4 h-4 text-[#1D5B56] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1F1A19] font-medium">Mindset Interview</strong>
                      <span>Conducts individual student readiness interviews instead of a stressful entrance examination.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentary Plate: Principal Addressing Ceremony */}
              <div className="p-3 bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full sm:w-44 shrink-0 aspect-[4/3] overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1]">
                  <img
                    src="/images/campus/principal-ehsanullah-malik-address.jpg"
                    alt="Principal Ehsanullah Malik addressing students from the official podium"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-left space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#8F0D19] font-sans block">
                    Institutional Record • Official Address
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#1F1A19]">
                    Addressing the Assembly from the College Rostrum
                  </h4>
                  <p className="text-xs text-[#736865] leading-relaxed font-sans">
                    Principal Ehsanullah Malik addressing students and faculty from the official Noble Science College & School System podium during an institutional assembly.
                  </p>
                </div>
              </div>

              <div className="pt-1 flex items-center gap-2 text-xs text-[#736865] font-sans">
                <Award className="w-4 h-4 text-[#8F0D19]" />
                <span>Supporting academic excellence and deserving student fee concessions since 2009.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
