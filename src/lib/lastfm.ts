export const getLastPlayedSong = async () => {
  const response = await fetch(
    "http://ws.audioscrobbler.com/2.0?method=user.getrecenttracks&user=mofetagalactica&api_key=" +
      process.env.LASTFM_API_KEY +
      "&format=json&limit=1"
  );
  return response.json();
};

export const getTopArtists = async () => {
  const response = await fetch(
    "http://ws.audioscrobbler.com/2.0?method=user.gettopartists&user=mofetagalactica&api_key=" +
      process.env.LASTFM_API_KEY +
      "&format=json&limit=4&period=1month"
  );
  return response.json();
};
