// donatorsSectionStyles.js
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SectionContainer = styled.section`
  padding: 10px 0;
  background-color: #fff;
`;


export const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  line-height: 1.2;

  &:after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: #007bff;
    margin: 20px auto;
  }
`;

export const ClientList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ClientCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  max-width: 300px;
  width: 100%;
`;

export const ClientImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const ClientName = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ClientComment = styled.p`
  color: #555;
`;

export const StarContainer = styled.div`
  margin-top: 10px;
`;

export const StarIcon = styled(FontAwesomeIcon)`
  color: #ffc107;
  margin-right: 4px;
`;
