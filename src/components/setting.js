import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function Settings() {
  const [questionsPerQuiz, setQuestionsPerQuiz] = useState(10);


  const handleQuestionsPerQuizChange = (e) => {
    setQuestionsPerQuiz(e.target.value);
  }

  const handleSave = () => {
    // Save the settings
  }

  return (
    <div className="container-md shadow p-5 mb-5 rounded">
      <Row className="mb-3">
        <Col>
          <label htmlFor="questions-per-quiz" className="form-label">Questions per Quiz</label>
          <input type="number" id="questions-per-quiz" className="form-control" value={questionsPerQuiz} onChange={handleQuestionsPerQuizChange} />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-start">
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Settings;
