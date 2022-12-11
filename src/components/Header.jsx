import React from "react";
import { Link } from "react-router-dom";
import CartBtn from './CartBtn'
import logo from '../logo/logo.jpg'
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid py-2">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  {/* Home */}
                  <img src={logo} height="80px" alt="shopping-logo" />
                </Link>
              </li>
            </ul>
            <Link
              className="header-market navbar-brand mx-auto fw-bold "
              to="/"
            >
              {/* <span style="color-blue">Online</span>
              <span style="color- orange">Market</span> */}
              Online Market
            </Link>
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
