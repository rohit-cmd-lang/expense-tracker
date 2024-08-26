import React, { useEffect } from "react";
import "./AddBalance.css";
import { useDispatch } from "react-redux";
import { addBalance } from "../../features/walletSlice";
import { useSnackbar } from "notistack";
import { useRef } from "react";

const AddBalance = ({ handleClose }) => {
  const [balanceInput, setBalanceInput] = React.useState("");
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddBalance = () => {
    const amount = parseInt(balanceInput);
    if (isNaN(amount) || amount <= 0) {
      enqueueSnackbar("Please enter a valid amount", {
        variant: "error",
      });
      return;
    }
    dispatch(addBalance(amount));
    handleClose();
  };

  return (
    <div className="add-balance">
      <h1 className="add-balance-heading"></h1>
      <div className="add-balance-input-buttons">
        <input
          ref={inputRef}
          type="text"
          className="input"
          placeholder="Income Amount"
          value={balanceInput}
          onChange={(e) => setBalanceInput(e.target.value)}
        />
        <button className="add-balance-btn" onClick={handleAddBalance}>
          Add Balance
        </button>
        <button className="add-balance-btn-cancel" onClick={handleClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddBalance;
