import { useState } from "react";
import "../components/bartchart-1-css.css";
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
function Bartchart_1() {
  const data = [
    
    { nombre: "luis", edad: 18, monto: 3850 },
    { nombre: "jose", edad: 33, monto: 5850 },
    { nombre: "maria", edad: 24, monto: 18500 },
    { nombre: "pedro", edad: 26, monto: 20100 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        strokeWidth={1.5}
        className="responce"
      >
        <CartesianGrid
          horizontal={true}
          vertical={false}
          strokeDasharray="3 2"
          style={{ stroke: "#4545BC" }}
          strokeWidth={1}
        />
        <XAxis
          dataKey="edad"
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
          dataKey="monto"
          fill="#ACACF9"
          fillOpacity={0.31}
          stroke="#5555D8"
          strokeWidth={0.5}
          barSize={57}
        />
        <ReferenceLine
          y={(3850 + 20100) / 2}
          stroke="#886CF1"
          strokeWidth={2}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default Bartchart_1;
