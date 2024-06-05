
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Estilização dos componentes
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #fff;
  text-align: center;
  padding: 20px;
`;

export const IconWrapper = styled.div`
  font-size: 5em;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 4em;
  margin: 0.5em 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Subtitle = styled.h2`
  font-size: 2em;
  margin: 0.5em 0;
  font-weight: 400;
`;

export const Description = styled.p`
  font-size: 1.2em;
  margin: 1em 0;
  max-width: 600px;
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #3ABEF9;
  }
`;