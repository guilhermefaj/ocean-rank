import { GiTrophyCup } from 'react-icons/gi';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const TrophyIcon = styled(GiTrophyCup)`
  margin-left: 1rem;
  color: #ffcc00;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
