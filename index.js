import express from 'express';
import puppeteer from 'puppeteer';

const app = express();

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://stockanalysis.com/quote/dse/OLYMPIC/');
  const title = await page.title();
  await browser.close();

  res.send(`Page title: ${title}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
