describe('Data Store', () => {
  const storeExports = require('../src/data-store.js')
  let dataStore
  let testKey
  let testValue

  beforeEach(() => {
    dataStore = new storeExports.DataStore()
    testKey = 'testKey'
    testValue = 'testValue'
  })

  describe('A data store', () => {
    it('writes a key and its associated value to its storage', () => {
      dataStore.write(testKey, testValue)
      expect(dataStore.data).toEqual({ testKey: 'testValue' })
    })

    it('reads a value from its storage when given the related key', () => {
      dataStore.write(testKey, testValue)
      expect(dataStore.read(testKey)).toEqual(testValue)
    })
  })
})
