import React, { FC } from "react";
import StyledMain from "./Main.styled";
import Clock from "./Clock.component";
import Header from "./Header.component";
import Navigation from "./Navigation.component";

const Main: FC = () => {
  return (
    <StyledMain>
      <Header />
      <Navigation />
      <Clock />
    </StyledMain>
  );
};

export default Main;
