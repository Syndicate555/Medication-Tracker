import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h4 style={{ textAlign: "center" }}> Your Current Medications</h4>
      <div className="inc-exp-container">
        <li>Multi-Vitmamins</li>
        <li>Calcium</li>
        <li>Zimax</li>
      </div>
    </div>
  );
};
