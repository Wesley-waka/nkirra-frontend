// app/page.tsx (Next.js 13+)
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Carousel from "./assets/Carousel";
import { useState } from "react";
import FAQPage from "@/components/faq";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useInView, Variants, Easing } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Scroll refs for animations
  const featuresRef = useRef(null);
  const valuesRef = useRef(null);
  const overviewRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });

  const cards = [
  {
    src: "/color/cashflow.png",
    height: 500,
    width: 450,
    alt: "Cashflow",
    title: "Real-Time Financial Visibility",
    description:
      "Track contributions, payouts, balances and group activity instantly - either a complete view of your financial position",
  },
  {
    src: "/color/savings.png",
    height: 500,
    width: 450,
    alt: "Savings",
    title: "Smart Payouts & Transaction",
    description:
      "Manage payouts, automate schedules, and maintain a clear structured record of every transaction",
  },
  {
    src: "/color/portfolio.png",
    height: 350,
    width: 350,
    alt: "Portfolio",
    title: "Automations & Payment Intelligence",
    description:
      "Send reminders, trigger alerts, and leverage smart insights to keep contributions consistent and on track",
  },
  {
    src: "/color/statistics.png",
    height: 240,
    width: 240,
    alt: "Statistics",
    title: "Advanced Insights & Financial Growth",
    description:
      "Understand trends, predict risks, unlock credit potential, and expand into lending, payments, and investment capabilities",
  },
];
 
// Variants for the outer card wrapper — slides up + fades in
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.12,
    },
  }),
};
 
// Variants for the image box — subtle scale-up on entry
const imageBoxVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.12 + 0.1,
    },
  }),
};
 
// Variants for the text block — slides up slightly after image
const textVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.12 + 0.25,
    },
  }),
};
 

  return (
    <>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[4] before:-translate-x-1/2">

        {/* ── Hero section ─────────────────────────────────────────── */}
        <div className="min-h-[600px] bg-gradient-to-b from-blue-200/0 to-[#A9BAE1]">

          {/* Navbar */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInDown}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-6"
          >
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
                <div className=" bg-blue-100 px-4 py-1.5 rounded-lg text-sm md:text-base font-medium">
                  Home
                </div>
                <div
                  onClick={() => router.push("/about-us")}
                  className=" text-sm md:text-base font-medium hover:text-blue-700 transition-colors"
                >
                  About Us
                </div>
              </nav>

              {/* Desktop CTA */}
              <Button
                variant="default_bg"
                className="hidden sm:inline-flex items-center justify-center w-[130px] md:w-[150px] h-[40px] md:h-[44px] text-sm md:text-base bg-brand-primary rounded-xl"
                onClick={()=>router.push("/auth")}
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
                  <div className=" bg-blue-100 py-2 px-4 rounded-lg text-center font-medium text-sm">
                    Home
                  </div>
                  <div
                    onClick={() => {
                      router.push("/about-us");
                      setIsMobileMenuOpen(false);
                    }}
                    className=" py-2 text-center font-medium text-sm hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    About Us
                  </div>
                  <Button
                    variant="default_bg"
                    className="w-full h-[42px] text-sm bg-brand-primary rounded-xl"
                    onClick={() => {
                      router.push("/auth");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Hero Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12"
          >
            <div className="flex flex-col items-center gap-6">

              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="pl-2 pr-4 py-2 bg-red-100 rounded-2xl inline-flex items-center gap-2 md:gap-3"
              >
                <div className="pl-1.5 pr-2 py-1 bg-white rounded-xl flex items-center gap-1">
                  <div className="relative w-2 h-2 bg-blue-100 rounded flex items-center justify-center">
                    <div className="absolute w-1 h-1 bg-red-900 rounded-full" />
                  </div>
                  <span className="text-brand text-sm sm:text-xs font-medium leading-5">Nkirra</span>
                </div>
                <span className="text-brand text-sm sm:text-sm font-medium leading-6">
                  Smarter Group Management
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full max-w-4xl text-center text-brand text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold capitalize leading-none mt-10"
              >
                Elevate Your Community Operating System With Nkirra
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-2xl text-center text-slate-500 text-lg sm:text-base md:text-xl font-normal leading-7 md:leading-9"
              >
                Unified platform that powers how groups organize,manage members,track finances, and stay alligned - all in one structured,transparent system
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="default_bg"
                  className="w-[160px] md:w-[190px] h-[46px] md:h-[52px] text-base md:text-sm bg-brand-primary rounded-xl"
                >
                  Request Demo
                </Button>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                variants={scaleIn}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full max-w-4xl  overflow-hidden rounded-xl mt-2"
              >
                <Image
                  src="/color/dashboard.png"
                  alt="Hero Image"
                  width={1000}
                  height={500}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Logo / Carousel ──────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Carousel />
        </div>

        {/* ── Features section ─────────────────────────────────────── */}
        <motion.section 
          ref={featuresRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-8"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
        >

          {/* Section header */}
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col items-center gap-4 text-center"
          >
            <motion.div variants={fadeInUp} className="px-4 py-1 rounded-2xl outline outline-1 outline-slate-200 inline-flex items-center gap-3">
              <span className="text-slate-500 text-base sm:text-sm font-medium leading-6">Features</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="w-full max-w-4xl text-brand text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold capitalize leading-none">
              Smarter Features to Manage and Streamline Your Community
            </motion.h2>
            <motion.p variants={fadeInUp} className="w-full max-w-2xl text-slate-500 text-lg sm:text-base md:text-xl font-normal leading-7 md:leading-9">
              Everything you need in one platform to track, plan, and optimize your operations.
            </motion.p>
          </motion.div>

          {/* Feature grid */}
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-10 md:mt-12"
          >

            {/* Illustration panel */}
            <motion.div variants={fadeInLeft} className="w-full lg:w-[46%] bg-blue-100 rounded-2xl flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6 p-6 md:p-8 min-h-[300px] lg:min-h-[560px]">
              <Image
                src="/color/card.png"
                alt="Credit card"
                width={380}
                height={260}
                className="object-contain w-full max-w-[320px] sm:max-w-[48%] lg:max-w-[90%] rounded-xl"
              />
              <Image
                src="/color/limit_daily.png"
                alt="Credit limit"
                width={380}
                height={260}
                className="object-contain w-full  max-w-[320px] sm:max-w-[48%] lg:max-w-[90%] rounded-xl"
              />
            </motion.div>

            {/* Feature list */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-4 md:gap-5 w-full lg:flex-1">
              {[
                {
                  icon: "/icons/Thunder.svg",
                  alt: "Thunder",
                  title: "Group Operations and Administration",
                  body: "Manage members,roles,tasks,and structure while keeping your group organized,alligned,and accountable as it grows",
                },
                {
                  icon: "/icons/clock.svg",
                  alt: "Clock",
                  title: "Financial Management and Infrastructure",
                  body: "Track contributions,manage payouts and unlock advanced capabilities like payments,credit systems,lending,and investment pools.",
                },
                {
                  icon: "/icons/cloud.svg",
                  alt: "Cloud",
                  title: "Governance & Transparency",
                  body: "Record decisions,track approvals,and maintain full visibility across all group activities and financial actions",
                },
                {
                  icon: "/icons/money.svg",
                  alt: "Money",
                  title: "Intelligence,Automation and Growth",
                  body: "Leverage real-time insights,smart automations,and AI-driven recommendations to optimize how your group operates and scales",
                },
              ].map(({ icon, alt, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeInRight}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 }
                  }}
                  className="p-4 md:p-5 bg-white rounded-2xl outline outline-1 outline-slate-200 backdrop-blur-lg flex items-start gap-4 md:gap-5 "
                >
                  <div className="shrink-0 p-3 bg-blue-200 rounded-full flex items-center justify-center">
                    <Image src={icon} alt={alt} width={24} height={24} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-stone-950 text-lg sm:text-base md:text-lg font-semibold leading-7">{title}</p>
                    <p className="text-slate-500 text-base sm:text-sm md:text-base font-normal leading-6">{body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ── Values section ───────────────────────────────────────── */}
        <motion.section 
          ref={valuesRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20"
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
        >

          <motion.div 
            variants={staggerContainer}
            className="flex flex-col items-center gap-4 text-center"
          >
            <motion.div variants={fadeInUp} className="px-4 py-1 rounded-2xl outline outline-1 outline-slate-200 inline-flex items-center gap-3">
              <span className="text-slate-500 text-base sm:text-sm font-medium leading-6">Our Value</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="w-full max-w-4xl text-brand text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold capitalize leading-none">
              How it Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="w-full max-w-2xl text-slate-500 text-lg sm:text-base md:text-xl font-normal leading-7 md:leading-9">
              Get Started in 3 simple steps Onboard quickly and experience the benefits of automation without hassle
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-8 md:mt-10"
          >
            {[
              {
                bg: "bg-blue-100",
                iconBg: "bg-blue-200",
                icon: "/group.svg",
                alt: "Server",
                title: "Create Your Group",
                body: "Setup your group in minutes by adding members,defining roles and establing how your group operates",
                textColor: "text-slate-500",
              },
              {
                bg: "bg-blue-200",
                iconBg: "bg-white",
                icon: "/settings.svg",
                alt: "Grid",
                title: "Customize Your Experience",
                body: "Tailor contributions,payouts,structure,and workflows to match your group's unique needs",
                textColor: "text-brand",
              },
              {
                bg: "bg-blue-100",
                iconBg: "bg-blue-200",
                icon: "/grow.svg",
                alt: "Vector",
                title: "Grow With Confidence",
                body: "Stay organized,gain visibility,and scale your group with clarity,control, and trust",
                textColor: "text-slate-500",
              },
            ].map(({ bg, iconBg, icon, alt, title, body, textColor }) => (
              <motion.div
                key={title}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`${bg} rounded-[20px] px-6 md:px-8 py-8 md:py-10 flex flex-col items-center gap-6 text-center `}
              >
                <div className={`${iconBg} p-6 md:p-7 rounded-full flex items-center justify-center`}>
                  <Image src={icon} alt={alt} width={42} height={42} />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-brand text-xl sm:text-lg md:text-2xl font-semibold capitalize leading-8">{title}</p>
                  <p className={`${textColor} text-base sm:text-sm md:text-base leading-6 md:leading-7`}>{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Overview section ─────────────────────────────────────── */}
        <motion.div 
          ref={overviewRef}
          className="flex flex-col justify-center max-w-7xl mx-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20"
          initial="hidden"
          animate={overviewInView ? "visible" : "hidden"}
        >

           <motion.div 
            variants={staggerContainer}
            className="flex flex-col items-center gap-4 text-center"
           >
            <motion.div variants={fadeInUp} className="px-4 py-1 rounded-2xl outline outline-1 outline-slate-200 inline-flex items-center gap-3">
              <span className="text-slate-500 text-base sm:text-sm font-medium leading-6">Overview</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="w-full max-w-4xl text-brand text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold capitalize leading-none">
              Discover The Power of Real-Time Financial Insights
            </motion.h2>
            <motion.p variants={fadeInUp} className="w-full max-w-2xl text-slate-500 text-lg sm:text-base md:text-xl font-normal leading-7 md:leading-9">
              Stay in control of your group's finances with intelligent tools that track,manage and simplify every contribution and payout
            </motion.p>
          </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          className="flex flex-col gap-6"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          {/* Image box */}
          <motion.div
            className="h-96 p-8 bg-blue-100 rounded-3xl flex justify-center items-center"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageBoxVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <Image
              src={card.src}
              height={card.height}
              width={card.width}
              alt={card.alt}
              className="rounded-md"
            />
          </motion.div>
 
          {/* Text block */}
          <motion.div
            className="flex flex-col gap-3"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            <div className="text-stone-950 text-2xl sm:text-xl md:text-2xl font-semibold capitalize leading-8">
              {card.title}
            </div>
            <div className="text-slate-500 text-lg sm:text-base md:text-base leading-6">
              {card.description}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>




        </motion.div>

        {/* ── Numbers section ──────────────────────────────────────── */}
        <div className="flex items-center justify-center max-w-7xl mx-auto py-12 md:py-20 lg:py-28 px-4">

  <div className="p-6 sm:p-10 lg:p-16 w-full bg-blue-200 rounded-[20px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">

    {/* Left: Text & Stats */}
    <div className="w-full lg:w-1/2 inline-flex flex-col justify-start items-start gap-8">
      <div className="w-full flex flex-col justify-center items-start gap-4">
        <div className="px-4 py-1 rounded-2xl outline outline-[0.50px] outline-offset-[-0.50px] outline-red-900 inline-flex justify-center items-center gap-3">
          <div className="text-red-900 text-base sm:text-sm font-medium leading-6">Numbers</div>
        </div>
        <div className="w-full text-brand text-4xl sm:text-3xl lg:text-6xl font-semibold capitalize leading-none lg:leading-[64px]">
          Confidence Backed <br />by Performance
        </div>
        <div className="w-full text-stone-950 text-lg sm:text-base lg:text-xl font-normal leading-7 lg:leading-9">
          Powering smarter financial decisions for individuals and businesses around the globe backed by real
        </div>
      </div>

      <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-blue-900/10" />

      {/* Stats */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-6">
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="text-brand text-5xl sm:text-4xl lg:text-6xl font-semibold capitalize leading-none lg:leading-[64px]">98%</div>
          <div className="text-stone-950 text-base sm:text-sm font-normal leading-6">Customer Satisfaction</div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="text-brand text-5xl sm:text-4xl lg:text-6xl font-semibold capitalize leading-none lg:leading-[64px]">$120M+</div>
          <div className="text-stone-950 text-base sm:text-sm font-normal leading-6">Tracked Through Nkirra</div>
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-2">
          <div className="text-brand text-5xl sm:text-4xl lg:text-6xl font-semibold capitalize leading-none lg:leading-[64px]">1M+</div>
          <div className="text-stone-950 text-base sm:text-sm font-normal leading-6">Transactions Processed</div>
        </div>
      </div>
    </div>

    {/* Right: Images */}
    <div className="flex flex-col md:flex-col w-full lg:w-1/2 gap-4">
      <Image
        src='/color/vacation.png'
        height={500}
        width={500}
        alt='Numbers'
        className='rounded-md'
      />
      <Image
        src='/color/limit_daily.png'
        height={500}
        width={500}
        alt='Numbers'
        className='rounded-md'
      />
    </div>

  </div>
</div>

        {/* ── Integrations section ─────────────────────────────────── */}
        


        <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 py-14 md:py-8 items-center justify-center">
  <div className="flex flex-col items-center gap-4 text-center">
    <div className="px-4 py-1 rounded-2xl outline outline-1 outline-slate-200 inline-flex items-center gap-3">
      <span className="text-slate-500 text-sm font-medium leading-6">Integrations</span>
    </div>
    <h2 className="w-full max-w-4xl text-brand text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold capitalize leading-none">
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
      { src: "/intergration/loom.svg", alt: "Loom" },
      { src: "/intergration/paypal.svg", alt: "PayPal" },
      { src: "/intergration/stripe.svg", alt: "Stripe" },
      { src: "/intergration/google.svg", alt: "Google" },
      { src: "/logos/whatsapp.svg", alt: "WhatsApp" },
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
        <section className="bg-blue-100 py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col items-center gap-4 text-center">
              <div className="px-4 py-1 rounded-2xl outline outline-[0.5px] outline-red-900 inline-flex items-center gap-3">
                <span className="text-red-900 text-base sm:text-sm font-medium leading-6">Testimonial</span>
              </div>
              <h2 className="w-full max-w-4xl text-brand text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold capitalize leading-none">
                Discover The Power of Real-Time Financial Insights
              </h2>
              <p className="w-full max-w-2xl text-slate-500 text-lg sm:text-base md:text-xl font-normal leading-7 md:leading-9">
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
                  <p className="text-slate-500 text-base sm:text-sm md:text-lg font-normal leading-7 md:leading-8 flex-1">
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
                      <p className="text-stone-950 text-lg sm:text-base md:text-lg font-semibold leading-7">{name}</p>
                      <p className="text-slate-500 text-base sm:text-sm md:text-base font-normal leading-6">{role}</p>
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
            <div className="px-4 py-1 rounded-2xl outline outline-1 outline-gray-200 inline-flex items-center gap-3">
              <span className="text-slate-500 text-base sm:text-sm font-medium leading-6">FAQ</span>
            </div>
            <h2 className="w-full max-w-4xl text-brand text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-semibold capitalize leading-none">
              Frequently Asked Questions
            </h2>
            <p className="w-full max-w-2xl text-slate-500 text-lg sm:text-base md:text-xl font-normal leading-7 md:leading-9">
              Got questions? We've got you covered—here are some quick answers to help you get the most out of Nkirra.
            </p>
          </div>

          <FAQPage />
        </section>

        {/* ── CTA banner ───────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="w-full bg-blue-900 rounded-[20px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center overflow-hidden">

            {/* Left copy */}
            <div className="flex flex-col gap-6 md:gap-8 flex-1 min-w-0">
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="pl-2 pr-4 py-2 bg-red-200 rounded-2xl inline-flex items-center gap-3 self-start">
                  <div className="pl-1.5 pr-2 py-1 bg-white rounded-xl flex items-center gap-1">
                    <div className="w-2 h-2 bg-lime-100 rounded flex items-center justify-center relative">
                      <div className="absolute w-1 h-1 bg-blue-900 rounded-full" />
                    </div>
                    <span className="text-brand text-xs font-medium leading-5">Nkirra</span>
                  </div>
                  <span className="text-brand text-sm font-medium leading-6">Smarter Group Management</span>
                </div>
                <h2 className="text-white text-3xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold capitalize leading-none">
                  Ready to Take Charge of Your Finances?
                </h2>
                <p className="text-white text-lg sm:text-base md:text-xl font-normal leading-7 md:leading-9">
                  Join thousands of users managing smarter with Nkirra55758.
                </p>
              </div>
              <Button
                variant="default_bg"
                className="w-[160px] md:w-[190px] h-[46px] md:h-[52px] text-base md:text-sm bg-brand-primary rounded-xl"
              >
                Get Started Free
              </Button>
            </div>

            {/* Right image */}
            <div className="w-full lg:w-[42%] shrink-0 aspect-[4/3] lg:aspect-auto lg:h-80 rounded-lg overflow-hidden">
              <Image
                src="/color/dashboard.png"
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
                <h3 className="text-lg sm:text-base md:text-lg font-semibold">Nkirra</h3>
              </div>
              <p className="text-gray-500 text-base sm:text-sm md:text-base leading-6 max-w-xs">
                From mood boards to payments, Nkirra replaces scattered messages, spreadsheets,
                and last-minute chaos with one intelligent workflow.
              </p>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg sm:text-base md:text-lg font-semibold">Support</h3>
              <ul className="flex flex-col gap-2 text-gray-500">
                {["Help Center", "Terms of Service", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-black text-base sm:text-sm md:text-base transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg sm:text-base md:text-lg font-semibold">Contact</h3>
              <ul className="flex flex-col gap-2 text-gray-500 text-base sm:text-sm md:text-base">
                <li>Email: info@example.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Location: Nairobi, Kenya</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg sm:text-base md:text-lg font-semibold">Resources</h3>
              <ul className="flex flex-col gap-2 text-gray-500">
                {["Pricing", "Blog", "Documentation"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-black text-base sm:text-sm md:text-base transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <p className="text-sm sm:text-xs md:text-sm text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} Nkirra. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}