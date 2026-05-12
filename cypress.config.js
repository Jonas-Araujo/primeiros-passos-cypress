const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    defaultCommandTimeout:  25000,  // 15s para comandos (.get, .click, .type...)
    pageLoadTimeout:        60000,  // 60s para carregamento de página
  },
});
