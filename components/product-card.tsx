import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  title: string
  image: string
  slug: string
  delay?: number
}

export default function ProductCard({ title, image, slug, delay = 0 }: ProductCardProps) {
  return (
    <Link href={`/collections/${slug}`}>
      <article
        className="relative bg-white bg-opacity-90 rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform-style-preserve-3d will-change-transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:cursor-pointer animate-floatBounce"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="relative h-64 overflow-hidden rounded-t-2xl border-b-4 border-[#FF6B6B]">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} collection`}
            fill
            className="object-cover transition-transform duration-700 hover:scale-110 hover:rotate-1"
          />
        </div>
        <h3 className="text-center text-xl font-semibold text-[#292F36] bg-white bg-opacity-80 py-4 relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-1 before:bg-[#FF6B6B] before:rounded-sm">
          {title}
        </h3>
      </article>
    </Link>
  )
}
