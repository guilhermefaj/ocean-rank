import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.2); /* Cor semitransparente */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex-direction:row;
    align-items: flex-start;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const NavLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #68D2E8;
    color: #68D2E8;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
    display: ${(props) => (props.hideOnSmallScreen ? "none" : "block")};
  }
`;

export const DropdownIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    margin-left: 1em;
  }
`;

export const DropdownMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  ${NavLink} {
    margin: 0.2rem 0;
  }

  ${(props) => props.isOpen && `display: flex;`}
`;

export const NavbarLogoLink = styled.a`
  @media screen and (max-width: 768px) {
    max-width: 150px; /* Reduz o tamanho da logo em telas pequenas */
    margin-right: auto; /* Alinha a logo no canto direito */
  }
`;

export const NavbarLogo = styled.img`
  max-width: 250px; /* Define o tamanho da logo */

  &:hover {
    cursor: pointer;
    scale: 1.1;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    max-width: 150px; /* Reduz o tamanho da logo em telas pequenas */
    margin-right: auto; /* Alinha a logo no canto direito */
  }
`;