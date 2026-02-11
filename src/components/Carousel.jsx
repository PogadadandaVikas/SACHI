import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Carousel({ items, renderItem, ariaLabel = 'carousel' }) {
  const containerRef = useRef(null)

  const scrollByAmount = (direction) => {
    const container = containerRef.current
    if (!container) return
    const amount = container.clientWidth * 0.75
    container.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pr-4 scroll-smooth"
        role="region"
        aria-label={ariaLabel}
      >
        {items.map((item) => (
          <div key={item.id || item.title} className="w-[260px] shrink-0 snap-start sm:w-[300px]">
            {renderItem(item)}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-stone/50 bg-white text-ink shadow-soft transition hover:border-copper hover:text-copper md:flex"
        aria-label="Scroll left"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-stone/50 bg-white text-ink shadow-soft transition hover:border-copper hover:text-copper md:flex"
        aria-label="Scroll right"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}

export default Carousel
