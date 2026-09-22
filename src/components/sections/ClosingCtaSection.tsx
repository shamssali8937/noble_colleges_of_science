import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react'

interface ClosingCtaSectionProps {
  onNavClick: (href: string) => void
}

export const ClosingCtaSection: React.FC<ClosingCtaSectionProps> = ({ onNavClick }) => {
  return (
    <Section id="contact" variant="dark" spacing="lg" className="relative overflow-hidden border-t-2 border-[#8F0D19]">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] px-3 py-1 rounded-xs bg-white/5 border border-white/15 font-sans">
            Admissions Open • Nursery to Class 12
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF7F2] tracking-tight leading-tight">
            Begin Your Academic Journey at Noble Science College
          </h2>

          <p className="text-base sm:text-lg text-[#E2DDD5]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Interested parents and students are warmly invited to visit our Wan Bhachran campus, tour our facilities, and meet Principal Ehsanullah Malik directly.
          </p>

          {/* Action Hub with Verified Channels */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:03336831370"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xs bg-[#8F0D19] hover:bg-[#6F0A13] text-white font-semibold text-sm transition-colors cursor-pointer font-sans"
            >
              <Phone className="w-4 h-4" />
              <span>Call / WhatsApp: {COLLEGE_DATA.contact.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => onNavClick('#admissions')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xs bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#1F1A19] font-semibold text-sm transition-colors cursor-pointer font-sans"
            >
              <span>View Admission Steps</span>
              <ArrowRight className="w-4 h-4 text-[#8F0D19]" />
            </button>
          </div>

          {/* Location & Facebook Strip */}
          <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-3 p-3.5 rounded-xs bg-white/5 border border-white/10">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="text-xs font-sans">
                <span className="block text-[#FAF7F2] font-medium">Campus Location:</span>
                <span className="text-[#E2DDD5]/70">{COLLEGE_DATA.contact.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xs bg-white/5 border border-white/10">
              <MessageSquare className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div className="text-xs font-sans">
                <span className="block text-[#FAF7F2] font-medium">Official Facebook Community:</span>
                <a
                  href={COLLEGE_DATA.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF7F2] hover:underline underline-offset-2 font-urdu block pt-0.5"
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
