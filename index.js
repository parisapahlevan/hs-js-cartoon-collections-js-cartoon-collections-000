let dwarfArray = ["Doc", "Dopey", "Bashful", "Grumpy"]

function dwarfRollCall(dwarves) {
  let finalString = ''
  for (let i = 0; i < dwarves.length; i++) { 

    finalString += `${i+1}. ${dwarves[i]} `
  }
  return finalString
}



function summonCaptainPlanet(planeteerCalls){
  let results=[]
  for (let i = 0; i < planeteerCalls.length; i++) { 
    let myElement = planeteerCalls[i].toUpperCase()+'!'
    results.push(myElement)
  }

  return resutls
}


let planeteerCalls = ["earth", "wind", "fire", "water", "heart"]

function longPlaneteerCalls(words){
  for (let i=0; i<words.length; i++){
  if(words[i].length > 4){
    return true 
  } else{
    return false
  }
}
}



function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) { 
    if(foods[i] === 'cheddar' || 
       foods[i] === 'gouda'   || 
       foods[i] === 'camembert'){
      return foods[i]
    }
  }
  return "no cheese!"
}


