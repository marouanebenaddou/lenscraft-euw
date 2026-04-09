"use client";
import { Animate } from "@/components/Animate";

function CountryCard({ flag, name }: { flag: string; name: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        backgroundColor: "rgba(17,24,39,0.8)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span style={{ fontSize: 24 }}>{flag}</span>
      <span style={{ fontSize: 14, fontWeight: 500, color: "#FAFAFA", whiteSpace: "nowrap" }}>{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: { flag: string; name: string }[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div
        style={{
          display: "flex",
          gap: 12,
          animation: reverse ? "marquee-reverse 35s linear infinite" : "marquee 35s linear infinite",
        }}
      >
        {doubled.map((c, i) => (
          <CountryCard key={`${c.name}-${i}`} flag={c.flag} name={c.name} />
        ))}
      </div>
    </div>
  );
}

const row1 = [
  { flag: "🇲🇦", name: "Morocco" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇸🇳", name: "Senegal" },
  { flag: "🇧🇪", name: "Belgium" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇮🇹", name: "Italy" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇩🇪", name: "Germany" },
];

const row2 = [
  { flag: "🇨🇭", name: "Switzerland" },
  { flag: "🇵🇹", name: "Portugal" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇹🇳", name: "Tunisia" },
  { flag: "🇩🇿", name: "Algeria" },
  { flag: "🇨🇮", name: "Ivory Coast" },
  { flag: "🇨🇲", name: "Cameroon" },
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇶🇦", name: "Qatar" },
];

export default function CoverageSection() {
  return (
    <section style={{ backgroundColor: "#0A0D11", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", marginBottom: 48 }}>
        <Animate type="fadeInUp">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(37,123,244,0.4)", color: "#257BF4", borderRadius: 20, padding: "5px 16px", fontSize: 13 }}>
            🌐 International coverage
          </div>
        </div>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, textAlign: "center", marginBottom: 20, lineHeight: 1.15 }}>
          <span style={{ background: "linear-gradient(to right, #257BF4, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Streaming TV
          </span>
          <br />
          <span style={{ color: "#FAFAFA" }}>Everywhere in the World</span>
        </h2>
        <p style={{ fontSize: 16, color: "#9CA3AF", textAlign: "center", maxWidth: 580, margin: "0 auto", lineHeight: 1.6 }}>
          Wherever you are, our service is available internationally. Designed to offer you a reliable, secure, high-quality streaming experience.
        </p>
        </Animate>
      </div>

      {/* Marquee rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
