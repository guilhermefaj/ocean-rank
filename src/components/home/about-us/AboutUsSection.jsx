import { Section, Title, Container} from "./aboutUsSectionStyles";
import { Card, CardNome, CardImg, AboutPerson, PersonInfo } from "./cardStyles";



export default function AboutUsSection() {
  const alunos = [
    {
      nome: "Guilherme Junqueira",
      email: "figueiredoguiu@gmail.com",
      rm: "RM553056",
      img: "/public/staff/Professional Profile - Guilherme.png", // Use apenas o nome da imagem se estiver dentro da pasta "public"
      about: "CTO Ocean Rank, formado em engenharia de minas, CEO da Global Referece e mineiro"
    },
    {
      nome: "João Brocchi",
      email: "joaobrocchiproffisional@gmail.com",
      rm: "RM553796",
      img: "/public/staff/Professional Profile - Joao.png",
      about: "CEO Ocean Rank, Cursando Engenharia de Software na Fiap, Software developer, amante do mar. "
    },
    {
      nome: "Giovanna Hatten",
      email: "gi.hatten@gmail.com",
      rm: "RM553269",
      img: "/public/staff/Professional Profile - Giovana.png",
      about: "CFO Ocean Rank, Chefe do departamento criativo, Cursando Engenharia de Software na Fiap e Gamer nas horas vagas. "
    }
  ];

  return (
   <Container>
    <Title>nossa equipe</Title> {/* Título da seção */}
      <Section>
        {alunos.map((aluno, index) => (
          <Card key={index}>
            <CardImg src={aluno.img} alt={aluno.nome} />
            <CardNome>{aluno.nome}</CardNome>
            <AboutPerson>{aluno.about}</AboutPerson>
            <PersonInfo>{aluno.email}</PersonInfo>
            <PersonInfo>{aluno.rm}</PersonInfo>
          </Card>
        ))}
      </Section>
   </Container>
  );
}
