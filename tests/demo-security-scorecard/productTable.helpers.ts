// productTable.helpers.ts

import { Page } from "@playwright/test";

/**
 * Applies the provided filters on the product listing page.
 * @param page The Playwright page instance.
 * @param filter An object containing the filters to apply.
 */
export async function applyFilters(
  page: Page,
  filter: {
    category?: string;
    priceRange?: { min: number; max: number };
    productName?: string;
  }
): Promise<void> {
  if (filter.category) {
    // Select the category option from the dropdown
    await page.selectOption('select[name="category"]', filter.category);
  }
  if (filter.priceRange) {
    // Fill in the minimum and maximum price inputs
    await page.fill(
      'input[name="min-price"]',
      filter.priceRange.min.toString()
    );
    await page.fill(
      'input[name="max-price"]',
      filter.priceRange.max.toString()
    );
  }
  if (filter.productName) {
    // Fill the search input and trigger the search by pressing 'Enter'
    await page.fill('input[name="search"]', filter.productName);
    await page.press('input[name="search"]', "Enter");
  }
}

/**
 * Applies the sorting option on the product listing page.
 * @param page The Playwright page instance.
 * @param sortOption The sorting option (e.g., 'price-asc').
 */
export async function applySorting(
  page: Page,
  sortOption: string
): Promise<void> {
  await page.selectOption('select[name="sort"]', sortOption);
}

/**
 * Navigates to the specified page number using the pagination controls.
 * @param page The Playwright page instance.
 * @param pageNumber The page number to navigate to.
 */
export async function goToPage(page: Page, pageNumber: number): Promise<void> {
  if (pageNumber > 0) {
    for (let i = 0; i < pageNumber; i++) {
      // Click the "Next Page" button to navigate through pages
      await page.click('button[aria-label="Next Page"]');
    }
  }
}
