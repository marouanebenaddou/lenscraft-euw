export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: "🛒",
      title: "Pick a Plan",
      desc: "Choose the plan that suits you and go through checkout with one of our many secured payment methods.",
      accent: "#22D3EE",
      accentBg: "rgba(34,211,238,0.08)",
      accentBorder: "rgba(34,211,238,0.2)",
    },
    {
      num: "02",
      icon: "✉️",
      title: "Receive Your Credentials",
      desc: "You'll receive everything by email or WhatsApp within minutes. If it takes longer, feel free to follow up.",
      accent: "#FBBF24",
      accentBg: "rgba(251,191,36,0.08)",
      accentBorder: "rgba(251,191,36,0.2)",
    },
    {
      num: "03",
      icon: "🎬",
      title: "Enjoy Your IPTV",
      desc: "Instantly access +35,000 live channels, movies, and series in 4K. Watch anytime, on any device.",
      accent: "#34D399",
      accentBg: "rgba(52,211,153,0.08)",
      accentBorder: "rgba(52,211,153,0.2)",
    },
  ];

  return (
    <section
      id="comment-ca-marche"
      style={{ backgroundColor: "#0E1115", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#D1D5DB",
            borderRadius: 999,
            padding: "4px 16px",
            fontSize: 12,
            marginBottom: 20,
          }}>
            ⚡ Quick Setup
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#FAFAFA",
              marginBottom: 12,
              fontFamily: "inherit",
            }}
          >
            How does it work?
          </h2>
          <p style={{ fontSize: 15, color: "#6B7280", maxWidth: 480, margin: "0 auto" }}>
            Get started in 3 simple steps — from checkout to watching in under 5 minutes.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
              }}
            >
              {/* Step number */}
              <span style={{
                position: "absolute",
                top: 20,
                right: 24,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "0.1em",
              }}>
                {step.num}
              </span>

              {/* Icon pill */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: 14,
                background: step.accentBg,
                border: `1px solid ${step.accentBorder}`,
                fontSize: 26,
                marginBottom: 20,
              }}>
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#FAFAFA",
                  marginBottom: 10,
                  lineHeight: 1.3,
                  fontFamily: "inherit",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: "#9CA3AF",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>

              {/* Bottom accent line */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 24,
                right: 24,
                height: 2,
                borderRadius: "0 0 2px 2px",
                background: `linear-gradient(90deg, ${step.accent}60, transparent)`,
              }} />
            </div>
          ))}
        </div>

        {/* Bottom reassurance */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ fontSize: 13, color: "#4B5563" }}>
            🔒 Secure payment &nbsp;·&nbsp; ⚡ Activation under 5 minutes &nbsp;·&nbsp; 🛡 WhatsApp support 7 days/week
          </p>
        </div>
      </div>
    </section>
  );
}
