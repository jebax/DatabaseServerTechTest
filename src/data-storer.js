class DataStorer {
  constructor() {
    this.storedData = {}
  }

  set(params) {
    let key = Object.keys(params)[0]
    let value = Object.values(params)[0]
    
    this.storedData[key] = value
  }
}

module.exports = DataStorer
