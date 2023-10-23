import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    video: false,
    setupNodeEvents(on, _config) {
      on('task', {
        log(message) {
          // Then to see the log messages in the terminal
          //   cy.task("log", "my message");
          console.log(message +'\n\n');
          return null;
        },
      });
    },
  },
});
