import styled from 'styled-components';
import { FaUserFriends } from 'react-icons/fa';

export const Container = styled.div`
  text-align: center;
`;

export const RankList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RankItem = styled.li`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);

  &:hover {
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    height: 100%;

    &:hover {
      text-decoration: none;
    }

    & * {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #ff6b6b;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
`;

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

export const RankNumber = styled.span`
  font-size: 1.2rem;
  color: #ff6b6b;
  margin-right: 0.5rem;
`;

export const PaginationContainer = styled.div`
  margin-top: 2rem;
`;

export const PaginationButton = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg);

  &:hover {
    background-color: #e64c4c;
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }
`;
