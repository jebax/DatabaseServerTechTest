class DataStore {
  constructor() {
    this.data = {}
  }

  write(key, value) {
    this.data[key] = value
  }

  read(key) {
    return this.data[key]
  }
}

module.exports = { DataStore: DataStore }
