describe("web tables", () => {
  beforeEach(() => {
    // Visit the demo website
    cy.visit("/");
    
    // Navigate to the Elements section
    cy.get('.category-cards > :nth-child(1)').should('contain', 'Elements').click();
    
    // Navigate to the Web Tables menu item
    cy.get('.element-list.collapse.show > ul > :nth-child(4)').should('contain', 'Web Tables').click();
    
    // Assert that the URL is correct after navigation
    cy.url().should('eq', Cypress.config('baseUrl') + '/webtables'); // Verify the URL

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });

  // TC1 - Verify that the page has loaded and is indeed in the Web Tables section
  it('display the web tables section', () => {
    // Verify that the web tables section is displayed
    cy.get('#app > div > div > div > div.col-12.mt-4.col-md-6 > h1').should('contain', 'Web Tables');
  });

  // TC2 - Fill out the form
  it('add a new user to the table', () => {
    // Click on the Add button
    cy.get('#addNewRecordButton').should('be.visible').click();


    // Fill in First Name input field
    cy.get('#firstName').should('be.visible').click().type('Tester');
    // Verify that the value was set correctly
    cy.get('#firstName').should('have.value', 'Tester');


    // Fill in Last Name input field
    cy.get('#lastName').should('be.visible').click().type('Testing');
    // Verify that the value was set correctly
    cy.get('#lastName').should('have.value', 'Testing');
    

    cy.get('#userEmail').should('be.visible').click().type('tester.testing@test.com');
    // Using invoke to fill in the input field because type did not work due to errors on website(Later resolved by adding line 15-17 Uncaught Error)
    // cy.get('#userEmail').should('be.visible').invoke('val', 'tester.testing@test.com').trigger('input');

    // Verify that the value was set correctly
    cy.get('#userEmail').should('have.value', 'tester.testing@test.com');



    // Fill in the Age input field
    cy.get('#age').should('be.visible').click().type('34');
    // Verify that the value was set correctly
    cy.get('#age').should('have.value', '34');


    // Fill in the Salary input field
    cy.get('#salary').should('be.visible').click().type('16000');
    // Verify that the value was set correctly
    cy.get('#salary').should('have.value', '16000');


    // Fill in the Department input field
    cy.get('#department').should('be.visible').click().type('Support');
    // Verify that the value was set correctly
    cy.get('#salary').should('have.value', '16000');


    // Submit the form
    cy.get('#submit').click();

    // Verify the newly created user was added in the table
    cy.get('.rt-tbody').should('contain', 'Tester')
                        .and('contain', 'Testing')
                        .and('contain', 'tester.testing@test.com')
                        .and('contain', '34')
                        .and('contain', '16000')
                        .and('contain', 'Support')
  });
  

  // TC3 - Editing an existing User
  it('edit an existing user in the table', () => {
    // Click on the Edit button for the first user in the table
    cy.get('.rt-tr-group').first().find('.action-buttons span[title="Edit"]').click();

    // Update the user's first name
    cy.get('#firstName').clear().type('Tester');
    cy.get('#submit').click();

    // Verify the user's first name was updated in the table
    cy.get('.rt-tbody').first().should('contain', 'Tester');
  });


// TC4 - Deleting an existing user
  it('delete an user from the table', () => {
    // Function to count only filled rows
    const countFilledRows = () => {
      return cy.get('.rt-tr-group').filter((index, row) => {
        // Assuming that the first cell contains a name or some identifiable text
        return Cypress.$(row).find('.rt-td').first().text().trim() !== '';
      });
    };
  
    // Count the number of filled rows before deletion
    countFilledRows().then(rowsBefore => {
      const initialRowCount = rowsBefore.length;
  
      // Click on the Delete button for the first user in the table
      cy.get('.rt-tr-group').first().find('.action-buttons span[title="Delete"]').click();
  
      // Count the number of filled rows after deletion
      countFilledRows().should('have.length', initialRowCount - 1);
    });
  });


  // TC5 - Search for user using Search field
  it('search for am user in the table', () => {
    // Enter a search term
    cy.get('#searchBox').type('Cierra');

    // Verify the table displays the search results
    cy.get('.rt-tbody').should('contain', 'Cierra')
                        .and('contain', 'Vega');
  });

  // TC6 - Sort the tabel by Age
  it('sort the table by age', () => {
    // Click on the Age header to sort by age
    cy.get('.rt-th:contains("Age")').click();

    // Verify the table is sorted by age
    let ages = []; // Initialize an empty array to store the ages
  cy.get('.rt-tbody .rt-td:nth-child(3)').each(($age) => { // Select all the cells in the third column of the table body
    ages.push(parseInt($age.text())); // For each cell, get the text, convert it to an integer, and add it to the ages array
  }).then(() => { // After collecting all the ages
    const sortedAges = [...ages].sort((a, b) => a - b); // Create a copy of the ages array and sort it numerically
    expect(ages).to.deep.equal(sortedAges); // Assert that the original ages array is equal to the sorted array, ensuring the table is correctly sorted
    });
  });
});

