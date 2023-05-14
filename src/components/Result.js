import { QUESTIONS, TIMER } from "../constants";

export default function Results({ timer, score }) {
  return (
    <div>
      <h3>Results 🎉</h3>
      <div>
        You scored: {score} out of {QUESTIONS.length}
      </div>
      <div>In {TIMER - timer} seconds</div>
    </div>
  );
}
