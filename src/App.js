import React from "react";
import "./App.css";
import "./scss/main.scss";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage";
import LogIn from './pages/Log-in/log-in.component'

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
        }}
      >        <Header />
<Switch>
        <Route exact path= "/"component= {Homepage} />
        <Route  path= "/LogIn" component= {LogIn} />
      </Switch>
      </div>
    );
  }
}

export default App;
