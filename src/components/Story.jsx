import { HugeiconsIcon } from '@hugeicons/react'
import { BoneIcon, ArrowDownLeftIcon, ArrowRight01Icon } from '@hugeicons/core-free-icons'

function Story() {
  return (
    <section className="bg-brand-cream-light py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 lg:px-12">
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm">
          <div className="absolute inset-x-6 inset-y-4 rounded-[45%] bg-blue-100" />

          <HugeiconsIcon
            icon={BoneIcon}
            size={36}
            className="absolute top-6 right-10 rotate-45 text-amber-700/70"
          />
          <HugeiconsIcon
            icon={BoneIcon}
            size={28}
            className="absolute top-1/3 -left-2 -rotate-12 text-amber-700/70"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex aspect-4/5 w-4/5 items-center justify-center rounded-3xl border-2 border-dashed border-brand-ink/20 bg-white/60 text-center text-sm text-brand-ink/40">
              Dog &amp; cat with
              <br />
              food bowl photo
            </div>
          </div>

          <HugeiconsIcon
            icon={ArrowDownLeftIcon}
            size={56}
            strokeWidth={2.5}
            className="absolute top-1/3 -right-4 text-brand-ink md:-right-8"
          />
        </div>

        <div>
          <h2 className="font-display text-4xl leading-snug text-brand-ink md:text-5xl">
            Your <span className="text-brand-yellow">favorite</span> pet food &amp; supplies
            store
          </h2>

          <p className="mt-6 max-w-md text-brand-ink/70">
            Pot Hound is a family owned business. Our mission is to serve your dog with
            wholesome, homemade food and treats made from real, high quality ingredients
            &mdash; because every good boy and girl deserves the best.
          </p>

          <a
            href="#about"
            className="mt-6 inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-ink hover:opacity-70"
          >
            Learn more
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Story
