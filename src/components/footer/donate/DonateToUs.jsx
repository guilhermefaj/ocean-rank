import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 300px;
  margin: 20px auto;
`;

const Text = styled.p`
  font-size: large;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

const DonateButton = styled.a`
  background-color: #fff; /* Fundo branco */
  color: #007bff; /* Cor do texto azul */
  border: 2px solid #007bff; /* Borda azul */
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight:bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none; /* Remove o sublinhado padrão de links */

  &:hover {
    background-color: #007bff;
    color: #fff; /* Cor do texto branco ao passar o mouse */
  }
`;

export default function DonateToUs() {
  return (
    <Container>
      <Text>Doe para nossa iniciativa e propósito</Text>
      <DonateButton href="/doacao">Faça uma doação</DonateButton>
    </Container>
  );
}
