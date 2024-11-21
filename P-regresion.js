const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let options = new chrome.Options();
options.setChromeBinaryPath('/usr/bin/chromium-browser');

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

async function testBotonRegistro() {
    try {
        await driver.get('http://localhost/Pruebas Selenium/index.html');
        await driver.findElement(By.css('a[href="Registro.html"]')).click();

        await driver.findElement(By.id('username')).sendKeys('Luis García');
        await driver.findElement(By.id('email')).sendKeys('luis.garcia@example.com');
        await driver.findElement(By.id('password')).sendKeys('seguraPass123');
        await driver.findElement(By.css('button[type="submit"]')).click();

        await driver.get('http://localhost/Pruebas Selenium/login.html');
        await driver.findElement(By.id('login-username')).sendKeys('Luis García');
        await driver.findElement(By.id('login-password')).sendKeys('seguraPass123');
        await driver.findElement(By.css('button[type="submit"]')).click();

        await driver.get('http://localhost/Pruebas Selenium/index.html');
        await driver.findElement(By.css('a[href="#reservas"]')).click();

        await driver.findElement(By.id('nombre')).sendKeys('Luis García');
        await driver.findElement(By.id('fecha')).sendKeys('2024-12-10');
        await driver.findElement(By.id('personas')).sendKeys('3');
        await driver.findElement(By.id('comentarios')).sendKeys('Mesa cerca de la ventana.');
        await driver.findElement(By.css('button[type="submit"]')).click();

        console.log("Prueba de regresión completada con éxito.");
    } finally {
        await driver.quit();
    }
}

testBotonRegistro();
