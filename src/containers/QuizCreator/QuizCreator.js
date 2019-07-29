import React, { Component } from "react";
import clasess from "./QuizCreator.module.css";

class QuizCreator extends Component {
  render() {
    return (
      <div className={clasess.QuizCreator}>
        <h1 className={clasess.title}>Quiz Creator</h1>
      </div>
    );
  }
}

export default QuizCreator;
