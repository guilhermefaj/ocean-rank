import{useState, useEffect } from 'react';
import fetchRandomTikTokData from '../../utils/TikTokDataFetcher';
import { Container,ProfilePic,RankItem,RankList,Name, RankNumber, Followers,FollowersIcon } from './rankComponentStyles';

const RankComponent = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedAccounts = await fetchRandomTikTokData();
      setAccounts(fetchedAccounts);
    };

    fetchData();
  }, []);

  return (
    <Container>
      
      <RankList>
        {accounts.map((account, index) => (
          <RankItem key={index}>
            <ProfilePic src={account.profilePic} alt={`Profile of ${account.name}`} />
            <Name>
              <RankNumber>#{index + 1}</RankNumber>
              {account.name}
            </Name>
            <Followers>
              <FollowersIcon />
              {account.followers.toLocaleString()} followers
            </Followers>
          </RankItem>
        ))}
      </RankList>
    </Container>
  );
};

export default RankComponent;
