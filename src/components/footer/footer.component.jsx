import React from "react";
import "./footer.styles.scss";
import logo from "../../assets/svg/logo-white.svg";
import facebook from "../../assets/svg/facebook.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Pinterest from "../../assets/svg/pinterest.svg";

import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer__col">
      <div className="footer__group">
        <img src={logo} alt="logo" className="footer__logo" />
        <div className="footer__socials">
          <Link to="/#" className="footer__socials--link">
            <img
              src={facebook}
              alt="facebook"
              className="footer__socials--img"
            />
          </Link>
          <Link to="/#" className="footer__socials--link">
            <img
              src={Instagram}
              alt="facebook"
              className="footer__socials--img"
            />
          </Link>
          <Link to="/#" className="footer__socials--link">
            <img
              src={Pinterest}
              alt="facebook"
              className="footer__socials--img"
            />
          </Link>
        </div>
      </div>
    </div>

    <div className="footer__col">
      <div className="footer__group align-right">
        <Link to="/category/everything" className="footer__group--title">shop</Link>
        <Link to="/category/chairs"className="footer__group--link">Chairs</Link>
        <Link to="/category/sofas"className="footer__group--link">Sofas</Link>
        <Link to="/category/stools"className="footer__group--link">stools</Link>
        <Link to="/category/lights"className="footer__group--link">lights</Link>
        <Link to="/category/ottomans"className="footer__group--link">Ottomans</Link>
      </div>
      <div className="footer__group align-right">
        <Link to="/"className="footer__group--title">Navigate</Link>
        <Link to="/" className="footer__group--link">Home</Link>
        <Link to="/collections" className="footer__group--link">Collection</Link>
        <Link to="/" className="footer__group--link">About</Link>
        <Link to="/login" className="footer__group--link">Login</Link>
      </div>
    </div>

    <div className="footer__col">
      <div className="footer__group align-right">
        <Link className="footer__group--title">Company</Link>
        <Link className="footer__group--link">Press</Link>
        <Link className="footer__group--link">Affiliates</Link>
      </div>
      <div className="footer__group align-right">
        <Link className="footer__group--title">Help</Link>
        <Link className="footer__group--link">FAQs</Link>
        <Link className="footer__group--link">Contact us</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
