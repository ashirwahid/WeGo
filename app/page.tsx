import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section with Destinations */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="relative h-64">
                <Image src="/newyork.png?height=400&width=600" alt="New York City" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">New York City</h2>
              </div>
            </div>

            <div className="card">
              <div className="relative h-64">
                <Image src="/paris.png?height=400&width=600" alt="Paris" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">Paris</h2>
              </div>
            </div>

            <div className="card">
              <div className="relative h-64">
                <Image src="/sydney.png?height=400&width=600" alt="Sydney" fill className="object-cover" />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">Sydney</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-8 bg-[#f8d7da]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Customer Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">"Amazing tour! Our guide was knowledgeable and friendly. Highly recommend!"</p>
              <p className="text-[#ff3141]">- Emily Johnson</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">"A wonderful experience visiting the beautiful cities. Great service!"</p>
              <p className="text-[#ff3141]">- Michael Brown</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-4">"Loved every minute of our tour. The driver was excellent!"</p>
              <p className="text-[#ff3141]">- Sarah Lee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <Link href="/tours" className="btn-primary text-lg px-8 py-3">
            Book Your Tour
          </Link>
        </div>
      </section>
    </div>
  )
}

