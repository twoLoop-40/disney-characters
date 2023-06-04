import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CharacterDetail } from "../apis/characters";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: rgba(31, 41, 55, 1);
  border-radius: 0.5rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 12rem;
  width: 12rem;
  flex-shrink: 0;
  border-radius: 9999px;
`;

const Name = styled.h2`
  font-family: Allura, cursive;
  margin-top: 1.5rem;
  font-size: 2.25rem;
  line-height: 2.25rem;
  font-weight: 500;
`;

const Film = styled.span`
  font-family: Allura, cursive;
  margin-top: 1.5rem /** 24px */;
  font-size: 1.875rem /** 36px */;
  line-height: 2.25rem /** 40px */;
  font-weight: 500;
  background-color: rgba(243, 244, 246, 1);
  border-radius: 0.5rem;
  padding-left: 0.5rem /** 8px */;
  padding-right: 0.5rem /** 8px */;
`;

const FilmContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(31, 41, 55, 1);
  margin-bottom: 0px;
`;

const ArrowLongLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: rgba(243, 244, 246, 1);
  margin-bottom: 1rem;
  cursor: pointer;
`;

function DetailCard({ films, name, imageUrl, id, sourceUrl }: CharacterDetail) {
  const navigate = useNavigate();
  return (
    <Container>
      <ArrowLongLeft onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </ArrowLongLeft>
      <Avatar src={imageUrl} alt={name} />
      <Name>{`${name}'s Films`}</Name>
      <FilmContainer>
        {films.map((film) => (
          <Film>{film}</Film>
        ))}
      </FilmContainer>
    </Container>
  );
}

export default DetailCard;
