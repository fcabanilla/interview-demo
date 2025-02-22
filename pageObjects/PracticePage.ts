// pages/PracticePage.ts
import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PracticePage extends BasePage {
  // Radio Buttons
  private radioButton1 = "#radio1";
  private radioButton2 = "#radio2";
  private radioButton3 = "#radio3";

  // Checkboxes
  private option1Checkbox = "#checkBoxOption1";
  private option2Checkbox = "#checkBoxOption2";
  private option3Checkbox = "#checkBoxOption3";

  // Dropdown
  private dropdown = "#dropdown-class-example";

  // Alerts
  private alertButton = "#alertbtn";
  private confirmButton = "#confirmbtn";

  // Tables
  private instructorTable = "#product";
  private employeeTable = "#webtable";

  // Mouse Hover
  private mouseHoverButton = "#mousehover";

  constructor(page: Page) {
    super(page);
  }

  async selectRadioButton(option: number) {
    const radioButtonSelector = `input[name="radioButton"][value="radio2"]`;

    // Esperar a que el elemento esté presente en el DOM
    await this.page.waitForSelector(radioButtonSelector, { state: "attached" });

    // Hacer clic en el radio button
    await this.page.locator(radioButtonSelector).check();
  }

  async selectCheckbox(option: number) {
    const checkboxes = [
      this.option1Checkbox,
      this.option2Checkbox,
      this.option3Checkbox,
    ];
    await this.page.click(checkboxes[option - 1]);
  }

  async selectDropdownOption(value: string) {
    await this.page.selectOption(this.dropdown, value);
  }

  async triggerAlert() {
    this.page.once("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });
    await this.page.click(this.alertButton);
  }

  async triggerConfirmAlert() {
    this.page.once("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.dismiss();
    });
    await this.page.click(this.confirmButton);
  }

  async mouseHover() {
    await this.page.hover(this.mouseHoverButton);
  }
}
