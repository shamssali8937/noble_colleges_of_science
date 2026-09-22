import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Award, UserCheck, MessageSquareQuote, Check } from 'lucide-react'

export const PrincipalSection: React.FC = () => {
  const { principal } = COLLEGE_DATA

  return (
    <Section id="faculty" variant="white" spacing="lg" hasBorderBottom>
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Kicker */}
          <div className="text-center md:text-left mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8D1B2D] px-3 py-1 rounded bg-[#8D1B2D]/10 border border-[#8D1B2D]/20">
              Leadership & Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111F18] mt-2">
              From the Principal's Desk
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Official Principal Portrait (5 cols) */}
            <div className="lg:col-span-5 text-center">
              <div className="relative inline-block mx-auto">
                {/* Academic Wooden / Architectural Frame Effect */}
                <div className="p-3 bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg shadow-md">
                  <div className="overflow-hidden rounded border border-[#133826]/20">
                    <img
                      src={principal.photoUrl}
                      alt={`Principal ${principal.name} - Founder of Noble Science College`}
                      className="w-full max-w-sm h-auto object-cover aspect-[3/4] transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Nameplate Overlay */}
                <div className="mt-4 p-4 bg-[#133826] text-white rounded-md text-center shadow-sm">
                  <h3 className="font-serif text-xl font-bold tracking-tight">
                    {principal.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#C88E2E] font-medium mt-0.5">
                    {principal.title}
                  </p>
                  <p className="text-xs text-white/70 font-urdu mt-1" dir="rtl">
                    پرنسپل احسان اللہ ملک
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Profile & Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="space-y-4 text-base sm:text-lg text-[#384640] leading-relaxed font-sans">
                <p>
                  {principal.background}
                </p>

                <p>
                  Under his leadership, Noble Science College was created not as a commercial venture, but as a community sanctuary for learning where every aspiring student in Wan Bhachran receives personal guidance, structured discipline, and genuine encouragement.
                </p>
              </div>

              {/* Verified Vision Callout Quote */}
              <div className="p-6 bg-[#FAF8F5] border-l-4 border-[#133826] rounded-r-md space-y-2">
                <div className="flex items-center gap-2 text-[#133826] text-xs font-bold uppercase tracking-wider">
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>The Core Commitment</span>
                </div>
                <blockquote className="font-serif italic text-base sm:text-lg text-[#111F18] leading-relaxed">
                  "{principal.visionQuote}"
                </blockquote>
              </div>

              {/* Direct Principal Role in Admissions (SRS Verified) */}
              <div className="pt-2 space-y-2">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#65756E]">
                  Direct Leadership Engagement
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#384640]">
                  <div className="flex items-start gap-2 p-3 bg-[#FAF8F5] rounded border border-[#E3DCD3]">
                    <UserCheck className="w-4 h-4 text-[#133826] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#111F18]">Personal Meeting</strong>
                      <span>Parents meet Principal Ehsanullah Malik directly to discuss all college aspects.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[#FAF8F5] rounded border border-[#E3DCD3]">
                    <Check className="w-4 h-4 text-[#8D1B2D] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#111F18]">Mindset Interview</strong>
                      <span>Conducts one-on-one student readiness interviews instead of an entry test.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#65756E]">
                <Award className="w-4 h-4 text-[#C88E2E]" />
                <span>Supporting academic brilliance and needy student scholarships since 2009.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
