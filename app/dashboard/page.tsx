'use client'
import CreditCard from '@/components/CreditCard'
import { InputGroupKbd } from '@/components/searchInput'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
  { label: "Total Contribution", value: "$78,000" },
  { label: "Total Members", value: "$78,000" },
  { label: "Active Funds", value: "$78,000" },
]

const quickActions = [
  { icon: "/globe.svg", label: "Transact" },
  { icon: "/globe.svg", label: "Transfer" },
  { icon: "/globe.svg", label: "Pay" },
  { icon: "/globe.svg", label: "More" },
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
  return (
    /**
     * Root wrapper
     * ─────────────
     * · `w-full min-w-0`      → fills <main> next to sidebar; can shrink below natural size
     * · `overflow-x-hidden`   → no horizontal scroll during sidebar open/close animation
     * · No fixed height here — let content determine height naturally
     */
    <div className="flex flex-col w-full min-w-0 overflow-x-hidden p-5 gap-5">

      {/* ── Top bar ──────────────────────────────────────────────────── */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 flex-wrap shrink-0">
        <div className="shrink-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-brand">Faida Group</h1>
          <p className="text-sm sm:text-base font-extralight text-gray-500">Dashboard</p>
        </div>

        <div className="flex items-center gap-2 min-w-0 flex-wrap">
          <InputGroupKbd />
          <div className="flex items-center gap-2 shrink-0">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <Image src="/globe.svg" alt="notifications" width={16} height={16} />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <Image src="/globe.svg" alt="settings" width={16} height={16} />
            </button>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-sm font-semibold text-brand truncate max-w-[80px] sm:max-w-[110px]">Andrew Forbist</span>
            <Image
              src="/jurica.jpg"
              width={32}
              height={32}
              alt="Jurica"
              className="rounded-full w-8 h-8 sm:w-9 sm:h-9 object-cover shrink-0"
            />
          </div>
        </div>
      </header>

      {/* ── Responsive layout ──────────────────────────────────────────── */}
      {/*
        · Desktop: 3-column layout with flex-[1], flex-[2], flex-[1]
        · Tablet: 2-column layout with first row spanning full width
        · Mobile: Single column stack
      */}
      <div className="flex flex-col lg:flex-row gap-4 w-full min-w-0">

        {/* ══ Column 1 — Left ════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4 min-w-0 lg:flex-1 order-1 lg:order-1">

          {/* Credit card */}
          <div className="shrink-0">
            <CreditCard />
          </div>

          {/* Quick-action strip */}
          <div className="flex items-center justify-between rounded-xl bg-gray-100 divide-x divide-gray-300 shrink-0">
            {quickActions.map(({ icon, label }) => (
              <button
                key={label}
                className="flex flex-col items-center gap-1 py-3 flex-1 hover:bg-gray-200 transition-colors first:rounded-l-xl last:rounded-r-xl"
              >
                <Image src={icon} alt={label} width={22} height={22} className="bg-white p-1.5 rounded-full shadow-sm" />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </button>
            ))}
          </div>

          {/* Ongoing contribution countdown */}
          <div className="rounded-xl border border-gray-200 p-4 shadow-sm bg-white hover:shadow-md transition-shadow shrink-0">
            <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-2">
              Ongoing Contribution
            </p>
            <div className="flex items-center gap-3">
              <Image src="/time-1.png" alt="countdown" width={38} height={38} className="opacity-80 shrink-0" />
              <span className="text-4xl font-extrabold text-red-600 leading-none shrink-0">4</span>
              <div className="flex flex-col min-w-0">
                <p className="text-sm text-gray-500 truncate">
                  Days Remaining of <span className="font-semibold text-gray-700">30</span>
                </p>
                <p className="text-base font-semibold text-gray-800 mt-0.5 truncate">
                  Catherine Benevolent Funding
                </p>
              </div>
            </div>
          </div>

          {/* Pending contributions
              flex-1 → stretches to fill remaining column height so all 3 cols are equal */}
          <Card className="flex flex-col flex-1 min-h-0">
            <CardHeader className="pb-2 shrink-0">
              <CardTitle className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-widest uppercase text-gray-400">
                  Pending Contributions
                </span>
                <span className="text-sm font-medium bg-amber-50 text-amber-600 px-2 py-0.5 rounded-md">
                  {pendingItems.length} pending
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto">
              {pendingItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2.5 bg-gray-50 border border-gray-100 rounded-xl min-w-0"
                >
                  <div className="flex flex-col items-center justify-center w-9 h-9 rounded-lg bg-[#a9012b] shrink-0">
                    <span className="text-sm font-medium text-white leading-none">{item.day}</span>
                    <span className="text-xs text-red-200 mt-0.5 tracking-wide">{item.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.amount}</p>
                  </div>
                  <Button
                    className="h-7 px-3 rounded-lg bg-[#a9012b] hover:bg-[#880122] text-sm font-medium shrink-0"
                    variant="default"
                  >
                    Pay
                  </Button>
                </div>
              ))}
            </CardContent>

            <CardFooter className="justify-between items-center border-t border-gray-100 shrink-0 py-3">
              <span className="text-sm text-gray-500">Total due</span>
              <span className="text-base font-semibold text-gray-900">$650.00</span>
            </CardFooter>
          </Card>
        </div>

        {/* ══ Column 2 — Center (double width) ══════════════════════════ */}
        <div className="flex flex-col gap-4 min-w-0 lg:flex-2 order-3 lg:order-2">

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 shrink-0">
            {statCards.map(({ label, value }) => (
              <Card key={label} className="overflow-hidden">
                <CardContent className="p-4 flex flex-col gap-2">
                  <div className="w-9 h-9 bg-red-50 rounded-md flex items-center justify-center shrink-0">
                    <Image src="/globe.svg" alt={label} width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-900 truncate">{value}</p>
                    <p className="text-sm font-light text-gray-500 truncate">{label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Area chart */}
          <Card className="shrink-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Area Chart</CardTitle>
              <CardDescription className="text-sm">Showing total visitors for the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="w-full h-[180px]">
                <AreaChart accessibilityLayer data={chartData} margin={{ left: 8, right: 8 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(v) => v.slice(0, 3)}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} tick={{ fontSize: 12 }} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Table — flex-1 fills the rest of the column height */}
          <div className="flex-1 min-h-0 w-full min-w-0">
            <TableData />
          </div>
        </div>

        {/* ══ Column 3 — Right ═══════════════════════════════════════════ */}
        <div className="flex flex-col gap-4 min-w-0 lg:flex-1 order-2 lg:order-3">

          {/* Pie / donut chart */}
          <div className="shrink-0">
            <ChartPieDonutText />
          </div>

          {/* Recent activity — flex-1 fills remaining height so all cols are equal */}
          <Card className="flex flex-col flex-1 min-h-0">
            <CardHeader className="pb-2 shrink-0">
              <p className="text-brand text-lg font-semibold">Recent Activity</p>
            </CardHeader>

            <CardContent className="flex flex-col flex-1 min-h-0 overflow-y-auto">
              {/* Date group 1 */}
              <p className="text-sm font-medium uppercase text-muted-foreground mb-2 ps-1">
                1 Aug, 2023
              </p>

              {activityItems.map((item, i) => (
                <div key={i} className="flex gap-2.5 mb-4">
                  <div className="relative flex flex-col items-center">
                    <div className="z-10 w-6 h-6 flex items-center justify-center shrink-0">
                      {item.avatar ? (
                        <img className="w-6 h-6 rounded-full object-cover" src={item.avatar} alt={item.user} />
                      ) : (
                        <span className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-200 rounded-full text-sm font-semibold text-gray-600 uppercase">
                          {item.initials}
                        </span>
                      )}
                    </div>
                    {i < activityItems.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pb-1">
                    <p className="text-base font-medium text-gray-800">{item.title}</p>
                    {item.sub && <p className="mt-0.5 text-base text-gray-500">{item.sub}</p>}
                    <button className="mt-1 flex items-center gap-1 text-base text-gray-400 hover:text-gray-600 transition-colors">
                      {item.avatar ? (
                        <img className="w-3.5 h-3.5 rounded-full" src={item.avatar} alt={item.user} />
                      ) : (
                        <span className="flex items-center justify-center w-3.5 h-3.5 bg-gray-100 border border-gray-200 rounded-full text-sm font-semibold uppercase">
                          {item.initials}
                        </span>
                      )}
                      {item.user}
                    </button>
                  </div>
                </div>
              ))}

              {/* Date group 2 */}
              <p className="text-sm font-medium uppercase text-muted-foreground mb-2 ps-1 mt-2">
                31 Jul, 2023
              </p>
              <div className="flex gap-2.5">
                <div className="z-10 w-6 h-6 flex items-center justify-center shrink-0">
                  <span className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-200 rounded-full">
                    <svg className="w-3 h-3 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 3h5v5" /><path d="M8 3H3v5" />
                      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
                      <path d="m15 9 6-6" />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800">Take a break ⛳️</p>
                  <p className="mt-0.5 text-sm text-gray-500">Just chill for now... 😉</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default page