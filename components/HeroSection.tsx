"use client";
import Image from "next/image";
import { Zap, MessageSquare, CheckCircle, Tv, Film, Shield } from "@/components/icons";
import { Animate } from "@/components/Animate";
import { useLang } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useLang();
  const icons = [<Zap size={22} color="white" />, <Tv size={22} color="white" />, <Film size={22} color="white" />, <Shield size={22} color="white" />];
  const bgs = ["#F97316", "#22D3EE", "#EC4899", "#34D399"];

  return (
    <section style={{ position: "relative", minHeight: "100vh", backgroundColor: "#0E1115", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 64 }}>
      <Image src="https://xperi.com/wp-content/uploads/2023/09/Xperi.com-Blog-Header-1280-%C3%97-720-px-26.png" alt="Family watching TV" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} priority />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(14,17,21,0.88) 0%, rgba(14,17,21,0.62) 50%, rgba(14,17,21,0.88) 100%)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to top, #0E1115, transparent)", zIndex: 2 }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto", padding: "80px 24px 120px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Animate type="fadeInUp" delay={0.1}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #34D399", borderRadius: 20, padding: "5px 16px", marginBottom: 24 }}>
            <CheckCircle size={14} color="#34D399" />
            <span style={{ fontSize: 13, color: "#34D399", fontWeight: 500 }}>{t.hero.badge}</span>
          </div>
        </Animate>

        <Animate type="fadeInUp" delay={0.2}>
          <h1 style={{ fontSize: "clamp(40px, 5.5vw, 76px)", fontWeight: 800, color: "#FAFAFA", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-1px" }}>
            {t.hero.headline1}{" "}
            <span style={{ background: "linear-gradient(to right, #257BF4, #E63333)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t.hero.headline2}
            </span>
          </h1>
        </Animate>

        <Animate type="fadeInUp" delay={0.3}>
          <p style={{ fontSize: 17, color: "rgba(250,250,250,0.85)", lineHeight: 1.7, marginBottom: 36, maxWidth: 680 }} dangerouslySetInnerHTML={{ __html: t.hero.subtitle }} />
        </Animate>

        <Animate type="fadeInUp" delay={0.4}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32, justifyContent: "center" }}>
            <button onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
              style={{ display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #257BF4 0%, #1193D4 100%)", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            ><Zap size={18} />{t.hero.tryNow}</button>
            <button onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
              style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(14,17,21,0.6)", border: "1px solid rgba(255,255,255,0.25)", color: "#FAFAFA", borderRadius: 10, padding: "14px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
            ><MessageSquare size={18} />{t.hero.contactUs}</button>
          </div>
        </Animate>

        <Animate type="fadeInUp" delay={0.5}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 56, justifyContent: "center" }}>
            <div style={{ display: "flex", gap: 3 }}>{[...Array(5)].map((_, i) => <span key={i} style={{ color: "#FACC15", fontSize: 18 }}>★</span>)}</div>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#FAFAFA" }}>4.9/5</span>
            <span style={{ fontSize: 14, color: "#9CA3AF" }}>– {t.hero.reviews}</span>
          </div>
        </Animate>

        <div className="mobile-2col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, width: "100%", maxWidth: 720 }}>
          {t.hero.cards.map((label, i) => (
            <Animate key={label} type="scaleIn" delay={0.6 + i * 0.08}>
              <div style={{ backgroundColor: "rgba(17,24,39,0.75)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center", backdropFilter: "blur(8px)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: bgs[i], display: "flex", alignItems: "center", justifyContent: "center" }}>{icons[i]}</div>
                <span style={{ fontSize: 12, fontWeight: 500, color: "#FAFAFA", lineHeight: 1.3 }}>{label}</span>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
