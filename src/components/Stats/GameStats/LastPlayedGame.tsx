import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LastPlayedGame() {
  const [loading, setLoading] = useState<boolean>(true);
  const [lastPlayedGame, setLastPlayedGame] = useState<any>(null);
  const fetchLastPlayedGame = async () => {
    try {
      const response = await fetch("/api/steam/lastPlayedGame");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLastPlayedGame(data.response.games);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLastPlayedGame();
  }, []);
  return loading ? (
    <Skeleton baseColor="#20202071" highlightColor="#44444462" height={20} />
  ) : (
    <>
      {lastPlayedGame?.map((game: any, index: number) => (
        <div key={index}>{game?.name}</div>
      ))}
    </>
  );
}
