import { Link } from "react-router-dom";
import "./Login.css";
import React from "react";
import SignUp from "../SignUp/SignUp";

function Login() {
  return (
    <div>
      <div className="background"></div>
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
        <RegisterBtn title="SIGN UP" />
      </div>
    </div>
  );
}

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput
      description="Username"
      placeholder="Enter your username"
      type="text"
    />
    <FormInput
      description="Password"
      placeholder="Enter your password"
      type="password"
    />
    <ForgetBtn title="Forget Password?" />
    <FormButton title="Log in" />
  </div>
);

const ForgetBtn = (props) => (
  <div className="frgBtn">
    <Link className="frglink" to="/signup">
      {props.title}
    </Link>
  </div>
);

const RegisterBtn = (props) => (
  <div className="regBtn">
    <label>Don't have account?</label>
    <br />
    <Link className="reglink" to="/signup">
      {props.title}
    </Link>
  </div>
);

const FormButton = (props) => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
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

const Facebook = (props) => <a href="#" id="facebookIcon"></a>;

const Twitter = (props) => <a href="#" id="twitterIcon"></a>;

const Google = (props) => <a href="#" id="googleIcon"></a>;

export default Login;
