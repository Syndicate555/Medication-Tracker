import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Medications = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Medications Taken Today</h4>
        <li className="money plus">aspirin</li>
      </div>
      <div>
        <h4>Medications Remaining</h4>
        <li className="money minus">Vitamins</li>
        <li className="money minus">Fish Oils</li>
        <li className="money minus">Panadol</li>
      </div>
    </div>
  );
};
