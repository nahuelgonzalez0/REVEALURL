import puppeteer from 'puppeteer'
import fs from 'fs'

export const resolver = async (url: string) => {
  const dir = 'screenshots';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: 'networkidle2' });
    await new Promise (resolve => setTimeout(resolve,3000)); // espera 2 segundos para que la página cargue completamente
    const urlFinal = page.url();

    const screenshotPath = `screenshots/${Date.now()}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });

    await browser.close();

    return {
      urlFinal,
      screenshotPath,
    };
  } catch (error) {
    await browser.close();
    throw new Error(`Error al acceder a la página: ${error}`);
  }
};
