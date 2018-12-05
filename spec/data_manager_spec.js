describe('Data Manager', () => {
  const managerExports = require('../src/data-Manager.js')
  let dataManager
  let dataStore
  let setParams
  let getParams

  beforeEach(() => {
    dataStore = jasmine.createSpyObj('dataStore', ['write', 'read'])
    dataManager = new managerExports.DataManager(dataStore)
    setParams = { testKey: 'testValue' }
    getParams = { key: 'testKey' }
  })

  describe('A data Manager', () => {
    it('writes to its data store when given a value to set', () => {
      dataManager.set(setParams)
      expect(dataStore.write).toHaveBeenCalledWith('testKey', 'testValue')
    })

    it('returns the key and value after it stores them', () => {
      expect(dataManager.set(setParams)).toEqual('testKey: testValue')
    })

    it('reads the associated value from data store when given a key', () => {
      dataStore.read.and.returnValue(setParams.testKey)
      expect(dataManager.get(getParams)).toEqual(setParams.testKey)
    })
  })
})
