import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#FF6B6B] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Collection Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The collection you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-[#FF6B6B] hover:bg-[#e55555] text-white">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
