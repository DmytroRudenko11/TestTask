import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundPage = () => {
  return (
    <PageWrapper>
      <Text>Oop, seems that you get lost... </Text>
      <Text>
        Because this is <ErrorText>404 page</ErrorText>
      </Text>
      <StyledLink to="/">HomePage</StyledLink>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: #5736a3;
`;

const ErrorText = styled.span`
  font-weight: 700;
  color: #e3ca3f;
`;

const StyledLink = styled(Link)`
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

  &:hover {
    background-color: #fcd929;
  }
`;
