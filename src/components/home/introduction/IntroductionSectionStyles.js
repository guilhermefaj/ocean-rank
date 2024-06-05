import styled from 'styled-components';


export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  padding: 20px;
  background-image: url('../../public/sea2.jpg'); /* URL da imagem */
  background-size: cover; /* Cobre a seção mantendo a proporção */
  background-position: center; /* Centraliza a imagem */
  font-weight: bold;
`;

export const StyledP = styled.p`
font-family: 'Georgia', serif; /* Fonte diferenciada */
font-size: 1.2em; /* Tamanho moderado */
color: #FEEFAD; /* Cor branca */
text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Sombra para efeito 3D */
margin-bottom: 20px;
font-weight:bold;
`;
export const StyledH1 = styled.h1`
font-family: 'Courier New', Courier, monospace; /* Fonte diferenciada */
font-size: 3em; /* Tamanho grande */
color: #FFD700; /* Cor dourada */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para efeito 3D */
margin-bottom: 20px;
font-weight:bold;
`;

export const StyledH2 = styled.h2`
font-family: 'Courier New', Courier, monospace; /* Fonte diferenciada */
font-weight:bold;
color: #FFD700; /* Cor dourada */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para efeito 3D */
margin-bottom: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%; /* Ajuste conforme necessário */
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 20px; 
`;

export const Image = styled.img`
  flex: 1;
  max-width: 40%;
  height: auto;
  margin-left: 20px;
`;



export const Button = styled.a`
  padding: 10px 25px;
  font-size: 16px;
  cursor: pointer;
  color: #68D2E8;
  font-weight: bold;
  background-color: #FDDE55;
  border: none;
  border-radius: 5px; /* Bordas redondas */
  transition: background-color 0.3s, color 0.3s; /* Transições suaves */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Sombra para efeito 3D */
  text-decoration: none; /* Remover sublinhado padrão de links */

  &:hover {
    background-color: #68D2E8; /* Cor de fundo ao passar o mouse */
    color: #FDDE55; /* Cor do texto ao passar o mouse */
  }
`;
