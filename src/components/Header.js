import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import apple_logo from "../images/icons/logo-sm.png";
import cart_icon from "../images/icons/cart-sm.png";
import search_icon from "../images/icons/search-icon-sm.png";
import $ from "jquery";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // Search bar
  $(".search-link").click(function (event) {
    event.preventDefault();
    $(".navbar-collapse.collapse").removeClass("show");
    $(".searchbox").slideToggle();
  });
  return (
    <div className="nav-wrapper fixed-top">
      <Navbar bg="dark" expand="sm" variant="dark" collapseOnSelect>
        <div className="outer-wrapper">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link className="image-wrapper" to="/">
                    <img src={apple_logo} alt="apple" />
                  </Link>
                </Nav.Link>
                <Nav.Link href="/Mac" className="text-wrapper">
                  Mac
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Iphone" className="text-wrapper">
                    iphone
                  </Link>
                </Nav.Link>

                <Nav.Link className="text-wrapper" href="/Ipad">
                  ipad
                </Nav.Link>

                <Nav.Link className="text-wrapper" href="/watch">
                  watch
                </Nav.Link>
                <Nav.Link className="text-wrapper" href="/Tv">
                  tv
                </Nav.Link>
                <Nav.Link className="text-wrapper" href="/Music">
                  Music
                </Nav.Link>
                <Nav.Link className="text-wrapper" href="/Support">
                  Support
                </Nav.Link>
                <Nav.Link className="text-wrapper" href="/search/">
                  <img src={search_icon} alt="search" />
                </Nav.Link>
                <Nav.Link className="text-wrapper" href="/cart/">
                  <img src={cart_icon} alt="cart" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
