import Header from "@/components/header";
import Navigation from "@/components/navigation";
import ProductCard from "@/components/product-card";
import { categories } from "@/lib/products";

export default function HomePage() {
  return (
    <div>
      <Navigation />

      {/* Products Section */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {categories.map((category, index) => (
          <ProductCard
            key={category.slug}
            title={category.name}
            image={category.image}
            slug={category.slug}
            delay={index}
          />
        ))}
      </section>

      {/* About Us Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-playfair font-bold text-[#FF6B6B] mb-6">
          About Yahtan Impex
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          At Yahtan Impex, we believe clothing is more than just fabric —
          it's an expression of who you are. Founded in 2010, our mission is
          to provide premium quality apparel that blends comfort, style, and
          sustainability. We source eco-friendly materials and partner with
          skilled artisans to bring you collections that are both trendy and
          timeless. Whether you're dressing for casual days or special
          occasions, Yahtan Impex is your trusted partner in fashion.
        </p>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-[#4ecdc4cc] bg-opacity-20 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold text-[#292F36] mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                quote:
                  "The quality of the T-shirts is outstanding! Soft, durable, and stylish. I get compliments every time I wear them.",
                author: "Sarah M.",
              },
              {
                quote:
                  "Yahtan Impex's hoodies are my go-to for chilly days. Perfect fit and super cozy. Highly recommend!",
                author: "James K.",
              },
              {
                quote:
                  "Excellent customer service and fast shipping. The trousers I ordered fit perfectly and look amazing.",
                author: "Aisha R.",
              },
            ].map((item, idx) => (
              <blockquote
                key={idx}
                className="bg-white rounded-xl p-8 shadow-lg text-gray-800 relative before:absolute before:-top-6 before:left-1/2 before:-translate-x-1/2 before:text-6xl before:text-[#FF6B6B]"
              >
                <p className="mb-4 italic">"{item.quote}"</p>
                <footer className="font-semibold text-[#4ecdc4]">
                  - {item.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section >

      {/* Latest News Section */}
      <section id="news" className="max-w-6xl mx-auto px-6 py-16" >
        <h2 className="text-4xl font-playfair font-bold text-[#FF6B6B] mb-10 text-center">
          Latest News & Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "/placeholder.svg?height=400&width=600",
              alt: "Autumn collection",
              title: "Introducing Our Autumn Collection 2025",
              desc: "Discover the latest trends in warm and comfortable clothing perfect for the autumn season. Featuring new colors, fabrics, and styles.",
              date: "September 15, 2025",
            },
            {
              img: "/placeholder.svg?height=400&width=600",
              alt: "Sustainability",
              title: "Our Commitment to Sustainability",
              desc: "Learn about our new eco-friendly initiatives and how we are reducing our environmental footprint through sustainable sourcing and production.",
              date: "August 1, 2025",
            },
            {
              img: "/placeholder.svg?height=400&width=600",
              alt: "Customer event",
              title: "Join Us for Our Customer Appreciation Event",
              desc: "We're hosting a special event with exclusive discounts, giveaways, and sneak peeks at upcoming collections. Don't miss out!",
              date: "October 5, 2025",
            },
          ].map((news, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={news.img}
                alt={news.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#292F36]">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4">{news.desc}</p>
                <time className="text-sm text-gray-400">{news.date}</time>
              </div>
            </article>
          ))}
        </div>
      </section >

      {/* Contact Section */}
      <section id="contact" className="bg-[#2c3e50e6] text-white py-16 px-6" >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold mb-8">
            Get in Touch
          </h2>
          <p className="mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
            Have questions or want to place an order? Reach out to us through
            any of the following channels. We're here to help and ensure you
            have the best shopping experience.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <ContactLink
              icon="📱"
              label="+92 336 1131342"
              href="https://wa.me/923361131342"
            />
            <ContactLink
              icon="✉️"
              label="yahtanimpex@gmail.com"
              href="mailto:yahtanimpex@gmail.com"
            />
            <ContactLink
              icon="📷"
              label="@yahtan_impex"
              href="https://www.threads.com/@yahtan_impex"
            />
          </div>
        </div>
      </section >

      {/* Footer */}
      <footer className="bg-[#2c3e50e6] text-white py-8 text-center relative clip-path-footer" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-yellow-300 border-dashed mb-4" />
          <p className="opacity-80 text-sm select-none">
            © 2025 Yahtan Impex. All rights reserved.
          </p>
        </div>
      </footer >
    </div >
  );
}

// Contact Link Component
function ContactLink({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full px-6 py-3 border border-white border-dashed transition transform hover:-translate-y-1 shadow-lg"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-lg font-semibold">{label}</span>
    </a>
  );
}
