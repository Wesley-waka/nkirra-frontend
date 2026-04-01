"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const rawData = [
  { name: "January",  metric1: 4000, metric2: 2400, metric3: 1200, metric4: 600 },
  { name: "February", metric1: 3000, metric2: 1398, metric3: 1000, metric4: 500 },
  { name: "March",    metric1: 2000, metric2: 9800, metric3: 1800, metric4: 700 },
  { name: "April",    metric1: 2780, metric2: 3908, metric3: 1300, metric4: 650 },
  { name: "May",      metric1: 1890, metric2: 4800, metric3: 1500, metric4: 450 },
  { name: "June",     metric1: 2390, metric2: 3800, metric3: 1700, metric4: 520 },
  { name: "July",     metric1: 3490, metric2: 4300, metric3: 1600, metric4: 580 },
];

// Metric definitions — drives both the summary row and the bars
const METRICS = [
  {
    key: "metric1",
    label: "Total Contributions",
    color: "#1E3A8A", // deep blue
    textClass: "text-blue-900",
    value: "$68,000",
  },
  {
    key: "metric2",
    label: "Benevolent Funds",
    color: "#3B82F6", // medium blue
    textClass: "text-blue-500",
    value: "$34,406",
  },
  {
    key: "metric3",
    label: "Meeting Fees",
    color: "#B91C1C", // deep red
    textClass: "text-red-700",
    value: "$11,100",
  },
  {
    key: "metric4",
    label: "Fees",
    color: "#EF4444", // medium red
    textClass: "text-red-400",
    value: "$4,000",
  },
];

// Custom tooltip
const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; fill: string }[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl  bg-white px-4 py-3 shadow-lg text-sm">
      <p className="font-semibold text-gray-700 mb-2">{label}</p>
      {payload.map((entry) => {
        const metric = METRICS.find((m) => m.key === entry.name);
        return (
          <div key={entry.name} className="flex items-center gap-2 mb-1">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ background: entry.fill }}
            />
            <span className="text-gray-500">{metric?.label ?? entry.name}:</span>
            <span className="font-medium text-gray-800">
              ${entry.value.toLocaleString()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default function FinancialBarChart() {
  return (
    <Card className=" shadow-md rounded-2xl flex-1 min-h-0 w-full min-w-2/3">
      {/* ── Header ── */}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          Financial Comparison
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Blue vs Red Metric Breakdown
        </CardDescription>
      </CardHeader>

      {/* ── Legend Row: Total on far LEFT, rest to the right ── */}
      <div className="flex items-start gap-4 px-6 pb-3 flex-wrap">
        {METRICS.map((m) => (
          <div key={m.key} className="flex flex-col min-w-[120px]">
            {/* Colour swatch + label */}
            <div className="flex items-center gap-1.5 mb-0.5">
              <span
                className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
                style={{ background: m.color }}
              />
              <span className="text-xs font-medium text-gray-500 leading-tight">
                {m.label}
              </span>
            </div>
            {/* Value */}
            <span className={`text-xl font-semibold pl-[18px] ${m.textClass}`}>
              {m.value}
            </span>
          </div>
        ))}
      </div>

      {/* ── Chart ── */}
      <CardContent className="w-full h-[350px] px-4 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={rawData}
            margin={{ top: 8, right: 12, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="4 4" opacity={0.25} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />

            {/*
              Stacked bars — all share stackId="a".
              Only the TOP bar gets a rounded top; all others are square
              so the stack looks seamless.
            */}
            <Bar
              dataKey="metric1"
              stackId="a"
              fill={METRICS[0].color}
              radius={[0, 0, 0, 0]}
              name="metric1"
            />
            <Bar
              dataKey="metric2"
              stackId="a"
              fill={METRICS[1].color}
              radius={[0, 0, 0, 0]}
              name="metric2"
            />
            <Bar
              dataKey="metric3"
              stackId="a"
              fill={METRICS[2].color}
              radius={[0, 0, 0, 0]}
              name="metric3"
            />
            {/* Top bar gets rounded corners */}
            <Bar
              dataKey="metric4"
              stackId="a"
              fill={METRICS[3].color}
              radius={[4, 4, 0, 0]}
              name="metric4"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}