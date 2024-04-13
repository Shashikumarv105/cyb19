class Addemployee {

    PIMButton(){

       return 'PIM' 
    }

    AddemployeeButton(){

    return 'Add Employee'

   }
   FirstName(){

    return 'input[name="firstName"]'
   }
   MiddleName(){

    return 'input[name="middleName"]'
   }

   LastName(){

    return 'input[name="lastName"]'
   }
   EmpNo(){

    return 'input[class="oxd-input oxd-input--active"]'
   }
   SaveButton(){

    return 'button[type="submit"]'
   }

}
const Addemp = new Addemployee
export default Addemp