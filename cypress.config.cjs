// cypress.config.cjs
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e7dqif',
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // ...
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
