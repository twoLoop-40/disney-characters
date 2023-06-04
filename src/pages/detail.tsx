import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import getCharacter, { CharacterDetail, Result } from "../apis/characters";
import DetailCard from "../components/detail-card";

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

function Detail() {
  const { id } = useParams();
  const { isLoading, data: characterDetail } = useQuery<
    Result<CharacterDetail>
  >([id], () => getCharacter<CharacterDetail>(id));

  return (
    <Container>
      {isLoading || !characterDetail?.result ? (
        <Loading> Loading ... </Loading>
      ) : (
        <DetailCard {...characterDetail.result} />
      )}
    </Container>
  );
}

export default Detail;
