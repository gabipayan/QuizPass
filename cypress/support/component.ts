import { mount } from 'cypress/react18';

// Make Cypress aware of mount globally
Cypress.Commands.add('mount', mount);

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}