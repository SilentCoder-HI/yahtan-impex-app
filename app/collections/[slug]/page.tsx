import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react"

interface CollectionPageProps {
  params: {
    slug: string
  }
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const category = getCategoryBySlug(params.slug)
  const products = getProductsByCategory(params.slug)

  if (!category) {
    notFound()
  }

  return (
    <div>
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#FF6B6B] hover:text-[#e55555] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#292F36] mb-4">{category.name}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
          <div className="mt-6">
            <Badge variant="outline" className="text-[#FF6B6B] border-[#FF6B6B]">
              {products.length} Products Available
            </Badge>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                    <Heart size={16} />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#292F36] mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Available Sizes:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="secondary" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#FF6B6B] hover:bg-[#e55555] text-white">
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">No products available yet</h3>
            <p className="text-gray-500 mb-8">
              We're working on adding more products to this collection. Check back soon!
            </p>
            <Link href="/">
              <Button variant="outline" className="border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white">
                Browse Other Collections
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
