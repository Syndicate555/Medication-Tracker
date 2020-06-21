import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MedicineName } from "./MedicineName";
import { MedicationDone } from "./MedicationDone";

export const Medications = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Medications Taken Today</h4>
        <ul className="list">
          {transactions.map((transaction) => (
            <MedicationDone transaction={transaction} />
          ))}
        </ul>
      </div>
      <div>
        <h4>Medications Remaining</h4>
        <ul className="list">
          {transactions.map((transaction) => (
            <MedicineName transaction={transaction} />
          ))}
        </ul>
      </div>
    </div>
  );
};
