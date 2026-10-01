import {test} from '@playwright/test'

test('login using role', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
  await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
  await page.getByRole('button', {name: 'Login'}).click();

  await page.close();
});

test('locate using label', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByLabel('Username').fill('standard_user');
  
  await page.close();
});

test('locate using placeholder', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');

  await page.close();
});

test('login using text', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByText('Login').click();

  await page.close();
});

test('login using title', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByTitle('Swag Labs');

  await page.close();
});

test('login using img alt', async ({page}) => {
  await page.goto('https://www.bing.com/');

  await page.getByAltText('© J-CASTニュース').click();

  await page.close();
});

test('login using test id', async ({page}) => {
  await page.goto('https://www.emirates.com/jp/english/book/');

  await page.getByTestId('combobox_Departure airport').click();

  await page.close();
});