import React from "react";
import NavBar from "../components/NavBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styled from "styled-components";

// Dados dos perfis do TikTok e suas pontuações
const tiktokProfiles = [
  { username: "oceana", score: 5000 },
  { username: "savetheoceans", score: 4500 },
  { username: "oceanconservancy", score: 4000 },
  { username: "oceanheroes", score: 3500 },
  { username: "oceancleanup", score: 3000 },
  { username: "seashepherd", score: 2500 },
  { username: "surfrider", score: 2000 },
  { username: "marineconservation", score: 1500 },
  { username: "oceanawareness", score: 1000 },
];

const SolutionPage = () => {
  return (
    <>
      <NavBar />
      <PageContainer>
        <Title>TikTok Ocean Heroes</Title>
        <Subtitle>
          Descubra os perfis do TikTok que mais contribuem para a
          conscientização sobre a preservação dos oceanos!
        </Subtitle>
        <RankingSection>
          {tiktokProfiles.map((profile, index) => (
            <RankingCard key={index}>
              <RankingPosition>{index + 1}</RankingPosition>
              <RankingProfile>
                <ProfileImage
                  src={`https://via.placeholder.com/150?text=@${profile.username}`}
                  alt={profile.username}
                />
                <ProfileInfo>
                  <ProfileUsername>@{profile.username}</ProfileUsername>
                  <ProfileScore>{profile.score} pontos</ProfileScore>
                </ProfileInfo>
              </RankingProfile>
              <FollowButton>Seguir</FollowButton>
            </RankingCard>
          ))}
        </RankingSection>
      </PageContainer>
    </>
  );
};

export default SolutionPage;

const PageContainer = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(120deg, #5a9adf, #ca8ed6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.h5`
  margin-bottom: 2rem;
  text-align: justify;
`;

const RankingSection = styled(Row)`
  margin-top: 3rem;
`;

const RankingCard = styled(Card)`
  margin-bottom: 2rem;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  align-items: center;
`;

const RankingPosition = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-right: 1rem;
`;

const RankingProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const ProfileInfo = styled.div``;

const ProfileUsername = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProfileScore = styled.p`
  font-size: 1rem;
`;

const FollowButton = styled(Button)`
  margin-left: auto;
`;
