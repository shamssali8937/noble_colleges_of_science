import React from 'react'
import { Container } from '@/components/ui/Container'
import { CollegeLogo } from '@/components/common/CollegeLogo'
import { MapPin, Award, ShieldCheck } from 'lucide-react'
import { FacebookIcon, WhatsAppIcon } from '@/components/common/BrandIcons'
import { COLLEGE_DATA } from '@/data/collegeData'

interface FooterProps {
  onNavClick: (href: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const whatsappUrl = `https://wa.me/923336831370?text=${encodeURIComponent(
    'Hello Noble Science College, I would like to inquire about admissions.'
  )}`

  return (
    <footer className="bg-[#1A0C0E] text-[#FAF7F2] border-t-2 border-[#8F0D19]" role="contentinfo">
      {/* Upper Collegiate 4-Column Layout */}
      <div className="py-12 sm:py-16 border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 text-left">
            {/* Column 1: About & Institutional Heritage (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <CollegeLogo variant="light" />

              <p className="text-[#FAF7F2]/75 text-xs sm:text-sm leading-relaxed pt-1 font-sans">
                Established in 2009 by Principal Ehsanullah Malik in Wan Bhachran to provide high-quality education to ordinary students. Dedicated to building confidence, public speaking, and shaping good human beings into a true <span className="text-white font-serif italic">"heaven of knowledge."</span>
              </p>

              <div className="flex items-center gap-2 pt-1 text-xs text-[#D4AF37] font-medium font-sans">
                <Award className="w-3.5 h-3.5 shrink-0" />
                <span>Affiliated with BISE Sargodha</span>
              </div>
            </div>

            {/* Column 2: Academic Programs (3 cols) */}
            <div className="lg:col-span-3 space-y-3 font-sans">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] block pb-2 border-b border-white/10">
                Academics
              </span>
              <ul className="space-y-1.5 text-xs text-[#FAF7F2]/75">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavClick('#academics')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    F.Sc Pre-Medical & Pre-Engineering
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavClick('#academics')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    ICS Computer Science
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavClick('#academics')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    I.Com Commerce & Accounting
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavClick('#academics')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Intermediate General Arts
                  </button>
                </li>
                <li className="pt-1 text-[11px] text-[#FAF7F2]/50">
                  Schooling: Nursery through Class 10
                </li>
              </ul>
            </div>

            {/* Column 3: Admissions & Governance (2 cols) */}
            <div className="lg:col-span-2 space-y-3 font-sans">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] block pb-2 border-b border-white/10">
                Admissions
              </span>
              <ul className="space-y-1.5 text-xs text-[#FAF7F2]/75">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavClick('#admissions')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Walk-In Admissions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavClick('#admissions')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    No Entry Test Required
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavClick('#admissions')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Principal Interview
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavClick('#admissions')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Need & Merit Scholarships
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Location (3 cols) */}
            <div className="lg:col-span-3 space-y-3 font-sans">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] block pb-2 border-b border-white/10">
                Contact & Campus
              </span>

              <div className="space-y-2.5 text-xs text-[#FAF7F2]/75">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Near Old Musa Khel Road, Wan Bhachran, Punjab</span>
                </div>

                {/* WhatsApp API Direct Button Link */}
                <div className="flex items-start gap-2.5 pt-0.5">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-[#FAF7F2]/50">WhatsApp API / Direct Chat:</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#D4AF37] font-semibold transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>0333-6831370</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#25D366] font-medium">(Chat Online)</span>
                    </a>
                  </div>
                </div>

                {/* Facebook Community Link */}
                <div className="flex items-start gap-2.5 pt-1">
                  <FacebookIcon className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] text-[#FAF7F2]/50">Official Facebook:</span>
                    <a
                      href={COLLEGE_DATA.contact.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FAF7F2]/90 hover:text-white underline underline-offset-2 font-urdu block pt-0.5"
                    >
                      نوبل سائنس کالج واں بھچراں
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Sub-Footer Strip */}
      <div className="py-4 bg-[#14080A] text-[#FAF7F2]/60 text-xs font-sans">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1D5B56]" />
            <span>© {new Date().getFullYear()} Noble Science College, Wan Bhachran. All rights reserved.</span>
          </div>

          <div className="text-[11px] text-[#FAF7F2]/60 flex flex-wrap items-center justify-center sm:justify-end gap-2.5">
            <span>Affiliated with BISE Sargodha</span>
            <span>•</span>
            <span>Est. 2009</span>
            <span>•</span>
            <span>
              Designed by{' '}
              <a
                href="https://shams-portfolio-nine.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-white underline underline-offset-2 transition-colors font-medium"
              >
                Shams Ali Mehdi
              </a>
            </span>
          </div>
        </Container>
      </div>
    </footer>
  )
}
