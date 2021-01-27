import React from "react";
import "./log-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import googleLogo from "../../assets/svg/google.svg";
import banner from "../../assets/img/login-banner.jpg";

import { Link } from "react-router-dom";
import { logo } from "../../assets/assets";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState({ email: "", password: "" });

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.state = {
        email: "",
        password: "",
      };
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    // console.log(this.state);
  };

  render() {
    return (
      <div className="logIn">
        <div className="left">
          <Link to="/#">
            {" "}
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
          <form className="group" onSubmit={this.handleSubmit}>
            <h2>Good to see you again!</h2>
            <FormInput
              type="email"
              placeholder="Email"
              value={this.state.email}
              handleChange={this.handleChange}
              name="email"
              required
            />
            <FormInput
              type="password"
              placeholder="Password"
              value={this.state.password}
              handleChange={this.handleChange}
              name="password"
              required
            />
            <CustomButton>Login</CustomButton>
            Or
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              <div className="container">
                <img src={googleLogo} alt="" />
                <span className="btn-txt">Continue with Google</span>
              </div>
            </CustomButton>
          </form>

          <p className="login__cta">
            Don't have an account? <Link to="/signup">Sign up now.</Link>
          </p>
        </div>

        <div
          className="right"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            width: "46vw",
            marginLeft: "auto",
          }}
        />
      </div>
    );
  }
}

export default LogIn;
