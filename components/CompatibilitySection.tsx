"use client";
import Image from "next/image";
import { Animate } from "@/components/Animate";

const deviceImgs = [
  "/images/devices/smart-tv.png",
  "/images/devices/android-tv.png",
  "/images/devices/fire-stick.png",
  "/images/devices/smartphone.png",
  "/images/devices/tablet.png",
  "/images/devices/laptop.png",
];

const devices = [
  { name: "Smart TV", brands: "Samsung, LG, Sony, Philips…" },
  { name: "Android TV", brands: "Android Box, Nvidia Shield…" },
  { name: "Fire Stick", brands: "Amazon Fire TV Stick 4K" },
  { name: "Smartphone", brands: "iOS & Android" },
  { name: "Tablet", brands: "iPad, Samsung Tab…" },
  { name: "Computer", brands: "Windows, Mac, Linux" },
];

export default function CompatibilitySection() {
  return (
    <section style={{ backgroundColor: "#0A0D11", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", color: "#9CA3AF", borderRadius: 20, padding: "4px 16px", fontSize: 13, marginBottom: 20 }}>
              📺 Compatibility
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#FAFAFA", marginBottom: 12 }}>
              Works on{" "}
              <span style={{ background: "linear-gradient(to right, #257BF4, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                all your devices
              </span>
            </h2>
            <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 560, margin: "0 auto" }}>
              One subscription, all your screens
            </p>
          </div>
        </Animate>

        {/* Device grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }} className="compat-grid-mobile">
          {devices.map((d, i) => (
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
            ✅ Guided installation by our technical team • ✅ Remote assistance available
          </p>
        </Animate>
      </div>
    </section>
  );
}
