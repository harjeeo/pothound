import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { FavouriteIcon, PlusSignIcon, MinusSignIcon } from '@hugeicons/core-free-icons'
import { getProductBySlug } from '../data/products'
import BurstMark from '../components/decorations/BurstMark'

const accordionSections = [
  { key: 'details', label: 'Details' },
  { key: 'ingredients', label: 'Ingredients & Analysis' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  const [activeImage, setActiveImage] = useState(0)
  const [weightIndex, setWeightIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [openSection, setOpenSection] = useState(null)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-12">
        <p className="font-display text-2xl text-brand-ink">Product not found.</p>
        <Link to="/" className="mt-4 inline-block text-brand-ink underline">
          Back to home
        </Link>
      </div>
    )
  }

  const selectedWeight = product.weights[weightIndex]

  return (
    <section className="bg-brand-cream py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <nav className="mb-6 text-sm text-brand-ink/70">
          {product.breadcrumb.map((crumb, index) => (
            <span key={crumb}>
              {index > 0 && ' / '}
              {crumb}
            </span>
          ))}
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col-reverse gap-4 sm:flex-row">
            <div className="flex shrink-0 gap-3 sm:flex-col">
              {product.thumbnails.map((thumb, index) => (
                <button
                  key={thumb}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`flex size-20 items-center justify-center rounded-xl border-2 bg-white p-2 text-center text-[10px] text-brand-ink/40 ${
                    activeImage === index ? 'border-brand-ink' : 'border-transparent'
                  }`}
                >
                  {thumb}
                </button>
              ))}
            </div>

            <div className="flex aspect-square flex-1 items-center justify-center rounded-2xl bg-white p-10 text-center text-sm text-brand-ink/40">
              {product.thumbnails[activeImage]}
            </div>
          </div>

          <div>
            <h1 className="font-display text-4xl text-brand-ink">{product.title}</h1>
            <p className="mt-2 text-sm text-brand-ink/70">
              by <span className="font-semibold text-brand-ink underline">{product.brand}</span>
            </p>
            <p className="mt-1 text-sm text-brand-ink/50">SKU: {product.sku}</p>

            <div className="relative mt-6 rounded-2xl bg-white p-6 shadow-sm">
              <BurstMark
                aria-hidden="true"
                className="absolute -top-6 -right-4 size-10 text-brand-yellow"
              />

              <p className="font-display text-2xl text-brand-ink">{product.priceRange}</p>

              {product.weights.length > 1 && (
                <div className="mt-4">
                  <label className="text-sm text-brand-ink/70" htmlFor="weight">
                    Weight
                  </label>
                  <select
                    id="weight"
                    value={weightIndex}
                    onChange={(event) => setWeightIndex(Number(event.target.value))}
                    className="mt-2 w-full rounded-full border border-brand-ink/20 bg-white px-4 py-2 text-brand-ink outline-none focus:border-brand-ink/50"
                  >
                    {product.weights.map((weight, index) => (
                      <option key={weight.label} value={index}>
                        {weight.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <p className="mt-4 font-display text-xl text-brand-ink">{selectedWeight.price}</p>

              <div className="mt-4 flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
                  className="w-16 rounded-full border border-brand-ink/20 bg-white px-4 py-2 text-center outline-none focus:border-brand-ink/50"
                />

                <button
                  type="button"
                  className="flex-1 rounded-full bg-brand-yellow px-8 py-3 font-semibold text-brand-ink transition-opacity hover:opacity-90"
                >
                  Add to cart
                </button>

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-ink/20 text-brand-ink hover:opacity-70"
                >
                  <HugeiconsIcon icon={FavouriteIcon} size={20} />
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-white shadow-sm">
              {accordionSections.map((section, index) => {
                const isOpen = openSection === section.key
                return (
                  <div
                    key={section.key}
                    className={index > 0 ? 'border-t border-brand-ink/10' : ''}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenSection(isOpen ? null : section.key)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="font-display text-lg text-brand-ink">{section.label}</span>
                      <HugeiconsIcon
                        icon={isOpen ? MinusSignIcon : PlusSignIcon}
                        size={18}
                        className="text-brand-ink"
                      />
                    </button>
                    {isOpen && (
                      <p className="px-6 pb-5 text-sm text-brand-ink/70">{product[section.key]}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
