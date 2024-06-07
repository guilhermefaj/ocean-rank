import mockData from "./mockData";

const fetchRandomTikTokData = async () => {
  const url = 'https://tiktok-scraper7.p.rapidapi.com/?url=https%3A%2F%2Fwww.tiktok.com%2F%40tiktok%2Fvideo%2F7233463396124052782&hd=1';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'ede6f9cf94msh0a7ccbdf5d65351p1b28bbjsnfe6c051a300f',
      'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    const data = await response.text();
    if(!response.ok){
      return mockData;
    }
    return {
      id: data.username,
      name: data.user ,
      followers: data.stats?.followerCount,
      profilePic: data.profilePicUrl 
    };
  } catch (error) {
      console.error(error);
      return mockData;
  }
}
export default fetchRandomTikTokData;
