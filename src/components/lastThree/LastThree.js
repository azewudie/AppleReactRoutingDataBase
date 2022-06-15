import React from "react";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const LastThree = (props) => {
  return (
    <section className={props.myClassName}>
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              {props.logoPic && (
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={props.logoPic} alt={props.logoAlt} />
                  </div>
                </div>
              )}
              {props.bankerLogo && (
                <div className="tvshow-logo-wraper">
                  <img src={props.bankerLogo} alt={props.bankerAlt} />
                </div>
              )}
              {props.watchMore && (
                <div className="watch-more-wrapper">
                  <a href="#">{props.watchMore}</a>
                </div>
              )}
              {props.title && <div className="title-wraper">{props.title}</div>}
              {props.description && (
                <div className={`description-wraper ${props.whiteDescription}`}>
                  {props.description}
                </div>
              )}
              {props.price && (
                <div className="price-wrapper">
                  {props.price}
                  <sup>{props.sup}</sup>
                </div>
              )}
              {props.linkOne && (
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">
                        {props.linkOne}
                        <sup>{props.sup2}</sup>
                      </a>
                    </li>
                    <li>
                      <a href="">{props.linkTwo}</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              {props.watchLogo && (
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={props.watchLogo} alt={props.watchAlt} />
                  </div>
                </div>
              )}
              <div className={`title-wraper ${props.white}`}>
                {props.rightTitle}
              </div>

              <div className="description-wraper">
                {props.rightDescriptionOne}
                {props.rightDescriptionTwo && <br />}
                {props.rightDescriptionTwo}
              </div>

              <div className={`links-wrapper ${props.white}`}>
                <ul>
                  <li>
                    <a href="">{props.rightLinkOne}</a>
                  </li>
                  {props.rightLinkTwo && (
                    <li>
                      <a href="">{props.rightLinkTwo}</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastThree;
