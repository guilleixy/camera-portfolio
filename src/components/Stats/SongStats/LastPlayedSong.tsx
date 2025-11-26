import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NowPlayingIcon from "./NowPlayingIcon";

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
    <Skeleton baseColor="#202020" highlightColor="#444" height={7} />
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {lastPlayedSong?.name} - {lastPlayedSong?.artist?.["#text"]}
      {lastPlayedSong?.["@attr"]?.nowplaying === "true" ? (
        <NowPlayingIcon />
      ) : (
        ""
      )}
    </div>
  );
}
