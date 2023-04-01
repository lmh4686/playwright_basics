export async function loadHomepage(page) {
  await page.goto("https://mern-restaurant-bookingapp.web.app/");
}

export async function assertTitle(page) {
  await page.waitForSelector('h1')
}