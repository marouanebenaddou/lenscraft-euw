"use client";
import { ShieldCheck, Zap, Headphones, RotateCcw, RefreshCw, Wifi, Star } from "@/components/icons";
import { Animate } from "@/components/Animate";

const iconData = [
  { icon: <ShieldCheck size={24} color="white" />, gradient: "linear-gradient(135deg, #14B8A6, #06B6D4)" },
  { icon: <Zap size={24} color="white" />, gradient: "linear-gradient(135deg, #F97316, #EF4444)" },
  { icon: <Headphones size={24} color="white" />, gradient: "linear-gradient(135deg, #EC4899, #8B5CF6)" },
  { icon: <RotateCcw size={24} color="white" />, gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)" },
  { icon: <RefreshCw size={24} color="white" />, gradient: "linear-gradient(135deg, #10B981, #34D399)" },
  { icon: <Wifi size={24} color="white" />, gradient: "linear-gradient(135deg, #8B5CF6, #6366F1)" },
  { icon: <Star size={24} color="white" />, gradient: "linear-gradient(135deg, #FBBF24, #F59E0B)" },
];

const featureItems = [
  { title: "Satisfaction Guarantee", desc: "7 days to test, full refund if you're not satisfied" },
  { title: "Instant Activation", desc: "Receive your access in less than 5 minutes after payment" },
  { title: "VIP Support 7/7", desc: "Technical support available from 10am to 11pm every day" },
  { title: "7-Day Replay", desc: "Rewatch your programmes from the last 7 days whenever you like" },
  { title: "Regular Updates", desc: "New channels and content added every week" },
  { title: "Anti-Freeze Technology", desc: "Optimised servers for buffer-free streaming" },
  { title: "Premium 4K Quality", desc: "Crystal clear image on all your screens, even in 4K" },
];

export default function FeaturesSection() {
  return (
    <section style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#FAFAFA", marginBottom: 12 }}>
              Everything you need for{" "}
              <span style={{ background: "linear-gradient(to right, #257BF4, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                the perfect streaming
              </span>
            </h2>
            <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 600, margin: "0 auto" }}>
              Discover all the advantages that make us the European IPTV leader
            </p>
          </div>
        </Animate>

        {/* 4-col grid, 7 cards */}
        <div className="features-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {featureItems.map((f, i) => (
            <Animate key={f.title} type="fadeInUp" delay={0.1 + i * 0.07}>
              <div
                style={{
                  backgroundColor: "rgba(17,24,39,0.6)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(37,123,244,0.3)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: iconData[i].gradient, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {iconData[i].icon}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#FAFAFA", lineHeight: 1.3 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
