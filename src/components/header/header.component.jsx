import React from "react";
import "./header.styles.scss";
import { InitHamburgerAnimation } from "../../js/animations";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import {connect} from "react-redux"

import {createStructuredSelector} from 'reselect'

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { setCurrentUser } from "../../redux/user/user.actions";

import { selectCartHidden  } from "../../redux/cart/cart.selectors";
import CartIcon from '../cart-icon/cart-icon.component'
import CartPreview from '../cart-preview/cart-preview.component'
class Header extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  componentDidMount() {
    InitHamburgerAnimation();
  }
  
  render() {
    const {currentUser, hidden } = this.props;
    return (
      <div className="header">
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


  <div className="hamburger" id="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
{     hidden? null : <CartPreview /> 
}      </div>
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
