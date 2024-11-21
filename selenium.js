const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

let options = new chrome.Options();
options.setChromeBinaryPath('/usr/bin/chromium-browser');

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

async function example() {
    try {
        await driver.get('http://localhost/Pruebas Selenium/index.html');
        await driver.wait(until.elementLocated(By.css('a[href="#reservas"]')), 10000);
        await driver.findElement(By.css('a[href="#reservas"]')).click();

        await driver.findElement(By.id('nombre')).sendKeys('Juan Pérez');
        await driver.findElement(By.id('fecha')).sendKeys('20-10-2024');
        await driver.findElement(By.id('personas')).sendKeys('4');
        await driver.findElement(By.id('comentarios')).sendKeys('Mesa cerca de la ventana, por favor.');

        await driver.findElement(By.css('button[type="submit"]')).click();

        console.log('Reserva realizada exitosamente');
    } finally {
        await driver.quit();
    }
}

example();
