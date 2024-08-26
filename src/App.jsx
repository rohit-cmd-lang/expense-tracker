import AddBalance from "./components/AddBalance/AddBalance";
import AddExpenses from "./components/AddExpense/AddExpenses";
import ExpenseChart from "./components/ExpenseChart";
import RecentTransactions from "./components/RecentTransactions";
import WalletSummary from "./components/WalletSummary";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const [modalType, setModalType] = useState(null);
  const handleOpen = (type) => setModalType(type);
  const handleClose = () => setModalType(null);

  return (
    <div style={{ padding: "10px 20px" }}>
      <header>
        <h1 style={{ color: "white", fontSize: "32px", fontWeight: "700" }}>
          Expense Tracker
        </h1>
      </header>
      <div>
        <WalletSummary
          handleClose={handleClose}
          open={modalType}
          handleOpen={handleOpen}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          paddingBottom: "20px",
          display: "flex",
          gap: "3rem",
          width: "100%",
        }}
      >
        <RecentTransactions
          handleClose={handleModalClose}
          open={open}
          handleOpen={handleModalOpen}
        />
        <ExpenseChart />
      </div>
    </div>
  );
}

export default App;
