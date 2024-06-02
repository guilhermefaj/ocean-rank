import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleXmark, faBook, faStar, faUserCheck } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones necessários
import logo from "/logo-oceanrank.png";
import {NavbarContainer, NavbarLogo, DropdownIcon,NavLink,NavLinks, DropdownMenu} from "./NavBarStyles"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <NavbarContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <NavbarLogo src={logo} whileHover={{ scale: 1.1 }} alt="Ocean Rank Logo" /> {/* Adiciona a logo */}
        <DropdownIcon onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faHome} />
        </DropdownIcon>
      </div>
       
      <NavLinks>
        <NavLink
          href="#problema"
          hideOnSmallScreen
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faCircleXmark} /> Problemas
        </NavLink>
        <NavLink
          href="#Career"
          hideOnSmallScreen
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faBook} /> Pesquisas
        </NavLink>
        <NavLink
          href="#Academic"
          hideOnSmallScreen
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faUserCheck} />Soluções
        </NavLink>
        <NavLink
          href="#contact"
          hideOnSmallScreen
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faStar} /> Rank
        </NavLink>
        <DropdownMenu isOpen={isDropdownOpen}>
          <NavLink href="#Career">
          <FontAwesomeIcon icon={faCircleXmark} /> Problema
          </NavLink>
          <NavLink href="#about">
          <FontAwesomeIcon icon={faBook} />Pesquisa
          </NavLink>
          <NavLink href="#Academic">
            <FontAwesomeIcon icon={faUserCheck} /> Solução
          </NavLink>
          <NavLink href="#contact">
          <FontAwesomeIcon icon={faStar} /> Rank
          </NavLink>
        </DropdownMenu>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
