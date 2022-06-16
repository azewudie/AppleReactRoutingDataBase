import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Images/test.png";
import classes from "./FourOfFour.module.css";

const FourOfFour = () => {
  return (
    <div className={classes["imgFor-wrapper"]}>
      <div className={classes["imageFor-wrapper"]}>
        <img src={Logo} />
      </div>
      <div className="links-wrapper">
        <ul>
          <li>
            <Link className={classes["linkFor-wrapper"]} to="/">
              Go To Home Page
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FourOfFour;
