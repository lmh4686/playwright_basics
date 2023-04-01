import { test, expect } from "@playwright/test";
const test_url = "https://mern-restaurant-bookingapp.web.app/";

test("Screenshots", async ({ page }) => {
  await page.goto(test_url);
  //Pause the test and let you see the page. 
  //Remember to delete it on production
  await page.pause()
  await page.screenshot({
    path: "../testScreenshot/screenshot.png",
    fullPage: true,
  });
});
