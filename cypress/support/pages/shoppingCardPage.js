const PRODUCT = ".inventory_item_name"
const PRODUCT_PARENT = ".cart_item_label"
const PRODUCT_PRICE = ".inventory_item_price"
const QUANTITY = ".cart_quantity"
const QUANTITY_PARENT = ".cart_item"
const PRODUCT_LIST = ".cart_item"
const CHECKOUT_BUTTON = "#checkout"

class ShoppingCardPage {

    checkProductIsAddedCorrectly(productName, productPrice,productQuantity){
        cy.get(PRODUCT).contains(productName) && cy.get(PRODUCT_PRICE).contains(productPrice) && cy.get(QUANTITY).should('have.text', productQuantity)
    }
    
    checkProductListLength(number){
        cy.get(PRODUCT_LIST).should('have.length', number)
    }

    clickCheckoutButton(){
        cy.get(CHECKOUT_BUTTON).click()
    }

    getProduct(shopping_product_element){
        cy.get(PRODUCT_PARENT).then(($element) =>{
            shopping_product_element = $element.find(PRODUCT).text()
        })
    }

    getPrice(shopping_product_price){
        cy.get(PRODUCT_PARENT).then(($element) =>{
            shopping_product_price = $element.find(PRODUCT_PRICE).text()
        })
    }  

    getQuantity(shopping_product_quantity){
        cy.get(QUANTITY).should('have.text', shopping_product_quantity)
    } 
}
export default ShoppingCardPage