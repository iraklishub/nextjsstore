import { HeaderBanner, CategoriesSlider, SpringCollections, WeeksHighlights } from '../layout'

export default function Home() {
  return (
    <main className="w-[1440px] flex flex-col items-center">
      <HeaderBanner />
      <CategoriesSlider className="mt-36" />
      <SpringCollections className="mt-48" />
      <WeeksHighlights className="mt-28" />
    </main>
  )
}
