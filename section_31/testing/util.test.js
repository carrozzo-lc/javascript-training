const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => { // unit test example
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

// test('should output data-less text', () => {
//   const text = generateText('', null);
//   expect(text).toBe(' (null years old)');
// });

test('should generate a valid text output', () => { // Integration test example
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('should create an element with text output and correct class', async () => { // End to end test example
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///Users/luca/Develop/2021/courses/javascript-training/section_31/testing/index.html'
  );
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('input#age');
  await page.type('input#age', '28');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Anna (28 years old)');
}, 10000);