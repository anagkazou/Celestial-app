import React from "react";
import "./header.styles.scss";
import { InitHamburgerAnimation } from "../../js/animations";
import { Link } from "react-router-dom";

class Header extends React.Component {
  componentDidMount() {
    InitHamburgerAnimation();
  }
  render() {
    return (
      <div className="header">
        <div className="header__right">
          <Link className="header__link ">Home</Link>
          <Link className="header__link">Shop</Link>
          <Link className="header__link">About</Link>
          <div className="hamburger" id="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
