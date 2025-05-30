import Quiz from '../../client/src/components/Quiz';
import '../../client/src/App.css';

describe('Quiz Component', () => {
  it('shows the Start Quiz button initially', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('exist');
  });

  it('starts quiz and shows first question', () => {
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
    }).as('getQuestions');

    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains('What does HTML stand for?').should('exist');
    cy.get('button').contains('1').should('exist');
  });
});