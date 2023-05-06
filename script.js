import puppeteer from 'puppeteer';

async function login() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://instagram.com');

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  while (true) {
    if (page.url() == 'https://www.instagram.com/accounts/onetap/?next=%2F') {
      break;
    }
    await sleep(1000);
  }

  const cookies = await page.cookies();

  await browser.close();

  return cookies;
}

const cookies = await login();

// async function url() {
//   // Prompt for URL
// }

// async function scrape(cookies, url) {
//   const browser = await puppeteer.launch({ headless: true });
//   const timer = (ms) => new Promise((res) => setTimeout(res, ms));
//   const page = await browser.newPage();

//   await page.setCookie(...cookies);

//   await page.goto(url);

//   // Download images

//   await page.close();
// }
