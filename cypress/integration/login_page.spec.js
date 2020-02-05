describe('Given that I am not logged in and visiting the login page,', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.location('pathname').should('equal', '/login')
    cy.contains('button', 'Submit').should('be.disabled')
  })

  it('when I provide correct login details, then I am given a valid access token', () => {
    cy.get('[name=email]').type('melissa@gmail.com')
    cy.get('[name=password]').type('aaaaaaaa')
    cy.contains('button', 'Submit').should('be.enabled').click()

    cy.location('pathname').should('equal', '/')
    // here
    cy.contains('Log out')
    .then(()=> {
      const userToken = window.localStorage.getItem('authorisation')
      expect(userToken).to.not.be.null
    })
  })

  it('when I provide incorrect login details, I am not given a valid access token', () => {
    cy.get('[name=email]').type('fake@invalid.com')
    cy.get('[name=password]').type('incorrect')

    cy.contains('button', 'Submit').should('be.enabled').click()
    
    .then(()=> {
      const userToken = window.localStorage.getItem('authorisation')
      expect(userToken).to.be.null
    })
    // TODO
    // cy.location('pathname').should('equal', '/login')
  })
})

describe('given that I am logged in,', () => {
  beforeEach( () => {
    cy.visit('/login')
    cy.location('pathname').should('equal', '/login')
    cy.get('[name=email]').type('melissa@gmail.com')
    cy.get('[name=password]').type('aaaaaaaa')
    cy.contains('button', 'Submit').click()
    cy.location('pathname').should('equal', '/')
  })

  it('when I am visiting the website and can see the navbar, then I can log out', () => {
    cy.get('.site-nav').contains('Log out').click()
    cy.location('pathname').should('equal', '/')
  })
})
