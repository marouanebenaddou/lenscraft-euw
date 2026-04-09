"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Shield } from "@/components/icons";
import { Animate } from "@/components/Animate";

const clientImgs = [
  { img: "/images/whatsapp-proof-1.jpeg", stars: 5 },
  { img: "/images/whatsapp-proof-2.jpeg", stars: 5 },
  { img: "/images/whatsapp-proof-3.jpeg", stars: 5 },
  { img: "/images/whatsapp-proof-4.jpeg", stars: 4 },
  { img: "/images/whatsapp-proof-5.jpeg", stars: 5 },
  { img: "/images/whatsapp-proof-6.jpeg", stars: 5 },
  { img: "/images/whatsapp-proof-7.jpeg", stars: 5 },
  { img: "/images/whatsapp-proof-9.jpeg", stars: 4 },
  { img: "/images/whatsapp-proof-10.jpeg", stars: 5 },
];

const clientLabels = [
  "UK Client — Wise payment",
  "EU Client — PayPal payment",
  "UK Client — Card payment",
  "EU Client — Bank transfer",
  "UK Client — Revolut payment",
  "EU Client — PayPal payment",
  "UK Client — Bank transfer",
  "EU Client — Card payment",
  "UK Client — Wise payment",
];

const stats = [
  { value: "10,000+", label: "Satisfied Customers" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Satisfaction Rate" },
];

const VISIBLE = 3;

function WhatsAppCard({ img, label, stars }: { img: string; label: string; stars: number }) {
  return (
    <div
      className="carousel-item-mobile"
      style={{
        flex: "0 0 calc(33.333% - 12px)",
        minWidth: "calc(33.333% - 12px)",
        backgroundColor: "#111827",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "9/16", maxHeight: 320 }}>
        <Image src={img} alt={label} fill style={{ objectFit: "cover", objectPosition: "top" }} />
      </div>
      <div style={{ padding: "10px 14px", backgroundColor: "#111827" }}>
        <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 6 }}>✅ {label}</div>
        <div style={{ display: "flex", gap: 2 }}>
          {[...Array(stars)].map((_, i) => (
            <span key={i} style={{ color: "#FACC15", fontSize: 14 }}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ClientsProofSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visible = isMobile ? 1 : VISIBLE;
  const max = clientImgs.length - visible;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i >= max ? 0 : i + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, [max]);

  return (
    <section style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Badge */}
        <Animate type="fadeInUp">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #34D399", borderRadius: 20, padding: "5px 16px" }}>
              <Shield size={14} color="#34D399" />
              <span style={{ fontSize: 13, color: "#34D399", fontWeight: 500 }}>Payment Proof</span>
            </div>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#FAFAFA", textAlign: "center", marginBottom: 12 }}>
            +10,000 Satisfied{" "}
            <span style={{ background: "linear-gradient(to right, #34D399, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Customers
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "#9CA3AF", textAlign: "center", marginBottom: 48 }}>
            Real proof from our customers — verified payments and subscriptions activated live
          </p>
        </Animate>

        {/* Carousel */}
        <div style={{ position: "relative" }}>
          <button onClick={prev} disabled={index === 0}
            style={{ position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 44, height: 44, borderRadius: "50%", backgroundColor: "rgba(31,41,55,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "white", cursor: index === 0 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: index === 0 ? 0.4 : 1 }}>
            <ChevronLeft size={20} />
          </button>
          <div style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", gap: 16, transition: "transform 0.3s ease", transform: isMobile ? `translateX(calc(-${index} * (100% + 16px)))` : `translateX(calc(-${index} * (33.333% + 5.333px)))` }}>
              {clientImgs.map((c, i) => (
                <WhatsAppCard key={i} img={c.img} label={clientLabels[i] || ""} stars={c.stars} />
              ))}
            </div>
          </div>
          <button onClick={next} disabled={index >= max}
            style={{ position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 44, height: 44, borderRadius: "50%", backgroundColor: "rgba(31,41,55,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "white", cursor: index >= max ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: index >= max ? 0.4 : 1 }}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 64, flexWrap: "wrap" }}>
          {stats.map((s, i) => (
            <Animate key={i} type="fadeInUp" delay={0.1 + i * 0.1}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, color: "#34D399" }}>{s.value}</div>
                <div style={{ fontSize: 14, color: "#9CA3AF", marginTop: 4 }}>{s.label}</div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
