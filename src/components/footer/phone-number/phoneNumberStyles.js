import {styled, keyframes} from "styled-components";

export const Tooltip = styled.span`
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

export const Title = styled.h3`
  font-size: 2.2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Pacifico', cursive;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative; /* Adicionado para tooltip */
`;
export const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

export const shake = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;
export const CopyrightText = styled.p`
  font-size: 1.2rem;
  margin: 0px;
  margin-top: 20px;
  text-align: center;
  color: #ccc;
`;