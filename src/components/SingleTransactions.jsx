import React from "react";
import { GrEdit } from "react-icons/gr";
import { PiPizzaLight } from "react-icons/pi";
import { TiDeleteOutline } from "react-icons/ti";
import Modal from "react-modal";
import AddExpenses from "./AddExpense/AddExpenses";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../features/walletSlice";

const SingleTransactions = ({ handleClose, open, handleOpen, expense }) => {
  const { title, amount, date } = expense;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dispatch = useDispatch();

  const handleDeleteExpense = () => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      dispatch(deleteExpense(expense.id));
      handleClose();
    } else {
      return;
    }
  };

  return (
    <div
      style={{
        borderBottom: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 0 8px 8px",
        margin: "32px 8px 0 16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            borderRadius: "50%",
            background: "#D9D9D9",
            width: "38px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PiPizzaLight style={{ width: "20px", height: "20px" }} />{" "}
        </div>

        <div>
          <p>{title}</p>
          <p style={{ color: "#9B9B9B" }}>{formattedDate}</p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <p style={{ fontWeight: "700", color: "#F4BB4A", marginRight: "12px" }}>
          ₹{amount}
        </p>
        <button
          style={{
            width: "38px",
            height: "38px",
            background: "#FF3E3E",
            border: "none",
            color: "white",
            textAlign: "center",
            borderRadius: "42%",
            boxShadow: "0px 4px 4px 0px #00000040",
            cursor: "pointer",
          }}
          onClick={handleDeleteExpense}
        >
          <TiDeleteOutline style={{ width: "30px", height: "30px" }} />
        </button>
        <button
          style={{
            width: "38px",
            height: "38px",
            background: "#F4BB4A",
            border: "none",
            color: "white",
            textAlign: "center",
            borderRadius: "42%",
            boxShadow: "0px 4px 4px 0px #00000040",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <GrEdit style={{ width: "30px", height: "30px" }} />
        </button>
        <Modal
          isOpen={open}
          onRequestClose={handleClose}
          contentLabel="Card Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
          appElement={document.getElementById("root")}
        >
          <AddExpenses
            handleClose={handleClose}
            type="edit"
            expense={expense}
          />
        </Modal>
      </div>
    </div>
  );
};

export default SingleTransactions;
