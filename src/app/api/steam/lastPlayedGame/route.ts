import { getLastPlayedGame } from "@/lib/steam";

export async function GET() {
  try {
    const lastPlayedGame = await getLastPlayedGame();
    return new Response(JSON.stringify(lastPlayedGame), {
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
