import React, { useState, useEffect } from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { COLLEGE_DATA } from '@/data/collegeData'
import { Camera, X, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GalleryItem {
  id: string
  title: string
  category: string
  description: string
  aspectRatio: string
  image: string
}

interface GalleryPageProps {
  onNavClick: (href: string) => void
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null)

  const categories = ['All', ...COLLEGE_DATA.galleryCategories]

  // Designated gallery slots corresponding to SRS Section 5 categories
  const gallerySlots: GalleryItem[] = [
    {
      id: 'building-1',
      title: 'College Main Campus & Façade',
      category: 'College Building',
      description: 'The exterior campus building and main gates located near Old Musa Khel Road, Wan Bhachran.',
      aspectRatio: 'aspect-[16/10]',
      image: '/images/placeholders/gallery-building-1.svg',
    },
    {
      id: 'classrooms-1',
      title: 'Secondary & Intermediate Classrooms',
      category: 'Classrooms',
      description: 'Well-ventilated learning environments structured for focused lecture delivery and student engagement.',
      aspectRatio: 'aspect-[4/3]',
      image: '/images/placeholders/gallery-classroom-1.svg',
    },
    {
      id: 'labs-1',
      title: 'Scientific Apparatus & Experiment Benches',
      category: 'Laboratories',
      description: 'Specialized lab setups for practical science syllabus demonstrations and experiments.',
      aspectRatio: 'aspect-[4/3]',
      image: '/images/placeholders/gallery-lab-1.svg',
    },
    {
      id: 'library-1',
      title: 'Reading Desks & Reference Collection',
      category: 'Library',
      description: 'Curated board textbooks, reference literature, and quiet individual student study spaces.',
      aspectRatio: 'aspect-[16/10]',
      image: '/images/placeholders/gallery-library-1.svg',
    },
    {
      id: 'events-1',
      title: 'Public Speaking Assemblies & Activities',
      category: 'Events & Student Activities',
      description: 'Student assemblies, public speaking exercises, and character-building co-curricular events.',
      aspectRatio: 'aspect-[4/3]',
      image: '/images/placeholders/gallery-events-1.svg',
    },
    {
      id: 'awards-1',
      title: 'Academic Honors & Board Distinction',
      category: 'Awards & Achievements',
      description: 'Commemoration of student academic milestones and Sargodha Board examination achievements.',
      aspectRatio: 'aspect-[4/3]',
      image: '/images/placeholders/gallery-awards-1.svg',
    },
  ]

  const filteredSlots =
    selectedCategory === 'All'
      ? gallerySlots
      : gallerySlots.filter((slot) => slot.category === selectedCategory)

  // Keyboard accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalItem) return

      if (e.key === 'Escape') {
        setActiveModalItem(null)
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredSlots.findIndex((s) => s.id === activeModalItem.id)
        if (currentIndex < filteredSlots.length - 1) {
          setActiveModalItem(filteredSlots[currentIndex + 1])
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredSlots.findIndex((s) => s.id === activeModalItem.id)
        if (currentIndex > 0) {
          setActiveModalItem(filteredSlots[currentIndex - 1])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeModalItem, filteredSlots])

  return (
    <div className="w-full">
      <PageHeader
        kicker="Campus Photography"
        title="Institutional Media Gallery"
        subtitle="Visual archive structured according to the six official photography categories specified in the SRS."
        breadcrumb="Gallery"
        onHomeClick={() => onNavClick('#home')}
      />

      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          {/* SRS Status Notice */}
          <div className="max-w-4xl mx-auto p-3.5 sm:p-4 bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs mb-8 text-left flex items-start gap-3">
            <Camera className="w-5 h-5 text-[#8F0D19] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#453D3B] leading-relaxed font-sans">
              <strong className="block text-[#1F1A19] font-semibold">SRS Media Protocol Notice:</strong>
              As indicated in SRS Section 5, official photographs are scheduled for provision at a later stage. The gallery below reflects the authenticated categories populated with institutional placeholders ready for photo replacement.
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
            {categories.map((category) => {
              const isSelected = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'px-3 py-1 rounded-xs text-xs font-medium transition-colors cursor-pointer border font-sans',
                    isSelected
                      ? 'bg-[#8F0D19] text-white border-[#8F0D19]'
                      : 'bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#453D3B] border-[#E2DDD5]'
                  )}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto text-left">
            {filteredSlots.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="bg-[#FAF7F2] border border-[#E2DDD5] rounded-xs overflow-hidden cursor-pointer group flex flex-col justify-between"
              >
                {/* Visual Slot */}
                <div
                  className={cn(
                    'w-full bg-[#F2ECE1] border-b border-[#E2DDD5] overflow-hidden',
                    item.aspectRatio
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Caption Strip */}
                <div className="p-3.5 space-y-1 bg-[#FAF7F2] font-sans">
                  <span className="text-[11px] text-[#8F0D19] font-semibold block uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#1F1A19]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#756A67] line-clamp-2 pt-0.5">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#756A67]">
                    <span className="font-medium text-[#1D5B56] inline-flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#1D5B56]" />
                      SRS Category
                    </span>
                    <span className="group-hover:text-[#8F0D19] underline font-medium">Inspect media slot</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Lightbox / Modal for Preview */}
      {activeModalItem && (
        <div
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A0C0E]/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label={activeModalItem.title}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-xs border border-[#E2DDD5] p-5 sm:p-6 space-y-3.5 text-left font-sans"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 min-w-[36px] min-h-[36px] inline-flex items-center justify-center p-1.5 text-[#756A67] hover:text-[#1F1A19] hover:bg-[#F2ECE1] rounded-xs transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="aspect-[16/10] bg-[#F2ECE1] rounded-xs border border-[#E2DDD5] overflow-hidden">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8F0D19] block">
                Category: {activeModalItem.category}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1F1A19]">
                {activeModalItem.title}
              </h3>
              <p className="text-xs text-[#756A67]">
                {activeModalItem.description}
              </p>
            </div>

            <div className="border-t border-[#E2DDD5] pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#756A67]">
              <span>Use arrow keys to navigate • Esc to dismiss</span>
              <span className="font-semibold text-[#8F0D19]">Noble Science College Wan Bhachran</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
