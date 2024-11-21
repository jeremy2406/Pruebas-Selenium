const { Builder, By, until } = require('selenium-webdriver');

async function testBotonRegistro() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Abrir la página principal
        console.log("Abriendo la página principal...");
        await driver.get('http://localhost/Pruebas Selenium/index.html');
        await driver.sleep(3000); // Pausa para observar

        // Hacer clic en el botón de registro
        console.log("Haciendo clic en el enlace 'Registrarse'...");
        await driver.findElement(By.css('a[href="Registro.html"]')).click();
        await driver.sleep(3000); // Pausa para observar

        // Rellenar el formulario de registro
        console.log("Rellenando formulario de registro...");
        await driver.findElement(By.id('username')).sendKeys('Carlos López');
        await driver.findElement(By.id('email')).sendKeys('carlos.lopez@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('contraseña123');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.sleep(3000); // Pausa para observar

        // Navegar automáticamente al login y realizar inicio de sesión
        console.log("Iniciando sesión...");
        await driver.get('http://localhost/Pruebas Selenium/login.html');
        await driver.findElement(By.id('login-username')).sendKeys('Carlos López');
        await driver.findElement(By.id('login-password')).sendKeys('contraseña123');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.sleep(3000); // Pausa para observar

        // Completar el flujo normal (ejemplo: realizar una reserva)
        console.log("Navegando a la sección 'Reservas'...");
        await driver.get('http://localhost/Pruebas Selenium/index.html');
        await driver.findElement(By.css('a[href="#reservas"]')).click();
        console.log("Rellenando formulario de reserva...");
        await driver.findElement(By.id('nombre')).sendKeys('Carlos López');
        await driver.findElement(By.id('fecha')).sendKeys('2024-12-01');
        await driver.findElement(By.id('personas')).sendKeys('2');
        await driver.findElement(By.id('comentarios')).sendKeys('Mesa en la terraza, por favor.');
        await driver.findElement(By.css('button[type="submit"]')).click();
        console.log("Formulario de reserva enviado.");
        await driver.sleep(3000); // Pausa para observar

        console.log("Prueba de regresión completada con éxito.");
    } finally {
        console.log("Cerrando el navegador...");
        await driver.quit();
    }
}

testBotonRegistro();
