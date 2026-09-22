import React from 'react'
import { Container } from '@/components/ui/Container'
import { Phone, MapPin, Award } from 'lucide-react'
import { FacebookIcon, WhatsAppIcon } from '@/components/common/BrandIcons'
import { COLLEGE_DATA } from '@/data/collegeData'

export const UtilityBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/923336831370?text=${encodeURIComponent(
    'Hello Noble Science College, I would like to inquire about admissions.'
  )}`

  return (
    <div className="bg-[#1A0C0E] text-[#FAF7F2]/90 text-xs py-2 border-b border-[#2D1B1E] hidden md:block">
      <Container className="flex items-center justify-between gap-4">
        {/* Left: Affiliation & Origin */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#FAF7F2]/80">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-medium tracking-wide">Affiliated with BISE Sargodha</span>
          </div>
          <span className="text-white/20">•</span>
          <span className="text-[#FAF7F2]/70">Est. 2009</span>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-1 text-[#FAF7F2]/70">
            <MapPin className="w-3 h-3 text-[#D4AF37]" />
            <span>Near Old Musa Khel Road, Wan Bhachran</span>
          </div>
        </div>

        {/* Right: Phone, WhatsApp API, and Facebook Community */}
        <div className="flex items-center gap-3">
          <a
            href="tel:03336831370"
            className="flex items-center gap-1.5 text-white hover:text-[#D4AF37] transition-colors duration-150 group"
            title="Call Noble Science College"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold tracking-wider">0333-6831370</span>
          </a>

          <span className="text-white/20">|</span>

          {/* WhatsApp API Link Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-xs bg-[#1D5B56] hover:bg-[#164440] text-white text-[11px] font-semibold transition-colors duration-150 shadow-xs"
            title="Chat on WhatsApp (Direct API)"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
            <span>WhatsApp</span>
          </a>

          <span className="text-white/20">|</span>

          {/* Top Facebook Icon & Community Link */}
          <a
            href={COLLEGE_DATA.contact.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#FAF7F2]/85 hover:text-white transition-colors duration-150 group"
            title="Official Facebook Page - نوبل سائنس کالج واں بھچراں"
            aria-label="Official Facebook Page"
          >
            <span className="p-1 rounded-xs bg-white/10 group-hover:bg-[#8F0D19] transition-colors">
              <FacebookIcon className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="font-urdu hidden lg:inline">نوبل سائنس کالج</span>
          </a>
        </div>
      </Container>
    </div>
  )
}
