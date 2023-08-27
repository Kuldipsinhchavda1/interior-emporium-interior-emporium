import React from "react";
import "../SignUp/SignUp.css";
import Login from "../Login/Login.js";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="background"></div>
      <div className="signUpForm">
        <FormHeader title="Sign Up"></FormHeader>
        <Form />
        <LoginBtn/>
        <OtherMethods />
      </div>
    </div>
  );
}

const FormHeader = (props) => <h2 className="titleHeader">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput
      discription="Name"
      type="text"
      placeholder="Enter your name"
    ></FormInput>
    <FormInput
      discription="Email"
      type="email"
      placeholder="Enter your email"
    ></FormInput>
    <FormInput
      discription="Category"
      type="text"
      placeholder="Enter your category"
    ></FormInput>
    <FormInput
      discription="Password"
      type="password"
      placeholder="Enter your password"
    ></FormInput>
    <FormButton title="Sign Up" />
  </div>
);

const FormButton = (props) => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div className="signupRow">
    <label>{props.discription}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const LoginBtn = props => (
    <div className="loginBtn">
        <label>Already have an account?  </label>
        <Link to='/'>LOG IN</Link>
    </div>
);

const Facebook = (props) => <a href="#" id="facebookIcon"></a>;

const Twitter = (props) => <a href="#" id="twitterIcon"></a>;

const Google = (props) => <a href="#" id="googleIcon"></a>;

export default SignUp;
