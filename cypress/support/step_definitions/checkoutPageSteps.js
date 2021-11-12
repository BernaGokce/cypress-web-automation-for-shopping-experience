import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CheckOutPage from '../pages/checkoutPage'

const checkOutPage = new CheckOutPage();

And('I fill form with my personal information {string}, {string}, {string}', (firstName,lastName,postalCode)=>{
    checkOutPage.fillFirstName(firstName)
    checkOutPage.fillLastName(lastName)
    checkOutPage.fillPostalCode(postalCode)
})


And('I click on CONTINUE button', ()=> {
    checkOutPage.continue()
}) 