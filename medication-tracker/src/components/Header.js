import React from "react";
import Logo from "../profile.png";

export const Header = () => {
  return (
    <h2 style={{ textAlign: "center" }}>
      {" "}
      <img
        style={{
          width: "200px",
          height: "60px",
          textAlign: "center",
          paddingTop: "20px",
          paddingRight: "20px",
        }}
        src={Logo}
      ></img>{" "}
      Medication Tracker
    </h2>
  );
};
