import { HugeiconsIcon } from '@hugeicons/react'
import {
  InstagramIcon,
  FacebookIcon,
  NewTwitterIcon,
  PinterestIcon,
  ArrowUp01Icon,
} from '@hugeicons/core-free-icons'
import LogoBadge from './decorations/LogoBadge'
import HeadingFlourish from './decorations/HeadingFlourish'

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: NewTwitterIcon, label: 'Twitter', href: '#' },
  { icon: PinterestIcon, label: 'Pinterest', href: '#' },
]

const footerColumns = [
  {
    heading: 'Shop',
    links: ['Dog', 'Cat', 'Small Animal', 'Fish', 'Reptile', 'Bird'],
  },
  {
    heading: 'Services',
    links: ['Grooming', 'Delivery'],
  },
  {
    heading: 'Pot Hound',
    links: ['About us', 'Blog'],
  },
  {
    heading: 'Customer Service',
    links: ['Contact us', 'Shipping', 'Returns', 'FAQ'],
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-footer">
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-12">
        <LogoBadge className="mx-auto" />

        <div className="mt-10 grid grid-cols-1 items-start gap-10 text-center md:grid-cols-3 md:text-left">
          <div>
            <p className="font-display text-sm text-brand-ink">We are social:</p>
            <div className="mt-4 flex justify-center gap-4 md:justify-start">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-brand-ink transition-opacity hover:opacity-70"
                >
                  <HugeiconsIcon icon={icon} size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-start justify-center gap-2 md:justify-center">
            <HeadingFlourish aria-hidden="true" className="mt-1 size-7 shrink-0 text-brand-yellow" />
            <div>
              <p className="font-display text-sm text-brand-ink">Our experts are available 24/7:</p>
              <p className="mt-1 font-display text-2xl font-bold text-brand-ink">
                +1-800-356-8933
              </p>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-display text-sm text-brand-ink">
              Subscribe! New subscribers get 20% off!
            </p>
            <form className="mt-4 flex justify-center gap-2 md:justify-end">
              <input
                type="email"
                placeholder="Email"
                className="w-48 rounded-full border border-brand-ink/20 bg-white px-4 py-2 text-sm outline-none focus:border-brand-ink/50"
              />
              <button
                type="submit"
                className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-brand-ink transition-opacity hover:opacity-80"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-12 border-brand-ink/10" />

        <div className="grid grid-cols-2 gap-8 py-12 text-center sm:grid-cols-4 md:text-left">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-display text-sm font-semibold text-brand-ink/50">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-display text-sm text-brand-ink hover:opacity-70"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-brand-ink/10" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-brand-ink/70 md:flex-row">
          <p>&copy; {year} PotHound, All Rights Reserved</p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 font-semibold text-brand-ink"
          >
            Back to top
            <span className="flex size-8 items-center justify-center rounded-lg bg-slate-600 text-white">
              <HugeiconsIcon icon={ArrowUp01Icon} size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
