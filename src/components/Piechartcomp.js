import React, {useState, useEffect} from "react";
import { PieChart, Pie, Cell } from "recharts";

const PieChartComponent = () => {
  const data = [
    { label: "Yes", value: 89 },
    { label: "No", value: 11 },
  ];

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 89) {
        setCount(count + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="flex flex-col justify-center items-center relative">
      <PieChart width={400} height={200}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          innerRadius={65}
          outerRadius={70}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === 0 ? "#90CAF9" : "black"}
            />
          ))}
        </Pie>
      </PieChart>
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 1,
          backgroundColor: "white",
          color: "black",
        }}
        className="text-center text-white font-serif text-4xl font-bold"
      >
        {/* {Math.round((data[0].value / (data[0].value + data[1].value)) * 100)}% */}
        {count}%
      </p>
    </div>
  );
};

export default PieChartComponent;
