import styled from "styled-components";


const ThankYouMessage = styled.p`
  font-size: 1.8em;
  color: #fff;
  text-align: center;
  margin-top: 30px;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  padding: 0 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Arial', sans-serif;
`;

const Highlight = styled.span`
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

export default function DoacaoText() {
  return (
    <ThankYouMessage>
      <Highlight>Obrigado</Highlight> por acreditar em nós. <br />
      Sua ajuda faz a <Highlight>diferença</Highlight>!
    </ThankYouMessage>
  );
}



