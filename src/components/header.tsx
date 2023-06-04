import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  background-color: rgba(17, 24, 39, 1);
  margin-bottom: 0px;
`;

const Heading = styled.h1`
  font-family: Allura, cursive;
  font-size: 3.75rem /** 60px */;
  line-height: 1;
  font-weight: 700;
  text-align: center;
  color: rgba(249, 250, 251, 1);
`;

function Header() {
  return (
    <Container>
      <Heading>Disney Characters</Heading>
    </Container>
  );
}

export default Header;
