describe('Given I have never signed up to this website before', () => {
  it('when I visit the register page then I can use my email and a password to sign up and receive an access token', () => {
    cy.visit('/registration')
    cy.location('pathname').should('equal', '/registration')

    // this is not going to work as it will still post to the database in tests
    cy.get('[name=email]').type('newuser@gmail.com')
    cy.get('[name=password]').type('anewpassword')
    cy.contains('button', 'Create Account').should('be.enabled').click()

    cy.location('pathname').should('equal', '/')
    // hi
    // TODO
    // this is stubbing the response
    // cy.server();
    // cy.request('POST', '/registration', {
    //   "email": "newuser@gmail.com",
    //   "password": "newpassword"
    // })
    // cy.route({
    //   method: 'POST',
    //   url: '/registration',
    //   response: {status: 200}
    // })
    // cy.visit('/')

    cy.contains('Log out')
    .then(()=> {
      const userToken = window.localStorage.getItem('authorisation')
      expect(userToken).to.not.be.null
    })
  })
})