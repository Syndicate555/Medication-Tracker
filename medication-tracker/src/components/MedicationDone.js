import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MedicationDone = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return <li className="minus">{transaction.text}</li>;
};
