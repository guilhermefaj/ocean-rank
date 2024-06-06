
const getRandomUsernames = (count) => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const usernames = [];
  for (let i = 0; i < count; i++) {
    let username = '';
    for (let j = 0; j < 6; j++) {
      username += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    usernames.push(username);
  }
  return usernames;
};

const fetchRandomTikTokData = async () => {
  try {
    const randomUsernames = getRandomUsernames(5); // Adjust the count as needed
    const fetchedAccounts = await Promise.all(
      randomUsernames.map(async (username) => {
        const url = 'https://tiktok-scraper7.p.rapidapi.com/?url=https%3A%2F%2Fwww.tiktok.com%2F%40tiktok%2Fvideo%2F7233463396124052782&hd=1';
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': 'ede6f9cf94msh0a7ccbdf5d65351p1b28bbjsnfe6c051a300f',
            'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com'
          }
        };

        try {
          // const response = await fetch(url, options);
          const data = "await response.text();"
          console.log(data)
          return {
            id: username,
            name: data.user || 'Unknown User',
            followers: data.stats?.followerCount || 0,
            profilePic: data.profilePicUrl || 'https://via.placeholder.com/150'
          };
        } catch (error) {
          console.error(error);
          return {
            id: username,
            name: 'Unknown User',
            followers: 0,
            profilePic: 'https://via.placeholder.com/150'
          };
        }
      })
    );
    return fetchedAccounts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchRandomTikTokData;
