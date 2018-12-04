describe('Data Storer', () => {
  const DataStorer = require('../src/data-storer.js')
  let dataStorer
  let setParams
  let getParams

  beforeEach(() => {
    dataStorer = new DataStorer()
    setParams = { testKey: 'testValue' }
    getParams = { key: 'testKey' }
  })

  describe('A data storer', () => {
    it('stores a key and its associated value', () => {
      dataStorer.set(setParams)
      expect(dataStorer.storedData).toEqual(setParams)
    })

    it('retrieves the associated value from a given key', () => {
      dataStorer.set(setParams)
      expect(dataStorer.get(getParams)).toEqual(setParams.testKey)
    })
  })
})
