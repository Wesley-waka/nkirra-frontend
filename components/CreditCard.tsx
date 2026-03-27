import React from "react";
import Image from "next/image";

export default function CreditCard() {
  return (
    <div className="min-h-screen  ">
      <div
        className="relative w-[430px] h-[250px] rounded-[28px] px-7 py-6 text-white shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ff2a2a 0%, #7b3fe4 45%, #1e40af 100%)",
        }}
      >
        {/* Top Left Logo */}
        <div className="absolute top-5 left-6 flex items-center gap-2">
          <Image
            src='/logo1.png'
            alt='Logo'
            height={60}
            width={60}
          />
        </div>

        {/* Contactless Icon */}
        <div className="absolute top-6 right-6">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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

        {/* Name */}
        <div className="mt-[70px] text-[28px] font-semibold tracking-tight">
          Andrew Forbist
        </div>

        {/* Balance */}
        <div className="mt-7">
          <div className="text-[14px] opacity-80 tracking-wide">
            Balance Amount
          </div>
          <div className="text-[46px] leading-tight font-bold tracking-tight">
            $562,000
          </div>
        </div>

        {/* Bottom Right Info */}
        <div className="absolute bottom-7 right-7 flex gap-12 text-right">
          <div>
            <div className="text-[14px] opacity-70 tracking-wide">EXP</div>
            <div className="text-[22px] font-semibold">11/29</div>
          </div>
          <div>
            <div className="text-[14px] opacity-70 tracking-wide">CVV</div>
            <div className="text-[22px] font-semibold">323</div>
          </div>
        </div>
      </div>
    </div>
  );
}
