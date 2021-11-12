import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CheckoutOverviewPage from "../pages/checkoutOverviewPage"

const checkOutOverviewPage = new CheckoutOverviewPage();


And('I should see Payment Information as {string}', paymentInf => {
    checkOutOverviewPage.checkOverviewInf(paymentInf)
}) 

And('I should see Shipping Information as {string}', shippingInf => {
    checkOutOverviewPage.checkOverviewInf(shippingInf)
}) 

let tax
let total_price
let price

And('Total price should be correct',()=> {
    checkOutOverviewPage.getPrice(price)
    checkOutOverviewPage.getTax(tax)
    checkOutOverviewPage.getTotalPrice(total_price)
}) 

And('I click on FINISH button', ()=> {
    checkOutOverviewPage.clickFinishButton()
}) 