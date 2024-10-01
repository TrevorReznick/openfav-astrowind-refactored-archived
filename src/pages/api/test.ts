import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  console.log("Welcome to our API!");

  return new Response(
    JSON.stringify({
      message: "Welcome to our API!",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
