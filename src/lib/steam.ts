export const getLastPlayedGame = async () => {
  const response = await fetch(
    "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=" +
      process.env.STEAM_API_KEY +
      "&steamid=" +
      process.env.STEAM_USER_ID +
      "&format=json"
  );
  return response.json();
};
