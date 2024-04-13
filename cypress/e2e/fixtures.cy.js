const availablefixtures = [
{
    "name" : "Addemploeedetails/Addemplyee",
    "context" : "Shashi"
},
{
    "name" : "Addemploeedetails/Addemplyee1",
    "context" : "Shashi"
},
{
    "name" : "Addemploeedetails/Addemplyee2",
    "context" : "Shashi"
},
{
    "name" : "Addemploeedetails/Addemplyee3", 
    "context" : "Shashi"
}                                               
]
describe("verify addemployee functionality", function () {

    availablefixtures.forEach((afixture) => {
      describe(afixture.context, () => {
        //Mostly used for Setup Part
        before(function () {
          cy.fixture(afixture.name).then(function (data) {
            this.data = data;
          })
        })


    it('verify adding employee with vails details  ', () => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     cy.get('input[name="username"]').type(this.data.username)
     cy.get('input[type="password"]').type(this.data.password)
     cy.get('button[type="submit"]').click()
     cy.contains('PIM').click()
     cy.contains('Add Employee').click()
     cy.get('input[name="firstName"]').type(this.data.firstname)
     cy.get('input[name="middleName"]').type(athis.data.middlename)
     cy.get('input[name="lastName"]').type(this.data.lastname)
     cy.get('button[type="submit"]').click()
     cy.contains('Successfully Saved').should('be.visible')
   })
})
})
})