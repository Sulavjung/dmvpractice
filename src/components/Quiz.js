import React, { useState } from "react";

function Quiz({
  id,
  question,
  options,
  answer,
  handleSubmission,
  showResults,
  handleShowResults,
  handlePassTrial,
  userAnswer,
}) {
  const [selectedOption, setSelectedOption] = useState(userAnswer || "");
  const [submitted, setSubmitted] = useState(false);
  const [canSubmitButton, setcanSubmitButton] = useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmission(selectedOption);
    setSubmitted(true);
	setcanSubmitButton(false);
	handlePassTrial(id, selectedOption===answer);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setSubmitted(false);
	setcanSubmitButton(true);
	handleShowResults(false)
  };

  const renderOptions = () => {
    return options.map((option, index) => (
      <label className="form-check d-flex p-2 m-2" key={index}>
        <input
          className="form-check-input "
          type="radio"
          name="options"
          value={option}
          checked={selectedOption === option}
          onChange={handleChange}
          style={{ minWidth: '1rem' }}
        />
        <h4 className="px-3">{option}</h4>
      </label>
    ));
  };

  const renderQuiz = () => {
    return (
      <form className="p-5 rounded shadow" onSubmit={handleSubmit}>
        <h2 className="text-center pb-4">{question}</h2>
        {renderOptions()}
        <div className="d-flex justify-content-end">
		<button
            className="btn btn-primary"
            type="submit"
            disabled={!canSubmitButton}
          >
            Submit
          </button>
        </div>
      </form>
    );
  };

  const renderResults = () => {
    const result = selectedOption === answer ? "✅ Correct" : "❌ Incorrect";
    return (
      <div className="p-5 my-3 rounded shadow">
        <h2>{result}</h2>
        <p>The correct answer is: {answer}</p>
      </div>
    );
  };

  return (
    <div>
      {renderQuiz()}
      {submitted && showResults && renderResults()}
    </div>
  );
}

export default Quiz;