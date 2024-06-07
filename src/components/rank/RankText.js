import { GiTrophyCup } from 'react-icons/gi';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f3ec78, #af4261);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin: 4em auto;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-align: center;
  background: -webkit-linear-gradient(#f3ec78, #af4261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const TrophyIcon = styled(GiTrophyCup)`
  margin-left: 1rem;
  color: #ffcc00;
  font-size: 2.5rem;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;
