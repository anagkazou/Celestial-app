import React from "react";
import "./App.css";
import "./scss/main.scss";
import {Switch, Route, withRouter} from 'react-router-dom';
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

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser:null
    }
  }

  unsubscribefromAuth = null;

componentDidMount(){
 this.unsubscribefromAuth= auth.onAuthStateChanged(async (userAuth) => {

if (userAuth){
  const userRef = await createUserProfileDocument(userAuth);

  userRef.onSnapshot((snapShot) => {
    this.setState({
      currentUser: {
        id: snapShot.id,
        ...snapShot.data(),
      }, 
    },() =>{
        console.log(this.state);
    });
  });

}else {
  this.setState({ currentUser: userAuth });
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
       this.props.location.pathname!== "/signup" ? <Header currentUser= { this.state.currentUser}/>:null  }
<Switch>
        <Route exact path= "/"component= {Homepage} />
        <Route  path= "/login" component= {LogIn} />
        <Route  path= "/signup" component= {SignUp} />
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

export default withRouter( App);
