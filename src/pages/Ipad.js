import React from "react";
import Logo from "./Images/Apple-iPad.png";
import "./pages.css";
export default function Ipad() {
  return (
    <div className="textPages-wrapper ">
      <img className="textImage-wrapper" src={Logo} alt="" />
      <div className="outer-wrapper">Apple Ipad page</div>
    </div>
  );
}
