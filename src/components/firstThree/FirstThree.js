import React from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const FirstThree = (props) => {
  return (
    <section className={props.myClassName}>
      <div className="container">
        {props.new && <div className="new-alert">{props.new}</div>}

        <div className={`title-wraper bold ${props.black}`}>{props.title}</div>

        {props.description && (
          <div className={`description-wrapper ${props.black}`}>
            {props.description}
          </div>
        )}

        {props.price && (
          <div className={`price-wrapper ${props.grey}`}>{props.price}</div>
        )}

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="#">Learn more</a>
            </li>
            <li>
              <a href="#">{props.orderOrBuy}</a>
            </li>
          </ul>
        </div>

        {props.ipodPrice && (
          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              {props.ipodPrice}
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              {props.magicKeyboard}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FirstThree;
