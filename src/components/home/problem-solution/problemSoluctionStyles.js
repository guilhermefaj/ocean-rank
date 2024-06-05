import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionContainer = styled.section`
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  padding: 80px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  margin: 5em auto;
  
  @media screen and (max-width: 768px) {
    padding: 40px;
    width: 90%;
    margin: 2em auto;
    align-items: center;
    margin-top: 50em;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 0.5em;

  @media screen and (max-width: 768px) {
    font-size: 2.5em;
  }
`;

export const Content = styled.p`
  color: #fff;
  font-size: 1.5em;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  max-width: 1000px;
  
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    text-align: center;
  }
`;

export const LearnMoreLink = styled(Link)`
  color: #fff;
  padding: 8px 22px;
  border-radius: 15px;
  text-decoration: none;
  font-size: large;
  margin-right: 0.6em;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente escuro */

  &:hover {
    background-color: #3ABEF9;
    color: #fff;
  }
  
  @media screen and (max-width: 768px) {
    margin: 0.6em;
  }
`;

export const HelpUsLink = styled(Link)`
  color: #fff;
  padding: 8px 22px;
  text-decoration: none;
  font-size: large;
  margin-right: 0.6em;
  text-align: center;

  border: 1px solid #fff;
  border-radius: 15px;

  &:hover {
    background-color: #fff;
    color: #2a5298;
  }

  @media screen and (max-width: 768px) {
    margin: 0.6em;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
