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
    },
    {
      id: 'classrooms-1',
      title: 'Secondary & Intermediate Classrooms',
      category: 'Classrooms',
      description: 'Well-ventilated learning environments structured for focused lecture delivery and student engagement.',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: 'labs-1',
      title: 'Scientific Apparatus & Experiment Benches',
      category: 'Laboratories',
      description: 'Specialized lab setups for practical science syllabus demonstrations and experiments.',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: 'library-1',
      title: 'Reading Desks & Reference Collection',
      category: 'Library',
      description: 'Curated board textbooks, reference literature, and quiet individual student study spaces.',
      aspectRatio: 'aspect-[16/10]',
    },
    {
      id: 'events-1',
      title: 'Public Speaking Assemblies & Activities',
      category: 'Events & Student Activities',
      description: 'Student assemblies, public speaking exercises, and character-building co-curricular events.',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: 'awards-1',
      title: 'Academic Honors & Board Distinction',
      category: 'Awards & Achievements',
      description: 'Commemoration of student academic milestones and Sargodha Board examination achievements.',
      aspectRatio: 'aspect-[4/3]',
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
          <div className="max-w-4xl mx-auto p-4 sm:p-5 bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg mb-8 text-left flex items-start gap-3">
            <Camera className="w-5 h-5 text-[#8D1B2D] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#384640] leading-relaxed">
              <strong className="block text-[#111F18] font-semibold">SRS Media Protocol Notice:</strong>
              As indicated in SRS Section 5, official photographs are scheduled for provision at a later stage. The gallery below reflects the authenticated categories ready for seamless image population without synthetic stock photos.
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((category) => {
              const isSelected = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826]',
                    isSelected
                      ? 'bg-[#133826] text-white border-[#133826] shadow-xs'
                      : 'bg-[#FAF8F5] hover:bg-white text-[#384640] border-[#E3DCD3]'
                  )}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {filteredSlots.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="bg-[#FAF8F5] border border-[#E3DCD3] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                {/* Visual Slot */}
                <div
                  className={cn(
                    'w-full bg-white border-b border-dashed border-[#E3DCD3] flex flex-col items-center justify-center p-6 text-center group-hover:bg-[#FAF8F5] transition-colors',
                    item.aspectRatio
                  )}
                >
                  <div className="p-3.5 rounded-full bg-[#FAF8F5] border border-[#E3DCD3] text-[#133826] group-hover:scale-110 transition-transform mb-3">
                    <Camera className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-bold text-base text-[#111F18] px-4">
                    {item.title}
                  </span>
                  <span className="text-xs text-[#8D1B2D] font-medium mt-1">
                    {item.category}
                  </span>
                </div>

                {/* Caption Strip */}
                <div className="p-4 space-y-1 bg-white">
                  <p className="text-xs text-[#525F5A] line-clamp-2">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#65756E]">
                    <span className="font-medium text-[#133826] inline-flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#C88E2E]" />
                      SRS Category
                    </span>
                    <span className="group-hover:text-[#133826] underline font-medium">Click to inspect</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E2A1C]/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label={activeModalItem.title}
        >
          <div className="relative w-full max-w-2xl bg-white rounded-lg border border-[#E3DCD3] shadow-2xl p-6 sm:p-8 space-y-4 text-left">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 text-[#525F5A] hover:text-[#111F18] hover:bg-[#FAF8F5] rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#133826]"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="aspect-[16/10] bg-[#FAF8F5] rounded-md border border-dashed border-[#E3DCD3] flex flex-col items-center justify-center text-center p-6">
              <Camera className="w-12 h-12 text-[#133826] mb-3" />
              <h3 className="font-serif text-xl font-bold text-[#111F18]">
                {activeModalItem.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8D1B2D] mt-1">
                Category: {activeModalItem.category}
              </span>
              <p className="text-xs text-[#525F5A] mt-2 max-w-md">
                {activeModalItem.description}
              </p>
            </div>

            <div className="border-t border-[#E3DCD3] pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#65756E]">
              <span>Use arrow keys to navigate • Esc to dismiss</span>
              <span className="font-semibold text-[#133826]">Noble Science College Wan Bhachran</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
