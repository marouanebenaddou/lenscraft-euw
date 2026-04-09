"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "@/components/icons";
import { Animate } from "@/components/Animate";
import { useLang } from "@/lib/i18n";

export default function FAQSection() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#0A0D11", padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", color: "#9CA3AF", borderRadius: 20, padding: "4px 16px", fontSize: 12, marginBottom: 20 }}>
              {t.faq.badge}
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, marginBottom: 12 }}>
              <span style={{ color: "#FAFAFA" }}>{t.faq.title} </span>
              <span style={{ background: "linear-gradient(to right, #EC4899, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t.faq.titleAccent}
              </span>
            </h2>
          </div>
        </Animate>

        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {t.faq.items.map((faq, i) => {
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
              <MessageCircle size={18} />{t.faq.whatsappBtn}
            </a>
          </div>
        </Animate>
      </div>
    </section>
  );
}
