import React, { useEffect } from "react";
import "./App.css";
import "./scss/main.scss";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage";
import LogIn from "./pages/Log-in/log-in.component";
import SignUp from "./pages/sign-up/sign-up.component";
import CategoryPage from "./pages/shop/category-page.component";
import CollectionsPage from "./pages/shop/collections-page.component";
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
import { fetchCollectionsStartAsync } from "./redux/shop/shop.actions";
import { loadUserCartAsync } from "./redux/cart/cart.actions";
import createHistory from "history/createBrowserHistory";
import ProductModal from "./components/product-modal/product-modal.component";
import { selectModalHidden } from "./redux/product-modal/product-modal.selector";

export const history = createHistory();

history.listen((location, action) => {
  window.scrollTo(0, 0);
});

interface AppProps {
  currentUser: any;
  collectionsArray: any[];
  productModalHidden: boolean;
  setCurrentUser: (user: any) => void;
  fetchCollectionsStartAsync: () => void;
  loadUserCartAsync: (user: any) => void;
  location: any;
}

class App extends React.Component<AppProps> {
  unsubscribefromAuth: any = null;

  componentDidMount() {
    const { setCurrentUser, fetchCollectionsStartAsync, loadUserCartAsync } = this.props;

    // Fetch collections from Firebase
    fetchCollectionsStartAsync();

    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot((snapShot) => {
          const userData = {
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          };
          setCurrentUser(userData);
          
          loadUserCartAsync(userData.currentUser);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribefromAuth) {
      this.unsubscribefromAuth();
    }
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
        {!this.props.productModalHidden ? (
          <Route
            path={["/category", "/collections"]}
            component={ProductModal}
          />
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
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route exact path="/collections" component={CollectionsPage} />
          <Route 
            exact 
            path="/category/:category" 
            render={({ match }) => {
              const category = match.params.category;
              const itemsToRenderMap = {
                chairs: 1,
                lights: 2,
                sofas: 3,
                stools: 4,
                ottomans: 5
              };
              const itemsToRender = itemsToRenderMap[category] || 1;
              return <CategoryPage category={category.charAt(0).toUpperCase() + category.slice(1)} itemsToRender={itemsToRender} />;
            }} 
          />
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
  productModalHidden: selectModalHidden,
});
const matchDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  loadUserCartAsync: (user: any) => dispatch(loadUserCartAsync(user)),
});

export default connect(
  matchStateToProps,
  matchDispatchToProps
)(withRouter(App));
