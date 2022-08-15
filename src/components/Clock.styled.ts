import styled from "styled-components";

const StyledClock = styled.div`
  height: 410px;
  width: 410px;
  border-radius: 205px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;

  div {
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
  }
`;

export default StyledClock;
