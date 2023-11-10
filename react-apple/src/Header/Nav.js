import React, { Component } from "react";
import Header2 from "./Header2"
import logo from "../commonResource/images/icons/logo.png"
import search from "../commonResource/images/icons/search-icon.png"
import cart from "../commonResource/images/icons/cart.png"
import { Link } from "react-router-dom";




class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top header-wrapper">
          <div className="container">
            <Link className="logo-link navbar-brand js-scroll-trigger" to="/">
              <img src={logo} alt="/" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="/navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav nav-fill w-100">
                <Header2 linkName="Mac" linkUrl="/mac" />
                <Header2 linkName="iphone" linkUrl="/iphone" />
                <Header2 linkName="ipad" linkUrl="/ipad" />
                <Header2 linkName="Watch" linkUrl="/applewatch" />
                <Header2 linkName="tv" linkUrl="/tv" />
                <Header2 linkName="Music" linkUrl="/Music" />
                <Header2 linkName="Support" linkUrl="/Support" />
                <Header2 linkName= "cart" linkUrl="/Cart" />
                <li>
                  <Link
                    className="search-link nav-link js-scroll-trigger"
                    to="/"
                  >
                    <img src={search} alt="/" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="cart-link nav-link js-scroll-trigger"
                    to="/cart/"
                  >
                    <img src={cart} alt="/" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Nav;
