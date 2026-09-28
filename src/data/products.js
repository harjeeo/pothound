export const sampleProducts = [
  { slug: 'donate-now', title: 'Donate Now', price: '₹1.00', placeholder: 'Donate now' },
  {
    slug: 'buff-mini-shepherds-pie',
    title: "Buff Mini Shepherd's Pie (Copy) (Copy)",
    price: '₹9.99–₹19.99',
    placeholder: 'LaDiDa gift box',
  },
  {
    slug: 'buffalo-meat-1',
    title: 'Buffalo Meat (Copy)',
    price: '₹9.99–₹19.99',
    placeholder: 'Buffalo Meat pouch',
  },
  {
    slug: 'buffalo-meat-2',
    title: 'Buffalo Meat (Copy)',
    price: '₹9.99–₹19.99',
    placeholder: 'Buffalo Meat pouch',
  },
]

export const productDetails = {
  'buff-mini-shepherds-pie': {
    title: "Buff Mini Shepherd's Pie",
    brand: 'ACANA',
    sku: '056701',
    breadcrumb: ['Home', 'Dog', 'Food', 'Pet Dog Food', "Buff Mini Shepherd's Pie"],
    priceRange: '₹9.99–₹19.99',
    weights: [
      { label: '250 grams', price: '₹9.99' },
      { label: '500 grams', price: '₹14.99' },
      { label: '1 kg', price: '₹19.99' },
    ],
    placeholder: 'LaDiDa gift box',
    thumbnails: ['LaDiDa gift box', 'LaDiDa box open'],
    details:
      "A homemade-style shepherd's pie for dogs, made with real buffalo mince, root vegetables, and a wholesome mash topping. Gently cooked to lock in flavor and nutrition.",
    ingredients:
      'Buffalo mince, potato, carrot, peas, bone broth, rosemary. Guaranteed analysis: 24% protein, 10% fat, 3% fiber, 70% moisture.',
    shipping:
      'Ships within 2 business days in insulated, eco-friendly packaging. Free shipping on orders over $40. Returns accepted within 14 days if unopened.',
  },
}

const fallbackDetail = (product) => ({
  title: product.title,
  brand: 'Pot Hound',
  sku: '000000',
  breadcrumb: ['Home', 'Shop', product.title],
  priceRange: product.price,
  weights: [{ label: 'Standard', price: product.price }],
  placeholder: product.placeholder,
  thumbnails: [product.placeholder],
  details: 'Product details coming soon.',
  ingredients: 'Ingredient information coming soon.',
  shipping: 'Free shipping on orders over $40. Returns accepted within 14 days if unopened.',
})

export function getProductBySlug(slug) {
  const product = sampleProducts.find((item) => item.slug === slug)
  if (!product) return null
  return productDetails[slug] ?? fallbackDetail(product)
}
