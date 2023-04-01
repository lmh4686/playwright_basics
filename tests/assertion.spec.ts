import { test, expect } from "@playwright/test";
const test_url = "https://mern-restaurant-bookingapp.web.app/";

test("Assertions", async ({ page }) => {
  await page.goto("https://mern-restaurant-bookingapp.web.app/");
  await expect(page).toHaveURL("https://mern-restaurant-bookingapp.web.app/");
  await expect(page).toHaveTitle("Gangnam Style BBQ");


  const elements = page.locator("h1");
  await expect(elements).toHaveCount(2);
  await expect(
    elements.filter({ hasText: "Taste Korea In Sydney" })
  ).toBeVisible();

  const nonExistingElement = page.locator("h5")
  await expect(nonExistingElement).not.toBeVisible();
});
