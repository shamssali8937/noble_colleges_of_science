import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Image as ImageIcon, Camera } from 'lucide-react'
import { cn } from '@/lib/utils'

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const categories = ['All', ...COLLEGE_DATA.galleryCategories]

  return (
    <Section id="gallery" variant="sandstone" spacing="md" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Campus Photography"
          title="Media Archive & Categories"
          subtitle="Designated media architecture for Noble Science College as specified in the official requirements."
        />

        {/* Filter Tabs for the 6 SRS Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826]',
                  isSelected
                    ? 'bg-[#133826] text-white border-[#133826] shadow-xs'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#384640] border-[#E3DCD3]'
                )}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Structured Category Slots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {COLLEGE_DATA.galleryCategories
            .filter((cat) => activeCategory === 'All' || activeCategory === cat)
            .map((category) => (
              <div
                key={category}
                className="bg-white border border-[#E3DCD3] rounded-lg p-5 shadow-xs flex flex-col justify-between"
              >
                {/* Visual Placeholder Slot */}
                <div className="aspect-[4/3] rounded bg-[#FAF8F5] border border-dashed border-[#E3DCD3] flex flex-col items-center justify-center p-4 text-center">
                  <div className="p-3 rounded-full bg-white shadow-xs text-[#133826] mb-2">
                    <Camera className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-semibold text-sm text-[#111F18]">
                    {category}
                  </span>
                  <span className="text-[11px] text-[#65756E] mt-1">
                    Photography slot active
                  </span>
                </div>

                <div className="pt-4 mt-2 border-t border-[#E3DCD3] flex items-center justify-between text-xs">
                  <span className="text-[#65756E]">{category}</span>
                  <span className="text-[#133826] font-medium inline-flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5" />
                    SRS Category
                  </span>
                </div>
              </div>
            ))}
        </div>

        <p className="mt-8 text-xs text-[#65756E] text-center max-w-xl mx-auto">
          Campus media will be uploaded as official photographs for building, classrooms, laboratories, library, student events, and awards become available.
        </p>
      </Container>
    </Section>
  )
}
