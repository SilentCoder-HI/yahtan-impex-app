export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#ff6b6bcc] to-[#4ecdc4cc] text-white py-12 px-6 text-center font-playfair shadow-lg animate-headerFold">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest mb-4 animate-textGlow select-none">
        Yahtan Impex
      </h1>
      <p className="max-w-4xl mx-auto text-lg md:text-xl italic opacity-90 leading-relaxed px-4">
        Welcome to <span className="text-yellow-300 font-semibold">Yahtan Impex</span> - your premier destination for
        high-quality clothing. We take pride in offering{" "}
        <span className="text-yellow-300 font-semibold">exceptionally crafted garments</span> that combine comfort,
        style, and durability. Our carefully curated collection features{" "}
        <span className="text-yellow-300 font-semibold">only the finest materials</span> and latest fashion trends,
        ensuring you always look your best. Experience the{" "}
        <span className="text-yellow-300 font-semibold">perfect blend of quality and affordability</span> that keeps our
        customers coming back season after season.
      </p>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#ff6b6bcc] to-[#4ecdc4cc] opacity-80 animate-gradientBG -z-10"
      />
    </header>
  )
}
