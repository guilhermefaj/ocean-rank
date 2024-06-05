import styled from 'styled-components';
import Image from '/public/logo/eye-logo-oceanrank.png';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImage = styled.img`
  width: 250px; /* ajuste o tamanho conforme necessário */
  height: 250px; /* ajuste o tamanho conforme necessário */
  
`;

const LogoTitle = styled.h1`
  margin-left: 4px;
  color: #fff;
  font-weight: bold;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={Image} alt="Logo" />
      <LogoTitle>Ocean Rank</LogoTitle>
    </LogoWrapper>
  );
};

export default Logo;
