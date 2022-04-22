
const tenGreenBottles = (n) => {

  const tGB = {
  line1 : `${n} green bottles\n`,
  line2 : 'Hanging on the wall\n',
  line3 : 'And if one green bottle\nShould accidentally fall\n',
  line4 : `There'll be ${n - 1} green bottles\n`,
  line5 : "There'll be one green bottle\n",
  line6 : 'One green bottle\n',
  line7 : "There'll be no green bottles\n",
  line8 : 'If that one green bottle\nShould accidentally fall\n',
}

  if (n === 2){
    return "Two green bottles\nHanging on the wall\nTwo green bottles\nHanging on the wall\nAnd if one green bottle\nShould accidentally fall\nThere'll be one green bottle\nHanging on the wall\n\nOne green bottle\nHanging on the wall\nOne green bottle\nHanging on the wall\nIf that one green bottle\nShould accidentally fall\nThere'll be no green bottles\nHanging on the wall"
  } else if (n=== 1){
    return tGB.line6 + tGB.line2 + tGB.line6 + tGB.line2 + tGB.line8 + tGB.line7 + tGB.line2.trim() 
  }

  // return tGB.line1 + tGB.line2
}




console.log(tenGreenBottles(1))
module.exports = tenGreenBottles;