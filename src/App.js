import "./styles.css";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { useState } from "react";
import useTimer from "./hooks/useTimer";
export default function App() {
  const [page, setPage] = useState("start");
  const [score, setScore] = useState(0);
  const { timer, clearTimer } = useTimer(page === "quiz", setPage);

  return (
    <div className="App">
      {page === "start" && <Start start={() => setPage("quiz")} />}
      {page === "quiz" && (
        <Quiz
          score={score}
          setScore={setScore}
          timer={timer}
          goToResult={() => setPage("result")}
          clearTimer={clearTimer}
        />
      )}
      {page === "result" && <Result score={score} timer={timer} />}
    </div>
  );
}
