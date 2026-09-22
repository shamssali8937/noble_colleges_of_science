import React from 'react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading, SectionHeader } from '@/components/ui/Heading'
import { PrimaryCta, SecondaryCta } from '@/components/ui/CtaButton'
import { TextLink } from '@/components/ui/TextLink'
import { BookOpen, Users, Building, Image, PhoneCall, Sparkles } from 'lucide-react'

export const App: React.FC = () => {
  return (
    <PageContainer>
      {({ handleNavClick }) => (
        <>
          {/* #home - Shell Preview & Hero Anchor */}
          <Section id="home" variant="parchment" spacing="lg" className="border-b border-[#E3DCD3]">
            <Container>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#133826]/10 text-[#133826] text-xs font-semibold uppercase tracking-wider border border-[#133826]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#C88E2E]" />
                  <span>Official Institutional Shell Active</span>
                </div>

                <Heading as="h1" size="hero" tone="pine">
                  Noble Science College, Wan Bhachran
                </Heading>

                <p className="text-lg md:text-xl text-[#384640] max-w-2xl mx-auto font-sans leading-relaxed">
                  Established in 2009 by Principal Ehsanullah Malik. Serving the students of Wan Bhachran with academic rigor, personal mentorship, and character development.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <PrimaryCta
                    iconType="arrow"
                    onClick={() => handleNavClick('#admissions')}
                  >
                    Admission Guidance
                  </PrimaryCta>
                  <SecondaryCta
                    iconType="phone"
                    href="tel:03336831370"
                  >
                    Call: 0333-6831370
                  </SecondaryCta>
                </div>

                <div className="pt-4 flex items-center justify-center gap-6 text-sm text-[#525F5A]">
                  <TextLink href="#about" showArrow onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}>
                    Read Founding History
                  </TextLink>
                  <span>•</span>
                  <TextLink href="#academics" showArrow onClick={(e) => { e.preventDefault(); handleNavClick('#academics'); }}>
                    Explore Programs
                  </TextLink>
                </div>
              </div>
            </Container>
          </Section>

          {/* #about - Anchor Section */}
          <Section id="about" variant="white" spacing="md" hasBorderBottom>
            <Container>
              <SectionHeader
                kicker="About The Institution"
                title="A Vision for Community Transformation"
                subtitle="Founded in 2009 by Principal Ehsanullah Malik in Wan Bhachran to provide quality education to ordinary students."
              />
              <div className="p-8 bg-[#FAF8F5] border border-[#E3DCD3] rounded-md max-w-3xl mx-auto text-center">
                <p className="text-[#384640] italic font-serif text-lg leading-relaxed">
                  "To make Noble Science College a 'heaven of knowledge' — an institution that goes beyond ordinary coursework to build students' confidence, develop their public speaking ability, and shape them into good human beings."
                </p>
                <span className="block mt-4 text-xs font-semibold uppercase tracking-wider text-[#133826]">
                  — Principal Ehsanullah Malik
                </span>
              </div>
            </Container>
          </Section>

          {/* #academics - Anchor Section */}
          <Section id="academics" variant="sandstone" spacing="md" hasBorderBottom>
            <Container>
              <SectionHeader
                kicker="Academic Programs"
                title="Curriculum from Nursery to Class 12"
                subtitle="Affiliated with Sargodha Board. Offering F.Sc, ICS, I.Com, and Arts groups."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {['F.Sc (Pre-Medical / Pre-Eng)', 'ICS (Computer Science)', 'I.Com (Commerce)', 'Arts (Humanities)'].map((group) => (
                  <div key={group} className="bg-white p-5 rounded-md border border-[#E3DCD3] text-center shadow-xs">
                    <BookOpen className="w-5 h-5 text-[#8D1B2D] mx-auto mb-2" />
                    <span className="font-serif font-semibold text-sm text-[#111F18] block">{group}</span>
                    <span className="text-xs text-[#65756E] mt-1 block">Sargodha Board</span>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* #admissions - Anchor Section */}
          <Section id="admissions" variant="white" spacing="md" hasBorderBottom>
            <Container>
              <SectionHeader
                kicker="Admissions Process"
                title="Direct & Accessible Admission"
                subtitle="No entry test. No admission form required. Open to all students with personal Principal interview."
              />
              <div className="max-w-2xl mx-auto text-center space-y-4">
                <p className="text-[#384640] text-sm md:text-base leading-relaxed">
                  Interested students and parents contact the college via phone or Facebook, then visit in person to meet Principal Ehsanullah Malik directly. Scholarships available for needy and academically brilliant students.
                </p>
                <div className="pt-2">
                  <PrimaryCta iconType="phone" href="tel:03336831370">
                    Contact Principal: 0333-6831370
                  </PrimaryCta>
                </div>
              </div>
            </Container>
          </Section>

          {/* #faculty - Anchor Section */}
          <Section id="faculty" variant="sandstone" spacing="md" hasBorderBottom>
            <Container>
              <SectionHeader
                kicker="Our Faculty"
                title="Dedicated Academic Mentors"
                subtitle="Staffed by highly qualified faculty, including MPhil and Bachelor's degree holders."
              />
              <div className="max-w-md mx-auto p-6 bg-white rounded-md border border-[#E3DCD3] text-center">
                <Users className="w-8 h-8 text-[#133826] mx-auto mb-3" />
                <h3 className="font-serif font-semibold text-lg text-[#111F18] mb-1">MPhil & Bachelor's Qualified</h3>
                <p className="text-sm text-[#525F5A]">Focused on classroom excellence, confidence building, and student readiness.</p>
              </div>
            </Container>
          </Section>

          {/* #facilities - Anchor Section */}
          <Section id="facilities" variant="white" spacing="md" hasBorderBottom>
            <Container>
              <SectionHeader
                kicker="Campus Facilities"
                title="Verified Campus Infrastructure"
                subtitle="Laboratories, Library, Sports Grounds, and 24/7 Campus Security."
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {['Laboratories', 'Library', 'Sports Grounds', 'Security'].map((facility) => (
                  <div key={facility} className="bg-[#FAF8F5] p-5 rounded-md border border-[#E3DCD3] text-center">
                    <Building className="w-5 h-5 text-[#C88E2E] mx-auto mb-2" />
                    <span className="font-serif font-semibold text-sm text-[#111F18]">{facility}</span>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* #gallery - Anchor Section */}
          <Section id="gallery" variant="sandstone" spacing="md" hasBorderBottom>
            <Container>
              <SectionHeader
                kicker="Campus Media"
                title="Photo Gallery Categories"
                subtitle="Preserved structure for College Building, Classrooms, Labs, Library, Events, and Awards."
              />
              <div className="p-6 bg-white border border-[#E3DCD3] rounded-md max-w-2xl mx-auto text-center space-y-2">
                <Image className="w-8 h-8 text-[#525F5A] mx-auto" />
                <p className="text-sm text-[#525F5A]">
                  Media categories configured and ready for official photography as specified in the SRS.
                </p>
              </div>
            </Container>
          </Section>

          {/* #contact - Anchor Section */}
          <Section id="contact" variant="pine" spacing="md">
            <Container>
              <SectionHeader
                kicker="Contact & Location"
                title="Visit Noble Science College"
                subtitle="Near Old Musa Khel Road, Wan Bhachran. Direct phone and WhatsApp line available."
                tone="light"
              />
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-white/10 border border-white/20 text-white">
                  <PhoneCall className="w-5 h-5 text-[#C88E2E]" />
                  <span className="text-lg font-semibold tracking-wider">0333-6831370</span>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white underline underline-offset-4 font-urdu text-sm block"
                  >
                    فیس بک: نوبل سائنس کالج واں بھچراں
                  </a>
                </div>
              </div>
            </Container>
          </Section>
        </>
      )}
    </PageContainer>
  )
}

export default App
