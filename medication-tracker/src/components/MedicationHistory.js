import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Medicine } from "./Medicine";

export const MedicationHistory = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>Checklist</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Medicine transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
