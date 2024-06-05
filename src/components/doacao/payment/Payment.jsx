import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faBarcode, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import DoacaoText from '../text/DoacaoText';


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  text-align: center;
  padding: 20px;
  background: url('fundos/payment.jpg') no-repeat center center fixed;
  background-size: cover;

  @media screen and (max-width: 768px) {
    padding: 50em 0em; /* Adiciona margem inferior entre os cards em telas menores */
  }
  
`;




const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 20px;
  color:  #fff;
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  letter-spacing: 1.5px;
  line-height: 1.2;

  
`;


const PaymentOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

const PaymentCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  background: linear-gradient(135deg, #1e3c72, #2a5298);

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 3em;
  margin-bottom: 10px;
`;

const OptionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const PaymentDescription = styled.p`
  font-size: 1em;
  color: #ccc;
`;

export default function Payment() {
  return (
    <PageContainer>
      <DoacaoText/>
      <Title>Escolha seu método de Doação</Title>
      <PaymentOptions>
        <PaymentCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faQrcode} />
          </IconWrapper>
          <OptionTitle>PIX</OptionTitle>
          <PaymentDescription>Pagamento instantâneo via PIX</PaymentDescription>
        </PaymentCard>
        <PaymentCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faBarcode} />
          </IconWrapper>
          <OptionTitle>Boleto</OptionTitle>
          <PaymentDescription>Gerar um boleto bancário</PaymentDescription>
        </PaymentCard>
        <PaymentCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faCreditCard} />
          </IconWrapper>
          <OptionTitle>Cartão</OptionTitle>
          <PaymentDescription>Pagar com cartão de crédito ou débito</PaymentDescription>
        </PaymentCard>
        <PaymentCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faPaypal} />
          </IconWrapper>
          <OptionTitle>PayPal</OptionTitle>
          <PaymentDescription>Pagamento via PayPal</PaymentDescription>
        </PaymentCard>
      </PaymentOptions>
    </PageContainer>
  );
}
