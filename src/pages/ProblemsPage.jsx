import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import styled from "styled-components";

// URLs das imagens
const images = {
  habitatDestruction:
    "public/problema/destruicao_habitat_marinho.jpg",
  oceanPollution:
    "public/problema/poluicao_dos_oceanos.jpg",
  biodiversityLoss:
    "public/problema/reducao_biodiversidade.jpg",
  economicImpact:
    "public/problema/impactos_economicos.jpg"
};

const ProblemsPage = () => {
  return (
    <>
      <PageContainer>
        <Row>
          <Col>
            <Title>Problemas Relacionados à Falta de Conscientização</Title>
            <Subtitle>
              O oceano, vasto e misterioso, é uma parte vital do nosso planeta,
              abrigando uma miríade de vida e desempenhando um papel crucial no
              equilíbrio ecológico global. No entanto, a falta de
              conscientização sobre a importância e fragilidade dos ecossistemas
              marinhos tem levado a uma série de problemas que afetam não apenas
              os oceanos, mas também a humanidade como um todo. Da destruição
              dos habitats marinhos à poluição desenfreada, cada ação negligente
              tem consequências que reverberam por todo o nosso planeta.
            </Subtitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <StyledCard>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Destruição de Habitats Marinhos
                  </Accordion.Header>
                  <Accordion.Body>
                    <CardImg src={images.habitatDestruction} />
                    <TextContent>
                      A destruição dos habitats marinhos é uma das principais
                      consequências da falta de conscientização sobre os
                      oceanos. A exploração insustentável dos recursos marinhos,
                      como a pesca predatória e a destruição de ecossistemas
                      costeiros para o desenvolvimento urbano, tem devastado
                      áreas vitais para inúmeras espécies marinhas. A perda de
                      habitats como recifes de coral e manguezais não apenas
                      reduz a biodiversidade, mas também compromete a
                      resiliência dos ecossistemas oceânicos diante das mudanças
                      climáticas e outros estresses ambientais.
                    </TextContent>
                  </Accordion.Body>
                </Accordion.Item>
              </StyledCard>
              <StyledCard>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Poluição dos Oceanos</Accordion.Header>
                  <Accordion.Body>
                    <CardImg src={images.oceanPollution} />
                    <TextContent>
                      A poluição dos oceanos é um dos problemas mais visíveis e
                      alarmantes resultantes da falta de conscientização.
                      Toneladas de plástico, produtos químicos tóxicos,
                      efluentes industriais e resíduos agrícolas são despejados
                      nos oceanos a cada ano, criando manchas gigantescas de
                      lixo flutuante e afetando a vida marinha em todos os
                      níveis da cadeia alimentar. A falta de consciência sobre
                      os impactos da poluição marinha não apenas ameaça a saúde
                      dos ecossistemas, mas também representa uma séria
                      preocupação para a saúde humana, com toxinas e
                      microplásticos encontrando seu caminho de volta para
                      nossas mesas através da cadeia alimentar.
                    </TextContent>
                  </Accordion.Body>
                </Accordion.Item>
              </StyledCard>
              <StyledCard>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Redução da Biodiversidade</Accordion.Header>
                  <Accordion.Body>
                    <CardImg src={images.biodiversityLoss} />
                    <TextContent>
                      A falta de conscientização sobre a importância da
                      biodiversidade marinha está levando a uma redução
                      alarmante na variedade de vida nos oceanos. A sobrepesca e
                      a destruição de habitats são apenas duas das muitas
                      maneiras pelas quais a atividade humana está diminuindo a
                      diversidade de espécies marinhas. A perda de
                      espécies-chave pode desencadear efeitos em cascata em
                      ecossistemas inteiros, comprometendo serviços
                      ecossistêmicos vitais, como a regulação do clima e a
                      provisão de alimentos.
                    </TextContent>
                  </Accordion.Body>
                </Accordion.Item>
              </StyledCard>
              <StyledCard>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Impactos Econômicos</Accordion.Header>
                  <Accordion.Body>
                    <CardImg src={images.economicImpact} />
                    <TextContent>
                      Os impactos econômicos da falta de conscientização sobre
                      os oceanos são significativos e abrangentes. A degradação
                      dos ecossistemas marinhos pode prejudicar as indústrias
                      pesqueira e turística, resultando em perdas de emprego e
                      redução da receita. Além disso, os custos associados à
                      limpeza de praias, remediação de áreas contaminadas e
                      perda de serviços ecossistêmicos podem sobrecarregar os
                      orçamentos públicos e privados. Ignorar os problemas
                      ambientais dos oceanos pode ter consequências econômicas
                      de longo alcance que afetam diretamente a qualidade de
                      vida das comunidades costeiras e além.
                    </TextContent>
                  </Accordion.Body>
                </Accordion.Item>
              </StyledCard>
            </Accordion>
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};

export default ProblemsPage;

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
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.h5`
  margin-bottom: 2rem;
  text-align: justify;
`;

const StyledCard = styled(Card)`
  margin-bottom: 2rem;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const TextContent = styled.div`
  background-color: #f8f9fa;
  color: #555;
  padding: 1rem;
  border-radius: 0.25rem;
`;
