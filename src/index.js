import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import {store, persistor} from './redux/store';

import {PersistGate} from 'redux-persist/integration/react';

import {Scrollbars} from 'react-custom-scrollbars';

ReactDOM.render(
  <>
  
    <Provider store = {store}>
    <BrowserRouter>
      <PersistGate persistor ={persistor}>  
      <Scrollbars style={{ width: "100vw", height: "100vh" }}>
        <App />
        </Scrollbars>  
    </PersistGate>
    </BrowserRouter>
    </Provider>
    </>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
