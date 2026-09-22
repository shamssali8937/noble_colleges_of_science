import React from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Phone, MapPin, MessageSquare, Clock, ShieldCheck, Compass, ArrowRight } from 'lucide-react'

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch text-left font-sans">
            {/* Left Column: Direct Phone & WhatsApp Hotline (6 cols) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F0D19]">
                  Direct Telephone & Messaging
                </span>
                <Heading as="h2" size="section" tone="default">
                  Call or WhatsApp the College
                </Heading>
                <p className="text-sm text-[#453D3B] leading-relaxed">
                  For all questions regarding Nursery to Class 12 admissions, intermediate program requirements, meeting with Principal Ehsanullah Malik, and scholarships, please call or WhatsApp our official number directly.
                </p>

                {/* Prominent Phone Card */}
                <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xs bg-[#8F0D19] text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#756A67] uppercase tracking-wider font-medium block">
                        Official Phone & WhatsApp Line
                      </span>
                      <a
                        href="tel:03336831370"
                        className="font-serif text-2xl font-bold text-[#8F0D19] hover:text-[#6F0A13] transition-colors"
                      >
                        0333-6831370
                      </a>
                    </div>
                  </div>

                  <div className="pt-1 flex flex-wrap gap-2">
                    <a
                      href="tel:03336831370"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#8F0D19] hover:bg-[#6F0A13] text-white text-xs font-semibold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>One-Tap Voice Call</span>
                    </a>
                    <a
                      href="https://wa.me/923336831370"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#1D5B56] hover:bg-[#164440] text-white text-xs font-semibold transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Official Facebook Community */}
                <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#8F0D19]" />
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F0D19]">
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
                    className="inline-block text-sm font-urdu font-medium text-[#8F0D19] hover:underline underline-offset-4 pt-1"
                    dir="rtl"
                  >
                    نوبل سائنس کالج واں بھچراں (Noble Science College Wan Bhachran)
                  </a>
                </div>
              </div>

              {/* Data Compliance Note */}
              <div className="pt-3 border-t border-[#E2DDD5] text-xs text-[#756A67]">
                <span>Note: Email, Instagram, YouTube, and Google Maps API services are not designated at this stage in accordance with SRS Section 6.</span>
              </div>
            </div>

            {/* Right Column: Physical Address & Campus Visiting Guidance (6 cols) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1D5B56]">
                  Campus Location
                </span>
                <Heading as="h2" size="section" tone="default">
                  In-Person Campus Visits
                </Heading>
                <p className="text-sm text-[#453D3B] leading-relaxed">
                  Prospective students and their parents are encouraged to visit the college in person to tour the campus, inspect our scientific labs and library, and meet Principal Ehsanullah Malik directly.
                </p>

                {/* Address Showcase Card */}
                <div className="p-5 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xs bg-[#1D5B56] text-white shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#756A67] uppercase tracking-wider font-medium block">
                        Physical Campus Address
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F1A19] mt-0.5">
                        Near Old Musa Khel Road
                      </h3>
                      <p className="text-sm text-[#453D3B] mt-0.5 font-sans">
                        Wan Bhachran, Punjab, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 space-y-1.5 text-xs text-[#756A67]">
                    <div className="flex items-start gap-2">
                      <Compass className="w-4 h-4 text-[#8F0D19] shrink-0 mt-0.5" />
                      <span>Accessible from main Wan Bhachran transit routes and Old Musa Khel Road.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#1D5B56] shrink-0 mt-0.5" />
                      <span>Gated entry with on-campus security personnel stationed at the main entrance.</span>
                    </div>
                  </div>
                </div>

                {/* Visiting Guidelines Card */}
                <div className="p-4 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-[#8F0D19]">
                    <Clock className="w-4 h-4" />
                    <span>Visiting Recommendation</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#1F1A19]">
                    Planning Your Visit
                  </h4>
                  <p className="text-xs text-[#756A67] leading-relaxed">
                    Prior to visiting, a brief call to <strong>0333-6831370</strong> helps ensure Principal Ehsanullah Malik is immediately available in his office to conduct your admission conversation without delay.
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavClick('#admissions')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F0D19] hover:underline cursor-pointer"
                  >
                    <span>Review 6-Step Admission Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E2DDD5] text-xs text-[#756A67] flex justify-between items-center">
                <span>Noble Science College</span>
                <span className="font-medium text-[#8F0D19]">Wan Bhachran Campus</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
