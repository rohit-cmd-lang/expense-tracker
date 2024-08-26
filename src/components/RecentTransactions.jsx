import React from "react";
import SingleTransactions from "./SingleTransactions";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const RecentTransactions = ({
  handleClose,
  open,
  handleOpen,
  selectedExpense,
}) => {
  const expenses = useSelector((state) => state.wallet.expenses);
  const reversedExpenses = [...expenses].reverse();

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 3;

  const totalPages = Math.ceil(reversedExpenses.length / transactionsPerPage);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = reversedExpenses.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

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
          Recent Transactions
        </h1>
        <div
          style={{
            background: "#FFFFFF",
            width: "738px",
            height: "345px",
            borderRadius: "1rem",
            padding: "8px 4px 8px 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "#9B9B9B",
              fontSize: "48px",
              fontStyle: "italic",
            }}
          >
            No transactions yet
          </div>
        </div>
      </div>
    );
  }

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
        Recent Transactions
      </h1>
      <div
        style={{
          background: "#FFFFFF",
          width: "738px",
          height: "345px",
          borderRadius: "1rem",
          padding: "8px 4px 8px 16px",
          position: "relative",
        }}
      >
        {currentTransactions &&
          currentTransactions.length > 0 &&
          currentTransactions.map((expense) => (
            <SingleTransactions
              key={expense.id}
              expense={expense}
              handleClose={handleClose}
              open={
                open && selectedExpense && selectedExpense.id === expense.id
              }
              handleOpen={() => handleOpen(expense)}
            />
          ))}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
            position: "absolute",
            bottom: "1rem",
            gap: "0.25rem",
            left: "50%",
            translate: "-50%",
          }}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{
              width: "37px",
              height: "37px",
              textAlign: "center",
              borderRadius: "1rem",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            <GoArrowLeft />
          </button>
          <div
            style={{
              borderRadius: "5px",
              width: "37px",
              height: "37px",
              background: "#43967B",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "400",
              fontSize: "24px",
            }}
          >
            {currentPage}
          </div>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            style={{
              width: "37px",
              height: "37px",
              textAlign: "center",
              borderRadius: "1rem",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
