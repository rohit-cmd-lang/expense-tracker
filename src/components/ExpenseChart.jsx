import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useSelector } from "react-redux";

const ExpenseChart = () => {
  const expenses = useSelector((state) => state.wallet.expenses);

  if (expenses.length === 0) {
    return (
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "700",
            fontStyle: "italic",
          }}
        >
          Top Expenses
        </h1>
        <div
          style={{
            height: "345px",
            width: "calc(92vw - 738px)",
            background: "#FFFFFF",
            borderRadius: "1rem",
            padding: "8px 4px 8px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            fontStyle: "italic",
            color: "#9B9B9B",
          }}
        >
          <p>Chart of your expenses will be shown here</p>
        </div>
      </div>
    );
  }

  const categoryTotals = expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    if (acc[category]) {
      acc[category] += amount;
    } else {
      acc[category] = amount;
    }
    return acc;
  }, {});

  // Convert the categoryTotals object into an array of objects
  const data = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
  }));

  // const data = [
  //   { name: "Entertainment", value: 4000 },
  //   { name: "Food", value: 3000 },
  //   { name: "Travel", value: 2000 },
  // ];
  return (
    <div>
      <h1
        style={{
          color: "white",
          fontSize: "32px",
          fontWeight: "700",
          fontStyle: "italic",
        }}
      >
        Top Expenses
      </h1>
      <div
        style={{
          height: "345px",
          width: "calc(92vw - 738px)",
          background: "#FFFFFF",
          borderRadius: "1rem",
          padding: "8px 4px 8px 16px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
          >
            <XAxis type="number" hide={true} />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#8884d8"
              barSize={20}
              radius={[0, 10, 10, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseChart;
