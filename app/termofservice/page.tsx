"use client"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <p className="mb-4">
          Effective Date: 4/April/2025
        </p>
        <p className="mb-4">
          Welcome to WeGo! These Terms of Service govern your access to and use of our services.
          By using our service, you agree to comply with these terms. If you do not agree, please do not use our service.
        </p>

        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using the Service, you confirm that you agree to these Terms of Service and that you
          have the legal capacity to enter into a binding agreement with WeGo services.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Modifications to Terms</h2>
        <p className="mb-4">
          We may modify these Terms at any time, at our discretion. All changes will be effective immediately when
          we post them on this page. Your continued use of the Service after any changes indicates your acceptance of
          the modifications.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
        <p className="mb-4">
          You agree to use the Service in accordance with all applicable laws and regulations. You must not:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Use the Service for illegal purposes.</li>
          <li>Attempt to gain unauthorized access to any part or feature of the Service.</li>
          <li>Interfere with or disrupt the security or integrity of the Service.</li>
          <li>Use any automated means to access the Service for any purpose without our express written permission.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">4. Account Responsibility</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your account information and for all activities
          that occur under your account. If you suspect any unauthorized use of your account, you must notify us
          immediately.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
        <p className="mb-4">
          We reserve the right to terminate or suspend your access to our Service, without prior notice or liability,
          for any reason whatsoever, including without limitation if you breach the Terms of Service.
        </p>

        <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by law, WeGo, its affiliates, and its licensors shall not
          be liable for any indirect, incidental, special, consequential, or punitive damages, including without
          limitation loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use
          of or inability to use the Service; (ii) any unauthorized access to or use of our servers and/or any
          personal information stored therein.
        </p>

        <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
        <p className="mb-4">
          These Terms of Service shall be governed by and construed in accordance with the laws of Italy,
          without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Email: <a href="mailto:git@github.com:ashirwahid/VeGo.git" className="text-[#ff3141]">vegoexplore@gmail.com</a></li>
          <li>Phone: +39 (351) 9719048</li>
          <li>Address: Genoa, Italy</li>
        </ul>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[#ff3141] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}