"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "@/components/icons";
import { Animate } from "@/components/Animate";

const faqItems = [
  { q: "How does your streaming service work?", a: "Our IPTV service lets you watch thousands of live channels and VOD content via a compatible app. After payment, you receive your credentials in less than 5 minutes and can start watching immediately." },
  { q: "What devices can I use the service on?", a: "The service is compatible with Smart TV (Samsung, LG, Sony), Android TV, Amazon Fire Stick, iOS/Android smartphones and tablets, and computers (Windows, Mac, Linux). Any installation can be guided by our technical team." },
  { q: "What internet speed is required?", a: "For HD quality we recommend at least 10 Mbps, and 25 Mbps to enjoy 4K Ultra HD content. A stable Wi-Fi or wired connection is preferable for an optimal experience." },
  { q: "How does the free 24h trial work?", a: "Contact us via WhatsApp with your name, number and city. We send you full access credentials within 5 minutes. You have unlimited access for 24h, no credit card required." },
  { q: "Is the service reliable? Are there outages?", a: "Thanks to our Anti-Freeze technology and optimised servers, we guarantee 99.9% uptime. Rare interruptions are corrected in real time by our technical team available 24h/24." },
  { q: "What payment methods do you accept?", a: "We accept: Visa/Mastercard (-10% discount), Bank Transfer, PayPal, Revolut, Wise, and more. All payments are secured." },
  { q: "How long does activation take?", a: "Activation is immediate — your credentials are sent within 5 minutes of payment confirmation, 7 days/week from 10am to 11pm." },
  { q: "Can I use the service abroad?", a: "Yes, our service is available in more than 150 countries around the world. No matter where you are, you can enjoy our full catalogue in HD/4K." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#0A0D11", padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", color: "#9CA3AF", borderRadius: 20, padding: "4px 16px", fontSize: 12, marginBottom: 20 }}>
              FAQ
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, marginBottom: 12 }}>
              <span style={{ color: "#FAFAFA" }}>Frequently asked </span>
              <span style={{ background: "linear-gradient(to right, #EC4899, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                questions
              </span>
            </h2>
          </div>
        </Animate>

        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqItems.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Animate key={i} type="fadeInUp" delay={0.05 + i * 0.05}>
                <div style={{ backgroundColor: "rgba(17,24,39,0.6)", border: `1px solid ${isOpen ? "rgba(37,123,244,0.3)" : "rgba(255,255,255,0.08)"}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <button onClick={() => setOpenIndex(isOpen ? null : i)}
                    style={{ width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 600, color: "#FAFAFA", paddingRight: 16 }}>{faq.q}</span>
                    <ChevronDown size={18} color="#9CA3AF" style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 24px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, marginTop: 12 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </Animate>
            );
          })}
        </div>

        <Animate type="fadeInUp" delay={0.2}>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="https://wa.me/447446248557" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white", borderRadius: 8, padding: "12px 24px", fontSize: 15, fontWeight: 600, textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
            >
              <MessageCircle size={18} />Ask on WhatsApp
            </a>
          </div>
        </Animate>
      </div>
    </section>
  );
}
