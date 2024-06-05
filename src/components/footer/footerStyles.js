import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Section = styled.section`

`;

export const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  max-height: auto;
  padding: 20px;
  position: relative;
  background-color: #26355D;

`;

// export const BlurredContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: url('/public/golfinhos.jpg');
//   background-size: cover;
//   background-position: center;
//   filter: blur(5px); /* Aplica um desfoque de 8px na imagem de fundo */
//   z-index: 1; /* Certifica-se de que o fundo esteja atrás do conteúdo */
// `;

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 80%;
//   position: relative; /* Garante que o conteúdo dentro do wrapper fique posicionado corretamente */
//   z-index: 2; /* Garante que o conteúdo dentro do wrapper esteja acima do fundo */
  
//   /* Estilos para telas menores */
//   @media (max-width: 768px) {
//     flex-direction: column;
//     justify-content: center;
//   }
// `;
// const float = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-5px); }
//   100% { transform: translateY(0); }
// `;

// const shake = keyframes`
//   0% { transform: translateX(0); }
//   50% { transform: translateX(-5px); }
//   100% { transform: translateX(0); }
// `;
// export const Title = styled.h3`
//   font-size: 2.2rem;
//   color: #fff;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
//   font-family: 'Pacifico', cursive;
// `;

// export const Info = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 15px;
//   position: relative; /* Adicionado para tooltip */
// `;

// export const Icon = styled(FontAwesomeIcon)`
//   font-size: 2.2rem;
//   margin-right: 10px;
//   animation: ${({ isShaking }) => (isShaking ? shake : '')} 1s ease infinite;
  
// `;

// export const Link = styled.a`
//   color: #fff;
//   font-size: 1.2rem;
//   text-decoration: none;
//   transition: color 0.3s ease;
//   position: relative;

//   &:hover {
//     color: #00bcd4;
//     cursor: pointer;
//   }

//   &:hover + span {
//     opacity: 1;
//     visibility: visible;
//   }
// `;

// export const Tooltip = styled.span`
//   position: absolute;
//   bottom: 125%;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: #333;
//   color: #fff;
//   padding: 5px 10px;
//   border-radius: 5px;
//   font-size: 0.9rem;
//   white-space: nowrap;
//   opacity: 0;
//   visibility: hidden;
//   transition: opacity 0.3s;
//   z-index: 1;

//   &::after {
//     content: '';
//     position: absolute;
//     top: 100%;
//     left: 50%;
//     transform: translateX(-50%);
//     border-width: 5px;
//     border-style: solid;
//     border-color: #333 transparent transparent transparent;
//   }
// `;

// export const SocialList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
// `;

// export const SocialListItem = styled.li`
//   margin-right: 15px;
//   animation: ${float} 2s ease-in-out infinite;
// `;

// export const SocialLink = styled.a`
//   color: #fff;
//   font-size: 2.5rem;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #00bcd4;
//   }
// `;

// export const CopyrightText = styled.p`
//   font-size: 1.2rem;
//   margin: 0px;
//   margin-top: 20px;
//   text-align: center;
//   color: #ccc;
// `;