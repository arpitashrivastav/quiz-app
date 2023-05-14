import { QUESTIONS, TIMER } from "../constants";

export default function Start(props) {
  return (
    <div className="flex-col start">
      <h3>This Quiz includes</h3>
      <ul className="start-list">
        <li className="flex start-list-item">
          <div className="icon" />
          <div>
            <div> 50% passing percentage</div>
            <div>All the best see you on other side</div>
          </div>
        </li>
        <li className="flex start-list-item">
          <div className="icon" />
          <div>
            <div>{QUESTIONS.length} Questions</div>
            <div>We believe you will ace it</div>
          </div>
        </li>
        <li className="flex start-list-item">
          <div className="icon" />
          <div>
            <div>{TIMER} seconds</div>
            <div>Keep in mind that it's time bound</div>
          </div>
        </li>
      </ul>
      <p className="start-message">This quiz can only be attempted once</p>
      <div className="center">
        <button className="btn " onClick={props.start}>
          Start
        </button>
      </div>
    </div>
  );
}
