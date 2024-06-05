import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 20px;
  background-color: #f8f8f8; /* Cor de fundo atualizada */
  font-weight: bold;
  padding-top: 15em;
  
  

  @media screen and (max-width: 768px) {
    padding-top: 50em;
    margin-top: 8em; /* Aumenta a margem superior em telas menores */
    flex-direction: column; /* Altera a direção do layout para empilhar em telas menores */
  }
`;
