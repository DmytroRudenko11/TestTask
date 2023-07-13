import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Wrapper>
      <Text>Welcome to TweeterCard</Text>
      <Text>This web application for managing friend&apos;s social media!</Text>
      <StyledLink to="/tweets">Try it out!</StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  color: #5736a3;
`;

const Text = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #5736a3;
`;

const bounce = keyframes`
  0% {
    transform: scale(1,1) translate(0px, 0px);
  }
  
  30%{
    transform: scale(1,0.8) translate(0px, 10px); 
  }

  75%{
    transform: scale(1,1.1) translate(0px, -25px); 
  }
  
 100% {
    transform: scale(1,1) translate(0px, 0px);
  }
`;

const StyledLink = styled(Link)`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 75px;

  color: #5736a3;
  background-color: #e3ca3f;

  border-radius: 8px;
  -webkit-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  -moz-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);

  &:hover {
    background-color: #fcd929;
  }

  animation-name: ${bounce};
  animation-duration: 0.75s;
  animation-iteration-count: infinite;
`;
