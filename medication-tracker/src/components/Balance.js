import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h4 style={{ textAlign: "center" }}> Your Current Medications</h4>
      <div className="inc-exp-container">
        <li>Tylenol</li>
        <li>Tylenol</li>
        <li>Tylenol</li>
      </div>
    </div>
  );
};
