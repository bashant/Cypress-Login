it('Login test', function (){
    cy.once('uncaught:exception', () => false);
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    
    cy.get(':nth-child(3) > .btn').click()
    cy.get('#ui-id-2', {timeout:50000}).click()
    cy.get('#ui-id-3', {timeout:50000}).click()
    cy.get('#ui-id-4', {timeout:50000}).click()
    cy.get('#ui-id-5', {timeout:50000}).click()
    cy.get('.button_to > .btn').click()

})