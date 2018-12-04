describe('Storing and retrieving data', () => {
  it('stores data, retrieves it and sends it as response body', () => {
    let testKey = 'testKey'
    let testValue = 'testValue'

    cy.request(`http://localhost:3000/set?${testKey}=${testValue}`)
    cy.request(`http://localhost:3000/get?key=${testKey}`)
      .its('body').should('equal', testValue)
  })

  it('stores and retrieves different data', () => {
    let testKey = 'testKey2'
    let testValue = 'testValue2'

    cy.request(`http://localhost:3000/set?${testKey}=${testValue}`)
    cy.request(`http://localhost:3000/get?key=${testKey}`)
      .its('body').should('equal', testValue)
  })

  it('confirms when data is stored', () => {
    let testKey = 'testKey'
    let testValue = 'testValue'

    cy.request(`http://localhost:3000/set?${testKey}=${testValue}`)
      .its('body').should('equal', 'Data stored successfully')
  })
})
