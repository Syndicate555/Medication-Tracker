import React, { useContext } from "react";

export const MedicationHistory = () => {
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
