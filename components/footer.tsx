import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Genoa, Italy</p>
            <p>Phone: +39 351 9719048</p>
            <p>
              Email:{" "}
              <a href="mailto:vegoexplore@gmail.com" className="underline">
                vegoexplore@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:underline">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/termofservice" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} WeGo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

