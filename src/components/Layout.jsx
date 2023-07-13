import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";
export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 16px;
  width: 1220px;
`;
