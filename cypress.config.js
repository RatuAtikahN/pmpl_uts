const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: true,
  watchForFileChanges: true,
  screenshotsFolder: 'C:\Users\ASUS\cypres-basic\screenshots',
  videosFolder: 'C:\Users\ASUS\cypres-basic\videos',
  experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
