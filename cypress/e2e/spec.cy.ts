describe('My App Component', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200/')
    cy.get('h1').should('contain', 'My App Component')
  })
})
