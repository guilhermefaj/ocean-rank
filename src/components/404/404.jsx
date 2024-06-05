import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { PageContainer, IconWrapper, Subtitle, HomeLink, Title, Description } from './404Styles';



export default function NotFound() {
  return (
    <PageContainer>
      <IconWrapper>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </IconWrapper>
      <Title>404</Title>
      <Subtitle>Página não encontrada</Subtitle>
      <Description>
        Desculpe, a página que você está procurando não existe. 
        Você pode ter digitado o endereço errado ou a página foi movida.
      </Description>
      <HomeLink to="/">Voltar para a página inicial</HomeLink>
    </PageContainer>
  );
}
