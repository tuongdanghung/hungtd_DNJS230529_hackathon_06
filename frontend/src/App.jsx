import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [category, setCategory] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [newQuestions, setNewQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/categories`).then((response) => {
      setCategory(response.data.data);
    });
    axios.get(`http://localhost:5000/api/v1/questions`).then((response) => {
      setQuestions(response.data.data);
    });
    axios.get(`http://localhost:5000/api/v1/answers`).then((response) => {
      setAnswers(response.data.data);
    });
  }, []);

  const handleClick = (id) => {
    setNewQuestions(
      questions.filter((question) => question.category_id === id)
    );
  };
  return (
    <>
      <h1>Điểm: {score}</h1>
      <div className="category">
        <h3>Vui lòng chọn chủ đề</h3>
        {category?.map((item, index) => {
          return (
            <button key={index} onClick={() => handleClick(item.id)}>
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="category">
        {newQuestions.map((question) => (
          <div key={question.id}>
            <p>{question.content}</p>
            <ul>
              {answers
                .filter((answer) => answer.question_id === question.id)
                .map((answer) => (
                  <li key={answer.id}>
                    <input
                      type="radio"
                      value={answer.id}
                      checked={selectedAnswers[question.id] === answer.id}
                      onChange={(e) => {
                        if (!selectedAnswers[question.id]) {
                          setSelectedAnswers({
                            ...selectedAnswers,
                            [question.id]: answer.id,
                          });
                          if (answer.is_answer === 1) {
                            setScore(score + 1);
                          }
                        }
                      }}
                    />
                    {answer.content}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
