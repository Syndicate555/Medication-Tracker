import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Medications } from "./components/Medications";
import { MedicationHistory } from "./components/MedicationHistory";
import { AddMedication } from "./components/AddMedication";
import Checklist from "./components/Checklist";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Medications />
        <MedicationHistory />
        <AddMedication />
      </div>
    </div>
  );
}

export default App;
