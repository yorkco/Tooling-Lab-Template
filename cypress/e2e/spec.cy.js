describe('Rock Paper Scissors Game', () => {
  it('plays a game and checks history log', () => {
    const playerName = 'Test Player';
    const playerChoice = 'Rock';

    cy.visit('/index.html');

    cy.get('input[type="text"]').type(playerName);

    cy.get('button[id="start-game-button"]').click();

    cy.get('select').select(playerChoice);

    cy.get('button[id="go-button"]').click();

    cy.get('#game-history')
    .contains(playerName)
    .should('be.visible');

    cy.get('#game-history').then(($historyLines) => {
      expect($historyLines.length).to.equal(1);
    });
  });
});