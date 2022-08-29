import React, { FC } from "react";
import { useRoutes } from "react-router-dom";

import StyledMain from "./Main.styled";
import Clock from "./Clock.component";
import Header from "./Header.component";
import Navigation from "./Navigation.component";

const Main: FC = () => {
  const routes = useRoutes([
    {
      path: "/shortbreak",
      element: <Clock time={5} />,
    },
    {
      path: "/longbreak",
      element: <Clock time={10} />,
    },
    {
      path: "/*",
      element: <Clock time={25} />,
    },
  ]);
  return (
    <StyledMain>
      <Header />
      <Navigation />
      {routes}
    </StyledMain>
  );
};

export default Main;
