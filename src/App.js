import React from "react";
import "./App.css";
import "./scss/main.scss";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
        }}
      >
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;
