class BaseUtils {
   clickElement(element){
        cy.get(element).click();
   }

   getComponent(component){
       return cy.get(component);
   }

   clickElementXPath(element){
       cy.xpath(element).click();
   }

   getElementXPath(element){
       return cy.xpath(element);
   }

   checkText(text){
      return cy.contains(text);
   }

   typeInput(component,input){
        cy.get(component).type(input);
   }

   doubleClickElement(element){
        cy.get(element).dblclick();
   }

   forceClick(element){
       cy.get(element).click({force: true})
   }

   visitWebSite(url)
   {
       return cy.visit(url);
   }

   getUrl(){
       return cy.url()
   }

   checkTitle(title) {
       cy.title().should('include', title)
   }

   checkCurrentWebSite(url)
   {
    cy.url().should('include', url)
   }

   logOut(){
       cy.get('#react-burger-menu-btn').click()
       cy.get('#logout_sidebar_link').click()
   }
}

export default BaseUtils;