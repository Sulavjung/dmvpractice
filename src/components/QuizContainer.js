
import React, { useState } from "react";
import quizzes from "../data/quizData.json";
import Quiz from "./Quiz";
import "../App.css";
import { useParams } from "react-router-dom";
//import writeFile from "../dataInteraction/datawrite";


function QuizContainer() {
  const { startIndex, numberOfQuestions } = useParams();
  const [currentQuizIndex, setCurrentQuizIndex] = useState(
    parseInt(startIndex)
  );
  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState([]);
  const [passTrial, setPassTrial] = useState([]);
  const [showFinish, setShowFinish] = useState(false);


  const totalQuestions = parseInt(numberOfQuestions);
  const handleSubmission = (selectedOptionIndex) => {
	console.log(quizResults);
    setQuizResults([...quizResults, selectedOptionIndex]);
	console.log(quizResults);
    setShowResults(true);
  };

  //This data is being used to create the data visualization. 
  const handlePassTrial = (id, isCorrect) => {
	const result = {
		id: id,
		isCorrect: isCorrect,
	}
	setPassTrial(prevState => [...prevState, result]);
  }

  const handleNext = () => {
    setShowResults(false);
    setCurrentQuizIndex(currentQuizIndex + 1);
  };

  const handleFinish = () => {
    setShowFinish(true);
	
  };

  const handleShowResults = (shouldShow) => {
    setShowResults(shouldShow);
  };

  const countCorrectAnswers = (quizResults, quizzes) => {
	let correctAnswers = 0;
	var quiz = quizzes.slice(parseInt(startIndex), lastIndex);
	quiz.forEach((quiz, index) => {
		if(quiz.answer === quizResults[index]){
			correctAnswers++;
		}
	});
	return correctAnswers;
  } 

  const lastIndex = parseInt(startIndex) + totalQuestions;

  //This function will get the current question number.
  function getCurrentQuestionNumber(currentIndex, startingIndex) {
    return currentIndex - startingIndex + 1;
  }

  const renderQuiz = () => {
    if (currentQuizIndex > lastIndex - 1 || showFinish) {
      return renderResults();
    }

    const currentQuiz = quizzes[currentQuizIndex];
    if (!currentQuiz) {
      return <div>No quiz found</div>;
    }

    const { id, question, options, answer } = currentQuiz;

    return (
      <>
        <div className="text-end px-2 text-primary">
          {getCurrentQuestionNumber(currentQuizIndex, parseInt(startIndex)) +
            " / " +
            totalQuestions +
            " Questions"}
        </div>
        <Quiz
		  id = {id}
          question={question}
          options={options}
          answer={answer}
          handleSubmission={handleSubmission}
          showResults={showResults}
          handleShowResults={handleShowResults}
		  handlePassTrial = {handlePassTrial}
        />
      </>
    );
  };


  const renderResults = () => {
	const correctAnswers = countCorrectAnswers(quizResults, quizzes);

  
	return (
	  <div className="p-2 p-sm-5 rounded shadow text-center mb-5">
		<h2>Quiz Results</h2>
		<p className="bg-warning rounded-lg p-2" >
		  You got <h3 className="text-light"><strong>{correctAnswers}</strong></h3> out of {totalQuestions} questions correct! 🎉🎉
		</p>
		<div className="mt-4">
		  {quizzes.slice(parseInt(startIndex), lastIndex).map((quiz, index) => {
			const { question, options, answer } = quiz;
			const selectedAnswer = quizResults[index];
			const isCorrect = selectedAnswer === answer;
			
  
			return (
			  <div key={index} className="my-4 p-3 border rounded">
				<p>
				  {index + 1}. {question}
				</p>
				{options.map((option, optionIndex) => {
				  const isSelected = selectedAnswer === option;
				  console.log("option:", option);
				  console.log("isSelected:", isSelected);
				  return (
					<div
					  key={optionIndex}
					  className={`p-2 my-2 border rounded cursor-pointer ${
						isSelected && isCorrect
						  ? "text-light bg-success-personal"
						  : isSelected && !isCorrect
						  ? "text-light bg-danger-personal"
						  : ""
					  }`}
					>
					  <span>{option}</span>
					</div>
				  );
				})}
				{selectedAnswer && (
				  <h4 className={`mt-4 ${isCorrect ? "text-success" : "text-danger"}`}>
					{isCorrect ? "🎉 Correct Answer 🍾" : `Correct Answer is: ${answer}`}
				  </h4>
				)}
			  </div>
			);
		  })}
		</div>
	  </div>
	);
  };
  
  
  
  
  
  
  

  return (
    <div className="container-md mb-5">
      {renderQuiz()}
      {showResults && currentQuizIndex !== lastIndex - 1 && (
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      {showResults &&
        currentQuizIndex === lastIndex - 1 &&
        showFinish === false && (
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-success" onClick={handleFinish}>
              Finish
            </button>
          </div>
        )}
    </div>
  );
}

export default QuizContainer;
