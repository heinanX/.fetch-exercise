function timeOutfunction(myFunction) {
  console.log("1")
  setTimeout (myFunction, 2000)
  console.log("2")
}

function myFunction () {
  console.log("3")
}

timeOutfunction(myFunction)