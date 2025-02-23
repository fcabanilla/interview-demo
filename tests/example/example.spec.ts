import { test } from "@playwright/test";
import * as allure from "allure-js-commons";
import { FormData, FormPage as DemoPageBusiness } from "../../pageObjects/demoqa/formPage"

const data: FormData = {
  firstName: "John",
  lastName: "Doe"
};


test.describe(`Example from Youtube tutorial`, async () => {
  
  test.beforeEach(async ({ page }) => {
    const dpb = new DemoPageBusiness(page);
    await dpb.navigateToForm();
  });

  test(`Fill the first and last name fields`, async ({ page }) => {
    await allure.step('Filling in first and last name fields', async () => {
      // Fill in the first name field con dpb.fillForm(data: FormData)
      const dpb = new DemoPageBusiness(page);
      await dpb.fillForm(data);
      
    });
      
  });
});
