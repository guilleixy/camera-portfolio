export const getLastPlayedSong = async () => {
  const response = await fetch(
    "http://ws.audioscrobbler.com/2.0?method=user.getrecenttracks&user=" +
      process.env.LASTFM_USER_NAME +
      "&api_key=" +
      process.env.LASTFM_API_KEY +
      "&format=json&limit=1"
  );
  return response.json();
};

export const getMostPlayedSong = async () => {
  const response = await fetch(
    "http://ws.audioscrobbler.com/2.0?method=user.gettoptracks&user=" +
      process.env.LASTFM_USER_NAME +
      "&api_key=" +
      process.env.LASTFM_API_KEY +
      "&format=json&limit=1&period=7day"
  );
  return response.json();
};

export const getTopArtists = async () => {
  const response = await fetch(
    "http://ws.audioscrobbler.com/2.0?method=user.gettopartists&user=" +
      process.env.LASTFM_USER_NAME +
      "&api_key=" +
      process.env.LASTFM_API_KEY +
      "&format=json&limit=4&period=1month"
  );
  return response.json();
};
