export const getLastPlayedGame = async () => {
  const response = await fetch(
    "https://api.steampowered.com/ISteamUser/GetRecentlyPlayedGames/v1/?key=" +
      process.env.STEAM_API_KEY +
      "&steamid=" +
      process.env.STEAM_USER_ID +
      "&format=json"
  );
};
