import { PartnersContainer, Title, PartnersGrid, PartnerLogo } from "./parceirosSectionStyles";


const partners = [
    { name: "AWS", logo: "../../../../public/aws-logo.png", link: "https://aws.amazon.com" },
    { name: "UNESCO", logo: "../../../../public/unesco-logo.png", link: "https://www.unesco.org"},   
    { name: "Softtek", logo: "../../../../public/softtek-logo.png", link: "https://www.softtek.com"  },
    { name: "Select Soluções", logo: "../../../../public/select-solucoes-logo.png", link: "https://www.selectsolucoes.com.br"  },
    { name: "O20", logo: "../../../../public/o20-logo.png", link: "https://www.o20.com" },
    { name: "Pacto Global", logo: "../../../../public/pacto-global-logo.png", link: "https://www.unglobalcompact.org" },
  ];

export default function ParceirosSection() {
  return (
    <PartnersContainer>
      <Title>Parceiros</Title>
      <PartnersGrid>
        {partners.map((partner) => (
          <PartnerLogo key={partner.name} href={partner.link} target="_blank" rel="noopener noreferrer">
            <img src={partner.logo} alt={`${partner.name} logo`} />
          </PartnerLogo>
        ))}
      </PartnersGrid>
    </PartnersContainer>
  );
}
