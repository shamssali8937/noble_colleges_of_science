import React, { useState, useEffect } from 'react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { COLLEGE_DATA } from '@/data/collegeData'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GalleryItem {
  id: string
  title: string
  category: string
  description: string
  aspectRatio: string
  image: string
  figureNumber: string
}

interface GalleryPageProps {
  onNavClick: (href: string) => void
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null)

  const categories = ['All', ...COLLEGE_DATA.galleryCategories]

  // Designated photographic plates corresponding to SRS Section 5 categories
  const gallerySlots: GalleryItem[] = [
    {
      id: 'building-1',
      title: 'College Main Campus & Façade',
      category: 'College Building',
      description: 'The exterior campus building and main grounds located near Old Musa Khel Road, Wan Bhachran.',
      aspectRatio: 'aspect-[16/10]',
      image: '/images/campus/campus-building.jpg',
      figureNumber: 'Figure 1',
    },
    {
      id: 'classrooms-1',
      title: 'Secondary & Intermediate Classrooms',
      category: 'Classrooms',
      description: 'Well-ventilated academic lecture halls structured for focused instruction and student engagement.',
      aspectRatio: 'aspect-[4/3]',
      image: '/images/campus/classroom-lecture.jpg',
      figureNumber: 'Figure 2',
    },
    {
      id: 'labs-1',
      title: 'Scientific Apparatus & Experiment Stations',
      category: 'Laboratories',
      description: 'Specialized lab setups for practical science syllabus demonstrations and experiments in physics, chemistry, and biology.',
      aspectRatio: 'aspect-[4/3]',
      image: '/images/campus/science-laboratory.jpg',
      figureNumber: 'Figure 3',
    },
    {
      id: 'library-1',
      title: 'Reading Desks & Reference Collection',
      category: 'Library',
      description: 'Curated board textbooks, reference literature, and quiet individual student study stations.',
      aspectRatio: 'aspect-[16/10]',
      image: '/images/campus/library-reading.jpg',
      figureNumber: 'Figure 4',
    },
    {
      id: 'principal-address-1',
      title: 'Founder & Principal Ehsanullah Malik Addressing Ceremony',
      category: 'Events & Student Activities',
      description: 'Principal Ehsanullah Malik addressing the student body and faculty from the official Noble Science College rostrum during an annual ceremony.',
      aspectRatio: 'aspect-[4/3]',
      image: '/images/campus/principal-ehsanullah-malik-address.jpg',
      figureNumber: 'Figure 5',
    },
    {
      id: 'student-gathering-1',
      title: 'Student Assembly & Institutional Gathering',
      category: 'Events & Student Activities',
      description: 'Noble Science College students seated attentively during an official ceremony and convocation session under the marquee at Wan Bhachran.',
      aspectRatio: 'aspect-[16/10]',
      image: '/images/campus/student-gathering-assembly.jpg',
      figureNumber: 'Figure 6',
    },
    {
      id: 'public-speaking-1',
      title: 'Student Public Speaking & Declamation',
      category: 'Events & Student Activities',
      description: 'A student delivering a speech at the microphone, demonstrating the college vision of building confidence and public speaking prowess.',
      aspectRatio: 'aspect-[16/10]',
      image: '/images/campus/student-public-speaking-speech.jpg',
      figureNumber: 'Figure 7',
    },
    {
      id: 'awards-1',
      title: 'Academic Honors & Board Distinction',
      category: 'Awards & Achievements',
      description: 'Commemoration of student academic milestones and BISE Sargodha examination achievements.',
      aspectRatio: 'aspect-[4/3]',
      image: '/images/campus/academic-awards.jpg',
      figureNumber: 'Figure 8',
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
        kicker="Visual Documentation"
        title="College Media & Photographic Archive"
        subtitle="Visual archive of campus grounds, classrooms, science laboratories, library facilities, and assemblies at Noble Science College."
        breadcrumb="Gallery"
        onHomeClick={() => onNavClick('#home')}
      />

      <Section variant="white" spacing="md" hasBorderBottom>
        <Container>
          {/* Category Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-3.5 py-1.5 text-xs transition-colors cursor-pointer border font-sans',
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

          {/* Editorial Grid of Photographic Plates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {filteredSlots.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group bg-[#FAF7F2] border border-[#E2DDD5] p-3 flex flex-col justify-between cursor-pointer transition-colors duration-150 hover:border-[#8F0D19]/40"
              >
                {/* Media Plate */}
                <div className={cn('overflow-hidden bg-[#F2ECE1] border border-[#E2DDD5]', item.aspectRatio)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                    loading="lazy"
                  />
                </div>

                {/* Formal Caption Block */}
                <div className="pt-2.5 mt-2 border-t border-[#E2DDD5] space-y-1">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] font-sans font-semibold">
                    <span className="text-[#8F0D19]">{item.figureNumber}</span>
                    <span className="text-[#756A67]">{item.category}</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1F1A19]">
                    {item.title}
                  </h3>
                  <p className="font-serif italic text-xs text-[#756A67] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Archival Documentation Note */}
          <div className="mt-12 pt-4 border-t border-[#E2DDD5] max-w-2xl mx-auto text-center font-sans">
            <p className="text-xs text-[#756A67] leading-relaxed">
              Official photographic documentation corresponding to verified campus infrastructure and academic operations at Noble Science College, Wan Bhachran.
            </p>
          </div>
        </Container>
      </Section>

      {/* Collegiate Lightbox Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-[#FAF7F2] border border-[#E2DDD5] max-w-3xl w-full p-4 sm:p-6 text-left space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F0D19] font-sans">
                  {activeModalItem.figureNumber} • {activeModalItem.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1F1A19] mt-0.5">
                  {activeModalItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 hover:bg-[#F2ECE1] border border-transparent hover:border-[#E2DDD5] transition-colors cursor-pointer text-[#1F1A19]"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Plate */}
            <div className="overflow-hidden border border-[#E2DDD5] bg-[#F2ECE1] max-h-[60vh]">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-auto object-contain max-h-[60vh] mx-auto"
              />
            </div>

            {/* Modal Formal Caption */}
            <div className="pt-2 border-t border-[#E2DDD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-sans">
              <p className="font-serif italic text-xs text-[#453D3B] leading-relaxed">
                {activeModalItem.description}
              </p>
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#8F0D19] shrink-0">
                Wan Bhachran Campus
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
