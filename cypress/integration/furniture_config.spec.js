describe('Given I know which type of furniture I would like to purchase, ', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.contains('Shelves').click()

    cy.get('.list-item').contains('Bookshelves').click()

    // remove this line below once drop down is fixed
    cy.contains('Shelves').click()

    // cy.get('.product-card-img-container').find('img')
  })

  it('I want to be able to choose to customise the sizes of the cabinet', () => {
    cy.contains('Customise').click()

    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
    // here
    let input = cy.get('.height-sliding-block')
      .find('input[type=range]').as('range').then(input => {
        nativeInputValueSetter.call(input[0], '0.5') 
        let event = new Event('input', { bubbles: true })
        input[0].dispatchEvent(event)
      })

    cy.contains('h4', 'Height').siblings().should('have.text', '60 cm')
    cy.contains('h4', 'Width').siblings().should('have.text', '120 cm')
    cy.contains('h4', 'Depth').siblings().should('have.text', '40 cm')

    cy.get('.white-radio').click()

    cy.get('h1')
  })

  it('when I have configured my cabinet, then I want to be able to add it to my cart.', () => {
    cy.contains('Customise').click()

    cy.contains('button', 'Add To Cart').click()

    cy.get('.links').find('.items-counter').should('have.text', '1')
  })

  it('when I have chosen a cabinet, then I want to choose between adding it to my cart now or saving the design for later', () => {
    cy.contains('Customise').click()

    cy.contains('button', 'Add To Cart').click()
    cy.contains('button', 'Save for later')
  })

  it('when I want to save design for later, then I should be prompted to login first', () => {
    cy.contains('Customise').click()

    cy.contains('button', 'Save for later').click()

    cy.location('pathname').should('equal', '/login')
  })
})