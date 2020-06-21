import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Medications } from "./components/Medications";
import { MedicationHistory } from "./components/MedicationHistory";
import "./App.css";

function App() {
  constructor(props){
    super(props);
  }
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Medications />
        <MedicationHistory />
      </div>
    </div>
  );
}

export default App;
