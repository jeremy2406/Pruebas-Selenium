const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();
options.setChromeBinaryPath('/usr/bin/chromium-browser');

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

async function testFuncional() {
    try {
        await driver.get('http://localhost/Pruebas Selenium/registro.html');

        await driver.findElement(By.id('username')).sendKeys('Carlos');
        await driver.findElement(By.id('email')).sendKeys('carlos@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('contraseñaSegura');
        await driver.findElement(By.css('button[type="submit"]')).click();

        await driver.get('http://localhost/Pruebas Selenium/login.html');

        await driver.findElement(By.id('login-username')).sendKeys('Carlos');
        await driver.findElement(By.id('login-password')).sendKeys('contraseñaSegura');
        await driver.findElement(By.css('button[type="submit"]')).click();

        await driver.get('http://localhost/Pruebas Selenium/index.html');
        await driver.findElement(By.css('a[href="#reservas"]')).click();

        await driver.findElement(By.id('nombre')).sendKeys('Andrea Gómez');
        await driver.findElement(By.id('fecha')).sendKeys('25-12-2024');
        await driver.findElement(By.id('personas')).sendKeys('3');
        await driver.findElement(By.id('comentarios')).sendKeys('Mesa en la terraza, por favor.');
        await driver.findElement(By.css('button[type="submit"]')).click();

        console.log("Prueba funcional completada con éxito.");
    } finally {
        await driver.quit();
    }
}

testFuncional();
