import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Image as ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const GALLERY_ITEMS = [
  {
    category: 'Building & Campus',
    image: '/images/placeholders/gallery-building-1.svg',
    caption: 'Noble Science College Campus Grounds',
  },
  {
    category: 'Classrooms',
    image: '/images/placeholders/gallery-classroom-1.svg',
    caption: 'Academic Lecture & Theory Rooms',
  },
  {
    category: 'Laboratories',
    image: '/images/placeholders/gallery-lab-1.svg',
    caption: 'Science & Computer Practical Labs',
  },
  {
    category: 'Library',
    image: '/images/placeholders/gallery-library-1.svg',
    caption: 'Reference & Study Reading Area',
  },
  {
    category: 'Events & Assemblies',
    image: '/images/placeholders/gallery-events-1.svg',
    caption: 'College Assembly & Debate Gatherings',
  },
  {
    category: 'Student Achievements',
    image: '/images/placeholders/gallery-awards-1.svg',
    caption: 'Academic Recognition & Certificates',
  },
]

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const categories = ['All', ...COLLEGE_DATA.galleryCategories]

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  )

  return (
    <Section id="gallery" variant="alt" spacing="lg" hasBorderBottom>
      <Container>
        <SectionHeader
          kicker="Campus Photography"
          title="Media Archive & Facilities"
          subtitle="Designated media architecture for Noble Science College as specified in the official requirements."
        />

        {/* Filter Tabs for the 6 SRS Categories */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-3 py-1 rounded-xs text-xs font-medium transition-colors cursor-pointer border font-sans',
                  isSelected
                    ? 'bg-[#8F0D19] text-white border-[#8F0D19]'
                    : 'bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#453D3B] border-[#E2DDD5]'
                )}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Structured Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto text-left">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs p-3.5 flex flex-col justify-between"
            >
              {/* Visual Placeholder Slot */}
              <div className="aspect-[4/3] rounded-xs bg-[#F2ECE1] border border-[#E2DDD5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="pt-3 border-t border-[#E2DDD5] mt-3 flex items-center justify-between text-xs font-sans">
                <span className="font-medium text-[#1F1A19]">{item.category}</span>
                <span className="text-[#8F0D19] text-[11px] font-semibold inline-flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" />
                  SRS Media Slot
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[#756A67] text-center max-w-xl mx-auto font-sans">
          Campus media slots are structured for official photographs of campus buildings, classrooms, laboratories, library, events, and student awards.
        </p>
      </Container>
    </Section>
  )
}
