class DataStorer {
  constructor () {
    this.storedData = {}
  }

  set (params) {
    let key = Object.keys(params)[0]
    let value = Object.values(params)[0]

    this.storedData[key] = value
    return `${key}: ${value}`
  }

  get (params) {
    let key = Object.values(params)[0]

    return this.storedData[key]
  }
}

module.exports = { DataStorer: DataStorer }
