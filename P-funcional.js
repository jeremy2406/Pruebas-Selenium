const { Builder, By, until } = require('selenium-webdriver');

async function testFuncional() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Abrir la página de registro
        console.log("Abriendo la página de registro...");
        await driver.get('http://localhost/Pruebas Selenium/registro.html');
        await driver.sleep(3000); // Pausa para observar

        // Registro
        console.log("Rellenando formulario de registro...");
        await driver.findElement(By.id('username')).sendKeys('Jeremy');
        await driver.sleep(1000); // Pausa breve
        await driver.findElement(By.id('email')).sendKeys('Jeremy123@gmail.com');
        await driver.sleep(1000); // Pausa breve
        await driver.findElement(By.id('password')).sendKeys('contrasena123');
        await driver.sleep(1000); // Pausa breve
        await driver.findElement(By.css('button[type="submit"]')).click();
        console.log("Formulario de registro enviado.");
        await driver.sleep(3000); // Pausa para observar

        // Navegar a la página de inicio de sesión
        console.log("Navegando a la página de inicio de sesión...");
        await driver.get('http://localhost/Pruebas Selenium/login.html');
        await driver.sleep(3000); // Pausa para observar

        // Inicio de sesión
        console.log("Rellenando formulario de inicio de sesión...");
        await driver.findElement(By.id('login-username')).sendKeys('Jeremy');
        await driver.sleep(1000); // Pausa breve
        await driver.findElement(By.id('login-password')).sendKeys('contrasena123');
        await driver.sleep(1000); // Pausa breve
        await driver.findElement(By.css('button[type="submit"]')).click();
        console.log("Formulario de inicio de sesión enviado.");
        await driver.sleep(3000); // Pausa para observar

        // Reserva
        console.log("Navegando a la sección 'Reservas'...");
        await driver.get('http://localhost/Pruebas Selenium/index.html');
        await driver.findElement(By.css('a[href="#reservas"]')).click();
        await driver.sleep(3000); // Pausa para observar
        console.log("Rellenando formulario de reserva...");
        await driver.findElement(By.id('nombre')).sendKeys('Juan Pérez');
        await driver.sleep(1000); // Pausa breve
        await driver.findElement(By.id('fecha')).sendKeys('20-10-2024');
        await driver.sleep(1000); // Pausa breve
        await driver.findElement(By.id('personas')).sendKeys('4');
        await driver.sleep(1000); // Pausa breve
        await driver.findElement(By.id('comentarios')).sendKeys('Mesa cerca de la ventana.');
        await driver.sleep(1000); // Pausa breve
        await driver.findElement(By.css('button[type="submit"]')).click();
        console.log("Formulario de reserva enviado.");
        await driver.sleep(3000); // Pausa para observar

        console.log("Prueba funcional completada con éxito.");
    } finally {
        console.log("Cerrando el navegador...");
        await driver.sleep(3000); // Pausa final para observar
        await driver.quit();
    }
}

testFuncional();
