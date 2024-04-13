
import newLogin from "../POM/LoginPage.po"
import Addemp from "../POM/Addemployee.po"
describe('Verifying the Functionality', () => {
  it('Verify login credentials with valid Username and password', () => {
   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   cy.get(newLogin.OrangeHRMLogo()).should("be.visible")
   cy.get(newLogin.Username()).type("Admin")
   cy.get(newLogin.password()).type("admin123")
   cy.get(newLogin.LoginButton()).click()
  })

  it.only('Verify add employee', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   cy.get(newLogin.OrangeHRMLogo()).should("be.visible")
   cy.get(newLogin.Username()).type("Admin")
   cy.get(newLogin.password()).type("admin123")
   cy.get(newLogin.LoginButton()).click()
   cy.contains(Addemp.PIMButton()).click()
   cy.contains(Addemp.AddemployeeButton()).click()
   cy.get(Addemp.FirstName()).type("Shashi")
   cy.get(Addemp.MiddleName()).type("Kumar")
   cy.get(Addemp.LastName()).type("Vobalapurkar")
   //cy.get(Addemp.EmpNo).type("458").first().should("be.visible")
   cy.get(Addemp.SaveButton()).click()
    
  })
})