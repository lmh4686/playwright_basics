import { test, expect } from "@playwright/test";
const test_url = "https://mern-restaurant-bookingapp.web.app/";

//skip test
test.skip("Assertions", async ({ page }) => {
  await page.goto("https://mern-restaurant-bookingapp.web.app/");
  await expect(page).toHaveURL("https://mern-restaurant-bookingapp.web.app/");
  await expect(page).toHaveTitle("Gangnam Style BBQ");

  const elements = page.locator("h1");
  await expect(elements).toHaveCount(2);
  await expect(
    elements.filter({ hasText: "Taste Korea In Sydney" })
  ).toBeVisible();

  const nonExistingElement = page.locator("h5");
  await expect(nonExistingElement).not.toBeVisible();
});

////only test this case
// test.only("Assertions Only", async ({ page }) => {
//   await page.goto("https://mern-restaurant-bookingapp.web.app/");
//   await expect(page).toHaveURL("https://mern-restaurant-bookingapp.web.app/");
//   await expect(page).toHaveTitle("Gangnam Style BBQ");

//   const elements = page.locator("h1");
//   await expect(elements).toHaveCount(2);
//   await expect(
//     elements.filter({ hasText: "Taste Korea In Sydney" })
//   ).toBeVisible();

//   const nonExistingElement = page.locator("h5");
//   await expect(nonExistingElement).not.toBeVisible();
// });

//Grouping test with describe
test.describe("Grouping test", () => {
  test("Simple basic test", async ({ page }) => {
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
})