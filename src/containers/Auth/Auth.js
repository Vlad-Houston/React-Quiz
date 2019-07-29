import React, { Component } from "react";
import clasess from "./Auth.module.css";

class Auth extends Component {
  render() {
    return (
      <div className={clasess.Auth}>
        <h1 className={clasess.title}>Auth</h1>
      </div>
    );
  }
}

export default Auth;
