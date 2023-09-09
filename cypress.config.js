const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  projectId: 'da4krc',
  websecurity: false,
  video: true,
  viewportWidth: 1600,
  viewportHeight: 900,
  chromeWebSecurity: false,
  failOnStatusCode: false,

  e2e: {
    setupNodeEvents(on, config) {
      // require('@cypress/grep/src/plugin')(config);
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://www.natura.com.br/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',


  },
  experimentalStudio: true
});
