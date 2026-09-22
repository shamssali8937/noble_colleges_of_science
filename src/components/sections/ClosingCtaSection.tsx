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
    <Section id="contact" variant="pine" spacing="lg" className="relative overflow-hidden">
      {/* Background Decorative Crest Outline */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
        <svg width="480" height="480" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="46" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#C88E2E] px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20">
            Admissions Open • Nursery to Class 12
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Begin Your Academic Journey at Noble Science College
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Interested parents and students are warmly invited to visit our Wan Bhachran campus, tour our facilities, and meet Principal Ehsanullah Malik directly.
          </p>

          {/* Action Hub with Verified Channels */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="tel:03336831370"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#8D1B2D] hover:bg-[#741725] text-white font-semibold text-base transition-colors shadow-sm cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call / WhatsApp: {COLLEGE_DATA.contact.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => onNavClick('#admissions')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-[#FAF8F5] text-[#133826] font-semibold text-base transition-colors cursor-pointer shadow-sm"
            >
              <span>View Admission Steps</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Location & Facebook Strip */}
          <div className="pt-8 mt-6 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-3 p-3.5 rounded bg-white/5 border border-white/10">
              <MapPin className="w-4 h-4 text-[#C88E2E] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="block text-white font-medium">Campus Location:</span>
                <span className="text-white/70">{COLLEGE_DATA.contact.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded bg-white/5 border border-white/10">
              <MessageSquare className="w-4 h-4 text-[#C88E2E] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="block text-white font-medium">Official Facebook Community:</span>
                <a
                  href={COLLEGE_DATA.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white underline underline-offset-2 font-urdu block pt-0.5"
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
