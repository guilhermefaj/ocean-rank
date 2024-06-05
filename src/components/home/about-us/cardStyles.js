import styled from "styled-components";

export const Card = styled.div`
  max-width: 350px;
  max-height: 800px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Aumenta a intensidade do sombreamento */
  border: 1px solid #ddd; /* Adiciona uma borda suave */
  border-radius: 15px;
  margin-right: 2.3em;
  transition: transform 0.3s ease; /* Adiciona uma transição suave ao hover */

  @media screen and (max-width: 768px) {
    max-width: 100%; /* Altera a largura máxima para preencher a largura da tela em telas menores */
    margin-right: 0; /* Remove a margem direita em telas menores */
    margin-bottom: 2em; /* Adiciona margem inferior entre os cards em telas menores */
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 300px; /* Define a altura automaticamente para manter a proporção da imagem */
  border-radius: 15px 15px 0 0; /* Adiciona borda arredondada apenas no topo */
`;

export const CardContent = styled.div`
  padding: 1em; /* Espaçamento interno */
  font-weight: bold;
`;

export const CardNome = styled.h3`
  font-size: 1.5em; /* Tamanho da fonte do nome */
  color: #000; /* Cor do texto */
  margin: 0.5em;
  font-weight: bold;
`;

export const AboutPerson = styled.p`
  font-size: 1em; /* Tamanho da fonte */
  color: #888; /* Cor do texto */
  font-weight: bold;
  margin: 0.5em 0 1em 1em;
`;

export const PersonInfo = styled.p`
  font-size: 0.9em; /* Tamanho da fonte */
  color: #555;
  font-weight: bold;
  margin: 0.5em 0 1em 1em;
`;
