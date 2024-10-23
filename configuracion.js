exports.config = {
    
    specs: [
        './grid.js' 
    ],
    
    
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
    {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true
    },
    {
        maxInstances: 5,
        browserName: 'MicrosoftEdge',
        acceptInsecureCerts: true
    }],
    
   
    logLevel: 'info',
    
  
    bail: 0,
    
  
    baseUrl: 'http://localhost',
    
  
    waitforTimeout: 10000,
    
   
    connectionRetryTimeout: 120000,
    
  
    connectionRetryCount: 3,
    
    // Servicio de Selenium
    services: ['Docker'],
    
    
};
