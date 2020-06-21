import React, { createContext, useReducer } from "react";
import AppReducer2 from "./AppReducer2";

// Initial state
const initialState = {
  transactions1: [{ id: 1, text: "Multi-vitamin", amount: 1 }],
};

// Create context
export const GlobalContext1 = createContext(initialState);

// Provider component
export const GlobalProvider1 = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer2, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction1) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction1,
    });
  }

  return (
    <GlobalContext1.Provider1
      value={{
        transactions1: state.transactions1,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext1.Provider1>
  );
};
