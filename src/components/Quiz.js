import { useState } from "react";
import { OPTIONS, QUESTIONS } from "../constants";
import { fancyTimeFormat } from "../utils";

function Quiz({ score, setScore, timer, goToResult, clearTimer }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);

  // console.log(id);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      goToResult("results");
      clearTimer();
    }
  };

  // const prevQuestion = () => {
  //   if (currentQuestion > 0) {
  //     setCurrentQuestion(currentQuestion - 1);
  //   } else {
  //   }
  // };

  const updateScore = () => {
    if (clickedOption === QUESTIONS[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="quiz">
      <div className="flex timer-container">
        <div className="question">
          {currentQuestion + 1} / {QUESTIONS.length}
        </div>
        <div className="timer">{fancyTimeFormat(timer)}</div>
      </div>
      <div>
        <div className="question-text">
          {QUESTIONS[currentQuestion].question}
        </div>
        <div className="flex-col option-container">
          {QUESTIONS[currentQuestion].options.map((option, i) => {
            return (
              <button
                className={`option-btn ${
                  clickedOption === i + 1 ? "option-bold" : ""
                }`}
                key={i}
                onClick={() => setClickedOption(i + 1)}
              >
                <div className="flexcc" style={{ gap: "40px" }}>
                  <span className="option">{OPTIONS[i]}</span>
                  <span className="option-text">{option}</span>
                </div>
                <div className="option-radio">
                  <div className=""></div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="center">
        <input
          type="button"
          value={QUESTIONS.length === currentQuestion + 1 ? "Finish" : "Next"}
          className="btn next-btn"
          onClick={changeQuestion}
        />
      </div>
    </div>
  );
}

export default Quiz;
