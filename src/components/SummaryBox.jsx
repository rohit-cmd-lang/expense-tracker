import AddBalance from "./AddBalance/AddBalance";
import Modal from "react-modal";
import AddExpenses from "./AddExpense/AddExpenses";
import { useSelector } from "react-redux";

import "./Modal.css";
const SummaryBox = ({
  title,
  amount,
  btnText,
  type,
  handleOpen,
  handleClose,
  open,
}) => {
  const balance = useSelector((state) => state.wallet.balance);
  const expenses = useSelector((state) => state.wallet.expenses);
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const getBtnBackground = (type) => {
    if (type === "income") {
      return "linear-gradient(90deg, #B5DC52 0%, #89E148 100%)";
    } else if (type === "expense") {
      return "linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)";
    }
  };

  const getAmntColor = (type) => {
    if (type === "income") {
      return "#9DFF5B";
    } else if (type === "expense") {
      return "#F4BB4A";
    }
  };
  return (
    <div
      style={{
        height: "180px",
        width: "356px",
        background: "#9B9B9B",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <p style={{ fontWeight: "400", color: "white", fontSize: "30px" }}>
        {title}:{" "}
        <span
          style={{
            fontWeight: "700",
            color: getAmntColor(type),
            fontSize: "30px",
          }}
        >
          ₹{type === "income" ? balance : totalExpenses}
        </span>
      </p>

      <button
        style={{
          background: getBtnBackground(type),
          borderRadius: "1rem",
          border: "none",
          padding: "8px 30px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        + {btnText}
      </button>
      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        contentLabel="Card Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
        appElement={document.getElementById("root")}
      >
        {type === "income" ? (
          <AddBalance handleClose={handleClose} />
        ) : (
          <AddExpenses handleClose={handleClose} />
        )}
      </Modal>
    </div>
  );
};

export default SummaryBox;
