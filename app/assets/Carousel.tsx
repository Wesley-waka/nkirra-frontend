'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo1.svg",
  "/logos/logo2.svg",
];

export default function LogoCarousel() {
  return (
    <div className="w-full my-12 sm:my-16 lg:my-20 flex flex-col items-center px-6">
      <h4 className="text-gray-500 text-sm sm:text-base md:text-lg text-center">
        Trusted by thousands worldwide
      </h4>

      <div className="w-full max-w-7xl mt-6 sm:mt-8">
        <div className="w-full py-4 sm:py-6 bg-white">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            breakpoints={{
              0:   { slidesPerView: 2, spaceBetween: 24 },
              480: { slidesPerView: 3, spaceBetween: 32 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024:{ slidesPerView: 5, spaceBetween: 50 },
            }}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={false}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-8 sm:h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}