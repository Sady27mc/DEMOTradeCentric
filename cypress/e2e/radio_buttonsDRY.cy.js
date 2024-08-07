describe("radio buttons", () => {
    beforeEach(() => {
      cy.visit("/");

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
      });
    });
  //adding Functions to have a more clean code respecting the DRY principle from Cypress best practices
    const navigateToRadioButtonSection = () => {
      // Navigate to the Elements section
      cy.get('.category-cards > :nth-child(1)').should('contain', 'Elements').click();
      // Navigate to the Radio Button menu
      cy.get('.element-list.collapse.show > ul > :nth-child(3)').should('contain', 'Radio Button').click();
          // Assert that the URL is correct after navigation
      cy.url().should('eq', Cypress.config('baseUrl') + '/radio-button'); 
    };
  
    const selectRadioButton = (radioButtonId, expectedText) => {
      cy.get(radioButtonId).check({ force: true });
      cy.get('.text-success').should('contain', expectedText);
    };


  //Test Case 1 - Navigate to the Radio Button Page and assert the URL
    it('navigate to the Radio Button section', () => {
      navigateToRadioButtonSection();
    });


  //Test Case 2 - Navigate to the Radio Button Page, assert the URL and select and assert option Yes
    it('select Yes radio button', () => {
      navigateToRadioButtonSection();
      selectRadioButton('#yesRadio', 'Yes');
    });

    
  //Test Case 3 - Navigate to the Radio Button Page, assert the URL and select and assert option Impressive
    it('select Impressive radio button', () => {
      navigateToRadioButtonSection();
      selectRadioButton('#impressiveRadio', 'Impressive');
    });
  });
  