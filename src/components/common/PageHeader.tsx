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
    <div className="bg-[#FAF7F2] border-b border-[#E2DDD5] pt-10 pb-12 sm:pt-12 sm:pb-14 text-left relative overflow-hidden">
      <Container className="relative z-10 space-y-3.5">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#756A67] font-sans">
          <button
            type="button"
            onClick={onHomeClick}
            className="hover:text-[#8F0D19] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span className="font-semibold text-[#8F0D19]">{breadcrumb}</span>
        </nav>

        {/* Kicker Badge */}
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8F0D19] px-2.5 py-0.5 rounded-xs bg-[#8F0D19]/10 border border-[#8F0D19]/20 font-sans">
            {kicker}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="max-w-4xl space-y-2">
          <Heading as="h1" size="display" tone="default">
            {title}
          </Heading>
          <p className="text-base sm:text-lg text-[#453D3B] max-w-2xl font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>
      </Container>
    </div>
  )
}
