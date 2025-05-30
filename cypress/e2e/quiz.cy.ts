describe('Tech Quiz E2E Flow', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/questions/random', {
        fixture: 'questions.json',
      }).as('getQuestions');
      cy.visit('/');
    });
  
    it('completes quiz and shows result', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.wait('@getQuestions');
  
      for (let i = 0; i < 2; i++) {
        cy.get('button').contains('1').click(); // Clicks first answer
      }
  
      cy.contains('Quiz Completed').should('exist');
      cy.contains('Your score:').should('exist');
      cy.contains('Take New Quiz').click();
      cy.contains('Start Quiz').should('be.visible');
    });
  });