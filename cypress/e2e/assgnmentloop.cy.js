describe('template spec', () => {
  it('Verify login credentials with valid Username and password', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get('input[name="username"]').type("Admin")
      cy.get('input[type="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
      cy.contains('PIM').should('be.visible').click()
      cy.get('i[class="oxd-icon bi-trash"]').first().should('be.visible').click()
      cy.get('button[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click()
      cy.contains('Successfully Saved').should('be.visible')
      
      // for(let i=1; i<=50; i++){
      // console.log(i)
      // console.log("Deleted")
      // }




  })
})