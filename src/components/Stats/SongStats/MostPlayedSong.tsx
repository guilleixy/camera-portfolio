import { useEffect, useState } from "react";

export default function MostPlayedSong() {
  const [loading, setLoading] = useState<boolean>(true);
  const [mostPlayedSong, setMostPlayedSong] = useState<any>(null);
  const fetchMostPlayedSong = async () => {
    try {
      const response = await fetch("/api/lastfm/mostPlayedSong");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMostPlayedSong(data.toptracks.track[0]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMostPlayedSong();
  }, []);
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      {mostPlayedSong?.name} - {mostPlayedSong?.artist?.name}
    </div>
  );
}
