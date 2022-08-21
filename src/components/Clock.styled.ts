import styled from "styled-components";

interface StyledClockProps {
  maxTimer: number;
  timerValue: number;
}

const StyledClock = styled.div<StyledClockProps>`
  height: 410px;
  width: 410px;
  border-radius: 205px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;

  div {
    position: relative;

    height: 366px;
    width: 366px;
    border-radius: 205px;

    background-color: #161932;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    h1 {
      text-align: center;
      width: 100%;
    }

    svg {
      position: absolute;
      stroke-dasharray: ${({ maxTimer, timerValue }) =>
        ` ${(timerValue * 1036) / maxTimer} ${
          1036 - (timerValue * 1036) / maxTimer
        }`};
      stroke-dashoffset: 1036;
      stroke-linecap: round;
      stroke: #f87070;
      stroke-width: 11;
      fill: transparent;

      transform: rotate(-90deg);
      transform-origin: 50% 50%;

      transition: stroke-dasharray 1s;
    }
  }
`;

export default StyledClock;
