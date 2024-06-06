import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleXmark, faBook, faStar, faUserCheck } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones necessários
import logo from "/logo-oceanrank.png";
import { NavbarContainer, NavbarLogo, DropdownIcon, NavLink, NavLinks, DropdownMenu, NavbarLogoLink } from "./NavBarStyles"
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
      <NavbarLogoLink href="/">
        <NavbarLogo src={logo} whileHover={{ scale: 1.1 }} alt="Ocean Rank Logo" />
      </NavbarLogoLink>
      <div style={{ display: "flex", alignItems: "center" }}>
        <DropdownIcon onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faHome} />
        </DropdownIcon>
      </div>

      <NavLinks>
        <NavLink
          href="/problema"
          hideOnSmallScreen
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faCircleXmark} /> Problemas
        </NavLink>
        <NavLink
          href="/pesquisa"
          hideOnSmallScreen
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faBook} /> Pesquisas
        </NavLink>
        <NavLink
          href="/solucao"
          hideOnSmallScreen
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faUserCheck} /> Soluções
        </NavLink>
        <NavLink
          href="/rank"
          hideOnSmallScreen
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faStar} /> Rank
        </NavLink>
        <DropdownMenu isOpen={isDropdownOpen}>
          <NavLink href="/problema">
            <FontAwesomeIcon icon={faCircleXmark} /> Problema
          </NavLink>
          <NavLink href="/pesquisa">
            <FontAwesomeIcon icon={faBook} /> Pesquisa
          </NavLink>
          <NavLink href="/solucao">
            <FontAwesomeIcon icon={faUserCheck} /> Solução
          </NavLink>
          <NavLink href="/rank">
            <FontAwesomeIcon icon={faStar} /> Rank
          </NavLink>
        </DropdownMenu>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;