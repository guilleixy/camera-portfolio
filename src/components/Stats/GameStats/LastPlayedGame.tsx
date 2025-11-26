import { useEffect, useState } from "react";

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
    <div>Loading</div>
  ) : (
    <>
      {lastPlayedGame?.map((game: any, index: number) => (
        <div key={index}>{game?.name}</div>
      ))}
    </>
  );
}
