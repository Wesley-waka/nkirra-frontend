import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const ranges = ["3M", "6M", "1Y", "ALL"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-950 border border-violet-500/30 rounded-xl px-4 py-3 shadow-2xl backdrop-blur-md">
        <p className="text-violet-400 text-xs font-mono tracking-widest uppercase mb-1">
          {label}
        </p>
        <p className="text-violet-50 text-2xl font-bold leading-none">
          {payload[0].value}
          <span className="text-xs text-violet-700 font-mono ml-1">contributions</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function StyledAreaChart() {
  const [activeRange, setActiveRange] = useState("6M");

  const peak = Math.max(...data.map((d) => d.desktop));
  const total = data.reduce((s, d) => s + d.desktop, 0);
  const avg = Math.round(total / data.length);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border border-violet-500/15 rounded-2xl px-8 py-7 overflow-hidden shadow-2xl">

        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-16 -right-12 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-4 w-48 h-48 rounded-full bg-violet-400/5 blur-2xl" />

        {/* Header */}
        <div className="relative flex items-start justify-between mb-5">
          <div>
            <p className="text-violet-700 text-xs font-mono tracking-widest uppercase mb-1">
              Analytics · 2024
            </p>
            <h2 className="text-violet-50 text-2xl font-bold leading-tight mb-1">
              Contributions
            </h2>
            <p className="text-violet-900 text-sm font-light">
              Last 6 months of activity
            </p>
          </div>

          {/* Stat pills */}
          <div className="flex gap-2">
            {[{ label: "Peak", value: peak }, { label: "Avg", value: avg }].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-0.5 min-w-16 bg-violet-500/10 border border-violet-500/20 rounded-lg px-3 py-2"
              >
                <span className="text-violet-700 text-xs font-mono tracking-widest uppercase" style={{ fontSize: "9px" }}>
                  {label}
                </span>
                <span className="text-violet-300 text-lg font-bold leading-none">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mb-5" />

        {/* Range selector */}
        <div className="flex justify-end gap-1 mb-4">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRange(r)}
              className={`text-xs font-mono tracking-wide px-2.5 py-1 rounded-md border transition-all duration-150 cursor-pointer ${
                activeRange === r
                  ? "text-violet-100 bg-violet-500/20 border-violet-500/40"
                  : "text-violet-800 bg-transparent border-transparent hover:text-violet-400 hover:bg-violet-500/10"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data} margin={{ top: 10, right: 4, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="rgba(139,92,246,0.08)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tickFormatter={(v) => v.slice(0, 3).toUpperCase()}
              tick={{ fill: "#3b2f60", fontSize: 10, fontFamily: "monospace", letterSpacing: "0.08em" }}
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              tick={{ fill: "#3b2f60", fontSize: 10, fontFamily: "monospace" }}
              axisLine={false}
              tickLine={false}
              tickMargin={8}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "rgba(167,139,250,0.2)", strokeWidth: 1, strokeDasharray: "4 4" }}
            />
            <Area
              type="monotone"
              dataKey="desktop"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#areaGrad)"
              dot={false}
              activeDot={{ r: 5, fill: "#c4b5fd", stroke: "#8b5cf6", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-500" style={{ boxShadow: "0 0 8px #8b5cf6" }} />
            <span className="text-violet-800 font-mono tracking-widest uppercase" style={{ fontSize: "10px" }}>
              Desktop · Active
            </span>
          </div>
          <span className="text-violet-900 font-mono tracking-wider uppercase" style={{ fontSize: "10px" }}>
            Total {total}
          </span>
        </div>

      </div>
    </div>
  );
}