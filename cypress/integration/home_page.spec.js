describe('Given I am a vistor to the UDOU website', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.location('pathname').should('equal', '/')
  })

  it('when I am on the home page, I can see customer reviews of the furniture.', () => {
    cy.contains('Customer reviews')

    cy.wait(1000)
    cy.get('.review-card').find('.reviewer-name')
    // cy.get('.review-card').find('.review-text')
    // cy.get('.review-card').find('.review-date')
  })
  it('When I am on the home page, then I want to be able to see the different types of furniture products they make and see what they look like.', () => {
    cy.contains('Shelves').click()
    // here
    cy.get('.list-item').contains('Wall Units')
    cy.get('.list-item').contains('Sideboards')
    cy.get('.list-item').contains('Bookshelves').click()

    // remove this line below once drop down is fixed
    cy.contains('Shelves').click()

    cy.location('pathname').should('equal', '/products/bookshelf')

    cy.get('.product-card-img-container').find('img')
  })

  it('When I am browsing the website, then I should not be able to access certain pages if I am not logged in.', () => {
    cy.visit('/account')

    cy.location('pathname').should('equal', '/')
  })
})