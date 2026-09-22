import React from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Phone, MapPin, Clock, ShieldCheck, Compass, ArrowRight } from 'lucide-react'
import { FacebookIcon, WhatsAppIcon } from '@/components/common/BrandIcons'

interface ContactPageProps {
  onNavClick: (href: string) => void
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavClick }) => {
  return (
    <div className="w-full">
      <PageHeader
        kicker="Direct Communication"
        title="Contact & Campus Location"
        subtitle="Connect with Noble Science College via our verified telephone/WhatsApp line, visit our campus in Wan Bhachran, or join our official Facebook community."
        breadcrumb="Contact"
        onHomeClick={() => onNavClick('#home')}
      />

      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start text-left font-sans">
            {/* Left Column: Direct Phone & WhatsApp Hotline (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#8F0D19]/40" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19]">
                    Direct Telephone & Messaging
                  </span>
                </div>

                <Heading as="h2" size="section" tone="default">
                  Call or WhatsApp the College
                </Heading>
                <p className="text-sm text-[#453D3B] leading-relaxed">
                  For all inquiries regarding Nursery to Class 12 admissions, intermediate program requirements, meeting with Principal Ehsanullah Malik, and scholarships, please call or WhatsApp our official number directly.
                </p>

                {/* Formal Phone Plate */}
                <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 bg-[#8F0D19] text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#756A67] uppercase tracking-[0.2em] font-medium block">
                        Official Phone & WhatsApp Line
                      </span>
                      <a
                        href="tel:03336831370"
                        className="font-serif text-2xl sm:text-3xl font-bold text-[#8F0D19] hover:text-[#6F0A13] transition-colors"
                      >
                        0333-6831370
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E2DDD5] flex flex-wrap gap-2.5">
                    <a
                      href="tel:03336831370"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#8F0D19] hover:bg-[#6F0A13] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>One-Tap Voice Call</span>
                    </a>
                    <a
                      href="https://wa.me/923336831370?text=Hello%20Noble%20Science%20College%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D5B56] hover:bg-[#164440] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Official Facebook Community */}
                <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                  <div className="flex items-center gap-2">
                    <FacebookIcon className="w-4 h-4 text-[#8F0D19]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19]">
                      Official Social Presence
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#1F1A19]">
                    Official Facebook Page
                  </h4>
                  <p className="text-xs text-[#756A67]">
                    Follow announcements, institutional notices, and community updates on our verified Facebook page:
                  </p>
                  <a
                    href={COLLEGE_DATA.contact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#8F0D19] hover:underline underline-offset-4 pt-1"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#8F0D19]" />
                    <span className="font-urdu" dir="rtl">نوبل سائنس کالج واں بھچراں</span>
                    <span className="text-xs font-sans text-[#756A67]">(Noble Science College Wan Bhachran)</span>
                  </a>
                </div>
              </div>

              {/* Data Compliance Note */}
              <div className="pt-3 border-t border-[#E2DDD5] text-xs text-[#756A67]">
                <span>Note: Email, Instagram, YouTube, and Google Maps API services are not designated at this stage in accordance with official SRS requirements.</span>
              </div>
            </div>

            {/* Right Column: Physical Address & Gate Photo Plate (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#1D5B56]/40" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1D5B56]">
                    Campus Location
                  </span>
                </div>

                <Heading as="h2" size="section" tone="default">
                  In-Person Campus Visits
                </Heading>
                <p className="text-sm text-[#453D3B] leading-relaxed">
                  Prospective students and their parents are encouraged to visit the college in person to tour the campus, inspect our scientific labs and library, and meet Principal Ehsanullah Malik directly.
                </p>

                {/* Gate Photo Plate */}
                <div className="border border-[#E2DDD5] bg-[#FAF7F2] p-2.5">
                  <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1] aspect-[16/10]">
                    <img
                      src="/images/campus/campus-gate.jpg"
                      alt="Campus Entrance Gate"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-2 mt-1.5 border-t border-[#E2DDD5]">
                    <p className="font-serif italic text-xs text-[#756A67]">
                      Figure: Main institutional boundary entrance and security gate at Wan Bhachran.
                    </p>
                  </div>
                </div>

                {/* Address Showcase Card */}
                <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#1D5B56] text-white shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#756A67] uppercase tracking-[0.2em] font-medium block">
                        Physical Campus Address
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#1F1A19] mt-0.5">
                        Near Old Musa Khel Road
                      </h3>
                      <p className="text-xs text-[#453D3B] mt-0.5 font-sans">
                        Wan Bhachran, Punjab, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E2DDD5]/70 space-y-1.5 text-xs text-[#756A67]">
                    <div className="flex items-start gap-2">
                      <Compass className="w-3.5 h-3.5 text-[#8F0D19] shrink-0 mt-0.5" />
                      <span>Accessible from main Wan Bhachran transit routes and Old Musa Khel Road.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1D5B56] shrink-0 mt-0.5" />
                      <span>Gated entry with on-campus security personnel stationed at the main entrance.</span>
                    </div>
                  </div>
                </div>

                {/* Visiting Guidelines */}
                <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] space-y-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Visiting Recommendation</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#1F1A19]">
                    Planning Your Visit
                  </h4>
                  <p className="text-xs text-[#756A67] leading-relaxed">
                    Prior to visiting, a brief call to <strong>0333-6831370</strong> ensures Principal Ehsanullah Malik is available in his office to conduct your admission consultation.
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavClick('#admissions')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F0D19] hover:underline cursor-pointer pt-1"
                  >
                    <span>Review 6-Step Admission Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
