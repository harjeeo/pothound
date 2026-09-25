import { HugeiconsIcon } from '@hugeicons/react'
import { HandFistIcon, BoneIcon } from '@hugeicons/core-free-icons'
import HeadingFlourish from './decorations/HeadingFlourish'

const collections = [
  { shopLabel: 'Shop', title: 'Ladida', placeholder: 'LaDiDa gift boxes' },
  { shopLabel: 'Shop', title: 'Gourmet Nutrition', placeholder: 'Buffalo Meat pouch' },
  { shopLabel: 'Shop', title: 'All Products', placeholder: 'Full product lineup' },
]

function Collections() {
  return (
    <section className="bg-brand-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14 flex items-center justify-center gap-2">
          <HeadingFlourish aria-hidden="true" className="size-9 text-brand-yellow" />
          <h2 className="font-display text-4xl font-bold text-brand-ink md:text-5xl">
            Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {collections.map((item, index) => (
            <div key={item.title} className="relative flex flex-col items-center text-center">
              {index === 0 && (
                <HugeiconsIcon
                  icon={HandFistIcon}
                  size={40}
                  className="absolute -top-8 left-6 -rotate-6 text-brand-ink md:-top-10"
                />
              )}
              {index === 2 && (
                <HugeiconsIcon
                  icon={BoneIcon}
                  size={40}
                  className="absolute -top-8 right-6 rotate-12 text-brand-ink md:-top-10"
                />
              )}

              <div className="flex aspect-square w-full items-center justify-center rounded-[3rem] bg-white p-10 shadow-sm md:rounded-[4rem]">
                <span className="text-sm text-brand-ink/40">{item.placeholder}</span>
              </div>

              <p className="mt-6 font-display text-sm text-brand-ink/60">{item.shopLabel}</p>
              <h3 className="font-display text-2xl font-bold text-brand-ink">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
