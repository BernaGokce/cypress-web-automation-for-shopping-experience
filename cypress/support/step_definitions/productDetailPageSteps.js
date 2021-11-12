import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import ProductDetailPage from '../pages/productDetailPage'

const productDetailPage = new ProductDetailPage();

Then('{string} product with price {string} detail page should be opened', (productName, productPrice) =>{
    cy.get("#back-to-products").should('be.visible')
    productDetailPage.checkProductIsCorrect(productName,productPrice)
})

When('I click on ADD TO CARD button', () => {
    productDetailPage.clickAddToCardButton()
})

Then('Shopping Card should have {string} product', number =>{
    productDetailPage.checkProductNumberInShoppingCard(number)
}) 

When('I click on BACK TO PRODUCTS button',() =>{
    productDetailPage.backToProductPage()
})

When('I click on REMOVE button', ()=>{
    productDetailPage.clickRemoveButton()
}) 