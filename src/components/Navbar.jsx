import { HugeiconsIcon } from '@hugeicons/react'
import {
  Search01Icon,
  FavouriteIcon,
  UserIcon,
  ShoppingBag03Icon,
} from '@hugeicons/core-free-icons'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About us', href: '#about' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact us', href: '#contact' },
]

const iconButtons = [
  { icon: Search01Icon, label: 'Search' },
  { icon: FavouriteIcon, label: 'Wishlist' },
  { icon: UserIcon, label: 'Account' },
]

function Navbar() {
  return (
    <header className="bg-brand-cream">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#" className="flex items-center gap-2 font-display text-2xl text-brand-ink">
          pot hound
        </a>

        <ul className="hidden items-center gap-8 font-display text-base text-brand-ink md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-opacity hover:opacity-70">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {iconButtons.map(({ icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full bg-brand-ink text-brand-cream transition-opacity hover:opacity-80"
            >
              <HugeiconsIcon icon={icon} size={18} />
            </button>
          ))}

          <button
            type="button"
            aria-label="Cart"
            className="relative flex size-10 items-center justify-center rounded-full bg-brand-ink text-brand-cream transition-opacity hover:opacity-80"
          >
            <HugeiconsIcon icon={ShoppingBag03Icon} size={18} />
            <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-brand-yellow text-[10px] font-bold text-brand-ink">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
