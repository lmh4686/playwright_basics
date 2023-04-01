import { test, expect } from "@playwright/test";

test("Test for incorrect login credential", async ({ page }) => {
  await page.goto("https://mern-restaurant-bookingapp.web.app/");
  await page.click("text=Admin")

  await page.type("#loginId", 'avb')
  await page.type("#password", 'dfsa')
  await page.click('button:is(:text("Login"))')

  const errorMessage = await page
    .locator("p")
    .filter({ hasText: "Wrong admin ID or Password provided" }).isVisible();
})
