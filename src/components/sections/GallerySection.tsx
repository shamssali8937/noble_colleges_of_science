import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/Heading'
import { COLLEGE_DATA } from '@/data/collegeData'
import { cn } from '@/lib/utils'

interface GalleryItem {
  id: string
  category: string
  image: string
  caption: string
  figureNumber: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'building',
    category: 'College Building',
    image: '/images/campus/campus-building.jpg',
    caption: 'Campus exterior grounds and academic building wing at Wan Bhachran.',
    figureNumber: 'Figure 1',
  },
  {
    id: 'classrooms',
    category: 'Classrooms',
    image: '/images/campus/classroom-lecture.jpg',
    caption: 'Intermediate academic lecture hall arranged for structured teaching.',
    figureNumber: 'Figure 2',
  },
  {
    id: 'laboratories',
    category: 'Laboratories',
    image: '/images/campus/science-laboratory.jpg',
    caption: 'Science laboratory benches equipped for practical physics, chemistry, and biology.',
    figureNumber: 'Figure 3',
  },
  {
    id: 'principal-address',
    category: 'Events & Student Activities',
    image: '/images/campus/principal-ehsanullah-malik-address.jpg',
    caption: 'Founder & Principal Ehsanullah Malik delivering his address from the official college podium.',
    figureNumber: 'Figure 4',
  },
  {
    id: 'student-gathering',
    category: 'Events & Student Activities',
    image: '/images/campus/student-gathering-assembly.jpg',
    caption: 'Noble Science College students seated attentively during an institutional assembly session.',
    figureNumber: 'Figure 5',
  },
  {
    id: 'public-speaking',
    category: 'Events & Student Activities',
    image: '/images/campus/student-public-speaking-speech.jpg',
    caption: 'Student orator practicing public speaking and declamation, fostering confidence and leadership.',
    figureNumber: 'Figure 6',
  },
  {
    id: 'library',
    category: 'Library',
    image: '/images/campus/library-reading.jpg',
    caption: 'Curated reference library and silent study stations for independent revision.',
    figureNumber: 'Figure 7',
  },
  {
    id: 'achievements',
    category: 'Awards & Achievements',
    image: '/images/campus/academic-awards.jpg',
    caption: 'Commemoration of high academic achievement and BISE Sargodha distinctions.',
    figureNumber: 'Figure 8',
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
          kicker="Photographic Record"
          title="Campus Life & Facilities"
          subtitle="Documented educational facilities and student learning environments at Noble Science College, Wan Bhachran."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-3.5 py-1 text-xs transition-colors cursor-pointer border font-sans',
                  isSelected
                    ? 'bg-[#8F0D19] text-white border-[#8F0D19] font-semibold'
                    : 'bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#453D3B] border-[#E2DDD5]'
                )}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Structured Editorial Plate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] border border-[#E2DDD5] p-3 flex flex-col justify-between"
            >
              {/* Image Plate */}
              <div className="aspect-[4/3] bg-[#F2ECE1] border border-[#E2DDD5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Formal Caption Block */}
              <div className="pt-2.5 mt-2 border-t border-[#E2DDD5] space-y-1">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] font-sans font-semibold">
                  <span className="text-[#8F0D19]">{item.figureNumber}</span>
                  <span className="text-[#756A67]">{item.category}</span>
                </div>
                <p className="font-serif italic text-xs text-[#453D3B] leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-[#E2DDD5] max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#756A67] font-sans">
            Archival campus photography illustrating academic spaces across Intermediate F.Sc, ICS, I.Com, and General Arts programs.
          </p>
        </div>
      </Container>
    </Section>
  )
}
