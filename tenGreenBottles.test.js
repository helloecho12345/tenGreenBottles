const tenGreenBottles = require('./tenGreenBottles')

describe('tenGreenBottles', () => {
  it("returns the last verse if n=1", () => {
    expect(tenGreenBottles(1)).toEqual("One green bottle\nHanging on the wall\nOne green bottle\nHanging on the wall\nIf that one green bottle\nShould accidentally fall\nThere'll be no green bottles\nHanging on the wall")
  })


})