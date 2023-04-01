import { test, expect } from "@playwright/test";

//npx playwright test tag.spec.ts --grep @myTag to run only the tagged test
test("Simple basic test @myTag", async ({ page }) => {
  await page.goto("https://mern-restaurant-bookingapp.web.app/reservation");
  const header = await page.locator("h1");
  await expect(header).toContainText("Booking for Customer");
});

test("Clicking on Elements", async ({ page }) => {
  await page.goto("https://mern-restaurant-bookingapp.web.app/reservation");
  await page.click("text=The Gangnam Style BBQ");
  await page.click("text=Admin");
  await page.locator("text=ID").isVisible();
});

test("Test for incorrect login credential", async ({ page }) => {
  await page.goto("https://mern-restaurant-bookingapp.web.app");
  await page.click("text=Admin");

  await page.type("#loginId", "avb");
  await page.type("#password", "dfsa");
  await page.click('button:is(:text("Login"))');

  const errorMessage = await page
    .locator("p")
    .filter({ hasText: "Wrong admin ID or Password provided" })
    .isVisible();
});
