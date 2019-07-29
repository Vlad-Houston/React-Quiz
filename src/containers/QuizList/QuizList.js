import React, { Component } from "react";
import clasess from "./QuizList.module.css";

class QuizList extends Component {
  render() {
    return (
      <div className={clasess.QuizList}>
        <div>
          <h1 className={clasess.title}>Список тестов</h1>
        </div>
      </div>
    );
  }
}

export default QuizList;
