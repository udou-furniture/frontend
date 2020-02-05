describe('Given I am logged in with my account details,', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.location('pathname').should('equal', '/login')
    cy.get('[name=email]').type('melissa@gmail.com')
    cy.get('[name=password]').type('aaaaaaaa')
    cy.contains('button', 'Submit').click()
  })

  it('when I try to access Account Dashboard in the navbar, it successfully loads.', () => {
    cy.contains('a', 'My account').click()

    cy.location('pathname').should('equal', '/account')
  })
})
// here
describe('Given I have purchased furniture on this website previously', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.location('pathname').should('equal', '/login')
    cy.get('[name=email]').type('melissa@gmail.com')
    cy.get('[name=password]').type('aaaaaaaa')
    cy.contains('button', 'Submit').click()
    cy.contains('a', 'My account').click()
  })

  it('when I am on the account dashboard page, then I can see my previously purchased items', () => {
    cy.contains('Previously Purchased')
    cy.get('table').contains('td', '1')
    cy.get('table').contains('td', 'Black')
  })

  it('when I can see my previously purchased items, then I can click to leave a review on the product.', () => {
    cy.contains('button', 'Leave a Review').click()

    cy.get('[name=review]').type('This is a fantastic cabinet. Thank-you Kyle from UDOU Furniture for making this beautiful cabinet for my home. Great service!!')
    cy.contains('button', 'Submit').click()

    cy.get('table').contains('td', 'This is a fantastic cabinet. Thank-you Kyle from UDOU Furniture for making this beautiful cabinet for my home. Great service!!')
  })
})

