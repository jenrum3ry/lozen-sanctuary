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
    <div className="bg-[#f5ede0] rounded-2xl border border-[#c4622d]/20 p-8 warm-shadow">
      <h3
        className="text-2xl font-bold text-gradient mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {campaignTitle}
      </h3>
      <p className="text-[#7a6555] mb-8 leading-relaxed">{campaignDescription}</p>

      {/* Track */}
      <div className="relative h-7 rounded-full bg-[#efe6d5] overflow-hidden border border-[#c4622d]/20 mb-4">
        {/* Fill */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: "linear-gradient(90deg, #d4a843 0%, #c4622d 40%, #7a9e7e 75%, #b8826e 100%)",
          }}
        />
      </div>

      {/* Stats */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="text-2xl font-bold text-[#c4622d]">
            ${currentAmount.toLocaleString()}
          </span>
          <span className="text-[#7a6555] text-sm ml-2">raised</span>
        </div>
        <div className="text-right">
          <span className="text-[#7a6555] text-sm">Goal: </span>
          <span className="text-[#2c1f14] font-semibold">${goalAmount.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <span className="text-[#7a9e7e] font-bold text-lg">{pct.toFixed(0)}% complete</span>
        <CTAButton href={donationLink} external>
          Donate Now 💜
        </CTAButton>
      </div>
    </div>
  );
}
