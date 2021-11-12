import BaseUtils from "../utils/baseUtils"
const PRODUCT_LIST = ".inventory_item"
const PRODUCT = ".inventory_item_name"
const PRODUCT_PRICE_PARENT = ".pricebar"
const PRODUCT_PARENT = ".inventory_item_label"
const PRODUCT_PRICE = ".inventory_item_price"
const SHOPPING_CARD = ".shopping_cart_link"


class ProductPage{
    checkProductListLength(number){
        cy.get(PRODUCT_LIST).should('have.length', number)
    }

    clickElementFromList(productName){
        let idArray = []
        cy.get('[id*="title_link"]').each(($el) => {
            cy.log($el.text())
    //Find element based on InnerText
    if ($el.text() === productName) {
        cy.wrap($el).click()  
        cy.get("#back-to-products").should('be.visible')
        cy.get(".inventory_details_name").contains(productName)
    }else {
        throw new Error("Product not found")
    }
    })}

    clickElementWithProductDetails(productName, productPrice) {
        if(cy.get(PRODUCT).contains(productName) && cy.get(PRODUCT_PRICE).contains(productPrice)){
            cy.get(PRODUCT).contains(productName).click()

        }else{
            throw new Error("Product not found")
        }    
    }

    clickShoppingCard(){
        cy.get(SHOPPING_CARD).click()
    }

    getPrice(price_element,number){
    cy.get(PRODUCT_PRICE_PARENT).eq(number).then(($element) =>{
        price_element = $element.find(PRODUCT_PRICE).text()
    })
    }

    getTextAndClickProduct(price_element,number){
        cy.get(PRODUCT_PARENT).eq(number).then(($element) =>{
            price_element = $element.find(PRODUCT).text()
            cy.get(PRODUCT).eq(number).click()
        })
        }
    
}

export default ProductPage