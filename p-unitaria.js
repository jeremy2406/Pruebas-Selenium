const { Builder, By, until } = require('selenium-webdriver');

async function testUnitaria() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Abrir la página
        console.log("Abriendo la página...");
        await driver.get('http://localhost/Pruebas Selenium/index.html');
        await driver.sleep(3000); // Pausa de 3 segundos para observar

        // Ir a la sección "Menú"
        console.log("Navegando a la sección 'Menú'...");
        const menuLink = await driver.findElement(By.css('a[href="#menu"]'));
        await menuLink.click();
        await driver.sleep(3000); // Pausa de 3 segundos para observar

        // Verificar que la sección "Menú" está visible
        console.log("Verificando visibilidad de la sección 'Menú'...");
        const menuSection = await driver.findElement(By.id('menu'));
        await driver.wait(until.elementIsVisible(menuSection), 10000);
        await driver.sleep(3000); // Pausa de 3 segundos para observar

        console.log('Prueba unitaria completada: Sección Menú visible');
    } finally {
        // Cerrar el navegador
        console.log("Cerrando el navegador...");
        await driver.sleep(3000); // Pausa final para observar
        await driver.quit();
    }
}

testUnitaria();
