class DataManager {
  constructor (dataStore) {
    this.dataStore = dataStore
  }

  set (params) {
    let key = Object.keys(params)[0]
    let value = Object.values(params)[0]

    this.dataStore.write(key, value)
    return `${key}: ${value}`
  }

  get (params) {
    let key = Object.values(params)[0]

    return this.storedData[key]
  }
}

module.exports = { DataManager: DataManager }
