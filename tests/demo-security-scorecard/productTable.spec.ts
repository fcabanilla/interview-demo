// productTable.spec.ts

import { test, expect, Page } from '@playwright/test';
import { applyFilters, applySorting, goToPage } from './productTable.helpers';

interface Filter {
  category?: string;
  priceRange?: { min: number; max: number };
  productName?: string;
}

// Filter scenarios
const filters: Filter[] = [
  { category: 'Electronics' },
  { category: 'Books' },
  { priceRange: { min: 100, max: 300 } },
  { productName: 'Wireless' }
];

// Sorting scenarios
const sortingOptions: string[] = [
  'name-asc',
  'name-desc',
  'price-asc',
  'price-desc',
  'rating-asc',
  'rating-desc'
];

// Pagination options (testing only page 0 and page 1)
const paginationOptions: number[] = [0, 1];

test.describe('Product Listing Page E2E Tests', () => {
  // Iterate over all combinations of filter, sort option, and page number
  filters.forEach((filter) => {
    sortingOptions.forEach((sortOption) => {
      paginationOptions.forEach((pageNumber) => {
        test(`Filter: ${JSON.stringify(filter)}, Sort: ${sortOption}, Page: ${pageNumber}`, async ({
          page
        }: { page: Page }) => {
          // Navigate to the product listing page
          await page.goto('https://example.com/products');

          // Apply the specified filter
          await applyFilters(page, filter);

          // Apply the specified sorting option
          await applySorting(page, sortOption);

          // Navigate to the desired pagination page
          await goToPage(page, pageNumber);

          // Verify that products are displayed
          const products = await page.$$('.product-item');
          expect(products.length).toBeGreaterThan(0);
          if (pageNumber === 0) {
            // Assuming the first page always displays 20 products
            expect(products.length).toBe(20);
          }
        });
      });
    });
  });
});
