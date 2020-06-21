import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Medications = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Medications Taken Today</h4>
        <p className="money plus">aspirin</p>
      </div>
      <div>
        <h4>Medications Remaining</h4>
        <p className="money minus">aspirin</p>
      </div>
    </div>
  );
};
