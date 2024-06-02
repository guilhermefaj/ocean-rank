import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";

const RankPage = () => {
  // Estado para armazenar os valores dos fatores de avaliação
  const [education, setEducation] = useState(50);
  const [engagement, setEngagement] = useState(50);
  const [creativity, setCreativity] = useState(50);

  // Função para calcular a pontuação total com base nos fatores de avaliação
  const calculateScore = () => {
    const totalScore = education * 0.3 + engagement * 0.4 + creativity * 0.3;
    return totalScore.toFixed(2); // Arredondamento para 2 casas decimais
  };

  return (
    <>
      <NavBar />
      <PageContainer>
        <Title>TikTok Ocean Heroes</Title>
        <Subtitle>
          Descubra os perfis do TikTok que mais contribuem para a
          conscientização sobre a preservação dos oceanos!
        </Subtitle>
        <FactorSection>
          <FactorSlider>
            <FactorLabel>Educação Ambiental</FactorLabel>
            <input
              type="range"
              min="0"
              max="100"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
            <FactorValue>{education}</FactorValue>
          </FactorSlider>
          <FactorSlider>
            <FactorLabel>Engajamento da Comunidade</FactorLabel>
            <input
              type="range"
              min="0"
              max="100"
              value={engagement}
              onChange={(e) => setEngagement(e.target.value)}
            />
            <FactorValue>{engagement}</FactorValue>
          </FactorSlider>
          <FactorSlider>
            <FactorLabel>Criatividade e Inovação</FactorLabel>
            <input
              type="range"
              min="0"
              max="100"
              value={creativity}
              onChange={(e) => setCreativity(e.target.value)}
            />
            <FactorValue>{creativity}</FactorValue>
          </FactorSlider>
        </FactorSection>
        <ScoreButton
          onClick={() => alert(`Pontuação total: ${calculateScore()}`)}
        >
          Calcular Pontuação
        </ScoreButton>
      </PageContainer>
    </>
  );
};

export default RankPage;

const PageContainer = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(120deg, #5a9adf, #ca8ed6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.h5`
  margin-bottom: 2rem;
  text-align: justify;
`;

const FactorSection = styled(Row)`
  margin-top: 3rem;
`;

const FactorSlider = styled(Col)`
  margin-bottom: 1rem;
`;

const FactorLabel = styled.p`
  font-weight: bold;
`;

const FactorValue = styled.span`
  font-weight: bold;
  margin-left: 0.5rem;
`;

const ScoreButton = styled(Button)`
  margin-top: 2rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
