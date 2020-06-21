import React from "react";

export const Medicine = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.text} <span> Dosage: {transaction.amount} pills/day</span>
      <button class="delete-btn">x</button>
    </li>
  );
};
