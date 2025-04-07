import Image from "next/image"
import Link from "next/link"

export default function ToursPage() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Tours</h1>

        {/* Featured Tours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card">
            <div className="relative h-64">
              <Image
                src="/coast.png?height=400&width=600"
                alt="Coastal Wonders Tour"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">City Tour: Coastal Wonders</h2>
              <p className="mb-4">Explore the breathtaking coastal landscapes with our guided city tour.</p>
              <p className="text-[#ff3141] font-bold mb-4">$120 per person</p>
              <Link href="/booking" className="btn-primary block text-center">
                Book Now
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="relative h-64">
              <Image src="/citylight.png?height=400&width=600" alt="City Lights Tour" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">City Lights: Evening Tour</h2>
              <p className="mb-4">
                Experience the city's vibrant energy with an evening tour through its iconic landmarks.
              </p>
              <p className="text-[#ff3141] font-bold mb-4">$150 per group</p>
              <Link href="/booking" className="btn-primary block text-center">
                Book Now
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="relative h-64">
              <Image
                src="/historicdrive.png?height=400&width=600"
                alt="Historic Drive Tour"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Historic Drive: Classic Car Tour</h2>
              <p className="mb-4">Discover the history of the city with a classic car tour led by expert drivers.</p>
              <p className="text-[#ff3141] font-bold mb-4">$200 per car</p>
              <Link href="/booking" className="btn-primary block text-center">
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Explore More Cities</h2>

        {/* City Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=400" alt="City 1" fill className="object-cover" />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=400" alt="City 2" fill className="object-cover" />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=400" alt="City 3" fill className="object-cover" />
          </div>
          <div className="relative h-40 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=400" alt="City 4" fill className="object-cover" />
          </div>
        </div>

        {/* Customer Reviews */}
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

        <div className="space-y-4 mb-8">
          <div className="review-card">
            <p className="mb-2">
              "The tour was fantastic! Our guide was knowledgeable and the views were breathtaking."
            </p>
            <p className="text-[#ff3141]">- Emily R.</p>
          </div>

          <div className="review-card">
            <p className="mb-2">"A great experience for the whole family. Highly recommend the city lights tour!"</p>
            <p className="text-[#ff3141]">- Michael T.</p>
          </div>

          <div className="review-card">
            <p className="mb-2">"An unforgettable adventure with stunning sights and a wonderful guide."</p>
            <p className="text-[#ff3141]">- Sarah L.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

