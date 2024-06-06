import { Section, TextContainer, IframeContainer, Wrapper, StyledH1, StyledH2, BlurredContainer, Iframe } from "./MovieSectionsStyles";

export default function MovieSection() {
  return (
    <Section>
      <BlurredContainer />
      <Wrapper>
        <IframeContainer>
          <Iframe src="https://www.youtube.com/watch?v=EbjVKAytnVg&feature=youtu.be" allowFullScreen title="Video"></Iframe>
        </IframeContainer>
        <TextContainer>
          <StyledH1>Ocean Rank</StyledH1>
          <StyledH2>Nos somos uma iniciativa de três brasileiros que buscam ajudar o mundo e combater o colapso global. Através do uso de tecnologias de ponta.</StyledH2>
          {/* <Button>Saiba mais</Button> */}
        </TextContainer>
      </Wrapper>
    </Section>
  );
}
