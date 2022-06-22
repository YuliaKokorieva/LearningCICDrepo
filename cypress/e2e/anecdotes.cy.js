describe('Anecdotes', () => {

  it('front page can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('Anecdotes')
    cy.contains('Debugging is twice')
  })
})