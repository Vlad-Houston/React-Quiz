import React, { Component } from "react";
import clasess from "./Auth.module.css";
import Button from "../../component/UI/Button/Button";

class Auth extends Component {
  loginHendler = () => {
    console.log("вы вошли");
  };

  registerHendler = () => {
    console.log("вы зарегистрировались");
  };

  submitHendler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={clasess.Auth}>
        <div>
          <h1 className={clasess.title}>Авторизация</h1>
          <form onSubmit={this.submitHendler} className={clasess.AuthForm}>
            <input type="text" />
            <input type="text" />
            <Button type="success" onClick={this.loginHendler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registerHendler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
