const PRODUCT = ".inventory_details_name"
const PRODUCT_PARENT = ".inventory_details_desc_container"
const PRODUCT_PRICE = ".inventory_details_price"
const ADD_TO_CARD_BUTTON = ".btn_inventory"
const SHOPPING_CARD = ".shopping_cart_badge"
const BACK_TO_PRODUCT_BUTTON= "#back-to-products"

class ProductDetailPage{

    checkProductIsCorrect(productName,productPrice){
        cy.get(PRODUCT).contains(productName) && cy.get(PRODUCT_PRICE).contains(productPrice)
    }

    clickAddToCardButton(){
        cy.get(ADD_TO_CARD_BUTTON).click()
    }

    checkProductNumberInShoppingCard(number) {
        cy.get(SHOPPING_CARD).should('have.text', number)
    }

    getProduct(detail_element){
        cy.get(PRODUCT_PARENT).then(($element) =>{
            detail_element = $element.find(PRODUCT).text()
        })
    }

    backToProductPage(){
        cy.get(BACK_TO_PRODUCT_BUTTON).click()
    }

    clickRemoveButton(){
        cy.get('button').contains('Remove').click()
    }

    getPrice(detail_price){
        cy.get(PRODUCT_PARENT).then(($element) =>{
            detail_price = $element.find(PRODUCT_PRICE).text()
        })
    }   
}
export default ProductDetailPage