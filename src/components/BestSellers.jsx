import ProductCarousel from './ProductCarousel'
import { sampleProducts } from '../data/products'

function BestSellers() {
  return <ProductCarousel heading="Best Selling Products" products={sampleProducts} />
}

export default BestSellers
