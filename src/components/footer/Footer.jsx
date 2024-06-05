import styled from 'styled-components';
import Newsletter from './news-letter/NewsLetter';
import Contato from "./contato/Contato";
import Logo from "./logo/Logo";
import PhoneNumber from "./phone-number/PhoneNumber";
import DonateToUs from "./donate/DonateToUs";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #fff;
  padding-top: 20px;
  flex-grow: 1; /* Para ocupar todo o espaço disponível */
  display: flex;
  flex-direction: column; /* Alinha o texto de direitos autorais abaixo do conteúdo */
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column; /* Para alinhar os itens verticalmente */
  margin: 20px; /* Adiciona margem para separar as seções */
`;

const CopyrightText = styled.div`
  font-size: medium;
  color: #fff;
  text-align: center; /* Centraliza o texto de direitos autorais */
  margin-bottom: 1em;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo />
          <Contato/>
          <PhoneNumber />
        </FooterSection>

        <FooterSection>
          <DonateToUs />
        </FooterSection>

        <FooterSection>
          <Newsletter />
        </FooterSection>

      </FooterContent>
      <CopyrightText>
        © {new Date().getFullYear()} Ocean Rank. Todos os direitos reservados.
      </CopyrightText>
    </FooterContainer>
  );
}
