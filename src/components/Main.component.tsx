import React, { FC } from "react";
import StyledMain from "./Main.styled";
import Clock from "./Clock.component";
import Header from "./Header.component";

const Main: FC = () => {
  return (
    <StyledMain>
      <Header />
      <Clock />
    </StyledMain>
  );
};

export default Main;
