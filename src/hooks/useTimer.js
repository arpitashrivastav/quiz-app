import { useEffect, useRef, useState } from "react";
import { TIMER } from "../constants";

export default function useTimer(timerRunning, setPage) {
  const [timer, setTimer] = useState(TIMER);
  const id = useRef("");

  const clearTimer = () => {
    clearInterval(id.current);
  };
  useEffect(() => {
    if (timer <= 0) {
      clearInterval(id.current);
      setPage("result");
    }
  }, [timer]);
  useEffect(() => {
    if (timerRunning) {
      id.current = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    }
    return () => {
      clearInterval(id.current);
    };
  }, [timerRunning]);

  return { timer, clearTimer };
}
