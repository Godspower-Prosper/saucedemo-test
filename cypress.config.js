const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "defaultCommandTimeout": 8000,
    "pageLoadTimeout": 200000,
    viewportWidth: 1900,
    viewportHeight: 1080,
    baseUrl: 'https://www.saucedemo.com/',
  },
});
