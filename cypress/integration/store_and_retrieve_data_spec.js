describe('Storing and retrieving data', () => {
  it('successfully stores data, retrieves it and sees it on screen', () => {
    let testKey = 'testKey'
    let testValue = 'testValue'

    cy.visit(`http://localhost:3000/set?${testKey}=${testValue}`)
    cy.visit(`http://localhost:3000/get?key=${testKey}`)

    cy.contains(testValue)
  })
})
