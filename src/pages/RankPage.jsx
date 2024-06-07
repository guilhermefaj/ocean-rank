import RankComponent from "../components/rank/RankComponent";
import RankText from "../components/rank/RankTexte";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #87CEEB 25%, #00BFFF 75%);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  padding: 2rem;
  text-decoration: none;

  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-decoration: none;
`;

export default function RankPage() {
  return (
    <Container>
      <ContentWrapper>
        <RankText />
        <RankComponent />
      </ContentWrapper>
    </Container>
  );
}
