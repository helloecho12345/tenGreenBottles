const tenGreenBottles = require('./tenGreenBottles')
const lyrics = require('./lyrics')

describe('tenGreenBottles', () => {
  it("returns the last verse if n=1", () => {
    expect(tenGreenBottles(1)).toEqual(lyrics.One)
  })

  it("returns the last two verses if n=2", () => {
    expect(tenGreenBottles(2)).toEqual(lyrics.Two + '\n\n' + lyrics.One)
  })

  it("returns the last three verses if n=3", () => {
    expect(tenGreenBottles(3)).toEqual(lyrics.Three + '\n\n' + lyrics.Two + '\n\n' + lyrics.One)
  })

  


})