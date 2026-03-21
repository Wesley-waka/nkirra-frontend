// app/page.tsx (Next.js 13+)
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Carousel from "./assets/Carousel";
import { useState } from "react";
import FAQPage from "@/components/faq";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[4] before:-translate-x-1/2">

        {/* ── Hero section ─────────────────────────────────────────── */}
        <div className="min-h-[600px] bg-gradient-to-b from-lime-200/0 to-lime-200/30">

          {/* Navbar */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-6">
            <div className="flex items-center justify-between w-full px-4 sm:px-6 py-2 bg-white border border-gray-200 rounded-2xl">

              <Image
                src="/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="w-12 h-12 sm:w-16 sm:h-16"
              />

              {/* Desktop nav links */}
              <nav className="hidden sm:flex gap-6 md:gap-10 items-center">
                <div className="cursor-pointer bg-green-100 px-4 py-1.5 rounded-lg text-sm md:text-base font-medium">
                  Home
                </div>
                <div
                  onClick={() => router.push("/about-us")}
                  className="cursor-pointer text-sm md:text-base font-medium hover:text-teal-700 transition-colors"
                >
                  About Us
                </div>
              </nav>

              {/* Desktop CTA */}
              <Button
                variant="default_bg"
                className="hidden sm:inline-flex items-center justify-center w-[130px] md:w-[150px] h-[40px] md:h-[44px] text-sm md:text-base bg-[#FF4444] rounded-xl"
              >
                Get Started
              </Button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                className="sm:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="block w-6 h-0.5 bg-gray-600" />
                <span className="block w-6 h-0.5 bg-gray-600" />
                <span className="block w-6 h-0.5 bg-gray-600" />
              </button>
            </div>

            {/* Mobile dropdown */}
            {isMobileMenuOpen && (
              <div className="sm:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">
                <div className="flex flex-col gap-3">
                  <div className="cursor-pointer bg-green-100 py-2 px-4 rounded-lg text-center font-medium text-sm">
                    Home
                  </div>
                  <div
                    onClick={() => {
                      router.push("/about-us");
                      setIsMobileMenuOpen(false);
                    }}
                    className="cursor-pointer py-2 text-center font-medium text-sm hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    About Us
                  </div>
                  <Button
                    variant="default_bg"
                    className="w-full h-[42px] text-sm bg-[#FF4444] rounded-xl"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
            <div className="flex flex-col items-center gap-6">

              {/* Badge */}
              <div className="pl-2 pr-4 py-2 bg-green-100 rounded-2xl inline-flex items-center gap-2 md:gap-3">
                <div className="pl-1.5 pr-2 py-1 bg-white rounded-xl flex items-center gap-1">
                  <div className="relative w-2 h-2 bg-lime-100 rounded flex items-center justify-center">
                    <div className="absolute w-1 h-1 bg-teal-900 rounded-full" />
                  </div>
                  <span className="text-teal-900 text-xs font-medium leading-5">Nkirra</span>
                </div>
                <span className="text-teal-900 text-xs sm:text-sm font-medium leading-6">
                  Smarter Money Management
                </span>
              </div>

              {/* Headline */}
              <h1 className="w-full max-w-4xl text-center text-teal-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold capitalize leading-tight mt-10">
                Take Full Control of Your Finances with Nkirra
              </h1>

              {/* Subheadline */}
              <p className="w-full max-w-2xl text-center text-slate-500 text-base sm:text-lg md:text-xl font-normal leading-7 md:leading-9">
                Smart, secure, and scalable finance management built for modern individuals and businesses.
              </p>

              <Button
                variant="default_bg"
                className="w-[160px] md:w-[190px] h-[46px] md:h-[52px] text-sm md:text-base bg-[#FF4444] rounded-xl"
              >
                Get Started Free
              </Button>

              {/* Hero Image */}
              <div className="w-full max-w-4xl aspect-[16/9] sm:aspect-[2/1] overflow-hidden rounded-2xl mt-2">
                <Image
                  src="/graphics/hero-2.jpg"
                  alt="Hero Image"
                  width={1000}
                  height={500}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Logo / Carousel ──────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Carousel />
        </div>

        {/* ── Features section ─────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Section header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="px-4 py-1 rounded-2xl outline outline-1 outline-slate-200 inline-flex items-center gap-3">
              <span className="text-slate-500 text-sm font-medium leading-6">Features</span>
            </div>
            <h2 className="w-full max-w-4xl text-teal-900 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold capitalize leading-tight">
              Smarter Features to Manage and Grow Your Money
            </h2>
            <p className="w-full max-w-2xl text-slate-500 text-base md:text-xl font-normal leading-7 md:leading-9">
              Everything you need in one platform to track, plan, and optimize your finances.
            </p>
          </div>

          {/* Feature grid */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-10 md:mt-12">

            {/* Illustration panel */}
            <div className="w-full lg:w-[46%] bg-green-100 rounded-2xl flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6 p-6 md:p-8 min-h-[300px] lg:min-h-[560px]">
              <Image
                src="/graphics/credit-card.png"
                alt="Credit card"
                width={380}
                height={260}
                className="object-contain w-full max-w-[320px] sm:max-w-[48%] lg:max-w-full"
              />
              <Image
                src="/graphics/limit.png"
                alt="Credit limit"
                width={380}
                height={260}
                className="object-contain w-full max-w-[320px] sm:max-w-[48%] lg:max-w-full"
              />
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-4 md:gap-5 w-full lg:flex-1">
              {[
                {
                  icon: "/icons/Thunder.svg",
                  alt: "Thunder",
                  title: "One-click transaction categorization and syncing",
                  body: "Automatically organize your financial data in seconds. With just one click, your transactions are instantly synced.",
                },
                {
                  icon: "/icons/clock.svg",
                  alt: "Clock",
                  title: "Real-time analytics and insights",
                  body: "Our advanced analytics give you a real-time view of your entire operation—sales, profit margins, and financial health at a glance.",
                },
                {
                  icon: "/icons/cloud.svg",
                  alt: "Cloud",
                  title: "Secure cloud synchronization",
                  body: "Your financial data is securely backed up and synchronized across all your devices with bank-level encryption.",
                },
                {
                  icon: "/icons/money.svg",
                  alt: "Money",
                  title: "Smart budget management",
                  body: "Create and manage budgets intelligently with AI-powered recommendations and automatic spending categorization.",
                },
              ].map(({ icon, alt, title, body }) => (
                <div
                  key={title}
                  className="p-4 md:p-5 bg-white rounded-2xl outline outline-1 outline-slate-200 backdrop-blur-lg flex items-start gap-4 md:gap-5"
                >
                  <div className="shrink-0 p-3 bg-lime-200 rounded-full flex items-center justify-center">
                    <Image src={icon} alt={alt} width={24} height={24} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-stone-950 text-base md:text-lg font-semibold leading-7">{title}</p>
                    <p className="text-slate-500 text-sm md:text-base font-normal leading-6">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values section ───────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="px-4 py-1 rounded-2xl outline outline-1 outline-slate-200 inline-flex items-center gap-3">
              <span className="text-slate-500 text-sm font-medium leading-6">Our Value</span>
            </div>
            <h2 className="w-full max-w-4xl text-teal-900 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold capitalize leading-tight">
              What Sets Nkirra Apart
            </h2>
            <p className="w-full max-w-2xl text-slate-500 text-base md:text-xl font-normal leading-7 md:leading-9">
              We don't just help you manage money — we empower you with clarity, control, and confidence every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-8 md:mt-10">
            {[
              {
                bg: "bg-lime-100",
                iconBg: "bg-lime-200",
                icon: "/icons/server.svg",
                alt: "Server",
                title: "Built for Scalability",
                body: "From freelancers to startups, manage every dollar as your finances grow.",
                textColor: "text-slate-500",
              },
              {
                bg: "bg-lime-200",
                iconBg: "bg-white",
                icon: "/icons/grid.svg",
                alt: "Grid",
                title: "Clarity First",
                body: "Designed to simplify, not overwhelm — with a clean UI and actionable insights.",
                textColor: "text-teal-900",
              },
              {
                bg: "bg-lime-100",
                iconBg: "bg-lime-200",
                icon: "/icons/vector.svg",
                alt: "Vector",
                title: "Enterprise Security",
                body: "Bank-level encryption and security protocols to protect your financial data 24/7.",
                textColor: "text-slate-500",
              },
            ].map(({ bg, iconBg, icon, alt, title, body, textColor }) => (
              <div
                key={title}
                className={`${bg} rounded-[20px] px-6 md:px-8 py-8 md:py-10 flex flex-col items-center gap-6 text-center`}
              >
                <div className={`${iconBg} p-6 md:p-7 rounded-full flex items-center justify-center`}>
                  <Image src={icon} alt={alt} width={32} height={32} />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-teal-900 text-lg md:text-2xl font-semibold capitalize leading-8">{title}</p>
                  <p className={`${textColor} text-sm md:text-base leading-6 md:leading-7`}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Overview section ─────────────────────────────────────── */}
        <div className="flex flex-col justify-center max-w-7xl mx-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

           <div className="flex flex-col items-center gap-4 text-center">
            <div className="px-4 py-1 rounded-2xl outline outline-1 outline-slate-200 inline-flex items-center gap-3">
              <span className="text-slate-500 text-sm font-medium leading-6">Overview</span>
            </div>
            <h2 className="w-full max-w-4xl text-teal-900 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold capitalize leading-tight">
              Discover The Power of Real-Time Financial Insights
            </h2>
            <p className="w-full max-w-2xl text-slate-500 text-base md:text-xl font-normal leading-7 md:leading-9">
              Stay ahead of your financial goals with intelligent tools that track, analyze, and simplify your daily money decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Item 1 */}
            <div className="flex flex-col gap-6">
              {/* <div className="h-96 p-8 bg-stone-100 rounded-3xl" /> */}
              <div className="h-96 p-8 bg-lime-100 rounded-3xl flex justify-center items-center rounded-md">
                <Image
                src='/graphics/cashflow.jpg'
                height={500}
                width={450}
                alt='Cashflow'
                className='rounded-md'
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-stone-950 text-2xl font-semibold capitalize leading-8">
                  Finance Score Tracker
                </div>
                <div className="text-slate-500 text-base leading-6">
                  Stay informed and in control by effortlessly monitoring your investments in real-time, ensuring you&apos;re always aware of their performance and growth.
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-6">
              <div className="h-96 p-8 bg-lime-100 rounded-3xl flex justify-center items-center rounded-md">
                <Image
                src='/graphics/savings.jpg'
                height={500}
                width={450}
                alt='Cashflow'
                className='rounded-md'
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-stone-950 text-2xl font-semibold capitalize leading-8">
                  Finance Score Tracker
                </div>
                <div className="text-slate-500 text-base leading-6">
                  Stay informed and in control by effortlessly monitoring your investments in real-time, ensuring you&apos;re always aware of their performance and growth.
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col gap-6">
              <div className="h-96 p-8 bg-lime-100 rounded-3xl flex justify-center items-center rounded-md">
                <Image
                src='/graphics/portfolio.jpg'
                height={350}
                width={350}
                alt='Cashflow'
                className='rounded-md'
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-stone-950 text-2xl font-semibold capitalize leading-8">
                  Finance Score Tracker
                </div>
                <div className="text-slate-500 text-base leading-6">
                  Stay informed and in control by effortlessly monitoring your investments in real-time, ensuring you&apos;re always aware of their performance and growth.
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col gap-6">
              <div className="h-96 p-8 bg-lime-100 rounded-3xl flex justify-center items-center rounded-md">
                <Image
                src='/graphics/statistic.jpg'
                height={300}
                width={300}
                alt='Statistics'
                className='rounded-md'
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-stone-950 text-2xl font-semibold capitalize leading-8">
                  Finance Score Tracker
                </div>
                <div className="text-slate-500 text-base leading-6">
                  Stay informed and in control by effortlessly monitoring your investments in real-time, ensuring you&apos;re always aware of their performance and growth.
                </div>
              </div>
            </div>
          </div>




        </div>

        {/* ── Numbers section ──────────────────────────────────────── */}
        <div className="flex items-center justify-center max-w-7xl mx-auto py-12 md:py-20 lg:py-28 px-4">

  <div className="p-6 sm:p-10 lg:p-16 w-full bg-lime-200 rounded-[20px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">

    {/* Left: Text & Stats */}
    <div className="w-full lg:w-1/2 inline-flex flex-col justify-start items-start gap-8">
      <div className="w-full flex flex-col justify-center items-start gap-4">
        <div className="px-4 py-1 rounded-2xl outline outline-[0.50px] outline-offset-[-0.50px] outline-teal-900 inline-flex justify-center items-center gap-3">
          <div className="text-teal-900 text-sm font-medium leading-6">Numbers</div>
        </div>
        <div className="w-full text-teal-900 text-3xl sm:text-4xl lg:text-6xl font-semibold capitalize leading-tight lg:leading-[64px]">
          Confidence Backed <br />by Performance
        </div>
        <div className="w-full text-stone-950 text-base sm:text-lg lg:text-xl font-normal leading-7 lg:leading-9">
          Powering smarter financial decisions for individuals and businesses around the globe backed by real
        </div>
      </div>

      <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-teal-900/10" />

      {/* Stats */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-6">
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="text-teal-900 text-4xl sm:text-5xl lg:text-6xl font-semibold capitalize leading-tight lg:leading-[64px]">98%</div>
          <div className="text-stone-950 text-sm sm:text-base font-normal leading-6">Customer Satisfaction</div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="text-teal-900 text-4xl sm:text-5xl lg:text-6xl font-semibold capitalize leading-tight lg:leading-[64px]">$120M+</div>
          <div className="text-stone-950 text-sm sm:text-base font-normal leading-6">Tracked Through Nkirra</div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="text-teal-900 text-4xl sm:text-5xl lg:text-6xl font-semibold capitalize leading-tight lg:leading-[64px]">1M+</div>
          <div className="text-stone-950 text-sm sm:text-base font-normal leading-6">Transactions Processed</div>
        </div>
      </div>
    </div>

    {/* Right: Images */}
    <div className="flex flex-col md:flex-col w-full lg:w-1/2 gap-4">
      <Image
        src='/graphics/vacation.jpg'
        height={400}
        width={400}
        alt='Numbers'
        className='rounded-md w-full md:w-full h-auto object-cover'
      />
      <Image
        src='/graphics/limit.png'
        height={500}
        width={400}
        alt='Numbers'
        className='rounded-md w-full md:w-full h-auto object-contain'
      />
    </div>

  </div>
</div>

        {/* ── Integrations section ─────────────────────────────────── */}
        


        <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 py-14 md:py-20 items-center justify-center">
  <div className="flex flex-col items-center gap-4 text-center">
    <div className="px-4 py-1 rounded-2xl outline outline-1 outline-slate-200 inline-flex items-center gap-3">
      <span className="text-slate-500 text-sm font-medium leading-6">Integrations</span>
    </div>
    <h2 className="w-full max-w-4xl text-teal-900 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold capitalize leading-tight">
      Seamless Integrations with Your Favorite Tools
    </h2>
    <p className="w-full max-w-2xl text-slate-500 text-base md:text-xl font-normal leading-7 md:leading-9">
      Sync effortlessly across banking, payment, and productivity platforms.
    </p>
  </div>

  <div className="flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16 my-14 md:my-20 w-full">
    {[
      { src: "/intergration/cash-app.jpg", alt: "Cash App" },
      { src: "/intergration/excel.svg", alt: "Excel" },
      { src: "/intergration/zoom.svg", alt: "Zoom" },
      { src: "/intergration/loom.svg", alt: "Loom" },
      { src: "/intergration/paypal.svg", alt: "PayPal" },
      { src: "/intergration/stripe.svg", alt: "Stripe" },
      { src: "/intergration/google.svg", alt: "Google" },
    ].map(({ src, alt }) => (
      <Image
        key={alt}
        src={src}
        alt={alt}
        width={90}
        height={90}
        className="object-contain w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[90px] lg:h-[90px]"
      />
    ))}
  </div>
</div>

        {/* ── Testimonials section ─────────────────────────────────── */}
        <section className="bg-green-100 py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col items-center gap-4 text-center">
              <div className="px-4 py-1 rounded-2xl outline outline-[0.5px] outline-teal-900 inline-flex items-center gap-3">
                <span className="text-teal-900 text-sm font-medium leading-6">Testimonial</span>
              </div>
              <h2 className="w-full max-w-4xl text-teal-900 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold capitalize leading-tight">
                Discover The Power of Real-Time Financial Insights
              </h2>
              <p className="w-full max-w-2xl text-slate-500 text-base md:text-xl font-normal leading-7 md:leading-9">
                Stay ahead of your financial goals with intelligent tools that track, analyze, and simplify your daily money decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
              {[
                {
                  logo: "/logos/logo1.png",
                  photo: "/jurica.jpg",
                  name: "Clara Nguyen",
                  role: "Freelance Consultant",
                  quote:
                    "Nkirra completely changed the way I handle money. I used to feel overwhelmed tracking expenses, but now everything is organized and automated. I even reached my emergency fund goal three months ahead of schedule thanks to the smart saving plan widgets and real-time budgeting insights.",
                },
                {
                  logo: "/logos/logo5.png",
                  photo: "/vicky.jpg",
                  name: "Sarah Johnson",
                  role: "Small Business Owner",
                  quote:
                    "Nkirra completely changed the way I handle money. I used to feel overwhelmed tracking expenses, but now everything is organized and automated. I even reached my emergency fund goal three months ahead of schedule thanks to the smart saving plan widgets and real-time budgeting insights.",
                },
              ].map(({ logo, photo, name, role, quote }) => (
                <div
                  key={name}
                  className="p-6 md:p-8 bg-white rounded-[20px] flex flex-col gap-6 md:gap-8"
                >
                  <div className="h-8 md:h-10 relative">
                    <Image src={logo} fill alt="Logo" className="object-contain object-left" />
                  </div>
                  <p className="text-slate-500 text-sm md:text-lg font-normal leading-7 md:leading-8 flex-1">
                    {quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={photo}
                      width={56}
                      height={56}
                      alt={name}
                      className="rounded-full w-12 h-12 md:w-14 md:h-14 object-cover shrink-0"
                    />
                    <div className="flex flex-col gap-0.5">
                      <p className="text-stone-950 text-base md:text-lg font-semibold leading-7">{name}</p>
                      <p className="text-slate-500 text-sm md:text-base font-normal leading-6">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing section (placeholder) ────────────────────────── */}
        <div />

        {/* ── FAQ section ──────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="px-4 py-1 rounded-2xl outline outline-1 outline-slate-200 inline-flex items-center gap-3">
              <span className="text-slate-500 text-sm font-medium leading-6">FAQ</span>
            </div>
            <h2 className="w-full max-w-4xl text-teal-900 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold capitalize leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="w-full max-w-2xl text-slate-500 text-base md:text-xl font-normal leading-7 md:leading-9">
              Got questions? We've got you covered—here are some quick answers to help you get the most out of Nkirra.
            </p>
          </div>

          <FAQPage />
        </section>

        {/* ── CTA banner ───────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="w-full bg-teal-900 rounded-[20px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center overflow-hidden">

            {/* Left copy */}
            <div className="flex flex-col gap-6 md:gap-8 flex-1 min-w-0">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="pl-2 pr-4 py-2 bg-green-200 rounded-2xl inline-flex items-center gap-3 self-start">
                  <div className="pl-1.5 pr-2 py-1 bg-white rounded-xl flex items-center gap-1">
                    <div className="w-2 h-2 bg-lime-100 rounded flex items-center justify-center relative">
                      <div className="absolute w-1 h-1 bg-teal-900 rounded-full" />
                    </div>
                    <span className="text-teal-900 text-xs font-medium leading-5">Nkirra</span>
                  </div>
                  <span className="text-teal-900 text-sm font-medium leading-6">Smarter Money Management</span>
                </div>
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold capitalize leading-tight">
                  Ready to Take Charge of Your Finances?
                </h2>
                <p className="text-white text-base md:text-xl font-normal leading-7 md:leading-9">
                  Join thousands of users managing smarter with Nkirra.
                </p>
              </div>
              <button className="px-6 py-3 bg-lime-200 rounded-2xl inline-flex items-center justify-center gap-2.5 cursor-pointer hover:bg-lime-300 transition-colors self-start">
                <span className="text-stone-950 text-base md:text-lg font-semibold leading-7">
                  Create Free Account
                </span>
              </button>
            </div>

            {/* Right image */}
            <div className="w-full lg:w-[42%] shrink-0 aspect-[4/3] lg:aspect-auto lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="/graphics/hero-dashboard.jpg"
                alt="Hero Dashboard"
                width={500}
                height={380}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────── */}
        <footer className="border-t-2 border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">

            {/* Brand */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
                <h3 className="text-base md:text-lg font-semibold">Nkirra</h3>
              </div>
              <p className="text-gray-500 text-sm md:text-base leading-6 max-w-xs">
                From mood boards to payments, Nkirra replaces scattered messages, spreadsheets,
                and last-minute chaos with one intelligent workflow.
              </p>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base md:text-lg font-semibold">Support</h3>
              <ul className="flex flex-col gap-2 text-gray-500">
                {["Help Center", "Terms of Service", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-black text-sm md:text-base transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base md:text-lg font-semibold">Contact</h3>
              <ul className="flex flex-col gap-2 text-gray-500 text-sm md:text-base">
                <li>Email: info@example.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Location: Nairobi, Kenya</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base md:text-lg font-semibold">Resources</h3>
              <ul className="flex flex-col gap-2 text-gray-500">
                {["Pricing", "Blog", "Documentation"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-black text-sm md:text-base transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <p className="text-xs md:text-sm text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} Nkirra. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}