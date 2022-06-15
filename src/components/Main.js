import React from "react";
import banker_logo from "../images/home/banker.png";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import apple_TV_logo from "../images/icons/apple-tv-logo.png";
import watch_logo from "../images/icons/watch-series5-logo.png";
import arcade_logo from "../images/icons/arcade.png";
import FirstThree from "./firstThree/FirstThree";
import LastThree from "./lastThree/LastThree";

const Main = (props) => {
  return (
    <div>
      <section className="alert-section top-50">
        <div className="container">
          <div className="alert-title">We’re open for you.</div>
          <div class="alert-text">
            Our retail stores are closed, but you can buy our products here
            online and get fast, free delivery. If you need help finding the
            right product or have a question on your order, chat online with a
            Specialist or call 1-800-MY-APPLE.
            <br />
            For service and support, visit{" "}
            <a href="https://support.apple.com/">support.apple.com</a>.
          </div>
        </div>
      </section>

      <FirstThree
        myClassName="first-hightlight-wrapper"
        new="New"
        black="black"
        title="iPad Pro"
        orderOrBuy="Order"
        ipodPrice="iPad Pro available starting 3.25"
        magicKeyboard="Magic Keyboard coming in May"
      />

      <FirstThree
        myClassName="second-hightlight-wrapper"
        new="New"
        black="black"
        title="MacBook Air"
        description="Twice the speed. Twice the storage."
        grey="grey"
        price="From $999."
        orderOrBuy="Buy"
      />

      <FirstThree
        myClassName="third-hightlight-wrapper"
        title="iPhone 11 Pro"
        description="Pro cameras. Pro display. Pro performance."
        price="From $24.95/mo. or $599 with trade‑in."
        orderOrBuy="Buy"
      />

      <LastThree
        myClassName="fourth-heghlight-wrapper"
        title="iPhone 11"
        description="Just the right amount of everything."
        price="From $18.70/mo. or $499 with trade‑in."
        sup="1"
        linkOne="Learn more"
        linkTwo="Apply now"
        white="white"
        rightTitle="Get the latest CDC response to COVID-19."
        rightLinkOne="Watch the PSA"
      />

      <LastThree
        myClassName="fifth-heghlight-wrapper"
        logoPic={apple_TV_logo}
        logoAlt="apple-tv-logo"
        bankerLogo={banker_logo}
        bankerAlt="banker"
        watchMore="Watch now on the Apple TV App"
        watchLogo={watch_logo}
        watchAlt="watch logo"
        rightDescriptionOne="With the Always-On Retina display."
        rightDescriptionTwo="You’ve never seen a watch like this."
        rightLinkOne="Learn more"
        rightLinkTwo="Buy"
      />

      <LastThree
        myClassName="sixth-heghlight-wrapper"
        logoPic={arcade_logo}
        logoAlt="arcade logo"
        whiteDescription="white"
        description="Agent 8 is a small hero on a big mission."
        linkOne="Play now"
        sup2="2"
        linkTwo="Learn about Apple Arcade"
        rightTitle="Apple Card Monthly Installments"
        rightDescriptionOne="Pay for your next iPhone over time, interest-free with Apple
									Card."
        rightLinkOne="Learn more"
        rightLinkTwo="Apply now"
      />
    </div>
  );
};

export default Main;
