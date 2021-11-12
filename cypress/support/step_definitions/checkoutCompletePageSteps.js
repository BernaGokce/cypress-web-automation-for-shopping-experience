import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CheckOutCompletePage from '../pages/checkoutCompletePage'

const checkOutCompletePage = new CheckOutCompletePage()

Then('I complete my order',()=> {
    checkOutCompletePage.checkCompletePageIsOpened()
})