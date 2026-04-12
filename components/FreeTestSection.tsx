"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Phone, Clock, Shield, Zap } from "@/components/icons";
import { Animate } from "@/components/Animate";

const COUNTRY_DATA: Record<string, { code: string; flag: string }> = {
  // Europe
  GB: { code: "+44",  flag: "🇬🇧" }, IE: { code: "+353", flag: "🇮🇪" },
  FR: { code: "+33",  flag: "🇫🇷" }, DE: { code: "+49",  flag: "🇩🇪" },
  ES: { code: "+34",  flag: "🇪🇸" }, IT: { code: "+39",  flag: "🇮🇹" },
  NL: { code: "+31",  flag: "🇳🇱" }, BE: { code: "+32",  flag: "🇧🇪" },
  PT: { code: "+351", flag: "🇵🇹" }, CH: { code: "+41",  flag: "🇨🇭" },
  AT: { code: "+43",  flag: "🇦🇹" }, SE: { code: "+46",  flag: "🇸🇪" },
  NO: { code: "+47",  flag: "🇳🇴" }, DK: { code: "+45",  flag: "🇩🇰" },
  FI: { code: "+358", flag: "🇫🇮" }, PL: { code: "+48",  flag: "🇵🇱" },
  RO: { code: "+40",  flag: "🇷🇴" }, CZ: { code: "+420", flag: "🇨🇿" },
  GR: { code: "+30",  flag: "🇬🇷" }, CY: { code: "+357", flag: "🇨🇾" },
  HU: { code: "+36",  flag: "🇭🇺" }, SK: { code: "+421", flag: "🇸🇰" },
  HR: { code: "+385", flag: "🇭🇷" }, BG: { code: "+359", flag: "🇧🇬" },
  LU: { code: "+352", flag: "🇱🇺" }, MT: { code: "+356", flag: "🇲🇹" },
  // North Africa & Middle East
  MA: { code: "+212", flag: "🇲🇦" }, DZ: { code: "+213", flag: "🇩🇿" },
  TN: { code: "+216", flag: "🇹🇳" }, EG: { code: "+20",  flag: "🇪🇬" },
  SA: { code: "+966", flag: "🇸🇦" }, AE: { code: "+971", flag: "🇦🇪" },
  QA: { code: "+974", flag: "🇶🇦" }, KW: { code: "+965", flag: "🇰🇼" },
  TR: { code: "+90",  flag: "🇹🇷" },
  // Africa
  SN: { code: "+221", flag: "🇸🇳" }, CI: { code: "+225", flag: "🇨🇮" },
  CM: { code: "+237", flag: "🇨🇲" },
  // Americas & Oceania
  US: { code: "+1",   flag: "🇺🇸" }, CA: { code: "+1",   flag: "🇨🇦" },
  BR: { code: "+55",  flag: "🇧🇷" }, MX: { code: "+52",  flag: "🇲🇽" },
  AU: { code: "+61",  flag: "🇦🇺" },
};

const DEFAULT = { code: "+44", flag: "🇬🇧" }; // fallback: UK
const GERMAN  = { code: "+49",  flag: "🇩🇪" };
const CYPRIOT = { code: "+357", flag: "🇨🇾" };

export default function FreeTestSection() {
  const router = useRouter();
  const [prefix, setPrefix] = useState(DEFAULT);
  const [localNumber, setLocalNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const hostname = typeof window !== "undefined" ? window.location.hostname : "";

    // lensscraft.de → always German
    if (hostname.includes("lensscraft.de")) {
      setPrefix(GERMAN);
      return;
    }

    // atlasstv.com → Cyprus default, switch to Greece if IP says GR
    if (hostname.includes("atlasstv.com")) {
      setPrefix(CYPRIOT);
      fetch("https://ipinfo.io/json")
        .then((r) => r.json())
        .then((data) => {
          const found = COUNTRY_DATA[data.country as string];
          if (found) setPrefix(found); // will pick GR (+30) if visitor is in Greece
        })
        .catch(() => {});
      return;
    }

    // all other domains → full IP detection
    fetch("https://ipinfo.io/json")
      .then((r) => r.json())
      .then((data) => {
        const found = COUNTRY_DATA[data.country as string];
        if (found) setPrefix(found);
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = localNumber.replace(/\s+/g, "").replace(/^0+/, "");
    const cleanWa = `${prefix.code}${digits}`;
    const payload = {
      object: "page",
      entry: [{ changes: [{ field: "leadgen", value: {
        leadgen_id: `lenscraft_${Date.now()}`,
        form_id: "lenscraft_free_test",
        page_id: "lenscraft_website",
        field_data: [
          { name: "phone_number", values: [cleanWa] },
          { name: "email", values: [email] },
        ],
      }}]}],
    };
    // Primary: bot webhook
    fetch("https://lenscraft.ngrok.app/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
    // Backup: save to Google Sheet (always-on)
    const gsParams = new URLSearchParams({ phone: cleanWa, email, site: "lenscraft-euw" });
    fetch(`https://script.google.com/macros/s/AKfycbwWakcbtkxVQnrEy0z281ycKyQ0Q2yUHD0YwjmvoE-Ugdi8H_qhcFsPWsbS5uPSFTb_fQ/exec?${gsParams}`, {
      mode: "no-cors",
      keepalive: true,
    }).catch(() => {});
    router.push(`/thank-you?wa=${encodeURIComponent(cleanWa)}`);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
    padding: "12px 16px", color: "#FAFAFA", fontSize: 15,
    fontFamily: "inherit", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
  };

  const featureIcons = [
    { icon: <Clock size={20} color="#EC4899" />, iconBg: "rgba(236,72,153,0.2)" },
    { icon: <Shield size={20} color="#257BF4" />, iconBg: "rgba(37,123,244,0.2)" },
    { icon: <Zap size={20} color="#FBBF24" />, iconBg: "rgba(251,191,36,0.2)" },
  ];

  const features = [
    { title: "24h Complete", desc: "Unlimited access for 24 hours to all our services" },
    { title: "No commitment", desc: "No credit card required, automatic cancellation" },
    { title: "Instant Activation", desc: "Receive your credentials by email in less than 5 minutes" },
  ];

  return (
    <section id="free-test" style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#34D399", marginBottom: 8 }}>
              Test <span style={{ color: "#FAFAFA" }}>Free 24h</span>
            </h3>
            <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 500, margin: "0 auto" }}>Try our service for 24 hours completely free. No commitment, no credit card required.</p>
          </div>
        </Animate>

        <Animate type="fadeInUp" delay={0.15}>
          <div style={{ backgroundColor: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 40, maxWidth: 560, margin: "0 auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <Phone size={22} color="#EC4899" />
              <span style={{ fontSize: 22, fontWeight: 700, color: "#FAFAFA" }}>Request your free trial</span>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ fontSize: 14, fontWeight: 500, color: "rgba(250,250,250,0.8)", display: "block", marginBottom: 6 }}>WhatsApp Number</label>
                <div style={{ display: "flex", gap: 8 }}>
                  {/* Locked country prefix pill */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 6,
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8, padding: "12px 14px",
                    color: "#FAFAFA", fontSize: 15, whiteSpace: "nowrap",
                    userSelect: "none", flexShrink: 0,
                  }}>
                    <span style={{ fontSize: 20 }}>{prefix.flag}</span>
                    <span style={{ fontWeight: 600 }}>{prefix.code}</span>
                  </div>
                  {/* Local number input */}
                  <input
                    style={{ ...inputStyle, flex: 1 }}
                    placeholder="7911 123456"
                    type="tel"
                    required
                    value={localNumber}
                    onChange={(e) => setLocalNumber(e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "#34D399")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 14, fontWeight: 500, color: "rgba(250,250,250,0.8)", display: "block", marginBottom: 6 }}>Email address</label>
                <input style={inputStyle} placeholder="your@email.com" type="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={(e) => (e.target.style.borderColor = "#34D399")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
              <button type="submit"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white", border: "none", borderRadius: 10, padding: "14px 24px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", width: "100%" }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
              >
                <Phone size={18} />🚀 Start my free trial
              </button>
              <p style={{ fontSize: 12, color: "#6B7280", textAlign: "center", marginTop: 8 }}>Your data is protected and never shared with third parties</p>
            </form>
          </div>
        </Animate>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 680, margin: "48px auto 0" }}>
          {features.map((f, i) => (
            <Animate key={f.title} type="fadeInUp" delay={0.2 + i * 0.1}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: featureIcons[i].iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {featureIcons[i].icon}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#FAFAFA" }}>{f.title}</div>
                <div style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            </Animate>
          ))}
        </div>

        <div style={{ backgroundColor: "rgba(17,24,39,0.6)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, maxWidth: 560, margin: "32px auto 0", textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "#9CA3AF" }}>📞 After your test, our team contacts you to help you choose the best plan.</p>
        </div>
      </div>
    </section>
  );
}
