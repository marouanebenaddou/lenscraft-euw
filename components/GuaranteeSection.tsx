"use client";
import { ShieldCheck } from "@/components/icons";
import { Animate } from "@/components/Animate";

const guaranteeStats = [
  { value: "100%", label: "Refund", desc: "Full refund if the service doesn't suit you" },
  { value: "Test", label: "7 Days to", desc: "A full week to discover all the features" },
  { value: "Dedicated", label: "Support", desc: "Our team accompanies you throughout your trial" },
];

export default function GuaranteeSection() {
  return (
    <section style={{ backgroundColor: "#0A0D11", padding: "96px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        {/* Shield icon */}
        <Animate type="scaleIn">
          <div style={{ width: 96, height: 96, borderRadius: "50%", background: "linear-gradient(135deg, #14B8A6, #06B6D4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
            <ShieldCheck size={44} color="white" />
          </div>
        </Animate>

        {/* Heading */}
        <Animate type="fadeInUp" delay={0.1}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.1 }}>
            <span style={{ color: "#FAFAFA" }}>Satisfied or </span>
            <span style={{ background: "linear-gradient(to right, #E63333, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>refunded</span>
          </h2>
        </Animate>

        <Animate type="fadeInUp" delay={0.2}>
          <p style={{ fontSize: 18, color: "#9CA3AF", maxWidth: 580, margin: "0 auto 56px", lineHeight: 1.6 }}>
            7 days to test our service. If you&apos;re not satisfied, we refund you — no questions asked.
          </p>
        </Animate>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ maxWidth: 800, margin: "0 auto" }}>
          {guaranteeStats.map((s, i) => (
            <Animate key={s.value} type="fadeInUp" delay={0.3 + i * 0.1}>
              <div style={{ backgroundColor: "rgba(17,24,39,0.6)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "32px 24px" }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: "#FAFAFA", marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#9CA3AF", marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
