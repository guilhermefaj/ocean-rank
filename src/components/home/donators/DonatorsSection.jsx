// DonatorsSection.js
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StarIcon, SectionContainer, StarContainer, Title, ClientList, ClientCard, ClientImage, ClientName, ClientComment } from "./donatorsSectionStyles";

// Dados de exemplo para os clientes
const clientes = [
    {
      nome: "Neymar",
      foto: "/public/donators/neymar.jpeg",
      comentario: "Apoio integral à causa! Juntos, podemos fazer a diferença e preservar nossos oceanos.",
      estrelas: 5,
    },
    {
      nome: "Kelly Jenner",
      foto: "/public/donators/kelly-jenner.jpeg",
      comentario: "Estou encantada com o trabalho da organização. Cada ação conta para a proteção dos nossos mares.",
      estrelas: 5,
    },
    {
      nome: "Thiago Nigro",
      foto: "/public/donators/thiago-nigro.jpeg",
      comentario: "Comprometimento total com a preservação do meio ambiente marinho. Contem comigo!",
      estrelas: 5,
    },
    {
      nome: "Whindersson Nunes",
      foto: "/public/donators/whindersson.jpeg",
      comentario: "O trabalho da organização é essencial para garantir um futuro sustentável para as próximas gerações.",
      estrelas: 5,
    },
    {
      nome: "Anitta",
      foto: "/public/donators/anitta.jpeg",
      comentario: "Juntos podemos criar um impacto positivo. Apoio incondicional à conservação dos oceanos!",
      estrelas: 5,
    },
    // Adicione mais clientes conforme necessário
  ];
  

// Função para renderizar estrelas com base na quantidade
const renderStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<StarIcon icon={faStar} key={i} />);
  }
  return stars;
};

// Componente principal
export default function DonatorsSection() {
  return (
    <SectionContainer>
      <Title>Pessoas que acreditam no Ocean Rank</Title>
      <ClientList>
        {clientes.map((cliente, index) => (
          <ClientCard key={index}>
            <ClientImage src={cliente.foto} alt={cliente.nome} />
            <ClientName>{cliente.nome}</ClientName>
            <ClientComment>{cliente.comentario}</ClientComment>
            <StarContainer>{renderStars(cliente.estrelas)}</StarContainer>
          </ClientCard>
        ))}
      </ClientList>
    </SectionContainer>
  );
}
