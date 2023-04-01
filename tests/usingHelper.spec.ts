import { test, expect } from "@playwright/test";
const test_url = "https://mern-restaurant-bookingapp.web.app/";
import { loadHomepage, assertTitle } from "../helpers";

test("Custom Helpers", async ({page}) => {
  await loadHomepage(page)
  await assertTitle(page)
})