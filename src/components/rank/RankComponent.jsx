import React, { useState, useEffect } from 'react';
import fetchRandomTikTokData from '../../utils/TikTokDataFetcher';
import { Container, ProfilePic, RankItem, RankList, Name, RankNumber, Followers, FollowersIcon, PaginationContainer, PaginationButton } from './rankComponentStyles';

const RankComponent = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [accountsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedAccounts = await fetchRandomTikTokData();
      setAccounts(fetchedAccounts);
    };

    fetchData();
  }, []);

  // Lógica para calcular índices dos usuários para exibir na página atual
  const indexOfLastAccount = currentPage * accountsPerPage;
  const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
  const currentAccounts = accounts.slice(indexOfFirstAccount, indexOfLastAccount);

  // Função para mudar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <RankList>
        {currentAccounts.map((account, index) => (
          <a key={index} href={account.tiktokProfile} target="_blank" rel="noopener noreferrer">
            <RankItem>
              <ProfilePic src={account.profilePic} alt={`Profile of ${account.name}`} />
              <Name>
                <RankNumber>#{index + 1 + (currentPage - 1) * accountsPerPage}</RankNumber>
                {account.name}
              </Name>
              <Followers>
                <FollowersIcon />
                {account.followers.toLocaleString()} followers
              </Followers>
            </RankItem>
          </a>
        ))}
      </RankList>
      <PaginationContainer>
        {Array.from({ length: Math.ceil(accounts.length / accountsPerPage) }, (_, index) => (
          <PaginationButton key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </Container>
  );
};

export default RankComponent;
