describe('Given I have never signed up to this website before', () => {
  it('when I visit the register page then I can use my email and a password to sign up and receive an access token', () => {
    cy.visit('/registration')
    cy.location('pathname').should('equal', '/registration')

    cy.get('[name=email]').type('newuser@gmail.com')
    cy.get('[name=password]').type('newpassword1')

    // please note the above line in this test will only work once. I understand usually a stubbing would work his to stub the data used in a test.

    cy.contains('button', 'Create Account').should('be.enabled').click()

    cy.location('pathname').should('equal', '/')

    cy.contains('Log out')
    .then(()=> {
      const userToken = window.localStorage.getItem('authorisation')
      expect(userToken).to.not.be.null
    })
  })
})

describe('Given I have signed up to this page before, ', () => {
  it.only('when I visit the register page, then I will not be able to sign up with the same email.', () => {
    cy.visit('/registration')

    cy.get('[name=email]').type('userexists@gmail.com')
    cy.get('[name=password]').type('thesamepassword')

    cy.contains('button', 'Create Account').should('be.enabled').click()

    cy.contains('span', 'An account with this email already exists')
  })
})