import RankComponent from "../components/rank/RankComponent";
import RankText from "../components/rank/RankText";
import styled from "styled-components";

const Container = styled.div`
`;
export default function RankPage(){
  return(
    <Container>
      <RankText/>
      <RankComponent/>
    </Container>
  );
}