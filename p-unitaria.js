const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();
options.setChromeBinaryPath('/usr/bin/chromium-browser');

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

async function testUnitaria() {
    try {
        await driver.get('http://localhost/Pruebas Selenium/index.html');
        await driver.sleep(3000);

        const menuLink = await driver.findElement(By.css('a[href="#menu"]'));
        await menuLink.click();
        await driver.sleep(3000);

        const menuSection = await driver.findElement(By.id('menu'));
        await driver.wait(until.elementIsVisible(menuSection), 10000);
        await driver.sleep(3000);

        console.log('Prueba unitaria completada: Sección Menú visible');
    } finally {
        await driver.sleep(3000);
        await driver.quit();
    }
}

testUnitaria();
