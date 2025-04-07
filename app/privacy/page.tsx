"use client"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <p className="mb-4">
        Effective Date: 4/april/2025
      </p>
      <p className="mb-4">
      </p>

      <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect and process the following types of personal information:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal Identification Information: Name, email address, phone number, etc.</li>
        <li>Payment Information: Credit card details, billing address, etc. (may be collected through trusted payment processors).</li>
        <li>Usage Data: Information about how you use our website.</li>
        <li>Cookies and Tracking Technologies: We may use cookies and similar technologies to collect data and improve our Service.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">
        We may use the information we collect for various purposes, including to:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Provide and maintain our Service.</li>
        <li>Notify you about changes to our Service.</li>
        <li>Allow you to participate in interactive features of our Service when you choose to do so.</li>
        <li>Provide customer support.</li>
        <li>Gather analysis or valuable information so that we can improve our Service.</li>
        <li>Monitor the usage of our Service.</li>
        <li>Detect, prevent, and address technical issues.</li>
        <li>Send you newsletters, marketing, or promotional materials.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">3. Legal Basis for Processing Personal Data</h2>
      <p className="mb-4">
        We will process your personal data under the following legal bases:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Your consent.</li>
        <li>To perform a contract with you.</li>
        <li>To comply with a legal obligation.</li>
        <li>To protect your vital interests or those of another person.</li>
        <li>To perform a task carried out in the public interest or in the exercise of official authority.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
      <p className="mb-4">
        We will retain your personal data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
      </p>

      <h2 className="text-2xl font-bold mb-4">5. Your Data Protection Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have the following data protection rights:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>The right to access: You have the right to request copies of your personal data.</li>
        <li>The right to rectification: You have the right to request that we correct any information you believe is inaccurate.</li>
        <li>The right to erasure: You have the right to request that we erase your personal data, under certain conditions.</li>
        <li>The right to restrict processing: You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
        <li>The right to data portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">6. Security of Your Data</h2>
      <p className="mb-4">
        The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
      </p>

      <h2 className="text-2xl font-bold mb-4">7. Links to Other Websites</h2>
      <p className="mb-4">
        Our Service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and Terms of Service of any site you visit.
      </p>

      <h2 className="text-2xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>

      <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Email: <a href="mailto:vegoexplore@gmail.com" className="text-blue-500">vegoexplore@gmail.com</a></li>
        <li>Phone: +39 (351) 971-9048</li>
        <li>Address: Genoa, Italy</li>
      </ul>
    </div>
  )
}