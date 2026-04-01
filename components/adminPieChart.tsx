"use client";
import { TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A radial chart";

const chartData = [
  { browser: "Benovelent Funds",  visitors: 275, fill: "#3b82f6" },
  { browser: "Meeting fees",  visitors: 200, fill: "#ef4444" },
  { browser: "Monthly Contribution", visitors: 187, fill: "#60a5fa" },
  { browser: "Fees",    visitors: 173, fill: "#dc2626" },
  { browser: "other",   visitors: 90,  fill: "#93c5fd" },
];

const total = chartData.reduce((a, b) => a + b.visitors, 0);

const chartConfig = {
  visitors: { label: "Visitors" },
} satisfies ChartConfig;

export function ChartRadialSimple() {
  return (
    <Card className="flex flex-col h-full min-h-0 w-full">
      <CardHeader className="items-center pb-0 px-4 sm:px-6">
        <CardTitle className="text-base sm:text-lg">Radial Chart</CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          January - June 2024
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 pb-0 px-3 sm:px-6">
        {/*
          Mobile  (<sm): chart on top, legend below in a 2-col grid
          Desktop (≥sm): chart left, legend right — original layout
        */}
        <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-6">

          {/* Chart */}
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[180px] sm:max-w-[250px] sm:flex-1"
          >
            <RadialBarChart
              data={chartData}
              innerRadius={30}
              outerRadius={110}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="browser" />}
              />
              <RadialBar dataKey="visitors" background />
            </RadialBarChart>
          </ChartContainer>

          {/* Legend — 2-col grid on mobile, single column on sm+ */}
          <div className="grid grid-cols-2 sm:grid-cols-1 sm:flex sm:flex-col sm:justify-center gap-2 sm:gap-4 pb-3 sm:pb-0 sm:pr-4">
            {chartData.map((item) => {
              const percentage = ((item.visitors / total) * 100).toFixed(1);
              return (
                <div key={item.browser} className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mt-0.5 sm:mt-1 flex-shrink-0"
                    style={{ backgroundColor: item.fill }}
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="font-medium capitalize text-xs sm:text-sm">
                      {item.browser} — {percentage}%
                    </span>
                    <span className="text-muted-foreground text-[10px] sm:text-xs">
                      {item.visitors.toLocaleString()} visitors
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </CardContent>

      {/* <CardFooter className="flex-col gap-1 sm:gap-2 text-xs sm:text-sm pt-3 sm:pt-4">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
        <div className="leading-none text-muted-foreground text-center">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}