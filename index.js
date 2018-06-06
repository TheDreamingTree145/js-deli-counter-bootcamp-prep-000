var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
  katzDeli.shift()
}

function currentLine(katzDeli) {
  if (!katzDeli.length) {
    return "The line is currently empty."
  }
  
  var numName =katzDeli.map(function(p, i) {
    return `${i + 1}. ${p}`
  })
  return `The line is currently: ${numName.join(', ')}`
  
}
