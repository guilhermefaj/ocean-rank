import styled from "styled-components";
// Estilizações adicionais
export const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5em; /* Tamanho da fonte */
  font-weight: bold; /* Negrito */
  text-transform: uppercase; /* Transforma o texto em maiúsculas */
  letter-spacing: 2px; /* Espaçamento entre letras */
  margin-top: 1em;
  margin-bottom: 2.2em; /* Adiciona espaço abaixo do título */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Sombra do texto */
`;
export const Container = styled.section`
  padding-top: 20px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  flex-direction: column;
  padding-bottom: 5em;
  
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 40px;
  
  font-weight: bold;
  
  
  

  @media screen and (max-width: 768px) {
    padding-top: 50em;
    flex-direction: column; /* Altera a direção do layout para empilhar em telas menores */
  }
`;
