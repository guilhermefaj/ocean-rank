import styled from 'styled-components';
import { FaUserFriends } from 'react-icons/fa';

export const Container = styled.div`
  
`;

// Estilos para o título

// Estilos para a lista de contas
export const RankList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

// Estilos para cada item do ranking
export const RankItem = styled.li`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

// Estilos para a foto de perfil
export const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #ff6b6b;
`;

// Estilos para o nome do usuário
export const Name = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
`;

// Estilos para o número de seguidores
export const Followers = styled.p`
  margin: 0;
  color: #777;
  display: flex;
  align-items: center;
`;

export const FollowersIcon = styled(FaUserFriends)`
  margin-right: 0.5rem;
  color: #777;
`;

// Estilos para o número do rank
export const RankNumber = styled.span`
  font-size: 1.2rem;
  color: #ff6b6b;
  margin-right: 0.5rem;
`;

// Remover sublinhado dos links
