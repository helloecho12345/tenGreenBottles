
const tenGreenBottles = (n) => {

  let count  = n

  if (n === 1){
    return tGB.line6 + tGB.line2 + tGB.line6 + tGB.line2 + tGB.line8 + tGB.line7 + tGB.line5
  } 

  let output = ''
  
  const tGB = {
  line1 : `${count} green bottles\n`,
  line2 : 'Hanging on the wall\n',
  line3 : 'And if one green bottle\nShould accidentally fall\n',
  line4 : `There'll be ${count - 1} green bottles\nHanging on the wall\n`,
  line5 : "There'll be one green bottle\nHanging on the wall\n",
  line6 : 'One green bottle\n',
  line7 : "There'll be no green bottles\n",
  line8 : 'If that one green bottle\nShould accidentally fall\n',
}

  for(let i = n; i > 2; i--){
    output += (
              tGB.line1 + tGB.line2 + 
              tGB.line1 + tGB.line2 + 
              tGB.line3 + tGB.line4)
    
  }
    
  output += (tGB.line1 + tGB.line2 + 
              tGB.line1 + tGB.line2 + 
              tGB.line3 + tGB.line5)
  output += (tGB.line6 + tGB.line2 + tGB.line6 + tGB.line2 + tGB.line8 + tGB.line7)
  
  return output
}




console.log(tenGreenBottles(3))
module.exports = tenGreenBottles;