import React from "react";
import { Link } from "react-router-dom";

function StartQuizButton({ startIndex, numberOfQuestions }) {
  const linkTo = `/quiz/${startIndex}/${numberOfQuestions}`;

  return (
    <Link to={linkTo}>
      <button className="btn btn-primary">Start Quiz</button>
    </Link>
  );
}

export default StartQuizButton;