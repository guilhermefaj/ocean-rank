import { Section} from "./aboutUsSectionStyles"; // Importe o componente Card
import { Card, CardNome, CardImg, AboutPerson, PersonInfo } from "./cardStyles";
export default function AboutUsSection() {
  const alunos = [
    {
      nome: "João Brocchi",
      email: "joaobrocchiproffisional@gmail.com",
      rm: "ewewew",
      img: "../../../../public/sea.jpg",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab atque harum veniam temporibus dicta doloribus consequatur aliquid quaerat unde repudiandae, quisquam beatae! Dolor obcaecati autem qui hic consectetur sint." // Coloque a URL da imagem aqui se desejar
    },
    {
      nome: "João Brocchi",
      email: "joaobrocchiproffisional@gmail.com",
      rm: "ewewew",
      img: "../../../../public/sea.jpg",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab atque harum veniam temporibus dicta doloribus consequatur aliquid quaerat unde repudiandae, quisquam beatae! Dolor obcaecati autem qui hic consectetur sint."
    },
    {
      nome: "João Brocchi",
      email: "joaobrocchiproffisional@gmail.com",
      rm: "ewewew",
      img: "../../../../public/sea.jpg",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab atque harum veniam temporibus dicta doloribus consequatur aliquid quaerat unde repudiandae, quisquam beatae! Dolor obcaecati autem qui hic consectetur sint."
    }
  ];

  return (
    <Section>
      {alunos.map((aluno, index) => ( // Mapeie a lista de alunos
        <Card key={index}>
            <CardImg src={aluno.img}/>
            <CardNome>{aluno.nome}</CardNome>
            <AboutPerson>{aluno.about}</AboutPerson>
            <PersonInfo>{aluno.email}</PersonInfo>
            <PersonInfo>{aluno.rm}</PersonInfo>
        </Card>
      ))}
    </Section>
  );
}
