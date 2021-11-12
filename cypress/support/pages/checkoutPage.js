const PAGE_TITLE = '.title'
const FIRSTNAME_INPUT = '#first-name'
const LASTNAME_INPUT = '#last-name'
const POSTAL_CODE = '#postal-code'
const CONTINUE_BUTTON =  '#continue'

class CheckOutPage{
    fillFirstName(firstname) {
        cy.get(FIRSTNAME_INPUT).type(firstname)
      }
    
      fillLastName(lastName) {
        cy.get(LASTNAME_INPUT).type(lastName)
      }

      fillPostalCode(postalCode) {
        cy.get(POSTAL_CODE).type(postalCode)
      }
    
      continue() {
        cy.get(CONTINUE_BUTTON).click()
      }

}
export default CheckOutPage