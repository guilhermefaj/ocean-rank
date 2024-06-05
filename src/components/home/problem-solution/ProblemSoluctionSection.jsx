
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SectionContainer, Title, Content, Buttons, LearnMoreLink, HelpUsLink } from "./problemSoluctionStyles"
export default function OceanPollutionSection() {
  return (
    <SectionContainer>
      <Title>O Mar Precisa de Nós!</Title>
      <Content>
        A poluição dos oceanos é um problema global que afeta todos nós. Junte-se à nossa causa e ajude a preservar nossos preciosos ecossistemas marinhos para as futuras gerações.
      </Content>
      <Buttons>
        <LearnMoreLink to="/problema">
          Um problema <FontAwesomeIcon icon={faArrowRight} />
        </LearnMoreLink>
        <HelpUsLink to="/solucao">
          Nossa solução
        </HelpUsLink>
      </Buttons>
    </SectionContainer>
  );
}
