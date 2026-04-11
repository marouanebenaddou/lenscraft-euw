"use client";
import { Animate } from "@/components/Animate";
import { useBrand } from "@/lib/useBrand";

type Channel = {
  name: string;
  icon?: string;
  iconColor?: string;
  bg: string;
  textColor?: string;
};

const channels: Channel[] = [
  // Streaming
  { name: "Netflix",       icon: "netflix",       iconColor: "E50914", bg: "#141414" },
  { name: "Disney+",       bg: "#1133A5",          textColor: "#ffffff" },
  { name: "Prime Video",   bg: "#00A8E0",          textColor: "#ffffff" },
  { name: "Apple TV+",     icon: "appletv",        iconColor: "ffffff", bg: "#000000" },
  { name: "Max",           icon: "max",            iconColor: "ffffff", bg: "#002BE7" },
  { name: "Paramount+",    icon: "paramountplus",  iconColor: "ffffff", bg: "#0064FF" },
  { name: "DAZN",          icon: "dazn",           iconColor: "F8FF00", bg: "#111111" },
  // Pan-European TV
  { name: "BBC",           bg: "#BB1919",          textColor: "#ffffff" },
  { name: "ITVX",          icon: "itvx",           iconColor: "ffffff", bg: "#111111" },
  { name: "Channel 4",     icon: "channel4",       iconColor: "ffffff", bg: "#6B0DB9" },
  { name: "Sky",           icon: "sky",            iconColor: "ffffff", bg: "#0072C6" },
  { name: "RTL",           bg: "#FF6600",          textColor: "#ffffff" },
  { name: "Arte",          bg: "#002E5E",          textColor: "#FF6600" },
  { name: "RAI",           bg: "#005A9C",          textColor: "#ffffff" },
  // Sports
  { name: "Premier League", icon: "premierleague", iconColor: "ffffff", bg: "#380285" },
  { name: "Champions League", bg: "#071D49",       textColor: "#C4A847" },
  { name: "LaLiga",        bg: "#EE8100",          textColor: "#ffffff" },
  { name: "Serie A",       bg: "#010E80",          textColor: "#ffffff" },
  { name: "Bundesliga",    bg: "#D3010C",          textColor: "#ffffff" },
  { name: "Sky Sports",    bg: "#0072C6",          textColor: "#ffffff" },
  { name: "TNT Sports",    bg: "#F5C200",          textColor: "#000000" },
  { name: "beIN Sports",   bg: "#E30613",          textColor: "#ffffff" },
  { name: "Eurosport",     bg: "#FF6B00",          textColor: "#ffffff" },
  // Entertainment
  { name: "Discovery",     bg: "#0076C0",          textColor: "#ffffff" },
  { name: "Nat Geo",       bg: "#FFCC00",          textColor: "#000000" },
  { name: "Comedy Central", bg: "#FFEE00",         textColor: "#000000" },
];

export default function ChannelLogosSection() {
  const { name: brand } = useBrand();
  return (
    <section style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: "#FAFAFA", textAlign: "center", marginBottom: 12, maxWidth: 760, margin: "0 auto 12px" }}>
            Discover an Endless World of Entertainment with {brand}
          </h2>
          <p style={{ fontSize: 14, color: "#9CA3AF", textAlign: "center", marginBottom: 56, maxWidth: 700, margin: "0 auto 56px" }}>
            One subscription, everything you love. We bring you the full range of content — streaming, live sports, movies and series from across Europe — all in one place.
          </p>
        </Animate>

        {/* Channel logo grid */}
        <Animate type="fadeInUp" delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 12 }}>
            {channels.map((ch) => (
              <div
                key={ch.name}
                title={ch.name}
                style={{
                  backgroundColor: ch.bg,
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: 12,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "16/9",
                  overflow: "hidden",
                  transition: "transform 0.2s",
                  cursor: "default",
                  gap: 4,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {ch.icon ? (
                  <img
                    src={`https://cdn.simpleicons.org/${ch.icon}/${ch.iconColor ?? "ffffff"}`}
                    alt={ch.name}
                    style={{ width: 36, height: 36, objectFit: "contain" }}
                  />
                ) : (
                  <span
                    style={{
                      fontSize: "clamp(11px, 1.4vw, 15px)",
                      fontWeight: 800,
                      color: ch.textColor ?? "#ffffff",
                      textAlign: "center",
                      lineHeight: 1.2,
                      letterSpacing: "0.02em",
                      padding: "0 4px",
                    }}
                  >
                    {ch.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}
