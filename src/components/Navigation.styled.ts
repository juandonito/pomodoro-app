import styled from "styled-components";

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

    li {
      box-sizing: border-box;
      color: #d7e0ff;
      height: 48px;
      padding: 16px 26px;
      border-radius: 24px;

      &.active {
        background-color: #f87070;
        color: #161932;
      }

      &:not(.active) {
        opacity: 0.4;
      }
    }
  }
`;

export default StyledNavigation;
