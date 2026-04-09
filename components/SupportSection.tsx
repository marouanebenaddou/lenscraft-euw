"use client";
import Image from "next/image";
import { MessageCircle, Phone, Mail, Home, Clock, Shield, Star } from "@/components/icons";
import { Animate } from "@/components/Animate";

const channelIcons = [
  { icon: <MessageCircle size={24} color="white" />, gradient: "linear-gradient(135deg, #22C55E, #16A34A)" },
  { icon: <Phone size={24} color="white" />, gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)" },
  { icon: <Mail size={24} color="white" />, gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)" },
  { icon: <Home size={24} color="white" />, gradient: "linear-gradient(135deg, #F97316, #EA580C)" },
];

const exceptionalIcons = [
  { icon: <Clock size={22} color="white" />, bg: "linear-gradient(135deg, #14B8A6, #06B6D4)" },
  { icon: <Shield size={22} color="white" />, bg: "linear-gradient(135deg, #06B6D4, #3B82F6)" },
  { icon: <Star size={22} color="white" />, bg: "linear-gradient(135deg, #FBBF24, #F59E0B)" },
];

const channels = [
  { name: "WhatsApp", desc: "Instant support via WhatsApp", badge1: "⚡ < 5 min", badge2: "🕒 24/7", contact: "+447446248557" },
  { name: "Phone", desc: "Direct phone support", badge1: "⚡ Immediate", badge2: "🕒 8am-11pm", contact: "+447446248557" },
  { name: "Email", desc: "Technical email support", badge1: "⚡ < 2h", badge2: "🕒 24/7", contact: "contact@lensscrafts.com" },
  { name: "Home Visit", desc: "On-site technical support", badge1: "⚡ 24-48h", badge2: "🕒 Mon-Sat", contact: "By appointment" },
];

const exceptional = [
  { title: "Fast Response", desc: "Response time guaranteed under 5 minutes for emergencies" },
  { title: "Free Support", desc: "Unlimited technical support included in your subscription" },
  { title: "Expert Technicians", desc: "Certified technical team trained in the latest premium technologies" },
];

export default function SupportSection() {
  return (
    <section id="support" style={{ backgroundColor: "#0A0D11", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#257BF4", marginBottom: 12 }}>
            Customer Support 24/7
          </h2>
          <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 540, margin: "0 auto" }}>
            A dedicated team to support you at every step of your digital experience
          </p>
        </div>
        </Animate>

        {/* Support team image */}
        <Animate type="fadeIn" delay={0.1}>
        <div style={{ maxWidth: 760, margin: "0 auto 56px", position: "relative", borderRadius: 20, overflow: "hidden" }}>
          <div style={{ position: "relative", aspectRatio: "16/7" }}>
            <Image src="/images/iptv-support.jpg" alt="Lenscraft Support Team" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
          </div>
          <div style={{ position: "absolute", top: 16, left: 16, backgroundColor: "rgba(34,197,94,0.9)", borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 600, color: "#FAFAFA", display: "flex", alignItems: "center", gap: 6 }}>
            🟢 Support Active 24/7
          </div>
        </div>
        </Animate>

        {/* Contact channels */}
        <Animate type="fadeInUp" delay={0.1}>
          <h3 style={{ fontSize: 20, fontWeight: 600, color: "#FAFAFA", textAlign: "center", marginBottom: 28 }}>
            Contact us on Your Preferred Channel
          </h3>
        </Animate>
        <div className="support-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
          {channels.map((ch, i) => (
            <Animate key={ch.name} type="fadeInUp" delay={0.15 + i * 0.08}>
            <div style={{ backgroundColor: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: channelIcons[i].gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {channelIcons[i].icon}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#FAFAFA" }}>{ch.name}</div>
              <div style={{ fontSize: 12, color: "#9CA3AF" }}>{ch.desc}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <span style={{ backgroundColor: "rgba(52,211,153,0.15)", color: "#34D399", borderRadius: 12, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>{ch.badge1}</span>
                <span style={{ backgroundColor: "rgba(107,114,128,0.2)", color: "#9CA3AF", borderRadius: 12, padding: "3px 10px", fontSize: 11 }}>{ch.badge2}</span>
              </div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 8, padding: "10px 14px", fontSize: 12, color: "#FAFAFA", fontWeight: 500, textAlign: "center" }}>
                {ch.contact}
              </div>
            </div>
            </Animate>
          ))}
        </div>

        {/* Why exceptional card */}
        <Animate type="fadeInUp" delay={0.1}>
        <div style={{ background: "linear-gradient(135deg, rgba(17,24,39,0.9), rgba(11,16,24,0.9))", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "40px", marginBottom: 32 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "#FAFAFA", textAlign: "center", marginBottom: 32 }}>
            Why Our Support is Exceptional
          </h3>
          <div className="mobile-1col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, textAlign: "center" }}>
            {exceptional.map((e, i) => (
              <div key={e.title}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: exceptionalIcons[i].bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  {exceptionalIcons[i].icon}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#FAFAFA", marginBottom: 8 }}>{e.title}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
        </Animate>

        {/* Contact buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a href="https://wa.me/447446248557" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "filter 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}>
            <MessageCircle size={18} />
            Contact Support
          </a>
          <a href="tel:+447446248557"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.15)", color: "#FAFAFA", borderRadius: 10, padding: "14px 28px", fontSize: 15, fontWeight: 600, textDecoration: "none", transition: "border-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}>
            <Phone size={18} />
            +447446248557
          </a>
        </div>
      </div>
    </section>
  );
}
