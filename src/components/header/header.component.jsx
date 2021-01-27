import React from "react";
import "./header.styles.scss";
import {
  InitHamburgerAnimation,
  menuAnimation,
  menuLinkAnimation,
} from "../../js/animations";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { setCurrentUser } from "../../redux/user/user.actions";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/cart-icon.component";
import CartPreview from "../cart-preview/cart-preview.component";
import { logo, menuImages } from "../../assets/assets";

import Modal from "../modal/added-to-cart.component";

class Header extends React.Component {
  componentDidMount() {
    InitHamburgerAnimation();
    menuAnimation();
    menuLinkAnimation();
  }

  render() {
    const { currentUser, hidden } = this.props;
    return (
      <div className="header">
        <Link to="/#" className="anim__hide">
          {" "}
          <img src={logo} alt="logo" className="header__logo " />
        </Link>
        <div className="header__right">
          <Link to="/#" className="header__item anim__hide ">
            Home
          </Link>
          <Link to="/collections" className="header__item anim__hide">
            Collection
          </Link>
          <Link to="/#" className="header__item anim__hide">
            About
          </Link>
          {}
          {currentUser ? (
            <div
              className="header__item anim__hide"
              onClick={() => {
                auth.signOut();
              }}
            >
              Logout
            </div>
          ) : (
            <Link to="/login" className="header__item anim__hide">
              Login{" "}
            </Link>
          )}
          <CartIcon />

          <Modal />

          <div className="hamburger" id="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        {hidden ? null : <CartPreview />}

        <nav className="menu-nav">
          <div className="menu-nav__left">
            <div className="menu-nav__left--imgs">
              <img
                src={menuImages.first}
                alt=""
                id="1"
                className="menu-nav__left--img"
              />
              <img
                src={menuImages.second}
                alt=""
                id="2"
                className="menu-nav__left--img"
              />
              <img
                src={menuImages.third}
                alt=""
                id="3"
                className="menu-nav__left--img"
              />
              <img
                src={menuImages.fourth}
                alt=""
                id="4"
                className="menu-nav__left--img"
              />
            </div>
          </div>

          <div className="menu-nav__right">
            <header className="menu-nav__head">
              <img src={logo} alt="logo" className="menu-logo" />
            </header>

            <div className="menu-nav__main">
              <Link to="/#" className="menu-link">
                <h2 id="1" className="menu-nav__link">
                  Home
                </h2>
              </Link>
              <Link to="/collections" className="menu-link">
                <h2
                  id="2"
                  className="menu-nav__link"
                  onClick={menuAnimation.toggleMenu}
                >
                  Collection
                </h2>
              </Link>
              <Link to="/#" className="menu-link">
                <h2 id="3" className="menu-nav__link">
                  About
                </h2>
              </Link>
              {currentUser ? (
                <Link className="menu-link">
                  <h2
                    id="4"
                    className="menu-nav__link"
                    onClick={() => {
                      auth.signOut();
                    }}
                  >
                    Logout
                  </h2>{" "}
                </Link>
              ) : (
                <Link to="/login" className="menu-link">
                  <h2 id="4" className="menu-nav__link">
                    Login
                  </h2>{" "}
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const matchDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, matchDispatchToProps)(Header);
