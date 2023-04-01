import { test, expect } from "@playwright/test";

test("Simple basic test", async ({ page }) => {
  await page.goto("https://mern-restaurant-bookingapp.web.app/reservation");
  const header = await page.locator('h1')
  await expect(header).toContainText("Booking for Customer");
});

test("Clicking on Elements", async ({ page }) => {
  await page.goto("https://mern-restaurant-bookingapp.web.app/reservation");
  await page.click("text=The Gangnam Style BBQ")
  await page.click("text=Admin")
  await page.locator("text=ID").isVisible()
})

// //Test example
// test("Selectors", async ({ page }) => {
//   //text
//   await page.click('text=some text')

//   // Css Selectors
//   await page.click('button')
//   await page.click('#id')
//   await page.click('.class')

//   // Only visible CSS selector
//   await page.click(".submit-button:visible")

//   // Combo id+class
//   await page.click("#username .first")

//   //XPath
//   await page.click("//button")
// })