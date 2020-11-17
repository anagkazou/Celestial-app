import React from "react";
import "./header.styles.scss";
import { InitHamburgerAnimation } from "../../js/animations";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import {connect} from "react-redux"

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
<div className="header__item" onClick= {() => auth.signOut()}>
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

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
currentUser, 
hidden
})
export default connect(mapStateToProps)( Header);
