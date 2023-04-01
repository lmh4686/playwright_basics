import { test, expect } from "@playwright/test";
const test_url = "https://mern-restaurant-bookingapp.web.app/";

test("Screenshots", async ({page}) => {
  await page.goto(test_url);
  await page.screenshot({path: "../testScreenshot/screenshot.png", fullPage: true})
})

test("Single element Screenshot", async ({ page }) => { 
  await page.goto(test_url)
  //Select a single element
  const element = await page.$('h5')
  await element.screenshot({ path: "../testScreenshot/singleElement.png" });
})