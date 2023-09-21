import { useState } from "react";
import "../p-graficos/graficos.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
function Bartchart_2() {
  const data = [{ nombre: "ventas", edad: 18, prs: 120 }];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: -5,
          bottom: 0,
        }}
        strokeWidth={1.5}
        className="responce"
      >
        <CartesianGrid
          horizontal={false}
          vertical={false}
          strokeDasharray="3 2"
          style={{ stroke: "#4545BC" }}
          strokeWidth={1}
        />
        <XAxis
          dataKey="nombre"
          tick={{ fill: "#7A7AEE" }}
          axisLine={{ stroke: "#4545BC" }}
          tickSize={0}
          tickMargin={15}
          className="x-axis"
        />
        <YAxis
          tick={{ fill: "#7A7AEE" }}
          axisLine={{ stroke: "#4545BC" }}
          tickMargin={13}
          tickSize={0}
          tickCount={7}
          className="y-axis"
        />
        <Tooltip />

        <Bar
          dataKey="prs"
          fill="#F29FD5"
          fillOpacity={0.31}
          stroke="#F29FD5"
          strokeWidth={0.5}
          barSize={57}
        />
        <ReferenceLine
          y={(100 + 100) / 2}
          stroke="#886CF1"
          strokeWidth={1}
          strokeDasharray="3 3"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default Bartchart_2;
