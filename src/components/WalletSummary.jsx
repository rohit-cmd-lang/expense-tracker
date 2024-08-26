import ExpenseChart from "./SummaryPieChart";
import SummaryBox from "./SummaryBox";

const WalletSummary = ({ handleClose, open, handleOpen }) => {
  return (
    <div>
      <div
        style={{
          height: "270px",
          background: "#626262",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          padding: "0 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // gap: "50px"
            width: "760px",
          }}
        >
          <SummaryBox
            type="income"
            title="Wallet Balance"
            btnText="Add Income"
            handleClose={handleClose}
            open={open === "income"}
            handleOpen={() => handleOpen("income")}
          />
          <SummaryBox
            type="expense"
            title="Expenses"
            btnText="Add Expense"
            handleClose={handleClose}
            open={open === "expense"}
            handleOpen={() => handleOpen("expense")}
          />
        </div>
        <div>
          <ExpenseChart />
          <div
            style={{
              display: "flex",
              gap: "10px",
              color: "white",
              fontSize: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{ width: 25, height: 10, background: "#A000FF" }}
              ></div>
              <span>Food</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{ width: 25, height: 10, background: "#FF9304" }}
              ></div>
              <span>Entertainment</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div
                style={{ width: 25, height: 10, background: "#FDE006" }}
              ></div>
              <span>Travel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSummary;
