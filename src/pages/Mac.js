import React from "react";
import Logo from "./Images/macbook-air.jpeg";
import "./pages.css";
export default function Mac() {
  return (
    <div className="textPages-wrapper ">
      <img className="textImage-wrapper" src={Logo} alt="" />
      <div className="outer-wrapper">Apple MacBook page</div>
    </div>
  );
}
