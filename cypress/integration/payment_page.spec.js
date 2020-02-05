describe('Given I have an item in my cart', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.get('[name=email]').type('melissa@gmail.com')
    cy.get('[name=password]').type('aaaaaaaa')
    cy.contains('button', 'Submit').click()

    cy.contains('Shelves').click()

    cy.get('.list-item').contains('Bookshelves').click()

    // remove this line below once drop down is fixed
    // cy.contains('Shelves').click()
    // hi
    cy.contains('Customise').click()

    cy.contains('button', 'Add To Cart').click()
  })
  it('when I decide to purchase an item, then I am taken to the checkout to enter my details', () => {
    cy.get('.shopping-cart').click()

    cy.contains('button', 'Proceed to Checkout').click()

    cy.location('pathname').should('equal', '/checkout')

    cy.get('.slide-pane__close').click()

    cy.get('[name=firstName]').type('Melissa')
    cy.get('[name=lastName]').type('Bykersma')
    cy.get('[name=address]').type('123 Test Street')
    cy.get('[name=phoneNumber]').type('0411111111')
    cy.get('[name=city]').type('Melissa')
    cy.get('[name=state]').select('VIC')
    cy.get('[name=postcode]').type('3000')

    cy.contains('button', 'Submit').click()

    cy.location('pathname').should('equal', '/payment')

    cy.get('[name=fullName]').type('Melissa Bykersma')
    cy.get('[name=cardNumber1]').type('4242')
    cy.get('[name=cardNumber2]').type('4242')
    cy.get('[name=cardNumber3]').type('4242')
    cy.get('[name=cardNumber4]').type('4242')
    cy.get('[name=expiryMonth]').select('01')
    cy.get('[name=expiryYear]').type('2021')
    cy.get('[name=cvc]').type('123')

    cy.contains('button', 'Complete Purchase').click()

    cy.location('pathname').should('equal', '/payment-complete')

    cy.contains('h1', 'Thanks for buying!')
  })
})