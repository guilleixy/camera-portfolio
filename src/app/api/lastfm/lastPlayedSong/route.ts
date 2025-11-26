import { getLastPlayedSong } from "@/lib/lastfm";

export async function GET() {
  try {
    const lastPlayedSong = await getLastPlayedSong();
    return new Response(JSON.stringify(lastPlayedSong), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
