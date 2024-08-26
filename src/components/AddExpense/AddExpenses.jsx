import React, { useEffect, useState } from "react";
import "./AddExpense.css";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { addExpense, editExpense } from "../../features/walletSlice";
const AddExpenses = ({ handleClose, type, expense }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.wallet.balance);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (type === "edit" && expense) {
      setTitle(expense.title);
      setAmount(expense.amount.toString());
      setCategory(expense.category);
      setDate(expense.date);
    }
  }, [expense, type]);
  const handleAddExpense = () => {
    const expenseAmount = parseInt(amount);
    if (expenseAmount > balance) {
      enqueueSnackbar("Insufficient balance", {
        variant: "error",
      });
      return;
    }

    if (
      !title ||
      !category ||
      isNaN(expenseAmount) ||
      expenseAmount <= 0 ||
      !date
    ) {
      enqueueSnackbar("Please fill all the fields", {
        variant: "error",
      });
      return;
    }
    if (type === "edit") {
      dispatch(
        editExpense({
          id: expense.id,
          title,
          amount: expenseAmount,
          category,
          date,
        })
      );
    } else {
      dispatch(
        addExpense({
          title,
          amount: expenseAmount,
          category,
          date,
        })
      );
    }
    handleClose();
  };

  return (
    <div className="add-expense">
      <h1 className="add-expense-heading">Add Expenses</h1>
      <div className="add-expense-input">
        <input
          type="text"
          placeholder="Title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          className="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="add-expense-input">
        <select
          type="text"
          className="input category-dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select Category</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
        </select>
        <input
          type="date"
          className="input"
          placeholder="dd/mm/yyyy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <button className="add-expense-btn-add" onClick={handleAddExpense}>
          Add Expense
        </button>
        <button className="add-expense-btn-cancel" onClick={handleClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddExpenses;
