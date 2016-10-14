function forLoop(array){
  for (var i = 0; i < 25; i++){   //While i is < 25, add to array and increment i
    array.push("I am ${i} strange loop.")}
      return array
    }


function whileLoop(number){
  while (number > 0) {   //While input > 0
    console.log(number--) //print number, then subtract 1
  }
  return "done"
}


function doWhileLoop(array){
  function maybeTrue() {return Math.random() >= 0.5}

do { array.pop()
}
  while(maybeTrue() && array.length > 0)
  return array
}
