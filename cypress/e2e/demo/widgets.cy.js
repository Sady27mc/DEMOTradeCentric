describe('Widgets Tests', () => {
  beforeEach(() => {
    // Visit the demo website
    cy.visit('https://demoqa.com/');
    
    // Navigate to the Widgets section
    cy.get('#app > div > div > div.home-body > div > div:nth-child(4) > div > div.card-body').should('contain', 'Widgets').click();
    
    // Assert that the URL is correct after navigation
    cy.url().should('include', '/widgets'); 

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });

  

  // it('should display the Accordian section', () => {
  // //    // Navigate to the Accordian section
  //   cy.get('#item-0').should('contain', 'Accordian').should('be.visible').click({ force: true });
  // });         --------> This test case fails due to the lack of unique identifier for the button. The button has 6 elements.

    it('should display the Progress Bar section', () => {
  //    // Navigate to the Progress Bar section
    // cy.get('#item-4 > span').should('contain', 'Progress Bar').should('be.visible').click({ force: true },{ multiple: true });
    cy.get('#item-4 > span').should('contain', 'Progress Bar').should('be.visible').each(($el) => {
      cy.wrap($el).click({ force: true });
    });

    // Click on the button composed of multiple elements
    cy.get('#item-4 > span').within(() => {
      // Find the child element that contains the specific text and click it
      cy.contains('Progress Bar').click({ force: true });
    });
        // Assert that the URL is correct after navigation
        cy.url().should('include', '/progress-bar'); 
  }); 
 
  // it('should display the Widgets section', () => {
  //   // Verify that the Widgets section header is displayed
  //   cy.get('.main-header').should('be.visible').should('contain', 'Widgets');
  // });

  // it('should open the Accordion widget and display content', () => {
  //   // Navigate to the Accordion section
  //   cy.get('#accordionExample .accordion-item').should('be.visible').first().click(); // Open the first accordion item

    
  //   // Verify that the accordion content is visible
  //   cy.get('#accordionExample .accordion-collapse').should('be.visible');
  // });

  // it('should use the Auto Complete widget and display suggestions', () => {
  //   // Navigate to the Auto Complete section
  //   cy.get('#autoCompleteMultipleContainer input').type('a'); // Type 'a' in the input field

  //   // Verify that suggestions are displayed
  //   cy.get('.auto-complete__menu').should('be.visible');
  // });

  // it('should select a date using the Date Picker widget', () => {
  //   // Navigate to the Date Picker section
  //   cy.get('#datePickerMonthYearInput').click(); // Open the date picker

  //   // Select a date from the date picker
  //   cy.get('.react-datepicker__month-select').select('August'); // Select the month
  //   cy.get('.react-datepicker__year-select').select('2024'); // Select the year
  //   cy.get('.react-datepicker__day--014').click(); // Select the 14th day

  //   // Verify that the selected date is displayed in the input field
  //   cy.get('#datePickerMonthYearInput').should('have.value', '08/14/2024');
  // });
});
