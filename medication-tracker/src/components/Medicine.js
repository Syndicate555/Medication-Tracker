import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Medicine = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className="minus">
      {transaction.text} <span> Dosage: {transaction.amount} pills/day</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        class="delete-btn"
      >
        x
      </button>
    </li>
  );
};
