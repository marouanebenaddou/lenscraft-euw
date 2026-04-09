"use client";
import Image from "next/image";
import { ShieldCheck, Zap, DollarSign, Tv, Headphones } from "@/components/icons";
import { Animate } from "@/components/Animate";

const iconData = [
  { icon: <ShieldCheck size={22} color="white" />, bg: "#14B8A6" },
  { icon: <Zap size={22} color="white" />, bg: "#F97316" },
  { icon: <DollarSign size={22} color="white" />, bg: "#EAB308" },
  { icon: <Tv size={22} color="white" />, bg: "#8B5CF6" },
  { icon: <Headphones size={22} color="white" />, bg: "#EC4899" },
];

const whyItems = [
  { title: "Largest catalogue", desc: "+35,000 channels and +70,000 films & series" },
  { title: "Anti-freeze technology", desc: "No more interruptions, guaranteed 4K fluidity" },
  { title: "Priority support", desc: "24/7 dedicated team, average response < 5 min" },
  { title: "Universal compatibility", desc: "Works on all your devices: TV, phone, tablet, PC" },
  { title: "Secure payment", desc: "All transactions are encrypted and protected" },
  { title: "Instant activation", desc: "Access in less than 5 minutes after payment" },
];

export default function WhyChooseUsSection() {
  return (
    <section id="comment-ca-marche" style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", color: "#9CA3AF", borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 600, letterSpacing: 2, marginBottom: 20 }}>
              OUR ADVANTAGES
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#FAFAFA", marginBottom: 12 }}>
              Why <span style={{ background: "linear-gradient(to right, #257BF4, #E63333)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Lenscraft?</span>
            </h2>
            <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 520, margin: "0 auto" }}>
              7 years of experience in premium streaming with thousands of satisfied customers
            </p>
          </div>
        </Animate>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="why-grid-mobile">
          {/* Left — benefits hero image */}
          <Animate type="fadeInLeft" delay={0.1}>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", position: "relative", aspectRatio: "4/3" }}>
                <Image
                  src="/images/benefits-hero.png"
                  alt="Benefits"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Experience badge */}
              <div style={{ position: "absolute", bottom: -20, left: -20, background: "linear-gradient(135deg, #257BF4, #E63333)", borderRadius: 16, padding: "16px 24px", boxShadow: "0 8px 32px rgba(37,123,244,0.4)" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", letterSpacing: 2, fontWeight: 600, marginBottom: 4 }}>EXPERIENCE OF</div>
                <div style={{ fontSize: 40, fontWeight: 800, color: "#FAFAFA", lineHeight: 1 }}>7 Years</div>
              </div>
            </div>
          </Animate>

          {/* Right — feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {whyItems.slice(0, 5).map((f, i) => (
              <Animate key={f.title} type="fadeInRight" delay={0.15 + i * 0.08}>
                <div style={{ backgroundColor: "rgba(17,24,39,0.6)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start", transition: "border-color 0.2s" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: iconData[i].bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {iconData[i].icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#FAFAFA", marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{f.desc}</div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
