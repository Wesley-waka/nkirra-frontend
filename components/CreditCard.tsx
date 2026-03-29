import React from "react";
import Image from "next/image";

export default function CreditCard() {
  return (
    <div className="w-full max-w-sm lg:max-w-full mx-auto">
      <div
        className="relative w-full aspect-[16/10] rounded-2xl md:rounded-3xl px-4 md:px-7 py-4 md:py-6 text-white shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ff2a2a 0%, #7b3fe4 45%, #1e40af 100%)",
        }}
      >
        {/* Top Left Logo */}
        <div className="absolute top-3 md:top-5 left-4 md:left-6 flex items-center">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={55}
            height={55}
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14"
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
        <div className="mt-[55px] sm:mt-[70px] md:mt-[85px] text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
          Andrew Forbist
        </div>

        {/* Balance */}
        <div className="mt-3 sm:mt-5 md:mt-6">
          <div className="text-xs sm:text-sm md:text-base opacity-80 tracking-wide">
            Balance Amount
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            $562,000
          </div>
        </div>

        {/* Bottom Right Details */}
        <div className="absolute bottom-3 sm:bottom-5 md:bottom-7 right-3 sm:right-5 md:right-7 flex gap-6 sm:gap-10 md:gap-12 text-right">
          <div>
            <div className="text-xs sm:text-sm md:text-base opacity-70">EXP</div>
            <div className="text-base sm:text-lg md:text-xl font-semibold">
              11/29
            </div>
          </div>
          <div>
            <div className="text-xs sm:text-sm md:text-base opacity-70">CVV</div>
            <div className="text-base sm:text-lg md:text-xl font-semibold">
              323
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}