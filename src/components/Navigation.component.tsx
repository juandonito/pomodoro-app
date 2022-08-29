import { FC } from "react";
import S from "./Navigation.styled";

const Navigation: FC = () => {
  return (
    <S.StyledNavigation>
      <ul>
        <li>
          <S.StyledLink to={""}>pomodoro</S.StyledLink>
        </li>
        <li>
          <S.StyledLink to={"shortbreak"}>short break</S.StyledLink>
        </li>
        <li>
          <S.StyledLink to={"longbreak"}>long break</S.StyledLink>
        </li>
      </ul>
    </S.StyledNavigation>
  );
};

export default Navigation;
