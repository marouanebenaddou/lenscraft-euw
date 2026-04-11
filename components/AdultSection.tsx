"use client";
import { Animate } from "@/components/Animate";

export default function AdultSection() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0a0a0f 0%, #110a0a 50%, #0a0a0f 100%)",
      padding: "80px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle red glow top-right */}
      <div style={{
        position: "absolute", top: -80, right: -80,
        width: 320, height: 320,
        background: "radial-gradient(circle, rgba(180,30,30,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: -60,
        width: 240, height: 240,
        background: "radial-gradient(circle, rgba(180,30,30,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Animate type="fadeInUp">
          <div style={{
            display: "flex",
            flexDirection: "row" as const,
            alignItems: "center",
            gap: 56,
            flexWrap: "wrap" as const,
          }}>

            {/* ── LEFT: Text ── */}
            <div style={{ flex: "1 1 380px", minWidth: 280 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(180,30,30,0.4)",
                background: "rgba(180,30,30,0.08)",
                borderRadius: 20, padding: "5px 14px",
                fontSize: 12, fontWeight: 700,
                color: "#F87171", letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                marginBottom: 22,
              }}>
                <span style={{ fontSize: 14 }}>🔞</span> Premium Adult Content
              </div>

              <h2 style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 800, color: "#FFFFFF",
                lineHeight: 1.2, marginBottom: 14,
                fontFamily: "inherit",
              }}>
                14,000+ Premium Titles<br />
                <span style={{
                  background: "linear-gradient(to right, #F87171, #991B1B)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Available in UHD</span>
              </h2>

              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 28 }}>
                Access a curated library of premium adult content sourced from the world's leading platforms — all available in crystal-clear UHD quality, included in your subscription.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column" as const, gap: 12 }}>
                {[
                  { icon: "🎬", text: "Available during your free 24h trial" },
                  { icon: "🔐", text: "Parental control PIN always pre-configured" },
                  { icon: "✋", text: "Request your trial without adult content — no questions asked" },
                  { icon: "📺", text: "UHD quality across all your devices" },
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{
                      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                      background: "rgba(180,30,30,0.12)", border: "1px solid rgba(180,30,30,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 15,
                    }}>{item.icon}</span>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, paddingTop: 4 }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p style={{
                fontSize: 11, color: "rgba(255,255,255,0.25)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: 16, lineHeight: 1.5,
              }}>
                🔒 All adult content is protected by a PIN code. Available only to subscribers aged 18+. You may request a subscription without this content at any time.
              </p>
            </div>

            {/* ── RIGHT: Visual ── */}
            <div style={{ flex: "1 1 320px", minWidth: 260, position: "relative" as const }}>
              <div style={{
                position: "relative" as const,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(180,30,30,0.2)",
                boxShadow: "0 0 60px rgba(180,30,30,0.12), 0 24px 48px rgba(0,0,0,0.5)",
                background: "#0d0505",
              }}>
                <img
                  src="/images/premium-content.jpg"
                  alt="Premium Content"
                  style={{ width: "100%", height: 340, objectFit: "cover", display: "block", opacity: 0.7 }}
                />
                <div style={{
                  position: "absolute" as const, inset: 0,
                  background: "linear-gradient(to top, rgba(10,0,0,0.9) 0%, rgba(10,0,0,0.2) 60%, transparent 100%)",
                }} />
                <div style={{
                  position: "absolute" as const, bottom: 20, left: 20, right: 20,
                  display: "flex", gap: 12,
                }}>
                  {[
                    { value: "14,000+", label: "Premium titles" },
                    { value: "UHD", label: "Quality" },
                    { value: "All", label: "Platforms" },
                  ].map((stat, i) => (
                    <div key={i} style={{
                      flex: 1,
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(180,30,30,0.25)",
                      borderRadius: 10, padding: "10px 8px",
                      textAlign: "center" as const,
                    }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#F87171" }}>{stat.value}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </Animate>
      </div>
    </section>
  );
}
