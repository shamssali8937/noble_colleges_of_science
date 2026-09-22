import React from 'react'
import { Container } from '@/components/ui/Container'
import { CollegeLogo } from '@/components/common/CollegeLogo'
import { NAV_ITEMS, type NavItem } from '@/types/navigation'
import { Phone, MapPin, Award, BookOpen, ShieldCheck } from 'lucide-react'

interface FooterProps {
  onNavClick: (href: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-[#0E2A1C] text-white border-t border-[#1A4230]" role="contentinfo">
      {/* Upper Collegiate Anchor */}
      <div className="py-12 sm:py-16 border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Institutional Identity (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <CollegeLogo variant="light" />

              <p className="text-white/80 text-sm leading-relaxed max-w-md pt-2">
                Established in 2009 by Principal Ehsanullah Malik in Wan Bhachran to provide quality education to ordinary students. Dedicated to building students' confidence, developing public speaking, and shaping good human beings into a true <span className="text-white font-medium italic">"heaven of knowledge."</span>
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs text-[#C88E2E] font-medium">
                <Award className="w-4 h-4 shrink-0" />
                <span>Affiliated with Sargodha Board (BISE Sargodha)</span>
              </div>
            </div>

            {/* Column 2: Navigation Links (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-serif font-semibold text-base text-white tracking-wide border-b border-white/10 pb-2">
                Quick Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                {NAV_ITEMS.map((item: NavItem) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        onNavClick(item.href)
                      }}
                      className="text-white/70 hover:text-white transition-colors duration-150 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-xs"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Campus Visit (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-serif font-semibold text-base text-white tracking-wide border-b border-white/10 pb-2">
                Campus & Contact
              </h3>

              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C88E2E] shrink-0 mt-1" />
                  <div>
                    <span className="block text-white font-medium">College Address:</span>
                    <span>Near Old Musa Khel Road, Wan Bhachran</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C88E2E] shrink-0 mt-1" />
                  <div>
                    <span className="block text-white font-medium">Phone & WhatsApp:</span>
                    <a
                      href="tel:03336831370"
                      className="text-white hover:text-[#C88E2E] font-semibold transition-colors"
                    >
                      0333-6831370
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <BookOpen className="w-4 h-4 text-[#C88E2E] shrink-0 mt-1" />
                  <div>
                    <span className="block text-white font-medium">Official Facebook:</span>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-white underline underline-offset-2 font-urdu block pt-0.5"
                    >
                      نوبل سائنس کالج واں بھچراں
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-xs text-white/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C88E2E]" />
                  <span>Admissions open to all • No entry test</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar: Copyright & Attribution */}
      <div className="py-5 bg-[#081B11] text-xs text-white/60">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Noble Science College, Wan Bhachran. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-white/50 text-[11px]">
            <span>Nursery to Class 12</span>
            <span>•</span>
            <span>F.Sc | ICS | I.Com | Arts</span>
            <span>•</span>
            <span>Sargodha Board</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}
