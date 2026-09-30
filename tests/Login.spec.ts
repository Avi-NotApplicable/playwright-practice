import {test} from '@playwright/test'

test('launch browser', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');

  page.locator('#user-name').fill('standard_user');
  page.locator('#password').fill('secret_sauce');
  page.locator('#login-button').click();
});