import { Section,TextContainer,Button, Wrapper, StyledH1, StyledH2 } from "./IntroductionSectionStyles";


export default function IntroductionSection() {
    return (
      <Section>
        <Wrapper>
          <TextContainer>
            <StyledH1>Salvar o mar é salvar a Vida</StyledH1>
            <StyledH2>Nos ajude nessa missão.</StyledH2>
            <Button href="/solucao">Saiba mais</Button>
          </TextContainer>
        </Wrapper>
      </Section>
    );
  }