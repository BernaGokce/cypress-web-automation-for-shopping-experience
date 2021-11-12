import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import ShoppingCardPage from '../pages/shoppingCardPage'

const shoppingCardPage = new ShoppingCardPage();

Then('I should see {string} product with price {string} with {string} amount', (productName, productPrice, quantity)=> {
    shoppingCardPage.checkProductIsAddedCorrectly(productName, productPrice,quantity)
})

Then('I should see {string} product in shopping card list', number =>{
    shoppingCardPage.checkProductListLength(number)
}) 

When('I click on CHECKOUT button', ()=>{
    shoppingCardPage.clickCheckoutButton()
})
