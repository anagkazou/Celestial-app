import React from "react";
import "./sign-up.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import googleLogo from "../../assets/svg/google.svg";
import banner from "../../assets/img/login-banner.jpg";

import { logo } from "../../assets/assets";

import { Link } from "react-router-dom";

import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      //console.log(confirmPassword, password);
      //   alert("Passwords dont match");
      return;
      //We return because we dont want the function to do anything else if passwords dont match
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        // name,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    //console.log(this.state);
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signup">
        <div className="left">
          <Link to="/#">
            {" "}
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
          <form className="group" onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
            <FormInput
              type="text"
              placeholder="Full Name"
              name="displayName"
              value={displayName}
              handleChange={this.handleChange}
            />
            <FormInput
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              handleChange={this.handleChange}
            />
            <FormInput
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              handleChange={this.handleChange}
            />
            <FormInput
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              name="confirmPassword"
              handleChange={this.handleChange}
            />
            <CustomButton type="submit">Signup</CustomButton>
            Or
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              <div className="container">
                <img src={googleLogo} alt="" />
                <span className="btn-txt">Continue with Google</span>
              </div>
            </CustomButton>
          </form>
          <p className="signup__cta">
            Already have an account? <Link to="/login">Login.</Link>
          </p>
        </div>

        <div
          className="right"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            width: "46vw",
          }}
        />
      </div>
    );
  }
}

export default SignUp;
