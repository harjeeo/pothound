import { HugeiconsIcon } from '@hugeicons/react'
import { BoneIcon, Basketball01Icon, DeliveryTruck01Icon } from '@hugeicons/core-free-icons'
import BurstMark from './decorations/BurstMark'
import UnderlineSquiggle from './decorations/UnderlineSquiggle'

function Hero() {
  return (
    <section className="bg-brand-orange text-brand-cream-light">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 overflow-hidden px-6 py-16 md:grid-cols-2 md:py-24 lg:px-12">
        <div className="relative z-10">
          <BurstMark
            aria-hidden="true"
            className="absolute -top-6 -left-2 size-10 text-brand-yellow md:-top-8 md:-left-4 md:size-14"
          />

          <h1 className="font-display text-5xl leading-tight md:text-6xl lg:text-7xl">
            premium food
            <br />
            for{' '}
            <span className="relative inline-block">
              your dog
              <UnderlineSquiggle
                aria-hidden="true"
                className="absolute -bottom-3 left-0 h-3 w-full text-brand-yellow md:-bottom-4 md:h-4"
              />
            </span>
          </h1>

          <p className="mt-6 max-w-sm font-semibold text-brand-cream-light">
            Spoil your pet by shopping from our vast online canine catalog.
          </p>

          <button
            type="button"
            className="mt-8 rounded-full bg-brand-ink px-8 py-3 font-semibold text-brand-cream-light transition-opacity hover:opacity-90"
          >
            Shop Now
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <HugeiconsIcon
            icon={BoneIcon}
            size={40}
            className="absolute top-2 right-16 text-brand-ink/80 md:right-24"
          />
          <HugeiconsIcon
            icon={Basketball01Icon}
            size={32}
            className="absolute bottom-24 left-0 text-brand-ink/80"
          />

          <div className="flex aspect-4/3 w-full max-w-md items-center justify-center rounded-3xl border-2 border-dashed border-brand-cream-light/40 bg-brand-orange-dark/30 text-center text-sm text-brand-cream-light/70">
            Product image placeholder
            <br />
            (Buffalo Meat pouch)
          </div>
        </div>
      </div>

      <div className="border-t border-brand-cream-light/10 bg-brand-orange-dark">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4 lg:px-12">
          <HugeiconsIcon icon={DeliveryTruck01Icon} size={22} />
          <p className="text-sm font-semibold">Free shipping on orders over $40!</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
