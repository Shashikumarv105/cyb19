const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    retries: {openMode:2},
    pageLoadTimeout: 10000,
    viewportWidth: 1000,
    viewportHeight: 660,
    //watchForFileChanges: true,



    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
