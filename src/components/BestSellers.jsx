import { useRef, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowRight01Icon, Add01Icon } from '@hugeicons/core-free-icons'

const products = [
  { title: 'Donate Now', price: '₹1.00', placeholder: 'Donate now' },
  { title: "Buff Mini Shepherd's Pie (Copy) (Copy)", price: '₹9.99–₹19.99', placeholder: 'LaDiDa gift box' },
  { title: 'Buffalo Meat (Copy)', price: '₹9.99–₹19.99', placeholder: 'Buffalo Meat pouch' },
  { title: 'Buffalo Meat (Copy)', price: '₹9.99–₹19.99', placeholder: 'Buffalo Meat pouch' },
]

function BestSellers() {
  const trackRef = useRef(null)
  const [scrollRatio, setScrollRatio] = useState({ start: 0, size: 1 })

  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    const start = maxScroll > 0 ? el.scrollLeft / el.scrollWidth : 0
    const size = el.clientWidth / el.scrollWidth
    setScrollRatio({ start, size })
  }

  const scrollByCard = (direction) => {
    const el = trackRef.current
    if (!el) return
    const card = el.firstElementChild
    const amount = card ? card.getBoundingClientRect().width + 24 : el.clientWidth
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="bg-brand-cream py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-brand-ink md:text-3xl">
            Best Selling Products
          </h2>
          <a
            href="#shop"
            className="flex items-center gap-1 text-sm font-semibold text-brand-ink hover:opacity-70"
          >
            View All
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </a>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByCard(-1)}
            className="absolute top-1/2 -left-5 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-ink shadow-md md:flex"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
          </button>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product, index) => (
              <article
                key={`${product.title}-${index}`}
                className="w-64 flex-none snap-start rounded-2xl bg-white shadow-sm md:w-72"
              >
                <div className="flex aspect-square items-center justify-center rounded-t-2xl bg-neutral-100 p-6">
                  <span className="text-center text-sm text-brand-ink/40">{product.placeholder}</span>
                </div>
                <div className="relative p-5">
                  <h3 className="pr-10 font-display text-base leading-snug text-brand-ink">
                    {product.title}
                  </h3>
                  <p className="mt-2 font-display text-brand-ink/70">{product.price}</p>
                  <button
                    type="button"
                    aria-label={`Add ${product.title} to cart`}
                    className="absolute right-5 bottom-5 flex size-8 items-center justify-center rounded-full bg-brand-ink text-white hover:opacity-80"
                  >
                    <HugeiconsIcon icon={Add01Icon} size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByCard(1)}
            className="absolute top-1/2 -right-5 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-ink shadow-md md:flex"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
          </button>
        </div>

        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-400/30">
          <div
            className="h-full rounded-full bg-slate-400"
            style={{
              marginLeft: `${scrollRatio.start * 100}%`,
              width: `${scrollRatio.size * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default BestSellers
