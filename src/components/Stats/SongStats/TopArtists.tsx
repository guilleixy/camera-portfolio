import { useEffect, useState } from "react";

export default function TopArtists() {
  const [loading, setLoading] = useState<boolean>(true);
  const [topArtists, setTopArtists] = useState<any>(null);
  const fetchTopArtists = async () => {
    try {
      const response = await fetch("/api/lastfm/topArtists");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTopArtists(data.topartists.artist);
      console.log(topArtists);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTopArtists();
  }, []);
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      {topArtists?.map((artist: any, index: number) => (
        <div>
          <div key={index}>{artist.name}</div>
        </div>
      ))}
    </div>
  );
}
