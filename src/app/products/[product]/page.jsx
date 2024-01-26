import { ProductDetails, SimilarProducts } from '@/src/layout'

export default function Product({ params }) {
  return (
    <main className="w-[1440px] h-fit flex flex-col items-center">
      <ProductDetails id={params.product} />
      <SimilarProducts />
    </main>
  )
}
