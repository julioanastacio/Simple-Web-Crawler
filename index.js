const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  const url = req.body.url;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const pageContent = await page.evaluate(() => {
    return { content: document.querySelector('html').innerHTML };
  });

  await browser.close();

  res.send({
    content: pageContent.content,
  });
});

app.listen(8080, () => {
  console.log('Server on!');
});
