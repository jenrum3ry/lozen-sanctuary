"use client";

import { useEffect, useState } from "react";
import { fundraisingConfig } from "@/config/fundraising";
import { CTAButton } from "./CTAButton";

export function FundraisingThermometer() {
  const { goalAmount, currentAmount, campaignTitle, campaignDescription, donationLink } =
    fundraisingConfig;
  const pct = goalAmount > 0 ? Math.min((currentAmount / goalAmount) * 100, 100) : 0;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(pct), 150);
    return () => clearTimeout(timer);
  }, [pct]);

  return (
    <div className="bg-[#13101c] rounded-2xl border border-[#7b5ea7]/30 p-8 glow-purple">
      <h3
        className="text-2xl font-bold text-gradient mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {campaignTitle}
      </h3>
      <p className="text-[#9c98a8] mb-8 leading-relaxed">{campaignDescription}</p>

      {/* Track */}
      <div className="relative h-7 rounded-full bg-[#0d0b12] overflow-hidden border border-[#7b5ea7]/20 mb-4">
        {/* Fill */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: "linear-gradient(90deg, #f5a623 0%, #84cc16 33%, #00c9b1 66%, #7b5ea7 100%)",
          }}
        />
        {/* Glow overlay */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            boxShadow: "0 0 12px rgba(0,201,177,0.5)",
          }}
        />
      </div>

      {/* Stats */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="text-2xl font-bold text-[#f5a623]">
            ${currentAmount.toLocaleString()}
          </span>
          <span className="text-[#9c98a8] text-sm ml-2">raised</span>
        </div>
        <div className="text-right">
          <span className="text-[#9c98a8] text-sm">Goal: </span>
          <span className="text-[#f0ece4] font-semibold">${goalAmount.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <span className="text-[#00c9b1] font-bold text-lg">{pct.toFixed(0)}% complete</span>
        <CTAButton href={donationLink} external>
          Donate Now 💜
        </CTAButton>
      </div>
    </div>
  );
}
