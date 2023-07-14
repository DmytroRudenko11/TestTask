import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderWrapper>
      <NavMenu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </NavMenu>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 60px;
  padding: 7px 0;

  border-radius: 20px;

  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;

  color: #5736a3;
  background-color: #e3ca3f;

  border-radius: 8px;
  -webkit-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  -moz-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);

  transition: all 250ms linear;

  &:hover {
    background-color: #fcd929;
    transform: scale(1.05);
  }
`;
