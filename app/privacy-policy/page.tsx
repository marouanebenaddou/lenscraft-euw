"use client";
import { useBrand } from "@/lib/useBrand";

export default function PrivacyPolicy() {
  const { name: brandName } = useBrand();

  return (
    <div style={{
      background: "#0a0a0f",
      minHeight: "100vh",
      padding: "80px 24px",
      fontFamily: "inherit",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ marginBottom: 48 }}>
          <a href="/" style={{ color: "#22D3EE", fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
            ← Back to home
          </a>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#FFFFFF", marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
            Last updated: April 2025 — {brandName} IPTV
          </p>
        </div>

        {[
          {
            title: "1. Who We Are",
            content: `${brandName} IPTV ("we", "us", "our") provides premium IPTV streaming services to customers across Europe and worldwide. We are committed to protecting your personal data in accordance with the EU General Data Protection Regulation (GDPR).

Contact: contact@lensscrafts.com`,
          },
          {
            title: "2. Data We Collect",
            content: `When you submit a free trial request or contact us, we may collect:
• Full name
• Phone number (WhatsApp)
• Email address
• Device type / preferences
• IP address and country (for service personalisation)
• Facebook Lead Ad submission data

We do not collect payment card details directly — all transactions are handled through secure third-party processors.`,
          },
          {
            title: "3. How We Use Your Data",
            content: `We use your personal data to:
• Contact you via WhatsApp to set up your free trial or subscription
• Send service-related communications
• Improve our services and website experience
• Personalise content based on your country/region
• Comply with legal obligations

We do not sell, rent or share your personal data with third parties for marketing purposes.`,
          },
          {
            title: "4. Legal Basis for Processing",
            content: `We process your data on the following legal bases:
• Consent — when you submit a lead form or free trial request
• Legitimate interests — to respond to your enquiry and provide the service you requested
• Contract — to fulfil our subscription service obligations`,
          },
          {
            title: "5. WhatsApp Communication",
            content: `By submitting your phone number, you consent to being contacted via WhatsApp for the purpose of setting up your free trial or subscription. You may opt out at any time by replying "STOP" to any WhatsApp message.`,
          },
          {
            title: "6. Facebook Lead Ads",
            content: `If you submit your details through a Facebook Instant Form, your data is transferred from Meta Platforms to our systems via a secure API. This data is used solely to contact you about our IPTV service. Meta's own privacy policy also applies to data collected through their platform.`,
          },
          {
            title: "7. Data Retention",
            content: `We retain your personal data for as long as necessary to provide our services or as required by law. If you cancel your subscription or withdraw consent, we will delete your data within 30 days upon request.`,
          },
          {
            title: "8. Your Rights (GDPR)",
            content: `Under GDPR, you have the right to:
• Access the personal data we hold about you
• Correct inaccurate data
• Request deletion of your data ("right to be forgotten")
• Object to or restrict processing
• Data portability
• Withdraw consent at any time

To exercise any of these rights, contact us at: contact@lensscrafts.com`,
          },
          {
            title: "9. Cookies",
            content: `Our website uses minimal cookies for functionality and analytics. We do not use third-party advertising cookies. You can disable cookies in your browser settings at any time.`,
          },
          {
            title: "10. Security",
            content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or disclosure. All data is transmitted over encrypted (HTTPS) connections.`,
          },
          {
            title: "11. Changes to This Policy",
            content: `We may update this Privacy Policy from time to time. The latest version will always be available on this page with the updated date shown at the top.`,
          },
          {
            title: "12. Contact Us",
            content: `For any privacy-related questions or requests:
📧 contact@lensscrafts.com
📞 WhatsApp: +447446248557`,
          },
        ].map((section, i) => (
          <div key={i} style={{
            marginBottom: 36,
            paddingBottom: 36,
            borderBottom: i < 11 ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", marginBottom: 12 }}>
              {section.title}
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, whiteSpace: "pre-line" }}>
              {section.content}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
