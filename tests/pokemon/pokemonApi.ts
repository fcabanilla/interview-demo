import { APIRequestContext } from "@playwright/test";

export async function getPokemon(
  name: string,
  request: APIRequestContext
): Promise<any> {
  const response = await request.get(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  if (response.status() !== 200) {
    throw new Error(`Error fetching Pokemon: ${name}`);
  }
  return response.json();
}
