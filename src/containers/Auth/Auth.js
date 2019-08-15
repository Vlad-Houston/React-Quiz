import React, { Component } from "react";
import clasess from "./Auth.module.css";
import Button from "../../component/UI/Button/Button";
import Input from "../../component/UI/Input/Input";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls: {
        email: {
          value: "",
          type: "email",
          label: "Email",
          errorMessage: "Введите коректный email",
          valid: false,
          touched: false,
          validation: {
            required: true,
            email: true
          }
        },
        password: {
          value: "",
          type: "password",
          label: "Password",
          errorMessage: "Введите коректный password",
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLength: 6
          }
        }
      }
    };
  }
  loginHendler = () => {
    console.log("вы вошли");
  };

  registerHendler = () => {
    console.log("вы зарегистрировались");
  };

  submitHendler = event => {
    event.preventDefault();
  };

  onChangeHendler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value);
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHendler(event, controlName)}
        />
      );
    });
  }

  render() {
    return (
      <div className={clasess.Auth}>
        <div>
          <h1 className={clasess.title}>Авторизация</h1>
          <form onSubmit={this.submitHendler} className={clasess.AuthForm}>
            {this.renderInputs()}

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
