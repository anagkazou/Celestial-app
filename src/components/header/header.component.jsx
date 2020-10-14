import React from "react";
import "./header.styles.scss";
import { InitHamburgerAnimation } from "../../js/animations";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'


class Header extends React.Component {
  constructor({currentUser}){
    super({currentUser})

    
  }
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
          {    console.log(this.props.currentUser)
}
{         this.props.currentUser ?
<div className="header__link" onClick= {() => auth.signOut()}>
Logout
</div>:
 <Link to="/login" className="header__link">Login </Link>
}          <div className="hamburger" id="hamburger">
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
