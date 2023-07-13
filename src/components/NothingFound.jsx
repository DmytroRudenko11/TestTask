import styled from "styled-components";

export const NothingFound = () => {
  return (
    <Wrapper>
      <Text>Nothing found by your request,</Text>
      <Text>try another filter</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 150px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #5736a3;
`;
