"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Star, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Animate } from "@/components/Animate";
import * as PricingCard from "@/components/ui/pricing-card";

// ── Data ─────────────────────────────────────────────────────────────────────

const premiumPrices: Record<number, { price: string; original: string; perYear: string; discount?: string }> = {
  1: { price: "€39", original: "€59", perYear: "€39/year" },
  2: { price: "€59", original: "€89", perYear: "€59/year", discount: "-33%" },
  3: { price: "€79", original: "€109", perYear: "€79/year", discount: "Best value" },
};

const goldPrices: Record<number, { price: string; original: string; perYear: string; discount?: string }> = {
  1: { price: "€59", original: "€89", perYear: "€59/year" },
  2: { price: "€79", original: "€109", perYear: "€79/year", discount: "-27%" },
  3: { price: "€99", original: "€139", perYear: "€99/year", discount: "Best value" },
};

const premiumFeatures = [
  "HD / 4K quality on all your screens",
  "Works with any player",
  "1 device simultaneously",
  "Activation in under 5 minutes",
  "WhatsApp support 7 days/week",
  "Smart TV, Box, Mobile, PC",
  "Automatic updates",
  "International channels included",
];

const goldFeatures = [
  "Premium 4K Ultra HD quality",
  "Works with any player",
  "1 device simultaneously",
  "Exclusive Anti-Freeze technology",
  "24h Replay on selected channels",
  "Complete EPG electronic guide",
  "24/7 priority support",
  "All devices compatible",
];

const goldLocked = [
  "VOD: Netflix, Prime, Disney+…",
  "Automatic updates included",
  "Premium international content",
];

const paymentMethods = [
  { name: "Visa", img: "/images/payments/visa.svg", badge: "-10%" },
  { name: "Mastercard", img: "/images/payments/mastercard.svg", badge: "-10%" },
  { name: "PayPal", img: "/images/payments/paypal.svg", badge: null },
  { name: "Revolut", img: "/images/payments/revolut.svg", badge: null },
  { name: "Wise", img: "/images/payments/wise.svg", badge: null },
  { name: "Bank Transfer", img: "/images/payments/bank-transfer.svg", badge: null },
  { name: "Crypto", img: "/images/payments/binance.svg", badge: null },
];

// ── Desktop Price Tile ────────────────────────────────────────────────────────

function DesktopTile({
  devices,
  price,
  original,
  discount,
  accent,
  cta,
  ctaColor,
  isRecommended,
  features,
  lockedFeatures,
  separatorLabel,
}: {
  devices: number;
  price: string;
  original: string;
  discount?: string;
  accent: string;
  cta: string;
  ctaColor: string;
  isRecommended?: boolean;
  features: string[];
  lockedFeatures?: string[];
  separatorLabel?: string;
}) {
  return (
    <div
      className="relative rounded-xl border p-5 flex flex-col gap-3"
      style={{
        borderColor: isRecommended ? accent : `${accent}30`,
        background: `${accent}08`,
        boxShadow: isRecommended ? `0 0 30px ${accent}20` : undefined,
      }}
    >
      {isRecommended && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-0.5 rounded-full text-black whitespace-nowrap"
          style={{ background: accent }}
        >
          Best value
        </div>
      )}
      <div className="text-xs font-semibold text-white/50">
        {devices} {devices === 1 ? "Device" : "Devices"}
      </div>
      <div className="flex items-end gap-1.5">
        <span className="text-3xl font-extrabold text-white">{price}</span>
        <span className="text-white/50 text-sm pb-1">/yr</span>
        <span className="ml-auto text-sm text-white/30 line-through pb-0.5">{original}</span>
      </div>
      {discount && (
        <div
          className="text-[11px] font-bold rounded-full px-2.5 py-0.5 inline-block w-fit"
          style={{ color: accent, background: `${accent}15`, border: `1px solid ${accent}25` }}
        >
          {discount}
        </div>
      )}
      <button
        onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full font-semibold rounded-lg py-2 text-sm transition-all cursor-pointer"
        style={{ background: ctaColor, color: accent === "#FBBF24" ? "#000" : "#fff", boxShadow: `0 6px 16px ${accent}25` }}
      >
        {cta}
      </button>
      <ul className="space-y-2 pt-1 border-t border-white/8">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-white/70">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: accent }} />
            {item}
          </li>
        ))}
      </ul>
      {lockedFeatures && separatorLabel && (
        <>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span className="h-px flex-1 bg-white/10" />
            <span>{separatorLabel}</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <ul className="space-y-2">
            {lockedFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-white/70">
                <Star className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: accent }} />
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

// ── Device Selector (mobile only) ────────────────────────────────────────────

function DeviceSelector({ value, onChange, accent }: { value: number; onChange: (n: number) => void; accent: string }) {
  return (
    <div className="flex gap-1.5 mb-3">
      {[1, 2, 3].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={cn(
            "flex-1 rounded-lg py-1.5 text-xs font-semibold border transition-all cursor-pointer",
            value === n ? "text-white" : "border-white/10 bg-white/5 text-white/50 hover:text-white/80"
          )}
          style={value === n ? { borderColor: accent, backgroundColor: `${accent}18`, color: accent } : {}}
        >
          {n} {n === 1 ? "Device" : "Devices"}
        </button>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function PricingSection() {
  const [premiumDevices, setPremiumDevices] = useState(1);
  const [goldDevices, setGoldDevices] = useState(1);

  const prem = premiumPrices[premiumDevices];
  const gold = goldPrices[goldDevices];

  return (
    <section id="pricing" className="bg-[#0E1115] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <Animate type="fadeInUp">
          <div className="text-center mb-14">
            <span className="inline-block border border-white/15 text-[#D1D5DB] rounded-full px-4 py-1 text-xs mb-5">
              💎 Exclusive Offers
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
              Premium Streaming Subscription
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              🎥 Unlimited access to +40,000 Films & Series + 35,000 Live TV channels — guaranteed 4K quality without interruption
            </p>
          </div>
        </Animate>

        {/* ── MOBILE: 2 cards with device selector ── */}
        <div className="md:hidden grid grid-cols-1 gap-6 mb-10">

          {/* Premium */}
          <PricingCard.Card className="w-full">
            <PricingCard.Header>
              <PricingCard.Plan>
                <PricingCard.PlanName>
                  <Zap className="text-cyan-400" />
                  <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">Premium</span>
                </PricingCard.PlanName>
                <PricingCard.Badge className="border-cyan-400/30 text-cyan-300">Essential</PricingCard.Badge>
              </PricingCard.Plan>
              <DeviceSelector value={premiumDevices} onChange={setPremiumDevices} accent="#22D3EE" />
              <PricingCard.Price>
                <PricingCard.MainPrice className="text-white">{prem.price}</PricingCard.MainPrice>
                <PricingCard.Period className="text-white/60">/ year</PricingCard.Period>
                <PricingCard.OriginalPrice>{prem.original}</PricingCard.OriginalPrice>
              </PricingCard.Price>
              {prem.discount && (
                <div className="text-xs font-bold text-cyan-400 mb-3 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 inline-block">
                  {prem.discount}
                </div>
              )}
              <button
                onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full font-semibold text-white rounded-lg py-2.5 text-sm transition-all cursor-pointer"
                style={{ background: "linear-gradient(135deg, #22D3EE, #0891B2)", boxShadow: "0 8px 20px rgba(34,211,238,0.25)" }}
              >
                🎁 Try Free 24h
              </button>
            </PricingCard.Header>
            <PricingCard.Body>
              <PricingCard.List>
                {premiumFeatures.map((item) => (
                  <PricingCard.ListItem key={item}>
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-white/75">{item}</span>
                  </PricingCard.ListItem>
                ))}
              </PricingCard.List>
            </PricingCard.Body>
          </PricingCard.Card>

          {/* Gold */}
          <div className="relative w-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-400 text-black text-xs font-bold rounded-full px-4 py-1.5 whitespace-nowrap shadow-lg">
              <Crown className="h-3 w-3" /> RECOMMENDED
            </div>
            <PricingCard.Card className="w-full border-amber-400/40" style={{ boxShadow: "0 0 40px rgba(251,191,36,0.12)" }}>
              <PricingCard.Header className="border-amber-400/20">
                <PricingCard.Plan>
                  <PricingCard.PlanName>
                    <Crown className="text-amber-400" />
                    <span className="text-amber-400 font-bold tracking-widest text-xs uppercase">Gold</span>
                  </PricingCard.PlanName>
                  <PricingCard.Badge className="border-amber-400/30 text-amber-300">⭐ Premium</PricingCard.Badge>
                </PricingCard.Plan>
                <DeviceSelector value={goldDevices} onChange={setGoldDevices} accent="#FBBF24" />
                <PricingCard.Price>
                  <PricingCard.MainPrice className="text-white">{gold.price}</PricingCard.MainPrice>
                  <PricingCard.Period className="text-white/60">/ year</PricingCard.Period>
                  <PricingCard.OriginalPrice>{gold.original}</PricingCard.OriginalPrice>
                </PricingCard.Price>
                {gold.discount && (
                  <div className="text-xs font-bold text-amber-400 mb-3 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 inline-block">
                    {gold.discount}
                  </div>
                )}
                <button
                  onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full font-semibold text-black rounded-lg py-2.5 text-sm transition-all cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #FBBF24, #F59E0B)", boxShadow: "0 8px 20px rgba(251,191,36,0.3)" }}
                >
                  🔥 Choose Gold
                </button>
              </PricingCard.Header>
              <PricingCard.Body>
                <PricingCard.List>
                  {goldFeatures.map((item) => (
                    <PricingCard.ListItem key={item}>
                      <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-white/75">{item}</span>
                    </PricingCard.ListItem>
                  ))}
                </PricingCard.List>
                <PricingCard.Separator>Gold exclusives</PricingCard.Separator>
                <PricingCard.List>
                  {goldLocked.map((item) => (
                    <PricingCard.ListItem key={item}>
                      <Star className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-white/75">{item}</span>
                    </PricingCard.ListItem>
                  ))}
                </PricingCard.List>
              </PricingCard.Body>
            </PricingCard.Card>
          </div>
        </div>

        {/* ── DESKTOP: individual tiles per device count ── */}
        <div className="hidden md:block mb-10 space-y-8">

          {/* Premium row */}
          <Animate type="fadeInUp" delay={0.1}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">Premium</span>
                <span className="text-white/30 text-xs">— Essential plan</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((n) => (
                  <DesktopTile
                    key={n}
                    devices={n}
                    price={premiumPrices[n].price}
                    original={premiumPrices[n].original}
                    discount={premiumPrices[n].discount}
                    accent="#22D3EE"
                    cta="🎁 Try Free 24h"
                    ctaColor="linear-gradient(135deg, #22D3EE, #0891B2)"
                    isRecommended={n === 3}
                    features={premiumFeatures}
                  />
                ))}
              </div>
            </div>
          </Animate>

          {/* Gold row */}
          <Animate type="fadeInUp" delay={0.15}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Crown className="h-4 w-4 text-amber-400" />
                <span className="text-amber-400 font-bold tracking-widest text-xs uppercase">Gold</span>
                <span className="text-white/30 text-xs">— ⭐ Premium plan</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((n) => (
                  <DesktopTile
                    key={n}
                    devices={n}
                    price={goldPrices[n].price}
                    original={goldPrices[n].original}
                    discount={goldPrices[n].discount}
                    accent="#FBBF24"
                    cta="🔥 Choose Gold"
                    ctaColor="linear-gradient(135deg, #FBBF24, #F59E0B)"
                    isRecommended={n === 3}
                    features={goldFeatures}
                    lockedFeatures={goldLocked}
                    separatorLabel="Gold exclusives"
                  />
                ))}
              </div>
            </div>
          </Animate>
        </div>

        {/* Payment discount banner */}
        <Animate type="fadeInUp" delay={0.2}>
          <div className="bg-emerald-400/8 border border-emerald-400/20 rounded-xl py-3 px-6 text-center text-emerald-400 text-sm font-medium mb-10">
            💳 -10% discount for card payment
          </div>
        </Animate>

        {/* Payment methods */}
        <Animate type="fadeInUp" delay={0.25}>
          <h3 className="text-base font-semibold text-white text-center mb-5">Accepted payment methods</h3>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-3 mb-8">
            {paymentMethods.map((p) => (
              <div key={p.name} className="relative bg-white/5 border border-white/8 rounded-xl p-3 flex flex-col items-center gap-2">
                {p.badge && (
                  <span className="absolute -top-2 -right-2 bg-cyan-400 text-black text-[9px] font-bold rounded-full px-1.5 py-0.5">
                    {p.badge}
                  </span>
                )}
                <div className="relative w-8 h-8 opacity-80">
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: "contain" }} />
                </div>
                <span className="text-[10px] text-gray-400 font-medium text-center leading-tight">{p.name}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {["🔒 Secure payment", "⚡ Instant activation", "🛡 Dedicated support"].map((item) => (
              <span key={item} className="text-xs text-gray-500">{item}</span>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}
