'use client'
import CreditCard from '@/components/CreditCard'
import { InputGroupKbd } from '@/components/searchInput'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import TableData from '@/components/TableData'
import { ChartPieDonutText } from '@/components/PieData'
import { Transactions } from '@/components/Transactions'
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox'
import AdminBarChart from '@/components/adminBarChart'
import { ChartRadialSimple } from '@/components/adminPieChart'

export const description = "A simple area chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

const pendingItems = [
  { day: "4", month: "MAR", name: "Catherine Benevolent Funding", amount: "$400.00" },
  { day: "18", month: "MAR", name: "Annual Welfare Support Fund", amount: "$250.00" },
]

const statCards = [
  { label: "Total Contributions", value: "$78,000", image: "/icons/add-square-svgrepo-com.svg", icon: '/icons/down.svg', iconColor: '#0a215d', colorBack: '#dbeafe' },
  { label: "Amount Recieved", value: "$78,000", image: "/icons/money-send-svgrepo-com.svg", icon: '/icons/up.svg', iconColor: '#0a215d', colorBack: '#dbeafe' },
  { label: "Amount Payout", value: "$78,000", image: "/icons/money-recive-svgrepo-com.svg", icon: '/icons/down.svg', iconColor: '#ef4444', colorBack: '#fee2e2' },
]

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

const quickActions = [
  { icon: "/icons/add-square-svgrepo-com.svg", label: "Top Up" },
  { icon: "/icons/money-send-svgrepo-com.svg", label: "Transfer" },
  { icon: "/icons/money-recive-svgrepo-com.svg", label: "Pay" },
  { icon: "/icons/history-svgrepo-com.svg", label: "More" },
]

const activityItems = [
  {
    avatar: "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
    title: 'Created "Preline in React" task',
    sub: "Find more detailed instructions here.",
    user: "James Collins",
    initials: null,
  },
  {
    avatar: null,
    title: "Release v5.2.0 quick bug fix 🐞",
    sub: null,
    user: "Alex Gregarov",
    initials: "A",
  },
  {
    avatar: "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80",
    title: 'Marked "Install Charts" completed',
    sub: "Finally! You can check it out here.",
    user: "James Collins",
    initials: null,
  },
]

const page = () => {

  const data = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  return (
    <>
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="flex flex-col justify-between sm:flex-row sm:items-start  gap-3 flex-wrap shrink-0 bg-[#ffffff] px-5 py-4 border-b-1 border-b-gray-100">
        <div className="shrink-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-brand">Faida Group</h1>
          <p className="text-sm sm:text-base font-extralight text-gray-500">Dashboard</p>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-wrap sm:flex-nowrap">
          <InputGroupKbd />
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 order-3 sm:order-2 ml-auto sm:ml-0">
            
            <button className="p-1.5 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
              <Image src="/icons/message-text-svgrepo-com.svg" alt="settings" width={14} height={14} className="sm:w-4 sm:h-4 w-3.5 h-3.5" />
            </button>

            <button className="p-1.5 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
              <Image src="/icons/notification-svgrepo-com.svg" alt="notifications" width={14} height={14} className="sm:w-4 sm:h-4 w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex items-center justify-end gap-2 sm:gap-3 min-w-[120px] sm:min-w-[150px] order-2 sm:order-3">
            <div className='flex flex-col gap-1 sm:gap-2'>
              <span className="text-xs sm:text-sm font-semibold text-brand truncate max-w-[70px] sm:max-w-[110px]">Andrew Forbist</span>
              <span className="text-xs text-gray-500">Member</span>
            </div>
            <Image
              src="/jurica.jpg"
              width={32}
              height={32}
              alt="Jurica"
              className="rounded-full w-7 h-7 sm:w-8 sm:h-9 object-cover shrink-0"
            />
          </div>
        </div>
      </header>

      {/* ── Main Content ──────────────────────────────────────────────── */}
      <div className="flex flex-col w-full min-w-0 overflow-x-hidden p-6 gap-6 bg-[#f6f8fb] min-h-screen">

        {/* ── Stat Cards Row ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full min-w-0">
          

          <div
              
              className="relative w-full h-[172px] rounded-2xl p-5 flex flex-col justify-between overflow-hidden
                         border border-indigo-900/20
                         shadow-[0_4px_20px_rgba(12,20,69,0.18)]
                         transition-all duration-300
                         hover:shadow-[0_8px_32px_rgba(12,20,69,0.28)]
                         hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #0c1445 0%, #2d3ab0 55%, #6366f1 100%)",
              }}
            >
              {/* Subtle background orb */}
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-6 w-28 h-28 rounded-full bg-indigo-400/10 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 rounded-xl bg-rose-500/90 shadow-md shadow-rose-900/30">
                  <Image
                    src="/icons/money-white.svg"
                    alt="metric"
                    width={18}
                    height={18}
                  />
                </div>
                <span className="text-[13px] font-medium text-white/75 tracking-wide">
                  Total Contributions
                </span>
              </div>

              {/* Value */}
              <div className="text-[2rem] font-extrabold text-white tracking-tight relative z-10 leading-none">
                $250,000
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 relative z-10" />

              {/* Footer */}
              <div className="flex items-center gap-2 relative z-10">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/up-graph.svg"
                    alt="trend"
                    width={18}
                    height={18}
                    className="opacity-90"
                  />
                  <span className="text-emerald-400 font-bold text-sm">56.2%</span>
                </div>
                <span className="text-white/60 text-[12px]">from last month</span>
              </div>
            </div>

            <div
              
              className="relative w-full h-[172px] rounded-2xl p-5 flex flex-col justify-between overflow-hidden
                         border border-indigo-900/20
                         shadow-[0_4px_20px_rgba(12,20,69,0.18)]
                         transition-all duration-300
                         hover:shadow-[0_8px_32px_rgba(12,20,69,0.28)]
                         hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #0c1445 0%, #2d3ab0 55%, #6366f1 100%)",
              }}
            >
              {/* Subtle background orb */}
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-6 w-28 h-28 rounded-full bg-indigo-400/10 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 rounded-xl bg-rose-500/90 shadow-md shadow-rose-900/30">
                  <Image
                    src="/icons/money-white.svg"
                    alt="metric"
                    width={18}
                    height={18}
                  />
                </div>
                <span className="text-[13px] font-medium text-white/75 tracking-wide">
                  Meeting fees
                </span>
              </div>

              {/* Value */}
              <div className="text-[2rem] font-extrabold text-white tracking-tight relative z-10 leading-none">
                $50,000
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 relative z-10" />

              {/* Footer */}
              <div className="flex items-center gap-2 relative z-10">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/up-graph.svg"
                    alt="trend"
                    width={18}
                    height={18}
                    className="opacity-90"
                  />
                  <span className="text-emerald-400 font-bold text-sm">56.2%</span>
                </div>
                <span className="text-white/60 text-[12px]">from last month</span>
              </div>
            </div>

            <div
              
              className="relative w-full h-[172px] rounded-2xl p-5 flex flex-col justify-between overflow-hidden
                         border border-indigo-900/20
                         shadow-[0_4px_20px_rgba(12,20,69,0.18)]
                         transition-all duration-300
                         hover:shadow-[0_8px_32px_rgba(12,20,69,0.28)]
                         hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #0c1445 0%, #2d3ab0 55%, #6366f1 100%)",
              }}
            >
              {/* Subtle background orb */}
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-6 w-28 h-28 rounded-full bg-indigo-400/10 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 rounded-xl bg-rose-500/90 shadow-md shadow-rose-900/30">
                  <Image
                    src="/icons/money-white.svg"
                    alt="metric"
                    width={18}
                    height={18}
                  />
                </div>
                <span className="text-[13px] font-medium text-white/75 tracking-wide">
                  Benovelent Funds
                </span>
              </div>

              {/* Value */}
              <div className="text-[2rem] font-extrabold text-white tracking-tight relative z-10 leading-none">
                $200,000
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 relative z-10" />

              {/* Footer */}
              <div className="flex items-center gap-2 relative z-10">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/up-graph.svg"
                    alt="trend"
                    width={18}
                    height={18}
                    className="opacity-90"
                  />
                  <span className="text-emerald-400 font-bold text-sm">56.2%</span>
                </div>
                <span className="text-white/60 text-[12px]">from last month</span>
              </div>
            </div>

            <div
              
              className="relative w-full h-[172px] rounded-2xl p-5 flex flex-col justify-between overflow-hidden
                         border border-indigo-900/20
                         shadow-[0_4px_20px_rgba(12,20,69,0.18)]
                         transition-all duration-300
                         hover:shadow-[0_8px_32px_rgba(12,20,69,0.28)]
                         hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #0c1445 0%, #2d3ab0 55%, #6366f1 100%)",
              }}
            >
              {/* Subtle background orb */}
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-6 w-28 h-28 rounded-full bg-indigo-400/10 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 rounded-xl bg-rose-500/90 shadow-md shadow-rose-900/30">
                  <Image
                    src="/icons/money-white.svg"
                    alt="metric"
                    width={18}
                    height={18}
                  />
                </div>
                <span className="text-[13px] font-medium text-white/75 tracking-wide">
                  Members
                </span>
              </div>

              {/* Value */}
              <div className="text-[2rem] font-extrabold text-white tracking-tight relative z-10 leading-none">
                24
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 relative z-10" />

              {/* Footer */}
              <div className="flex items-center gap-2 relative z-10">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/up-graph.svg"
                    alt="trend"
                    width={18}
                    height={18}
                    className="opacity-90"
                  />
                  <span className="text-emerald-400 font-bold text-sm">56.2%</span>
                </div>
                <span className="text-white/60 text-[12px]">from last month</span>
              </div>
            </div>
        </div>

        {/* ── Charts Row ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          <div className="lg:col-span-2 min-h-0 w-full bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
            <AdminBarChart />
          </div>
          <div className="min-h-0 w-full bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
            <ChartRadialSimple />
          </div>
        </div>

        {/* ── Table + Transactions Row ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
          <div className="lg:col-span-2 min-h-0 w-full bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
            <TableData />
          </div>
          <div className="min-h-0 w-full bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-hidden">
            <Transactions />
          </div>
        </div>

      </div>
    </>
  )
}

export default page