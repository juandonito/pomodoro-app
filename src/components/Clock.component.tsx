import React, { FC, useEffect, useRef, useState } from "react";
import StyledClock from "./Clock.styled";

const Clock: FC = () => {
  const initialTimerValue = 1500;

  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isOver, setIsOver] = useState<boolean>(false);
  const [timerValue, setTimerValue] = useState<number>(initialTimerValue);
  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (timerValue === 0) {
      pauseTimer();
      setIsOver(true);
    }
  }, [timerValue, isOver]);

  useEffect(() => {
    if (isPaused) {
      return pauseTimer();
    }

    intervalRef.current = setInterval(() => {
      setTimerValue((prevTimerValue) => {
        return prevTimerValue - 1;
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
    setTimerValue(initialTimerValue);
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
    <StyledClock maxTimer={initialTimerValue} timerValue={timerValue}>
      <div onClick={handleClick}>
        <h1>
          {padTimerNumbers(Math.floor(timerValue / 60))}:
          {padTimerNumbers(timerValue % 60)}
        </h1>
        <h3>
          {isPaused && !isOver && "play"}
          {!isPaused && !isOver && "pause"}
          {isOver && "restart"}
        </h3>
        <svg height={366} width={366}>
          <circle r="165" cx="183" cy="183" />
        </svg>
      </div>
    </StyledClock>
  );
};

export default Clock;
