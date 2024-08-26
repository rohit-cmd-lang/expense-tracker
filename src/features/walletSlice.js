import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 5000,
  expenses: [
    { id: 1, title: "Lunch", amount: 20, category: "Food", date: "2024-08-24" },
    {
      id: 2,
      title: "Movie Ticket",
      amount: 12,
      category: "Entertainment",
      date: "2024-08-23",
    },
    {
      id: 3,
      title: "Taxi",
      amount: 30,
      category: "Travel",
      date: "2024-08-22",
    },
    {
      id: 4,
      title: "Groceries",
      amount: 60,
      category: "Food",
      date: "2024-08-21",
    },
    {
      id: 5,
      title: "Concert",
      amount: 50,
      category: "Entertainment",
      date: "2024-08-20",
    },
  ],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addBalance: (state, action) => {
      state.balance += action.payload;
    },
    addExpense: (state, action) => {
      const newExpense = {
        id: Date.now(),
        title: action.payload.title,
        amount: action.payload.amount,
        category: action.payload.category,
        date: action.payload.date,
      };

      state.expenses.push(newExpense);
      console.log("balance before expense", state.balance);
      state.balance -= newExpense.amount;
      console.log("balance after expense", state.balance);
    },
    editExpense: (state, action) => {
      const { id, title, amount, category, date } = action.payload;
      const expense = state.expenses.find((expense) => expense.id === id);
      if (expense) {
        state.balance += expense.amount;
        expense.title = title;
        expense.amount = amount;
        expense.category = category;
        expense.date = date;
        state.balance -= amount;
      }
    },
    deleteExpense: (state, action) => {
      state.balance += state.expenses.find(
        (expense) => expense.id === action.payload
      ).amount;

      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { addExpense, editExpense, deleteExpense, addBalance } =
  walletSlice.actions;
export default walletSlice.reducer;
