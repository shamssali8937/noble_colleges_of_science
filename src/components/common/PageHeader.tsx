import React from 'react'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { ChevronRight } from 'lucide-react'

interface PageHeaderProps {
  kicker: string
  title: string
  subtitle: string
  breadcrumb: string
  onHomeClick?: () => void
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  kicker,
  title,
  subtitle,
  breadcrumb,
  onHomeClick,
}) => {
  return (
    <div className="bg-[#FAF8F5] border-b border-[#E3DCD3] pt-10 pb-12 sm:pt-14 sm:pb-16 text-left relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-px h-full bg-[#E3DCD3]/50 pointer-events-none" />
      
      <Container className="relative z-10 space-y-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#65756E]">
          <button
            type="button"
            onClick={onHomeClick}
            className="hover:text-[#133826] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span className="font-semibold text-[#133826]">{breadcrumb}</span>
        </nav>

        {/* Kicker Badge */}
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8D1B2D] px-3 py-1 rounded bg-[#8D1B2D]/10 border border-[#8D1B2D]/20">
            {kicker}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="max-w-4xl space-y-2">
          <Heading as="h1" size="display" tone="default">
            {title}
          </Heading>
          <p className="text-base sm:text-lg text-[#384640] max-w-2xl font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>
      </Container>
    </div>
  )
}
