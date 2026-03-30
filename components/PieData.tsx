"use client"

import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "./ui/combobox"

export const description = "A donut chart with text"

// Brand palette: navy-blue dominant (#1e3a8a) + red accents (#fee2e2 / #ef4444)
// 3 blue tints → 1 red accent → 1 deeper red
const BRAND_COLORS = {
  1: "#1e3a8a", // navy        — dominant anchor
  2: "#3b6fd4", // blue-mid    — lighter blue tint
  3: "#93b4f0", // blue-light  — softest blue
  4: "#ef4444", // rose-500    — vivid red accent
  5: "#fee2e2", // rose-100    — brand red (lightest)
}

// Readable text: dark navy on light shades, white on dark
const PILL_TEXT: Record<string, string> = {
  "#1e3a8a": "#ffffff",
  "#3b6fd4": "#ffffff",
  "#93b4f0": "#1e3a8a",
  "#ef4444": "#ffffff",
  "#fee2e2": "#9f1239",
}

const chartData = [
  { browser: "chrome",  visitors: 275, fill: BRAND_COLORS[1] },
  { browser: "safari",  visitors: 200, fill: BRAND_COLORS[2] },
  { browser: "firefox", visitors: 287, fill: BRAND_COLORS[3] },
  { browser: "edge",    visitors: 173, fill: BRAND_COLORS[4] },
  { browser: "other",   visitors: 190, fill: BRAND_COLORS[5] },
]

 const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

const chartConfig = {
  visitors: { label: "Visitors" },
  chrome:   { label: "Chrome",  color: BRAND_COLORS[1] },
  safari:   { label: "Safari",  color: BRAND_COLORS[2] },
  firefox:  { label: "Firefox", color: BRAND_COLORS[3] },
  edge:     { label: "Edge",    color: BRAND_COLORS[4] },
  other:    { label: "Other",   color: BRAND_COLORS[5] },
} satisfies ChartConfig

const legendData = [
  { label: "Contributions", percent: "60%", amount: "$4,200", color: BRAND_COLORS[1] },
  { label: "Withdrawals",   percent: "20%", amount: "$1,400", color: BRAND_COLORS[2] },
  { label: "Earnings",      percent: "12%", amount: "$840",   color: BRAND_COLORS[3] },
  { label: "Fees",          percent: "8%",  amount: "$560",   color: BRAND_COLORS[4] },
]

export function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col w-full max-w-sm rounded-2xl border border-border/50 bg-card shadow-xl shadow-black/5 overflow-hidden">
      {/* Header */}
      <CardHeader className="pb-2 border-b-1 border-gray-100 px-6 flex justify-between">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base font-semibold tracking-tight text-foreground">
              Browser Traffic
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground mt-0.5">
              January – June 2024
            </CardDescription>
          </div>
          {/* <span className="flex items-center gap-1 text-xs font-medium text-emerald-500 bg-emerald-500/10 rounded-full px-2.5 py-1">
            <ArrowUpRight className="w-3 h-3" />
            +12.4%
          </span> */}
        </div>

        <Combobox items={frameworks} >
              <ComboboxInput placeholder="This Month" className="w-[130px]"/>
              <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 px-6 pb-6">
        {/* Chart */}
        <div className="relative">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[220px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={66}
                outerRadius={90}
                strokeWidth={0}
                paddingAngle={3}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy ?? 0) - 8}
                            className="fill-foreground"
                            style={{ fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.03em" }}
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy ?? 0) + 14}
                            className="fill-muted-foreground"
                            style={{ fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                          >
                            Visitors
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/60 -mx-1" />

        {/* Legend rows */}
        <div className="flex flex-col gap-2.5">
          {legendData.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                {/* Color dot */}
                <span
                  className="inline-flex items-center justify-center rounded-full text-[10px] font-semibold shrink-0"
                  style={{
                    background: item.color,
                    color: PILL_TEXT[item.color] ?? "#fff",
                    width: 36,
                    height: 22,
                    fontSize: "0.65rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.percent}
                </span>
                <span className="text-sm font-medium text-foreground leading-none">
                  {item.label}
                </span>
              </div>

              <span className="text-sm font-semibold text-foreground tabular-nums">
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}