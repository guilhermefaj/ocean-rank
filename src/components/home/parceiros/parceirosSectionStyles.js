import styled from "styled-components";

export const PartnersContainer = styled.section`
  padding: 4em 0;
  background-color: #f9f9f9;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1em;
  font-family: 'Poppins', sans-serif; /* Adiciona a fonte Poppins */
  font-weight: 700; /* Define o peso da fonte para 700 (bold) */
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
`;

export const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2em;
  padding: 0 2em;
`;

export const PartnerLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none; /* Remove underline from link */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%;
    max-height: 100px;
  }
`;
