import React, { FC } from "react";
import StyledMain from "./Main.styled";
import Clock from "./Clock.component";

const Main: FC = () => {
  return (
    <StyledMain>
      <Clock />
    </StyledMain>
  );
};

export default Main;
