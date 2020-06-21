import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Medicine = ({ transaction }) => {
  const { deleteTransaction, addTransaction2 } = useContext(GlobalContext);
  return (
    <li className="minus">
      {transaction.text} <span> Dosage: {transaction.amount} pills/day</span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
          addTransaction2(transaction);
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
