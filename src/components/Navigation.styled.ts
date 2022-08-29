import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavigation = styled.nav`
  height: 63px;
  border-radius: 31.5px;

  background-color: #161932;

  z-index: 1;

  ul {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;

    padding: 8px;

    height: 100%;
    width: 100%;

    font-weight: 700;
    font-size: 14px;

    line-height: 17px;
  }
`;

const StyledLink = styled(NavLink)`
  color: #d7e0ff;
  height: 48px;
  padding: 16px 26px;
  border-radius: 24px;

  &.active {
    color: #161932;
    background-color: #f87070;
  }

  &:not(.active) {
    opacity: 0.4;
  }
`;

const S = {
  StyledLink,
  StyledNavigation,
};

export default S;
