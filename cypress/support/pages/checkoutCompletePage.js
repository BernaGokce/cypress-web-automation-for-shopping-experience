const message_id = '.complete-header'
const message = 'THANK YOU FOR YOUR ORDER'
const picture = 'img[src="/static/media/pony-express.46394a5d.png"]'

class CheckOutCompletePage{
    checkCompletePageIsOpened(){
        cy.get(message_id).contains(message)
        cy.get(picture).should('be.visible')
    }
}

export default CheckOutCompletePage