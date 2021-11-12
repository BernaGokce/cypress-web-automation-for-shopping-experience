import { expect } from "chai"
const PRODUCT_PARENT = '.cart_item_label'
const PRICE_PARENT = '.summary_info'
const PRODUCT = ".inventory_item_name"
const PRODUCT_PRICE = ".inventory_item_price"
const QUANTITY = ".cart_quantity"
const INF = ".summary_value_label"
const TAX = ".summary_tax_label"
const TOTAL_PRICE = ".summary_total_label"
const FINISH_BUTTON = '#finish'


class CheckoutOverviewPage{
    checkProductIsCorrect(productName,productPrice){
        cy.get(PRODUCT).contains(productName) && cy.get(PRODUCT_PRICE).contains(productPrice)
    }

    checkOverviewInf(information){
        cy.get(INF).contains(information)
    }

    getProduct(detail_element){
        cy.get(PRODUCT_PARENT).then(($element) =>{
            detail_element = $element.find(PRODUCT).text()
        })
    }

    getPrice(detail_price){
        cy.get(PRODUCT_PARENT).then(($element) =>{
            detail_price = $element.find(PRODUCT_PRICE).text()
        })
    }   

    getQuantity(product_quantity){
        cy.get(QUANTITY).should('have.text', product_quantity)
    } 

    getTax(tax){
        cy.get(PRICE_PARENT).then(($element) =>{
            tax = $element.find(TAX).text()
        })
    }

    getTotalPrice(total_price){
        cy.get(PRICE_PARENT).then(($element) =>{
            total_price = $element.find(TOTAL_PRICE).text()
        })
    }

    clickFinishButton(){
        cy.get(FINISH_BUTTON).click()
    }
    
}

export default CheckoutOverviewPage