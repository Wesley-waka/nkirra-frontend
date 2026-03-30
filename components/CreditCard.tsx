import React from "react";
import Image from "next/image";

export default function CreditCard() {
  return (
    <div className="w-full min-w-0">
      <div
        className="relative w-full rounded-2xl px-[5%] py-[4%] text-white shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ff2a2a 0%, #7b3fe4 45%, #1e40af 100%)",
          aspectRatio: "16/10",
        }}
      >
        {/* Top Left Logo */}
        <div className="absolute top-[8%] left-[5%] flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="w-[15%] max-w-[70px] min-w-[65px] h-auto"
          />
        </div>

        {/* Contactless Icon */}
        <div className="absolute top-3 md:top-5 right-4 md:right-6">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
            fill="none"
          >
            <path
              d="M4 12C4 8 8 4 12 4"
              stroke="#86efac"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6.5 12C6.5 9.5 9.5 6.5 12 6.5"
              stroke="#86efac"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 12C9 10.5 10.5 9 12 9"
              stroke="#86efac"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Cardholder Name */}
        <div
          className="absolute font-semibold tracking-tight"
          style={{
            top: "38%",
            left: "5%",
            fontSize: "clamp(0.85rem, 4cqw, 1.75rem)",
          }}
        >
          Andrew Forbist
        </div>

        {/* Balance */}
        {/* Bottom: Balance + EXP/CVV on same row */}
<div className="absolute bottom-[8%] left-[5%] right-[5%] flex items-end justify-between">
  
  {/* Balance */}
  <div>
    <div
      className="opacity-80 tracking-wide"
      style={{ fontSize: "clamp(0.6rem, 2.5cqw, 1rem)" }}
    >
      Balance Amount
    </div>
    <div
      className="font-semibold tracking-tight leading-tight"
      style={{ fontSize: "clamp(1rem, 5.5cqw, 2rem)" }}
    >
      $562,000
    </div>
  </div>

  {/* EXP + CVV */}
  <div className="flex gap-[6%] text-right">
    <div>
      <div
        className="opacity-70"
        style={{ fontSize: "clamp(0.55rem, 2cqw, 0.9rem)" }}
      >
        EXP
      </div>
      <div
        className="font-semibold"
        style={{ fontSize: "clamp(0.75rem, 3cqw, 1.25rem)" }}
      >
        11/29
      </div>
    </div>
    <div>
      <div
        className="opacity-70"
        style={{ fontSize: "clamp(0.55rem, 2cqw, 0.9rem)" }}
      >
        CVV
      </div>
      <div
        className="font-semibold"
        style={{ fontSize: "clamp(0.75rem, 3cqw, 1.25rem)" }}
      >
        323
      </div>
    </div>
  </div>

</div>
      </div>
    </div>
  );
}