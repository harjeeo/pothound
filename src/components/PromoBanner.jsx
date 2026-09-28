import { HugeiconsIcon } from '@hugeicons/react'
import { BoneIcon, PawPrintIcon, ArrowUpLeftIcon } from '@hugeicons/core-free-icons'
import HeadingFlourish from './decorations/HeadingFlourish'

function PromoBanner() {
  return (
    <section className="bg-brand-cream px-6 pb-20 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <HugeiconsIcon
          icon={BoneIcon}
          size={36}
          className="absolute top-0 right-4 -translate-y-full text-brand-ink/70 md:right-10"
        />

        <div className="relative z-10 mx-auto -mb-1 flex w-full max-w-64 justify-center">
          <div className="flex aspect-square w-full items-end justify-center rounded-t-full border-2 border-dashed border-brand-ink/20 bg-white/60 pb-4 text-center text-sm text-brand-ink/40">
            Puppy peeking
            <br />
            photo cutout
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-yellow px-8 py-14 md:px-16 md:py-16">
          <HugeiconsIcon
            icon={BoneIcon}
            size={32}
            className="absolute top-8 left-8 text-brand-ink/60"
          />

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-start gap-2">
                <HeadingFlourish aria-hidden="true" className="mt-2 size-8 shrink-0 text-brand-ink" />
                <h2 className="font-display text-4xl leading-snug text-brand-ink md:text-5xl">
                  Haircut + Bath for your Pet
                </h2>
              </div>

              <HugeiconsIcon
                icon={PawPrintIcon}
                size={40}
                className="mt-8 -rotate-12 text-brand-ink"
              />
            </div>

            <div className="relative">
              <p className="max-w-sm text-brand-ink/80">
                Order a haircut + bath service package for your pet and get 50% off for your
                next order.
              </p>

              <div className="relative mt-6 inline-block">
                <button
                  type="button"
                  className="relative z-10 rounded-full bg-brand-ink px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Book Now
                </button>

                <HugeiconsIcon
                  icon={ArrowUpLeftIcon}
                  size={48}
                  strokeWidth={2.5}
                  className="absolute top-full left-1/2 mt-2 text-brand-ink"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
