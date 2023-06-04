import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;
  color: rgba(249, 250, 251, 1);
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding-top: 1rem;
  padding-left: 2rem /** 32px */;
  padding-right: 2rem /** 32px */;
  background-color: rgba(55, 65, 81, 1);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: rgba(249, 250, 251, 1);
    color: rgba(24, 39, 17, 1);
  }
  transition: all 200ms ease-in-out;
`;

const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 9rem /** 144px */;
  width: 9rem /** 144px */;
  flex-shrink: 0;
  border-radius: 9999px;
`;

const Name = styled.h2`
  font-family: Allura, cursive;
  margin-top: 1.5rem /** 24px */;
  font-size: 1.875rem /** 30px */;
  line-height: 2.25rem /** 36px */;
  font-weight: 500;
`;
interface CardProps {
  id: string;
  name: string;
  imageUrl: string;
}
function Card({ id, name, imageUrl }: CardProps) {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`characters/${id}`)}>
      <Avatar src={imageUrl} alt={name} />
      <Name>{name}</Name>
    </Container>
  );
}

export default Card;
