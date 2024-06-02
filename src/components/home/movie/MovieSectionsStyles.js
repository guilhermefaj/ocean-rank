import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  max-height: auto;
  padding: 20px;
  position: relative;

`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  z-index: 2; /* Garante que o texto esteja acima do fundo */
  display: flex;
  flex-direction: column;
  
`;

export const IframeContainer = styled.div`
  flex: 1;
  padding: 20px;
  z-index: 2; /* Garante que o iframe esteja acima do fundo */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 5em;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: auto;
  max-width: 600px; /* Aumenta o tamanho máximo do vídeo */
  aspect-ratio: 16/9; /* Mantém a proporção do vídeo */
  border: none; /* Remove a borda do iframe */
`;

export const BlurredContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../public/movies-back.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(8px); /* Aplica um desfoque de 8px na imagem de fundo */
  z-index: 1; /* Certifica-se de que o fundo esteja atrás do conteúdo */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  position: relative; /* Garante que o conteúdo dentro do wrapper fique posicionado corretamente */
  z-index: 2; /* Garante que o conteúdo dentro do wrapper esteja acima do fundo */
  
  /* Estilos para telas menores */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledH1 = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 3.5em; /* Aumenta o tamanho da fonte */
  color: #03AED2;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); /* Aumenta a sombra para destacar mais o texto */
  font-weight: bold;
`;

export const StyledH2 = styled.h2`
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  color: #FEEFAD;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5em;
`;

export const Button = styled.button`
  padding: 10px 25px;
  font-size: 16px;
  cursor: pointer;
  color: #03AED2;
  font-weight: bold;
  background-color: #FDDE55;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #68D2E8;
    color: #FDDE55;
  }
`;
