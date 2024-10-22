const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
  let driver = await new Builder()
    .usingServer('http://localhost:4444') 
    .forBrowser('chrome')  
    .build();

  try {
    await driver.get('http://localhost/Pruebas Selenium/index.html');  
    await driver.findElement(By.name('nombre')).sendKeys('Juan Pérez', Key.RETURN);  
    await driver.findElement(By.id('fecha')).sendKeys('20-10-2024');
    await driver.findElement(By.name('personas')).sendKeys('2');
    await driver.findElement(By.name('comentarios')).sendKeys('Mesa cerca de la ventana.');
    await driver.findElement(By.css('button[type="submit"]')).click(); 
  } finally {
    await driver.quit();
  }
}

runTest();
