const tenGreenBottles = require('./tenGreenBottles')

describe('tenGreenBottles', () => {
  it('returns the first line of the verse of the song', () => {
    expect(tenGreenBottles("Two green bottles")).toEqual("Two green bottles")
  });

  
})