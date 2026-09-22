import React from 'react'
import { Container } from '@/components/ui/Container'
import { Phone, MapPin, Award } from 'lucide-react'

export const UtilityBar: React.FC = () => {
  return (
    <div className="bg-[#1A0C0E] text-[#FAF7F2]/90 text-xs py-2 border-b border-[#2D1B1E] hidden md:block">
      <Container className="flex items-center justify-between gap-4">
        {/* Left: Affiliation & Origin */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#FAF7F2]/80">
            <Award className="w-3.5 h-3.5 text-[#C88E2E]" />
            <span className="font-medium tracking-wide">Affiliated with Sargodha Board</span>
          </div>
          <span className="text-white/20">•</span>
          <span className="text-[#FAF7F2]/70">Est. 2009</span>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-1 text-[#FAF7F2]/70">
            <MapPin className="w-3 h-3 text-[#C88E2E]" />
            <span>Near Old Musa Khel Road, Wan Bhachran</span>
          </div>
        </div>

        {/* Right: Phone / WhatsApp and Facebook Community */}
        <div className="flex items-center gap-4">
          <a
            href="tel:03336831370"
            className="flex items-center gap-1.5 text-white hover:text-[#C88E2E] transition-colors duration-150 group"
            title="Call Noble Science College"
          >
            <Phone className="w-3.5 h-3.5 text-[#C88E2E]" />
            <span className="font-semibold tracking-wider">0333-6831370</span>
          </a>

          <span className="text-white/20">|</span>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#FAF7F2]/80 hover:text-white transition-colors duration-150 font-urdu"
            title="Official Facebook Page"
          >
            <span>فیس بک: نوبل سائنس کالج واں بھچراں</span>
          </a>
        </div>
      </Container>
    </div>
  )
}
