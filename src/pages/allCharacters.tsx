import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import getCharacter, { CharacterOverAll, Result } from "../apis/characters";
import usePage from "../apis/pagination";
import CharactersBox from "../components/character-box";
import Header from "../components/header";
import Pagination from "../components/pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(17, 24, 39 1);
  margin-bottom: 0px;
`;
const Loading = styled.h1`
  font-family: Allura, cursive;
  font-size: 3.75rem /** 60px */;
  line-height: 1;
  font-weight: 700;
  text-align: center;
  color: rgba(249, 250, 251, 1);
`;

function AllCharacters() {
  const { isLoading, data: characterResult } = useQuery<
    Result<CharacterOverAll[]>
  >(["allCharacters"], () => getCharacter<CharacterOverAll[]>());
  const { itemsForPage, page, lastPage, rangeForPage, setPage } = usePage(
    12,
    characterResult?.result
  );

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Pagination {...{ page, lastPage, rangeForPage, setPage }} />
          <CharactersBox characters={itemsForPage(page)} />
        </>
      )}
    </Container>
  );
}

export default AllCharacters;
