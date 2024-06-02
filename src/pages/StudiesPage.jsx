import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";

const StudiesPage = () => {
  const [cards, setCards] = useState([
    {
      flipped: false,
      value: 25,
      label: "Estudos Publicados",
      description: "Conteúdo do estudo",
    },
    {
      flipped: false,
      value: "$1.5M",
      label: "Financiamento Total",
      description: "Conteúdo do estudo",
    },
    {
      flipped: false,
      value: "200+",
      label: "Colaboradores",
      description: "Conteúdo do estudo",
    },
  ]);

  const handleFlip = (index) => {
    const newCards = [...cards];
    newCards[index].flipped = !newCards[index].flipped;
    setCards(newCards);
  };

  return (
    <>
      <PageContainer>
        <Title>Estudos sobre Conscientização Oceânica</Title>
        <Subtitle>
          Explore os estudos mais recentes que ajudam a entender e promover a
          conscientização sobre a preservação dos oceanos.
        </Subtitle>
        <StatsSection>
          <Row>
            {cards.map((card, index) => (
              <Col key={index}>
                <StatCard
                  onClick={() => handleFlip(index)}
                  className={card.flipped ? "flipped" : ""}
                >
                  <FrontSide className="front-side">
                    <StatValue>{card.value}</StatValue>
                    <StatLabel>{card.label}</StatLabel>
                  </FrontSide>
                  <BackSide className="back-side">
                    <BackTitle>Conteúdo do estudo</BackTitle>
                    <BackDescription>{card.description}</BackDescription>
                  </BackSide>
                </StatCard>
              </Col>
            ))}
          </Row>
        </StatsSection>
        <StudyGrid>
          <StudyCard>
            <StudyImage src="https://via.placeholder.com/400x250?text=Study+1" />
            <CardBody>
              <StudyTitle>
                Impacto da Conscientização no Ecossistema Marinho
              </StudyTitle>
              <StudyDescription>
                Um estudo abrangente sobre como a conscientização pública afeta
                a saúde e a resiliência dos ecossistemas oceânicos.
              </StudyDescription>
              <StudyLink href="#">Ler mais</StudyLink>
            </CardBody>
          </StudyCard>
          <StudyCard>
            <StudyImage src="https://via.placeholder.com/400x250?text=Study+2" />
            <CardBody>
              <StudyTitle>
                Benefícios Econômicos da Preservação dos Oceanos
              </StudyTitle>
              <StudyDescription>
                Uma análise dos benefícios econômicos diretos e indiretos da
                conservação marinha para as comunidades costeiras e globais.
              </StudyDescription>
              <StudyLink href="#">Ler mais</StudyLink>
            </CardBody>
          </StudyCard>
          <StudyCard>
            <StudyImage src="https://via.placeholder.com/400x250?text=Study+2" />
            <CardBody>
              <StudyTitle>
                Benefícios Econômicos da Preservação dos Oceanos
              </StudyTitle>
              <StudyDescription>
                Uma análise dos benefícios econômicos diretos e indiretos da
                conservação marinha para as comunidades costeiras e globais.
              </StudyDescription>
              <StudyLink href="#">Ler mais</StudyLink>
            </CardBody>
          </StudyCard>
          <StudyCard>
            <StudyImage src="https://via.placeholder.com/400x250?text=Study+2" />
            <CardBody>
              <StudyTitle>
                Benefícios Econômicos da Preservação dos Oceanos
              </StudyTitle>
              <StudyDescription>
                Uma análise dos benefícios econômicos diretos e indiretos da
                conservação marinha para as comunidades costeiras e globais.
              </StudyDescription>
              <StudyLink href="#">Ler mais</StudyLink>
            </CardBody>
          </StudyCard>
        </StudyGrid>
      </PageContainer>
    </>
  );
};

export default StudiesPage;

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

const StatsSection = styled.div`
  margin-bottom: 3rem;
  :hover {
    cursor: pointer;
  }
`;

const StatCard = styled(Card)`
  text-align: center;
  padding: 1.5rem;
  perspective: 1000px;
  &.flipped .front-side {
    transform: rotateY(-180deg);
  }
  &.flipped .back-side {
    transform: rotateY(0deg);
  }
`;

const FrontSide = styled.div`
  backface-visibility: hidden;
  transform: rotateY(0deg);
  transition: transform 0.6s;
`;

const BackSide = styled.div`
  position: absolute;
  top: 10;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  transition: transform 0.6s;
`;

const StatValue = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const StatLabel = styled.p`
  font-size: 1.2rem;
`;

const BackTitle = styled.h5`
  font-weight: bold;
`;

const BackDescription = styled.p`
  margin-bottom: 1rem;
`;

const StudyGrid = styled(Row)`
  justify-content: center;
`;

const StudyCard = styled(Card)`
  margin: 1rem;
  max-width: 400px;
`;

const StudyImage = styled(Card.Img)`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
`;

const CardBody = styled(Card.Body)`
  background-color: #f8f9fa;
  padding: 1rem;
`;

const StudyTitle = styled(Card.Title)`
  font-weight: bold;
`;

const StudyDescription = styled(Card.Text)`
  margin-bottom: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const StudyLink = styled.a`
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: #0056b3;
  }
`;
