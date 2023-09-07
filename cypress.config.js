const { defineConfig } = require("cypress");
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  websecurity: false,
  video: true,
  viewportWidth: 1600,
  viewportHeight: 900,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // allureWriter(on, config)
    },
    baseUrl: 'https://www.natura.com.br/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  experimentalStudio: true
});
