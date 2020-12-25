import React from "react";
import "./header.styles.scss";
import { InitHamburgerAnimation, menuAnimation } from "../../js/animations";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import {connect} from "react-redux"

import {createStructuredSelector} from 'reselect'

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { setCurrentUser } from "../../redux/user/user.actions";

import { selectCartHidden  } from "../../redux/cart/cart.selectors";
import CartIcon from '../cart-icon/cart-icon.component';
import CartPreview from '../cart-preview/cart-preview.component';
import {logo, menu1} from '../../assets/img/images';

class Header extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  componentDidMount() {
    InitHamburgerAnimation();
    menuAnimation()
  }

  
  render() {
    const {currentUser, hidden } = this.props;
    return (
      <div className="header">
        <Link to="/#"> <img src={logo} alt="logo" className= "header__logo"/>
</Link>
        <div className="header__right">
          <Link to= "/#"  className="header__item ">Home</Link>
          <Link to= "/collections" className="header__item">Collection</Link>
          <Link to= "/#" className="header__item" >About</Link>
          {  
          //  console.log(this.props.currentUser)
}
{         currentUser ?
<div className="header__item" onClick= {() =>{ 
  auth.signOut()
  }}>
Logout
</div>:
 <Link to="/login" className="header__item">Login </Link>
}   
<CartIcon />   


  <div className="hamburger" id="hamburger" >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
{     hidden? null : <CartPreview /> 
}    

  <nav className="menu-nav">
      <div className="menu-nav__left">
         <div className="menu-nav__left--imgs">
        
        <img src={menu1} alt="" id="1" className="menu-nav__left--img"/>
      </div>
      </div>

      <div className="menu-nav__right">
        <header className="menu-nav__head">
        <img src={logo} alt="logo" className="menu-logo"/>
        </header>

        <div className="menu-nav__main">
          <Link to="/#" ><h2 className="menu-nav__link" >Home</h2></Link>
          <Link to="/collections" ><h2 className="menu-nav__link" >Collection</h2></Link>
          <Link to="/#" ><h2 className="menu-nav__link" >About</h2></Link>
            {     
                  currentUser ?
      <h2 className="menu-nav__link" onClick= {() =>{ 
        auth.signOut()
        }}>
      Logout
      </h2>:
      <Link to="/login" className="menu-nav__link"><h2 >Login</h2> </Link>
      }

        </div>
      </div>
  </nav>
  </div>

    );
  }
}

const mapStateToProps = createStructuredSelector ({
currentUser:selectCurrentUser, 
hidden: selectCartHidden
});

const matchDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser (user))
});
export default connect(mapStateToProps, matchDispatchToProps)( Header);
