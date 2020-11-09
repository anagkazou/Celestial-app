import React from "react";
import "./App.css";
import "./scss/main.scss";
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage";
import LogIn from './pages/log-in/log-in.component';
import SignUp from './pages/sign-up/sign-up.component';
import Everything from './pages/shop/everything.component';
import Chairs from './pages/shop/chairs.component';
import Sofas from './pages/shop/sofas.component';
import Stools from './pages/shop/stools.components'
import Lights from './pages/shop/lights.component';
import Ottomans from './pages/shop/ottomans.component';

import {connect} from 'react-redux';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  

  unsubscribefromAuth = null;

componentDidMount(){
  const {setCurrentUser} = this.props;

 this.unsubscribefromAuth= auth.onAuthStateChanged(async (userAuth) => {

if (userAuth){
  const userRef = await createUserProfileDocument(userAuth);

  userRef.onSnapshot((snapShot) => {
    setCurrentUser({
      currentUser: {
        id: snapShot.id,
        ...snapShot.data(),
      }, 
    },() =>{
        console.log(this.state);
    });
  });

}else {
  setCurrentUser(userAuth );
}
  })
}

componentWillUnmount(){
  this.unsubscribefromAuth();
}

  render() {
    return (
      <div
        style={{
          position: "relative",
        }}
      >     
      { this.props.location.pathname!=='/login' &&
       this.props.location.pathname!== "/signup" ? <Header />:null  }
  <Switch>
          <Route exact path= "/"component= {Homepage} />
          <Route  path= "/login"  render= {() =>this.props.currentUser ? (<Redirect to= "/"/>) : <LogIn/>}  />
          <Route  path= "/signup" render= {() =>this.props.currentUser ? (<Redirect to= "/"/>) : <SignUp/>} />
          <Route exact path= "/collection/" component= {Everything} />
          <Route exact path= "/category/chairs" component= {Chairs} />
          <Route exact  path= "/category/lights" component= {Lights} />
          <Route exact  path= "/category/sofas" component= {Sofas} />
          <Route exact  path= "/category/stools" component= {Stools} />
          <Route exact  path= "/category/ottomans" component= {Ottomans} />
  </Switch>
      </div>
    );
  }
}

const matchStateToProps = ({user}) => ({
  currentUser:user.currentUser
})
const matchDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser (user))
})

export default connect(matchStateToProps, matchDispatchToProps)(withRouter( App));
