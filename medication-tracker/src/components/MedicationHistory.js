import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MedicationHistory = () => {
  const context = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Panadol <span> Dosage: 2 pills/day</span>{" "}
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
