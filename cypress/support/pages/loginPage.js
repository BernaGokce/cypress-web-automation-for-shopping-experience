const URL = 'https://www.saucedemo.com'
const USERNAME_INPUT = '#user-name'
const PASSWORD_INPUT = '#password'
const SUBMIT_BUTTON = '#login-button'

class LoginPage{
  visit() {
    cy.visit(URL)
  }

  fillUsername(username) {
    cy.get(USERNAME_INPUT).type(username)
  }

  fillPassword(password) {
    cy.get(PASSWORD_INPUT).type(password)
  }

  submit() {
    cy.get(SUBMIT_BUTTON).click()
  }

}

export default LoginPage