class DataStore {
  constructor() {
    this.data = {}
  }

  write(key, value) {
    this.data[key] = value
  }
}

module.exports = { DataStore: DataStore }
