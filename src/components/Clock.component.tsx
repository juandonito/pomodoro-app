import React, { FC, useEffect, useRef, useState } from "react";
import StyledClock from "./Clock.styled";

const Clock: FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isOver, setIsOver] = useState<boolean>(false);
  const [timerValues, setTimerValues] = useState<{
    minutes: number;
    seconds: number;
  }>({
    minutes: 25,
    seconds: 0,
  });
  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (timerValues.minutes === 0 && timerValues.seconds === 0) {
      pauseTimer();
      setIsOver(true);
    }
  }, [timerValues, isOver]);

  useEffect(() => {
    if (isPaused) {
      return pauseTimer();
    }

    intervalRef.current = setInterval(() => {
      setTimerValues((prevTimerValues) => {
        if (prevTimerValues.seconds === 0)
          return {
            seconds: 59,
            minutes: prevTimerValues.minutes - 1,
          };

        return {
          seconds: prevTimerValues.seconds - 1,
          minutes: prevTimerValues.minutes,
        };
      });
    }, 1000);

    return () => pauseTimer();
  }, [isPaused]);

  const pauseTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleClick = () => {
    if (isOver) {
      resetTimer();
    } else {
      togglePause();
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTimerValues({
      minutes: 25,
      seconds: 0,
    });
    setIsPaused(true);
    setIsOver(false);
  };

  const togglePause = () => {
    setIsPaused((isPaused) => !isPaused);
  };

  const padTimerNumbers = (n: number) => {
    return n.toString().padStart(2, "0");
  };

  return (
    <StyledClock>
      <div onClick={handleClick}>
        <h1>
          {padTimerNumbers(timerValues.minutes)}:
          {padTimerNumbers(timerValues.seconds)}
        </h1>
        <h3>
          {isPaused && !isOver && "play"}
          {!isPaused && !isOver && "pause"}
          {isOver && "restart"}
        </h3>
      </div>
    </StyledClock>
  );
};

export default Clock;
