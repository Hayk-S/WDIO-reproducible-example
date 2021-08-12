const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Reproducing the issue', () => {
    it('reproducing the issue', async () => {
        await browser.url(`https://www.postman.com/home`)

        const productDropdownBtn = await browser.$('div.dropdown.top-navigation-buttons-dropdown > .dropdown-button')
        await productDropdownBtn.click()

        await browser.pause(1000)
        const _menuItems = await browser.$$('.dropdown-menu .dropdown-menu-item');
        console.log("MenuItems:", _menuItems.length)
        await browser.pause(1000)
        for (const item of _menuItems) {
          console.log("Item:", item)
          const itemText = await item.getText();
          console.log("ItemText:", itemText)
          if (itemText === 'API Platform') {
            console.log("Inside Click")
            await item.click();
            await browser.pause(2000)
            return
          }
        }

    });
});


