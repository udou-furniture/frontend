describe('Given I have added an item to my cart', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.contains('Shelves').click()

    cy.get('.list-item').contains('Bookshelves').click()

    // remove this line below once drop down is fixed
    cy.contains('Shelves').click()
    cy.contains('Customise').click()

    cy.contains('button', 'Add To Cart').click()
  })

  it('when I want to view my cart, then I should be able to do so without being logged in', () => {
    cy.get('.shopping-cart').click()

    cy.contains('h2', 'Your Cart')

    cy.get('.cart-item')
    .then(()=> {
      const userToken = window.localStorage.getItem('authorisation')
      expect(userToken).to.be.null
    })
  })

  it('when I no longer want an item, then I should be able to remove it from my cart', () => {
    cy.get('.shopping-cart').click()
    // here
    cy.get('.cart-item')
    cy.contains('button', 'Remove from Cart').click()

    cy.contains('p', 'Cart is empty. Keep shopping!')
  })

  it('when I view my cart, then I want to choose to save it for later', () => {
    cy.get('.shopping-cart').click()

    cy.get('.cart-item')
    cy.contains('button', 'Save For Later').click()
  })
 
  
})

// describe('Given I have an item in my cart and I am logged in',() => {
//   beforeEach(() => {
//     cy.visit('/login')
//     cy.get('[name=email]').type('melissa@gmail.com')
//     cy.get('[name=password]').type('aaaaaaaa')
//     cy.contains('button', 'Submit').click()

//     cy.contains('Shelves').click()

//     cy.get('.list-item').contains('Bookshelves').click()

//     // remove this line below once drop down is fixed
//     cy.contains('Shelves').click()

//     cy.contains('Customise').click()

//     cy.contains('button', 'Add To Cart').click()
//   })

//   it.only('when I know I want to purchase this item, then I want to be able to go through to the checkout', () => {
//     cy.get('.shopping-cart').click()

//     cy.contains('button', 'Proceed to Checkout').click()

//     cy.location('pathname').should('equal', '/checkout')
//   })
// })

