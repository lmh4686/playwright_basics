import { test, expect } from "@playwright/test";
const test_url = "https://mern-restaurant-bookingapp.web.app/";

//Run tests at the same time
test.describe.parallel.only("Hooks", () => {
  // Before each test run this code.
  test.beforeEach(async ({ page }) => {
    await page.goto(test_url);
  });

  test("Screenshots", async ({ page }) => {
    // await page.goto(test_url);
    await page.screenshot({
      path: "../testScreenshot/screenshot.png",
      fullPage: true,
    });
  });

  test("Single element Screenshot", async ({ page }) => {
    // await page.goto(test_url);
    //Select a single element
    const element = await page.$("h1");
    await element.screenshot({ path: "../testScreenshot/singleElement.png" });
  });
});
