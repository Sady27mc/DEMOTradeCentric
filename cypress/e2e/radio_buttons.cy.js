describe("radio buttons", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/");

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });

  it('navigate to the Radio Button section', () => {
    // Navigate to the Elements section
    cy.get('.category-cards > :nth-child(1)').should('contain', 'Elements').click();

    // Navigate to the Radio Button menu
    cy.get('.element-list.collapse.show > ul > :nth-child(3)').should('contain', 'Radio Button').click();

    // Assert that the URL is correct after navigation
    cy.url().should('eq', 'https://demoqa.com/radio-button'); 
  });

  it('select Yes radio button', () => {
    // Navigate to the Elements section
    cy.get('.category-cards > :nth-child(1)').should('contain', 'Elements').click();

    // Navigate to the Radio Button menu
    cy.get('.element-list.collapse.show > ul > :nth-child(3)').should('contain', 'Radio Button').click();

    // Select Yes radio button
    cy.get('#yesRadio').check({ force: true });
    cy.get('.text-success').should('contain', 'Yes');

    // Assert that the URL is correct after navigation
    cy.url().should('eq', 'https://demoqa.com/radio-button'); 
  });

  it('select Impressive radio button', () => {
    // Navigate to the Elements section
    cy.get('.category-cards > :nth-child(1)').should('contain', 'Elements').click();

    // Navigate to the Radio Button menu
    cy.get('.element-list.collapse.show > ul > :nth-child(3)').should('contain', 'Radio Button').click();

    // Select Impressive radio button
    cy.get('#impressiveRadio').check({ force: true });
    cy.get('.text-success').should('contain', 'Impressive');

    // Assert that the URL is correct after navigation
    cy.url().should('eq', 'https://demoqa.com/radio-button');    
  });
});

