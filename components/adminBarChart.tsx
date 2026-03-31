"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

// Updated sample data with 4 metrics
const rawData = [
  { name: "Page A", metric1: 4000, metric2: 2400, metric3: 1200, metric4: 600 },
  { name: "Page B", metric1: 3000, metric2: 1398, metric3: 1000, metric4: 500 },
  { name: "Page C", metric1: 2000, metric2: 9800, metric3: 1800, metric4: 700 },
  { name: "Page D", metric1: 2780, metric2: 3908, metric3: 1300, metric4: 650 },
  { name: "Page E", metric1: 1890, metric2: 4800, metric3: 1500, metric4: 450 },
  { name: "Page F", metric1: 2390, metric2: 3800, metric3: 1700, metric4: 520 },
  { name: "Page G", metric1: 3490, metric2: 4300, metric3: 1600, metric4: 580 },
];

// Compute TOTAL of all metrics across all pages
const totalMetrics = rawData.reduce(
  (acc, item) =>
    acc +
    item.metric1 +
    item.metric2 +
    item.metric3 +
    item.metric4,
  0
);

// Use raw data directly in the chart
const data = rawData;

export default function FinancialBarChart() {
  return (
    <Card className="w-full shadow-md rounded-xl border border-gray-100">
      <CardHeader className="pb-2 flex items-start justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">
            Financial Comparison
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Blue vs Red Metric Breakdown
          </CardDescription>
        </div>
      </CardHeader>

      {/* Legend Row With Total on Far Left */}
      <div className="flex justify-between items-center px-6 -mt-2 pb-1">
        <div className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-md shadow-sm">
          Total: {totalMetrics.toLocaleString()}
        </div>

        <div className="flex-1 flex justify-end mr-6 text-sm text-gray-600">
          {/* This empty div forces legend to stay top-right */}
        </div>
      </div>

      <CardContent className="w-full h-[350px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="4 4" opacity={0.3} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />

            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #eee",
              }}
            />

            {/* Legend still positioned top-right */}
            <Legend
              verticalAlign="top"
              align="right"
              wrapperStyle={{ paddingBottom: 20 }}
            />

            {/* 4 stacks using only red & blue spectrum */}
            <Bar dataKey="metric1" stackId="a" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
            <Bar dataKey="metric2" stackId="a" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="metric3" stackId="a" fill="#B91C1C" radius={[4, 4, 0, 0]} />
            <Bar dataKey="metric4" stackId="a" fill="#EF4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}