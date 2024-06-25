
import { LoginPage } from "./Pages/login_pages"

const loginPage = new LoginPage()
describe('All Login Test', function(){
beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

    it('First Test', function() {
    
            loginPage.enterUsername()
            loginPage.enterPassword()
            loginPage.clickLogin()
            cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
            
    
    })
    
   it('Second Test', function() {
    
            loginPage.enterUsername()
            loginPage.enterPassword()
            loginPage.clickLogin()
            cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    
    })
}) 



























    // // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    // // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // // cy.get('.oxd-button').click(