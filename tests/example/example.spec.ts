import { expect, test } from "@playwright/test";
import * as allure from "allure-js-commons";
import {
  FormPage as DemoPageBusiness,
} from "../../pageObjects/demoqa/formPage";
import { dataTests } from "./dataTest";

test.describe(`Example from Youtube tutorial`, async () => {
  test.beforeEach(async ({ page }) => {
    const dpb = new DemoPageBusiness(page);
    await dpb.navigateToForm();
  });

  for (const dataTest of dataTests) {
    test(`Fill the first and last name fields for ${dataTest.firstName} ${dataTest.lastName}`, async ({
      page,
    }) => {
      allure.description(
        `This test fills the first and last name fields for ${dataTest.firstName} ${dataTest.lastName} and validates the values.`
      );
      allure.epic("Form Filling");
      allure.feature("Form Automation");
      allure.story("Fill and Validate Form Fields");
      allure.tags("form", "automation", "playwright");
      allure.owner("Federico Cabanilla");
      allure.parameter("firstName", dataTest.firstName!);
      allure.parameter("lastName", dataTest.lastName!);

      const dpb = new DemoPageBusiness(page);

      await allure.step("Filling in first and last name fields", async () => {
        await dpb.fillForm(dataTest);
      });

      await allure.step("Validating the values filled", async () => {
        const filledData = await dpb.getFormData();
        expect(filledData.firstName).toBe(dataTest.firstName);
        expect(filledData.lastName).toBe(dataTest.lastName);
      });
    });
  }
});
