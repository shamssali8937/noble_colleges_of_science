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
          <div className="text-left mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8F0D19] px-2.5 py-0.5 rounded-xs bg-[#8F0D19]/10 border border-[#8F0D19]/20 font-sans">
              Leadership & Vision
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1A19] mt-2 tracking-tight">
              From the Principal's Desk
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Official Principal Portrait (5 cols) */}
            <div className="lg:col-span-5 text-center">
              <div className="relative inline-block mx-auto max-w-sm w-full">
                {/* Academic Hairline Frame */}
                <div className="p-2.5 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs">
                  <div className="overflow-hidden rounded-xs border border-[#8F0D19]/25 bg-[#F2ECE1]">
                    <img
                      src={principal.photoUrl}
                      alt={`Principal ${principal.name} - Founder of Noble Science College`}
                      className="w-full h-auto object-cover aspect-[3/4]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Nameplate */}
                <div className="mt-3 p-3.5 bg-[#1A0C0E] text-white rounded-xs text-center border-t-2 border-[#8F0D19]">
                  <h3 className="font-serif text-lg font-bold tracking-tight text-[#FAF7F2]">
                    {principal.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-sans font-medium mt-0.5">
                    {principal.title}
                  </p>
                  <p className="text-xs text-[#E2DDD5]/70 font-urdu mt-1" dir="rtl">
                    پرنسپل احسان اللہ ملک
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Profile & Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="space-y-4 text-base text-[#453D3B] leading-relaxed font-sans">
                <p>
                  {principal.background}
                </p>

                <p>
                  Under his leadership, Noble Science College was created not as a commercial venture, but as a community sanctuary for learning where every aspiring student in Wan Bhachran receives personal guidance, structured discipline, and genuine encouragement.
                </p>
              </div>

              {/* Verified Vision Callout Quote */}
              <div className="p-5 bg-[#FAF7F2] border-l-3 border-[#8F0D19] rounded-r-xs space-y-2 border border-y-[#E2DDD5] border-r-[#E2DDD5]">
                <div className="flex items-center gap-2 text-[#8F0D19] text-xs font-bold uppercase tracking-wider font-sans">
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>The Core Commitment</span>
                </div>
                <blockquote className="font-serif italic text-base sm:text-lg text-[#1F1A19] leading-relaxed">
                  "{principal.visionQuote}"
                </blockquote>
              </div>

              {/* Direct Principal Role in Admissions (SRS Verified) */}
              <div className="pt-2 space-y-2">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#756A67] font-sans">
                  Direct Leadership Engagement
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#453D3B]">
                  <div className="flex items-start gap-2.5 p-3 bg-[#FAF7F2] rounded-xs border border-[#E2DDD5]">
                    <UserCheck className="w-4 h-4 text-[#8F0D19] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1F1A19]">Personal Meeting</strong>
                      <span>Parents meet Principal Ehsanullah Malik directly to discuss all college aspects.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 bg-[#FAF7F2] rounded-xs border border-[#E2DDD5]">
                    <Check className="w-4 h-4 text-[#1D5B56] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1F1A19]">Mindset Interview</strong>
                      <span>Conducts one-on-one student readiness interviews instead of an entry test.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-1 flex items-center gap-2 text-xs text-[#756A67] font-sans">
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
