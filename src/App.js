import React, { useEffect } from "react";
import "./App.css";
import "./scss/main.scss";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage";
import LogIn from "./pages/Log-in/log-in.component";
import SignUp from "./pages/sign-up/sign-up.component";
import Everything from "./pages/shop/everything.component";
import Chairs from "./pages/shop/chairs.component";
import Sofas from "./pages/shop/sofas.component";
import Stools from "./pages/shop/stools.components";
import Lights from "./pages/shop/lights.component";
import Ottomans from "./pages/shop/ottomans.component";
import Checkout from "./pages/checkout/checkout.component";
import Footer from "./components/footer/footer.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import createHistory from "history/createBrowserHistory";
import ProductModal from "./components/product-modal/product-modal.component";
import SHOP_DATA from "./pages/shop/shop.data";

export const history = createHistory();

history.listen((location, action) => {
  window.scrollTo(0, 0);
});

class App extends React.Component {
  unsubscribefromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
        addCollectionAndDocuments("collections", collectionsArray);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }

  render() {
    return (
      <div
        style={{
          position: "relative",
        }}
      >
        {this.props.location.pathname !== "/login" &&
        this.props.location.pathname !== "/signup" ? (
          <Header />
        ) : null}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LogIn />
            }
          />
          <Route
            path="/category/:id/:slug"
            component={(props) => <ProductModal></ProductModal>}
          />
          <Route
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route exact path="/collections" component={Everything} />
          <Route exact path="/category/chairs" component={Chairs} />
          <Route exact path="/category/lights" component={Lights} />
          <Route exact path="/category/sofas" component={Sofas} />
          <Route exact path="/category/stools" component={Stools} />
          <Route exact path="/category/ottomans" component={Ottomans} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        {this.props.location.pathname !== "/login" &&
        this.props.location.pathname !== "/signup" ? (
          <Footer />
        ) : null}{" "}
      </div>
    );
  }
}

const matchStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});
const matchDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(
  matchStateToProps,
  matchDispatchToProps
)(withRouter(App));
