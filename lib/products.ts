export interface Product {
  id: string
  name: string
  image: string
  category: string
  description: string
  sizes: string[]
  colors: string[]
}

export interface ProductCategory {
  slug: string
  name: string
  image: string
  description: string
}

export const categories: ProductCategory[] = [
  {
    slug: "t-shirts",
    name: "T-Shirts",
    image: "/products/t-shirts/t-shirt 1.jpg",
    description: "Comfortable and stylish t-shirts for everyday wear",
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    image: "/products/hoodies/hoodie 1.jpg",
    description: "Cozy hoodies perfect for cool weather",
  },
  {
    slug: "socks",
    name: "Socks",
    image: "/products/socks/sock 1.jpg",
    description: "Comfortable socks with unique patterns and designs",
  },
  {
    slug: "shorts",
    name: "Shorts",
    image: "/products/shorts/short 1.jpg",
    description: "Lightweight shorts for warm weather and active lifestyle",
  },
  {
    slug: "sweat-shirts",
    name: "Sweat Shirts",
    image: "/products/sweat-shirts/sweat-shirt 1.jpg",
    description: "Classic sweatshirts with soft fabric and comfortable fit",
  },
  {
    slug: "jackets",
    name: "Jackets",
    image: "/products/jackets/jacket 1.jpg",
    description: "Stylish jackets for protection and fashion",
  },
  {
    slug: "trousers",
    name: "Trousers",
    image: "/products/trousers/trouser 1.jpg",
    description: "Elegant trousers for formal and casual occasions",
  },
  {
    slug: "jeans",
    name: "Jeans",
    image: "/products/jeans/jean 1.jpg",
    description: "Stylish jeans for formal and casual occasions",
  },
]

export const products: Product[] = [
  // T-Shirts
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlDJTuXQCI9_w_0fuwLZ-DS0i_aNRWH5flg&s",
    category: "t-shirts",
    description: "Premium cotton t-shirt with comfortable fit",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Black", "White", "Gray"],
  },
  {
    id: "2",
    name: "Vintage Style T-Shirt",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlDJTuXQCI9_w_0fuwLZ-DS0i_aNRWH5flg&s",
    category: "t-shirts",
    description: "Retro-inspired t-shirt with vintage graphics",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Burgundy", "Forest Green"],
  },
  {
    id: "3",
    name: "Performance T-Shirt",
    image: "/placeholder.svg?height=400&width=400",
    category: "t-shirts",
    description: "Moisture-wicking t-shirt perfect for workouts",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy", "Red"],
  },

  // Hoodies
  {
    id: "4",
    name: "Classic Pullover Hoodie",
    image: "/placeholder.svg?height=400&width=400",
    category: "hoodies",
    description: "Comfortable pullover hoodie with kangaroo pocket",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy", "Burgundy"],
  },
  {
    id: "5",
    name: "Zip-Up Hoodie",
    image: "/placeholder.svg?height=400&width=400",
    category: "hoodies",
    description: "Full-zip hoodie with adjustable hood",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy", "Olive"],
  },

  // Shorts
  {
    id: "6",
    name: "Casual Cotton Shorts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlDJTuXQCI9_w_0fuwLZ-DS0i_aNRWH5flg&s",
    category: "shorts",
    description: "Lightweight cotton shorts for everyday comfort",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Navy", "Black", "Olive"],
  },
  {
    id: "7",
    name: "Athletic Shorts",
    image: "/placeholder.svg?height=400&width=400",
    category: "shorts",
    description: "Performance shorts with moisture-wicking fabric",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy", "Red"],
  },

  // Jackets
  {
    id: "8",
    name: "Denim Jacket",
    image: "/placeholder.svg?height=400&width=400",
    category: "jackets",
    description: "Classic denim jacket with vintage wash",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Light Blue"],
  },
  {
    id: "9",
    name: "Bomber Jacket",
    image: "/placeholder.svg?height=400&width=400",
    category: "jackets",
    description: "Stylish bomber jacket with ribbed cuffs",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Olive", "Burgundy"],
  },

  // Trousers
  {
    id: "10",
    name: "Formal Dress Pants",
    image: "/placeholder.svg?height=400&width=400",
    category: "trousers",
    description: "Elegant dress pants for formal occasions",
    sizes: ["30", "32", "34", "36", "38", "40"],
    colors: ["Black", "Navy", "Charcoal", "Brown"],
  },
  {
    id: "11",
    name: "Casual Chinos",
    image: "/placeholder.svg?height=400&width=400",
    category: "trousers",
    description: "Versatile chino pants for casual and smart-casual wear",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Olive", "Gray"],
  },

  // Sweat Shirts
  {
    id: "12",
    name: "Classic Crewneck Sweatshirt",
    image: "/t-shirt.webp",
    category: "sweat-shirts",
    description: "Comfortable crewneck sweatshirt with soft fleece lining",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy", "Burgundy"],
  },

  // Socks
  {
    id: "13",
    name: "Cotton Crew Socks",    
    image: "/placeholder.svg?height=400&width=400",
    category: "socks",
    description: "Comfortable cotton crew socks with reinforced heel and toe",
    sizes: ["S", "M", "L"],
    colors: ["White", "Black", "Gray", "Navy"],
  },
  {
    id: "14",
    name: "Patterned Dress Socks",
    image: "/placeholder.svg?height=400&width=400",
    category: "socks",
    description: "Stylish dress socks with unique patterns",
    sizes: ["S", "M", "L"],
    colors: ["Navy Stripe", "Gray Dots", "Burgundy Argyle"],
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((category) => category.slug === slug)
}
