import React, { useState } from 'react';
import questions from "../data/quizData.json";
//import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import StartQuizButton from "../components/StartQuizButton";


function HomePage() {


  const projectDescription =
    "The DMV (Department of Motor Vehicles) practice test is a set of questions designed to help individuals prepare for the official driving test required to obtain a driver's license. The practice test covers topics such as road signs, traffic laws, and safe driving practices, and is intended to help test takers become more familiar with the format and content of the actual DMV driving test. By taking the DMV practice test, individuals can identify areas where they need to improve and gain confidence before taking the official driving test.";

	const [questionsPerQuiz, setQuestionsPerQuiz] = useState(10);
	const [inputValue, setInputValue] = useState(questionsPerQuiz);

	const handleInputChange = (event) => {
		setInputValue(parseInt(event.target.value, 10));
	  };
	
const handleSave = () => {
		setQuestionsPerQuiz(inputValue);
	  };


 

  const wantedQuestionPerQuiz = questionsPerQuiz;

  //This is the function that will get me the array of the start index.
  function getMultiplesOfwantedQuestionPerQuiz(limit) {
    const multiples = [];
    let i = 0;
    while (i < limit) {
      multiples.push(i);
      i += wantedQuestionPerQuiz;
    }
    return multiples;
  }

  //This is to calculate the start index for the quizzes.
  const startIndexForQuizzes = getMultiplesOfwantedQuestionPerQuiz(
    questions.length
  );

  //Generate the quizzes array dynamically based on the number of questions
  const quizzes = startIndexForQuizzes.map((startIndex, index) => ({
    id: index + 1,
    name: `Practice Test ${index + 1}`,
    description: `This quiz contains ${
      questions.slice(startIndex, startIndex + wantedQuestionPerQuiz).length
    } questions.`,
    startIndex: startIndex,
    numberOfQuestions: questions.slice(
      startIndex,
      startIndex + wantedQuestionPerQuiz
    ).length,
  }));

  return (
    <div>
      <div className="container my-5">
        <h1>Welcome to DMV Practice Test</h1>
        <p>{projectDescription}</p>
      </div>
	  <div className='container-md mb-5'>
    <div className="p-5 my-2 shadow rounded">
          <div>
          <div className='mb-2'>
          <label htmlFor="questions-per-quiz" className="form-label">Questions per Quiz</label>
          <input type="number" id="questions-per-quiz" className="form-control" value={inputValue} onChange={handleInputChange}/>
          </div>

          <Button variant="primary" onClick={handleSave}>Save</Button>
          </div>
    </div>
    </div>
      <div className="container">
        <h2>Available Tests</h2>
        <hr />

        <div className="row">
          {quizzes.map((quiz) => (
            <div className="col-md-4 mb-4" key={quiz.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{quiz.name}</h5>
                  <p className="card-text">{quiz.description}</p>
                  <StartQuizButton
                    startIndex={quiz.startIndex}
                    numberOfQuestions={quiz.numberOfQuestions}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
