import React from "react";
import NavBar from "../components/NavBar";
import { Container, Card } from "react-bootstrap";
import styled from "styled-components";
import ocean from "../../public/deep-ocean.png";

const SolutionPage = () => {
  return (
    <>
      <NavBar />
      <PageContainer>
        <Title>Ocean Rank</Title>
        <Subtitle>
          Reconhecendo e Incentivando Perfis do TikTok na Preservação dos
          Oceanos
        </Subtitle>
        <ParallaxImageContainer>
          <ParallaxImage src={ocean} alt="Deep Ocean" />
        </ParallaxImageContainer>
        <ContentSection>
          <CustomCard>
            <CardBody>
              <CardTitle>A Iniciativa</CardTitle>
              <CardSubtitle>O que é o Ocean Rank?</CardSubtitle>
              <CardContent>
                O "Ocean Rank" é uma plataforma dedicada a reconhecer e
                incentivar os perfis do TikTok que contribuem significativamente
                para a conscientização sobre a preservação dos oceanos. O
                objetivo é destacar e apoiar criadores de conteúdo que abordam
                questões críticas relacionadas ao meio ambiente marinho, como
                poluição, mudanças climáticas, conservação da vida marinha e
                sustentabilidade.
              </CardContent>
            </CardBody>
          </CustomCard>
          <CustomCard>
            <CardBody>
              <CardTitle>Critérios de Avaliação</CardTitle>
              <CardContent>
                Os perfis são avaliados com base em três critérios principais:
                <ul>
                  <li>Educação Ambiental</li>
                  <li>Engajamento da Comunidade</li>
                  <li>Criatividade e Inovação</li>
                </ul>
                Cada critério é cuidadosamente considerado para identificar os
                perfis que fazem a diferença na conscientização sobre a
                preservação dos oceanos.
              </CardContent>
            </CardBody>
          </CustomCard>
          <CustomCard>
            <CardBody>
              <CardTitle>Prêmios e Reconhecimento</CardTitle>
              <CardContent>
                Os perfis destacados como "Ocean Heroes" receberão prêmios e
                reconhecimento especial dentro da comunidade do TikTok e também
                terão a oportunidade de colaborar com organizações e iniciativas
                de conservação marinha.
              </CardContent>
            </CardBody>
          </CustomCard>
          <CustomCard>
            <CardBody>
              <CardTitle>Como Participar</CardTitle>
              <CardContent>
                Para participar da iniciativa "Ocean Rank", os criadores de
                conteúdo podem marcar suas postagens relacionadas à preservação
                dos oceanos com a hashtag #OceanRank. Nossa equipe avaliará
                regularmente as postagens marcadas e selecionará os perfis
                destacados com base nos critérios de avaliação estabelecidos.
              </CardContent>
            </CardBody>
          </CustomCard>
        </ContentSection>
      </PageContainer>
    </>
  );
};

export default SolutionPage;

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
  text-align: center;
`;

const ParallaxImageContainer = styled.div`
  background-image: url(${ocean});
  min-height: 300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2rem;
`;

const ParallaxImage = styled.img`
  display: none;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomCard = styled(Card)`
  width: 80%;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const CardBody = styled(Card.Body)`
  text-align: justify;
  color: #444;
`;

const CardTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardSubtitle = styled(Card.Subtitle)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #666;
  margin-bottom: 1rem;
`;

const CardContent = styled(Card.Text)`
  margin-bottom: 1rem;
`;
