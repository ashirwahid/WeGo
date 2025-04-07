"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Minus, Plus } from "lucide-react"

export default function BookingPage() {
  const [includeDriver, setIncludeDriver] = useState(false)
  const [subscribe, setSubscribe] = useState(false)

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Link href="/tours" className="flex items-center gap-2 mb-6 text-gray-600 hover:text-[#ff3141]">
          <ChevronLeft className="h-5 w-5" />
          <span>Back to</span>
        </Link>

        <h1 className="text-4xl font-bold mb-8">My Bookings</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/3 h-48">
                  <Image
                    src="/citylight.png?height=300&width=400"
                    alt="City Tours"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">City Tours</h2>
                  <Link
                    href="/booking/book-now"
                    className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors mb-4"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="includeDriver"
                  checked={includeDriver}
                  onChange={() => setIncludeDriver(!includeDriver)}
                  className="h-5 w-5 text-[#ff3141]"
                />
                <label htmlFor="includeDriver">Include driver details for the tour</label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="subscribe"
                  checked={subscribe}
                  onChange={() => setSubscribe(!subscribe)}
                  className="h-5 w-5 text-[#ff3141]"
                />
                <label htmlFor="subscribe">Subscribe to our newsletter for tour updates and offers</label>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">
                Proceed to Checkout
              </Link>

              <Link href="/tours" className="btn-secondary">
                Back to Tours
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">1 Tour booked</h2>
              <div className="flex items-center gap-4">
                <button className="p-1">
                  <Minus className="h-5 w-5" />
                </button>
                <button className="p-1">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="border-t pt-4">
              <button className="text-[#ff3141] hover:underline">Remove Tour</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

