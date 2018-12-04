describe('Data Storer', () => {
  const DataStorer = require('../src/data-storer.js')
  let dataStorer
  let params

  beforeEach(() => {
    dataStorer = new DataStorer()
    params = { 'testKey': 'testValue' }
  })

  describe('A data storer', () => {
    it('stores a key and its associated value', () => {
      dataStorer.set(params)
      expect(dataStorer.storedData).toEqual(params)
    })
  })
})
