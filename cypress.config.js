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
  userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://www.natura.com.br/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

  },
  experimentalStudio: true
});
