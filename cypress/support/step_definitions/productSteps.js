import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import ProductPage from '../pages/productPage';
import ProductDetailPage from '../pages/productDetailPage';
import BaseUtils from '../utils/baseUtils';
import CheckoutOverviewPage from '../pages/checkoutOverviewPage';
import ShoppingCardPage from '../pages/shoppingCardPage';

const baseUtils = new BaseUtils();
const productPage = new ProductPage();
const productDetailPage = new ProductDetailPage();
const checkoutOverviewPage = new CheckoutOverviewPage();
const shoppingCardPage = new ShoppingCardPage();

And('Products page should list {string} products', number => {
    productPage.checkProductListLength(number)
}) 

When('I click on {string} product with price {string}', (productName,productPrice) =>{
    productPage.clickElementWithProductDetails(productName, productPrice)
})

When('I select one of the product {string} from list', productName =>{
    productPage.clickElementFromList(productName)
}) 

And('I click on shopping card', ()=> {
    productPage.clickShoppingCard()
})

let product_element
let price_element
let detail_element
let detail_price
And('I select {string} nth product from list', number=> {
    productPage.getPrice(price_element,number)
    productPage.getTextAndClickProduct(product_element,number)
    productDetailPage.getProduct(detail_element)
    productDetailPage.getPrice(detail_price)

    expect(product_element).to.eq(detail_element)
    expect(price_element).to.eq(detail_price)
}) 

let shopping_product_element
let shopping_product_price
Then('I should see {string} selected product on the list', number =>{
    shoppingCardPage.getProduct(shopping_product_element)
    shoppingCardPage.getPrice(shopping_product_price)

    expect(product_element).to.eq(shopping_product_element)
    expect(price_element).to.eq(shopping_product_price)
    shoppingCardPage.getQuantity(number)
}) 

let overview_product_element
let overview_product_price
Then('I should see selected product checkout overview information',()=> {
    checkoutOverviewPage.getProduct(overview_product_element)
    checkoutOverviewPage.getPrice(overview_product_price)
    expect(product_element).to.eq(overview_product_element)
    expect(price_element).to.eq(overview_product_price)   
}) 

And('I logged out', ()=>{
    baseUtils.logOut()
}) 