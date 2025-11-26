import { getMostPlayedSong } from "@/lib/lastfm";

export async function GET() {
  try {
    const mostPlayedSong = await getMostPlayedSong();
    return new Response(JSON.stringify(mostPlayedSong), {
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
