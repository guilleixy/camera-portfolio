import { useEffect, useState } from "react";

export default function LastPlayedSong() {
  const [loading, setLoading] = useState<boolean>(true);
  const [lastPlayedSong, setLastPlayedSong] = useState<any>(null);
  const fetchLastPlayedSong = async () => {
    try {
      const response = await fetch("/api/lastfm/lastPlayedSong");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLastPlayedSong(data.recenttracks.track[0]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLastPlayedSong();
  }, []);
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      {lastPlayedSong?.name} - {lastPlayedSong?.artist?.["#text"]}
    </div>
  );
}
