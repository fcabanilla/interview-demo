import { test, expect } from "@playwright/test";

test.describe("Pokemon API tests", () => {
  test("Obtener información de Pikachu", async ({ request }) => {
    // Realiza la solicitud a la API
    const response = await request.get(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
    expect(response.status()).toBe(200);

    // Verifica que el nombre sea "pikachu"
    const data = await response.json();
    expect(data).toHaveProperty("name", "pikachu");
  });
});

// ...puedes agregar más pruebas según se requiera...
