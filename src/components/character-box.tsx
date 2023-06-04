import styled from "styled-components";
import { CharacterOverAll } from "../apis/characters";
import Card from "./character-card";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  background-color: rgb(17, 24, 39, 1);
  margin-right: 2.5rem;
`;

const Item = styled.li`
  grid-column: span 1 / span 1;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
`;

function CharactersBox({
  characters
}: {
  characters: CharacterOverAll[] | undefined;
}) {
  return (
    <Container>
      {characters?.map((character) => (
        <Item key={character.id}>
          <Card
            id={character.id}
            name={character.name}
            imageUrl={character.imageUrl}
          />
        </Item>
      ))}
    </Container>
  );
}

export default CharactersBox;
