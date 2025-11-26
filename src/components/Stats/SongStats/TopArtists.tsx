import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    <Skeleton baseColor="#20202071" highlightColor="#44444462" height={33} />
  ) : (
    <div>
      {topArtists?.map((artist: any, index: number) => (
        <div key={index}>{artist.name}</div>
      ))}
    </div>
  );
}
