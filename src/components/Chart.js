import React from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";
import { Box, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';


const Chart = ({ data }) => {

  const sumTypeA = data.reduce((sum, item) => {
    if (item.type === "A") return sum + 1;
    else return sum;
  }, 0);

  const sumTypeB = data.reduce((sum, item) => {
    if (item.type === "B") return sum + 1;
    else return sum;
  }, 0);

  const sumTypeC = data.reduce((sum , item )=>{
    if (item.type==="C")return sum+1;
    else return sum ; 
  },0)

  
  console.log(sumTypeC);
  

  const chartData = [
    { name: "type A",value: sumTypeA },
    { name: "type B",value: sumTypeB },
    { name: "type C",value: sumTypeC },
  ];

  const COLORS = ["#ffca28", "#3f51b5", "#6a1b9a"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        style={{ fontSize: "10px" }}
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
      </text>
    );
  };

  return (
    <div>
      <Box sx={{ marginLeft: "30px" }}>
        <PieChart width={200} height={200}>
          <Pie
            data={chartData}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Box display={"flex"} justifyContent={"space-between"} >
        <Typography >
        <CircleIcon sx={{color:"#6a1b9a" , fontSize:"medium"}} />
        type A
        </Typography>
        <Typography >
        <CircleIcon sx={{color:"#3f51b5", fontSize:"medium"}} />
        type B
        </Typography>
        <Typography >
        <CircleIcon sx={{color:"#ffca28", fontSize:"medium"}} />
        type C
        </Typography>
        
        </Box>
      </Box>
    </div>
  );
};

export default Chart;
