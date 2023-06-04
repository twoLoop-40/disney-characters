import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 24, 39, 1);
  margin-bottom: 0px;
  min-height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
