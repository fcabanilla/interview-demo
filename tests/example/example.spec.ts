import { expect, test } from "@playwright/test";
import * as allure from "allure-js-commons";

import { configureAllure } from "../helpers/setupAllure";
import { FormPage as DemoPageBusiness } from "../../pageObjects/demoqa/formPage";
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
      // Configuración centralizada de Allure
      configureAllure(dataTest);
      const dpb = new DemoPageBusiness(page);

      await allure.step("Filling in first and last name fields", async () => {
        await dpb.fillForm(dataTest);
      });

      await allure.step("Validating the values filled", async () => {
        const filledData = await dpb.getFormData();
        
        expect(filledData.firstName).toBe(dataTest.firstName);
        expect(filledData.lastName).toBe(dataTest.lastName);
        //expect(filledData.email).toBe(dataTest.email);
        //expect(filledData.phone).toBe(dataTest.phone);
      });
    });
  }
});
