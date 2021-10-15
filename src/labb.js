
// modifiera sum() tills testet blir godkänt!
function sumFunction(a, b) {
  return a + b     
}

function myOwnMultiplyFunction(a, b) {
    return a * b     
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(x) { //fixa snyggare lösning
 // if (x === -1 ) return true
 // if (x === 1 ) return false

  return x < 0 ? true: false

   
}

function roundNumbers(x){

    return (Math.round(x));
}

function addingUp(x){
    
  return x * (x +1) / 2
}

function findMaxMin(array){

const minMaxValue = {
  min: Math.min.apply(null, array),
  max: Math.max.apply(null, array)
}
return minMaxValue
}


function afterChristmasEve2020(date){

 return date >= '2020-12-24' ? true: false
  
}

function sortByStringLength(array){
   return array.sort(function(a, b){
    return a.length - b.length
  })

}

function charCounter (a, b){

  let counter = 0

  for (let i = 0; i < b.length; i++){
      if (b.charAt(i) === a.toUpperCase() || b.charAt(i) === a.toLowerCase()  )
      {
          counter++;
      }
  }
  return counter
}

function numbersOnly(array){

  let onlyNumbers = array.filter(function (item) {
    return (parseInt(item) === item);
  });
  return onlyNumbers
}

function sortNumbers (array, sort){

  let sortOrder = sort
  if (sortOrder === 1)
  {
          array.sort(function(x, y)
      {
          return x-y
      });
  }
  else
  {
      array.sort(function(x, y)
      {
          return y-x
      });
  }
return array
}

function personFactory(firstname, lastname){
   
 return newPerson = {
   firstname: capitalizeFirstLetter(firstname),
   lastname: capitalizeFirstLetter(lastname),
   initials: `${capitalizeAndReturnFirstLetter(firstname)}.${capitalizeAndReturnFirstLetter(lastname)}`
  
}

}
function capitalizeAndReturnFirstLetter (string){
  return string.charAt(0).toUpperCase()
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function doublePrice(products){
  let productsNew = []
  products.forEach(product => {
    let prod = {
      name: product.name,
      price: product.price * 2
    }
    productsNew.push(prod)
  });
  return productsNew 

}  

function add(firstValue, secondValue){
  return firstValue === secondValue ? true: false
}

function removeLeadingTrailing(x){
 return (parseFloat(x))
}

function getKeysAndValues(obj){
  let keys = []
  let values = []
  
  for(let prop in obj){
    keys.push(prop)
    values.push(obj[prop])
  }
  return {keys, values}

}


 

















 






// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!


//etc...


// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sumFunction
module.exports.multiply = myOwnMultiplyFunction
module.exports.isBelowZero = isBelowZero
module.exports.round = roundNumbers
module.exports.addingUp = addingUp
module.exports.findMinMax = findMaxMin
module.exports.afterXmasEve2020 = afterChristmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = add
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues
