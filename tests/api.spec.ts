import { test, expect } from "@playwright/test";
import { allureDecorator } from "../utils/allureUtils";

test.describe("PokéAPI Tests", () => {
  test("GET /pokemon/{name} - Validate Pokémon data", async ({ request }) => {
    const pokemonName = "pikachu";
    const response = await request.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    // Validate HTTP response
    expect(response.status()).toBe(200);

    // Validate data structure
    const responseBody = await response.json();
    expect(responseBody.name).toBe(pokemonName);
    expect(responseBody.id).toBeGreaterThan(0);
    expect(responseBody.types.length).toBeGreaterThan(0);

    // Enhance reporting with Allure
    allureDecorator(
      {
        title: "Validate Pokémon API Response",
        description:
          "This test validates the response structure and correctness of a Pokémon API request.",
        severity: "normal",
        owner: "QA Team",
        links: [{ name: "PokéAPI Docs", url: "https://pokeapi.co/docs/v2" }],
        parameters: { pokemon: pokemonName },
      },
      responseBody
    );
  });
});
