describe('Data Manager', () => {
  const managerExports = require('../src/data-Manager.js')
  let dataManager
  let setParams
  let getParams

  beforeEach(() => {
    dataManager = new managerExports.DataManager()
    setParams = { testKey: 'testValue' }
    getParams = { key: 'testKey' }
  })

  describe('A data Manager', () => {
    it('stores a key and its associated value', () => {
      dataManager.set(setParams)
      expect(dataManager.storedData).toEqual(setParams)
    })

    it('returns the key and value after it stores them', () => {
      expect(dataManager.set(setParams)).toEqual('testKey: testValue')
    })

    it('retrieves the associated value from a given key', () => {
      dataManager.set(setParams)
      expect(dataManager.get(getParams)).toEqual(setParams.testKey)
    })
  })
})
