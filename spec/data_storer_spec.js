describe('Data Storer', () => {
  const storerExports = require('../src/data-storer.js')
  let dataStorer
  let setParams
  let getParams

  beforeEach(() => {
    dataStorer = new storerExports.DataStorer()
    setParams = { testKey: 'testValue' }
    getParams = { key: 'testKey' }
  })

  describe('A data storer', () => {
    it('stores a key and its associated value', () => {
      dataStorer.set(setParams)
      expect(dataStorer.storedData).toEqual(setParams)
    })

    it('returns the key and value after it stores them', () => {
      expect(dataStorer.set(setParams)).toEqual('testKey: testValue')
    })

    it('retrieves the associated value from a given key', () => {
      dataStorer.set(setParams)
      expect(dataStorer.get(getParams)).toEqual(setParams.testKey)
    })
  })
})
