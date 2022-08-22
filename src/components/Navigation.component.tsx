import React, { FC } from "react";
import StyledNavigation from "./Navigation.styled";

const Navigation: FC = () => {
  return (
    <StyledNavigation>
      <ul>
        <li className="active">pomodoro</li>
        <li>short break</li>
        <li>long break</li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
