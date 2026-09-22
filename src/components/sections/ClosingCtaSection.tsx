import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { COLLEGE_DATA } from '@/data/collegeData'
import { MapPin, MessageSquare, ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/common/BrandIcons'

interface ClosingCtaSectionProps {
  onNavClick: (href: string) => void
}

export const ClosingCtaSection: React.FC<ClosingCtaSectionProps> = ({ onNavClick }) => {
  return (
    <Section id="contact" variant="alt" spacing="lg" className="border-t-2 border-[#8F0D19]">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-[#8F0D19]/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F0D19] font-sans">
              Admissions Open • Nursery through Class 12
            </span>
            <span className="h-px w-6 bg-[#8F0D19]/40" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-3xl font-bold text-[#1F1A19] tracking-tight leading-snug">
            Begin Your Academic Journey at Noble Science College
          </h2>

          <p className="text-sm sm:text-base text-[#453D3B] max-w-2xl mx-auto font-sans leading-relaxed">
            Interested parents and students are warmly invited to visit our Wan Bhachran campus, tour our scientific laboratories and library, and meet Principal Ehsanullah Malik directly.
          </p>

          {/* Action Hub */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/923336831370?text=Hello%20Noble%20Science%20College%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#1D5B56] hover:bg-[#164440] text-white font-sans text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp / Message: {COLLEGE_DATA.contact.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => onNavClick('#admissions')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#1F1A19] border border-[#E2DDD5] font-sans text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              <span>View Admission Steps</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8F0D19]" />
            </button>
          </div>

          {/* Institutional Contact Coordinates */}
          <div className="pt-6 mt-6 border-t border-[#E2DDD5] grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-3 p-3.5 bg-[#FAF7F2] border border-[#E2DDD5]">
              <MapPin className="w-4 h-4 text-[#8F0D19] shrink-0 mt-0.5" />
              <div className="text-xs font-sans">
                <span className="block text-[#1F1A19] font-serif font-bold">Campus Location:</span>
                <span className="text-[#453D3B]">{COLLEGE_DATA.contact.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-[#FAF7F2] border border-[#E2DDD5]">
              <MessageSquare className="w-4 h-4 text-[#1D5B56] shrink-0 mt-0.5" />
              <div className="text-xs font-sans">
                <span className="block text-[#1F1A19] font-serif font-bold">Official Facebook Community:</span>
                <a
                  href={COLLEGE_DATA.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8F0D19] hover:underline underline-offset-2 font-urdu block pt-0.5 text-sm"
                >
                  نوبل سائنس کالج واں بھچراں
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
