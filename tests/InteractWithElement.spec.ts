import {test} from '@playwright/test'

test('interact with username and password', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    
    // id
    page.locator('#user-name');

    // tagname
    page.locator('input');

    // classname
    page.locator('.input_error');
    page.locator('.form_input');

    // full classname attribute
    page.locator('[class="input_error form_input"]');

    // placeholder attribute
    page.locator('[placeholder="Username"]');

    // multiple attributes
    page.locator('#user-name.form_input[placeholder="Username"]');

    // using text
    page.locator('text=Login');
    page.locator('has-text("Login")');
    page.locator('text-is("Login")');
});