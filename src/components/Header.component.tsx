import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
