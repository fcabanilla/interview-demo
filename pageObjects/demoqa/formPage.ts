import { Page } from "@playwright/test";
import { formSelectors, url } from "./selectors";
import { FormData } from "./selectors";

export class FormPage {
  private readonly url: string = url;
  private page: Page;

  // Mapeo entre las propiedades de FormData y los selectores correspondientes
  private readonly selectors = formSelectors;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToForm(): Promise<void> {
    await this.page.goto(this.url);
  }

  // Método helper para llenar un campo si el valor está definido
  private async fillField(selector: string, value?: string): Promise<void> {
    if (value !== undefined && value !== null) {
      await this.page.fill(selector, value);
    }
  }

  // Método helper para obtener el valor de un campo
  private async getFieldValue(selector: string): Promise<string> {
    return await this.page.inputValue(selector);
  }

  // Método que itera dinámicamente sobre las propiedades de FormData y completa los campos correspondientes
  async fillForm(data: FormData): Promise<void> {
    for (const [key, selector] of Object.entries(this.selectors) as [
      keyof FormData,
      string
    ][]) {
      const value = data[key];
      if (value) {
        await this.fillField(selector, value);
      }
    }
  }

  // Método que itera dinámicamente sobre las propiedades de FormData y obtiene los valores correspondientes
  async getFormData(): Promise<FormData> {
    const data: FormData = {};
    for (const [key, selector] of Object.entries(this.selectors) as [
      keyof FormData,
      string
    ][]) {
      data[key] = await this.getFieldValue(selector);
    }
    return data;
  }
}
