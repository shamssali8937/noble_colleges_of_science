import React from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading, SectionHeader } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { GraduationCap, Phone, Sparkles, Building2 } from 'lucide-react'

export const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111F18]">
      {/* Institutional Bar */}
      <div className="bg-[#0E2A1C] text-white/90 text-xs sm:text-sm py-2 px-4 border-b border-[#133826]">
        <Container className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C88E2E]" />
            <span className="font-medium tracking-wide">Affiliated with Sargodha Board</span>
            <span className="text-white/40">|</span>
            <span>Est. 2009</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-urdu font-medium">
            <span>نوبل سائنس کالج واں بھچراں</span>
          </div>
        </Container>
      </div>

      {/* Foundation Verification Canvas */}
      <Section variant="parchment" spacing="lg">
        <Container>
          <SectionHeader
            kicker="Academic Foundation"
            title="Noble Science College, Wan Bhachran"
            subtitle="Design system foundation and tokens configured. Ready for page architecture implementation."
          />

          <div className="mx-auto max-w-2xl bg-white p-8 rounded-md border border-[#E3DCD3] shadow-sm space-y-6 text-center">
            <div className="inline-flex p-3 rounded-full bg-[#133826]/10 text-[#133826]">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div>
              <Heading as="h3" size="title" tone="pine" className="mb-2">
                "Heaven of Knowledge"
              </Heading>
              <p className="text-[#384640] text-sm md:text-base leading-relaxed">
                Foundational tokens, typography scales, container grids, and accessible collegiate button variants have been initialized.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button variant="primary" leftIcon={<Sparkles className="w-4 h-4" />}>
                Primary Pine
              </Button>
              <Button variant="crimson" leftIcon={<Phone className="w-4 h-4" />}>
                Crimson Action
              </Button>
              <Button variant="secondary" leftIcon={<Building2 className="w-4 h-4" />}>
                Secondary Frame
              </Button>
              <Button variant="outline">
                Outline
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}

export default App
