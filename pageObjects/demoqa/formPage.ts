import { Page } from "@playwright/test";

// Interfaz que representa los datos del formulario con propiedades opcionales
export interface FormData {
  firstName?: string;
  lastName?: string;
  // Se pueden agregar otros campos opcionales, por ejemplo:
  // email?: string;
  // phone?: string;
}

export class FormPage {
  private readonly url: string = "https://demoqa.com/automation-practice-form";
  private page: Page;

  // Mapeo entre las propiedades de FormData y los selectores correspondientes
  private readonly selectors: Record<keyof FormData, string> = {
    firstName: "#firstName",
    lastName: "#lastName",
    // Si se agregan nuevos campos, se deben mapear aquí, e.g.:
    // email: "#userEmail",
    // phone: "#userPhone",
  };

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

  // Método que itera dinámicamente sobre las propiedades de FormData y completa los campos correspondientes
  async fillForm(data: FormData): Promise<void> {
    for (const [key, selector] of Object.entries(this.selectors) as [keyof FormData, string][]) {
      const value = data[key];
      if (value) {
        await this.fillField(selector, value);
      }
    }
  }
}
