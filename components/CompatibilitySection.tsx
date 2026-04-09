"use client";
import Image from "next/image";
import { Animate } from "@/components/Animate";
import { useLang } from "@/lib/i18n";

const deviceImgs = [
  "/images/devices/smart-tv.png",
  "/images/devices/android-tv.png",
  "/images/devices/fire-stick.png",
  "/images/devices/smartphone.png",
  "/images/devices/tablet.png",
  "/images/devices/laptop.png",
];

export default function CompatibilitySection() {
  const { t } = useLang();
  return (
    <section style={{ backgroundColor: "#0A0D11", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", color: "#9CA3AF", borderRadius: 20, padding: "4px 16px", fontSize: 13, marginBottom: 20 }}>
              📺 {t.compat.badge}
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#FAFAFA", marginBottom: 12 }}>
              {t.compat.title}{" "}
              <span style={{ background: "linear-gradient(to right, #257BF4, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t.compat.titleAccent}
              </span>
            </h2>
            <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 560, margin: "0 auto" }}>
              {t.compat.subtitle}
            </p>
          </div>
        </Animate>

        {/* Device grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }} className="compat-grid-mobile">
          {t.compat.devices.map((d, i) => (
            <Animate key={d.name} type="scaleIn" delay={0.1 + i * 0.07}>
              <div
                style={{ backgroundColor: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textAlign: "center", cursor: "default", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(37,123,244,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", width: 72, height: 56 }}>
                  <Image src={deviceImgs[i]} alt={d.name} fill style={{ objectFit: "contain" }} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#FAFAFA" }}>{d.name}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.4 }}>{d.brands}</div>
              </div>
            </Animate>
          ))}
        </div>

        {/* Footer note */}
        <Animate type="fadeIn" delay={0.5}>
          <p style={{ fontSize: 14, color: "#9CA3AF", textAlign: "center", marginTop: 32 }}>
            {t.compat.footerNote}
          </p>
        </Animate>
      </div>
    </section>
  );
}
