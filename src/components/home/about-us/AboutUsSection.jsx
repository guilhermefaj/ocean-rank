import { Section, Title, Container} from "./aboutUsSectionStyles";
import { Card, CardNome, CardImg, AboutPerson, PersonInfo } from "./cardStyles";



export default function AboutUsSection() {
  const alunos = [
    {
      nome: "João Brocchi",
      email: "joaobrocchiproffisional@gmail.com",
      rm: "ewewew",
      img: "/sea.jpg", // Use apenas o nome da imagem se estiver dentro da pasta "public"
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab atque harum veniam temporibus dicta doloribus consequatur aliquid quaerat unde repudiandae, quisquam beatae! Dolor obcaecati autem qui hic consectetur sint."
    },
    {
      nome: "João Brocchi",
      email: "joaobrocchiproffisional@gmail.com",
      rm: "ewewew",
      img: "/sea.jpg",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab atque harum veniam temporibus dicta doloribus consequatur aliquid quaerat unde repudiandae, quisquam beatae! Dolor obcaecati autem qui hic consectetur sint."
    },
    {
      nome: "João Brocchi",
      email: "joaobrocchiproffisional@gmail.com",
      rm: "ewewew",
      img: "/sea.jpg",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab atque harum veniam temporibus dicta doloribus consequatur aliquid quaerat unde repudiandae, quisquam beatae! Dolor obcaecati autem qui hic consectetur sint."
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
            <PersonInfo>Email: {aluno.email}</PersonInfo>
            <PersonInfo>RM: {aluno.rm}</PersonInfo>
          </Card>
        ))}
      </Section>
   </Container>
  );
}
