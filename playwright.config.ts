import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://pokeapi.co/api/v2",
    trace: "on",
  },
  reporter: [["list"], ["allure-playwright"]],
  outputDir: "allure-results",
});
