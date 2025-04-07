import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, HelpCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div>
      {/* Announcement Banner */}
      <div className="bg-pink-200 py-4 text-center">
        <p className="text-gray-800">Use code EXPLORE for special tour discounts</p>
      </div>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="City background"
            fill
            className="object-cover brightness-50"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover the beauty of cities with our guided tours.
          </h1>

          <div className="max-w-2xl mx-auto bg-white rounded-full overflow-hidden flex items-center p-2">
            <input type="text" placeholder="Search for tours" className="flex-1 px-4 py-2 focus:outline-none" />
            <button className="bg-[#ff3141] text-white p-2 rounded-full">
              <Search className="h-5 w-5" />
            </button>
          </div>

          <p className="text-white mt-4">Explore city tours with professional drivers for a memorable experience.</p>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/tours/city"
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
            >
              <div className="p-3 rounded-full bg-gray-100">
                <MapPin className="h-6 w-6 text-[#ff3141]" />
              </div>
              <span className="font-medium">City Tours</span>
            </Link>

            <Link
              href="/tours/city-to-city"
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
            >
              <div className="p-3 rounded-full bg-gray-100">
                <MapPin className="h-6 w-6 text-[#ff3141]" />
              </div>
              <span className="font-medium">City-to-City</span>
            </Link>

            <Link
              href="/tours/custom"
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
            >
              <div className="p-3 rounded-full bg-gray-100">
                <MapPin className="h-6 w-6 text-[#ff3141]" />
              </div>
              <span className="font-medium">Custom</span>
            </Link>

            <Link
              href="/support"
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
            >
              <div className="p-3 rounded-full bg-gray-100">
                <HelpCircle className="h-6 w-6 text-[#ff3141]" />
              </div>
              <span className="font-medium">Support</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">
            Popular in <span className="text-[#ff3141]">Paris</span>
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
            <button className="bg-[#ff3141] text-white px-4 py-2 rounded-full whitespace-nowrap">All</button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full whitespace-nowrap">City Tours</button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full whitespace-nowrap">City-to-City</button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full whitespace-nowrap">City</button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full whitespace-nowrap">Custom Tours</button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full whitespace-nowrap">
              Customer Reviews
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Cityscape Adventure"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-white text-[#ff3141] px-2 py-1 rounded text-sm font-medium">
                  View
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Cityscape Adventure (FR)</h3>
                <p className="text-sm text-gray-600">City Lights Show - 17/08/2023, 8 PM</p>
                <button className="btn-primary w-full mt-4 text-sm">Book now</button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=400" alt="Urban Explorer" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-white text-[#ff3141] px-2 py-1 rounded text-sm font-medium">
                  View
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Urban Explorer (ITA)</h3>
                <p className="text-sm text-gray-600">Historic Journey - 19/09/2023</p>
                <button className="btn-primary w-full mt-4 text-sm">Book now</button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Cultural Delight"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-white text-[#ff3141] px-2 py-1 rounded text-sm font-medium">
                  View
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Cultural Delight (ESP)</h3>
                <p className="text-sm text-gray-600">Scenic Route - 18/09/2023</p>
                <button className="btn-primary w-full mt-4 text-sm">Book now</button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Architectural Wonders"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-white text-[#ff3141] px-2 py-1 rounded text-sm font-medium">
                  View
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Architectural Wonders (GER)</h3>
                <p className="text-sm text-gray-600">Lorem ipsum</p>
                <button className="btn-primary w-full mt-4 text-sm">Book now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours This Week */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Popular Tours this Week</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/citylight.png?height=300&width=400" alt="City Tours" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-white text-[#ff3141] px-2 py-1 rounded text-sm font-medium">
                  Explore
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">City Tours</h3>
                <p className="text-sm text-gray-600">City Pictures</p>
                <button className="btn-primary w-full mt-4 text-sm">Book Now</button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=400" alt="Tour Options" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-white text-[#ff3141] px-2 py-1 rounded text-sm font-medium">
                  View
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Tour Options</h3>
                <p className="text-sm text-gray-600">Customer Reviews</p>
                <button className="btn-primary w-full mt-4 text-sm">Book Now</button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=400" alt="Contact Form" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-white text-[#ff3141] px-2 py-1 rounded text-sm font-medium">
                  Submit
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Contact Form</h3>
                <p className="text-sm text-gray-600">Tour Inquiries</p>
                <button className="btn-primary w-full mt-4 text-sm">Inquire Now</button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=400" alt="Tour Packages" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-white text-[#ff3141] px-2 py-1 rounded text-sm font-medium">
                  Discover
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold">Tour Packages</h3>
                <p className="text-sm text-gray-600">Tour Destinations</p>
                <button className="btn-primary w-full mt-4 text-sm">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Options Available */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Tour Options Available</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <div className="bg-gray-200 p-4 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="City Tour Explorer"
                  width={80}
                  height={80}
                  className="rounded"
                />
              </div>
              <h3 className="font-bold mb-1">City Tour Explorer</h3>
              <p className="text-sm text-gray-600 mb-4">Explore with us</p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm w-full">Join</button>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="City Tour Packages"
                  width={80}
                  height={80}
                  className="rounded"
                />
              </div>
              <h3 className="font-bold mb-1">City Tour Packages</h3>
              <p className="text-sm text-gray-600 mb-4">Join our tours</p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm w-full">Discover</button>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="City Tour Experience"
                  width={80}
                  height={80}
                  className="rounded"
                />
              </div>
              <h3 className="font-bold mb-1">City Tour Experience</h3>
              <p className="text-sm text-gray-600 mb-4">Join our tours</p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm w-full">Explore</button>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="City Tour Adventure"
                  width={80}
                  height={80}
                  className="rounded"
                />
              </div>
              <h3 className="font-bold mb-1">City Tour Adventure</h3>
              <p className="text-sm text-gray-600 mb-4">Join us now</p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm w-full">Book Now</button>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="City Tour Memories"
                  width={80}
                  height={80}
                  className="rounded"
                />
              </div>
              <h3 className="font-bold mb-1">City Tour Memories</h3>
              <p className="text-sm text-gray-600 mb-4">Join our tours today</p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm w-full">Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch with Us</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button className="bg-[#ff3141] text-white px-4 py-2 rounded-r-md">Send</button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="hover:text-[#ff3141]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/inquiries" className="hover:text-[#ff3141]">
                    Inquiries
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="hover:text-[#ff3141]">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-[#ff3141]">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/questions" className="hover:text-[#ff3141]">
                    Questions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">For Bookings</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/book-now" className="hover:text-[#ff3141]">
                    Book Now
                  </a>
                </li>
                <li>
                  <a href="/reserve" className="hover:text-[#ff3141]">
                    Reserve Plan
                  </a>
                </li>
                <li>
                  <a href="/your-tour" className="hover:text-[#ff3141]">
                    Your Tour For Reservations
                  </a>
                </li>
                <li>
                  <a href="/booking-support" className="hover:text-[#ff3141]">
                    Booking Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

