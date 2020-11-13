import React from "react";
import "./header.styles.scss";
import { InitHamburgerAnimation } from "../../js/animations";
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import {connect} from "react-redux"

import CartIcon from '../cart-icon/cart-icon.component'
import CartPreview from '../cart-preview/cart-preview.component'
class Header extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    InitHamburgerAnimation();
  }
  
  render() {
    const currentUser = this.props.currentUser;
    return (
      <div className="header">
        <div className="header__right">
          <Link to= "/#"  className="header__link ">Home</Link>
          <Link to= "/collection/" className="header__link">Collection</Link>
          <Link to= "/#" className="header__link" >About</Link>
          {  
          //  console.log(this.props.currentUser)
}
{         currentUser ?
<div className="header__link" onClick= {() => auth.signOut()}>
Logout
</div>:
 <Link to="/login" className="header__link">Login </Link>
}   
<Link  to= "/#"  className="header__link "><CartIcon/></Link>    


  <div className="hamburger" id="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <CartPreview/> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser:state.user.currentUser
})
export default connect(mapStateToProps)( Header);
