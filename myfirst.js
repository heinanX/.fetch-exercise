



// function timeOutfunction(myFunction) {
//   console.log("1")
//   setTimeout (myFunction, 2000)
//   console.log("2")
// }

// function myFunction () {
//   console.log("3")
// }

// timeOutfunction(myFunction)


fetch("http://sholiday.faboul.se/dagar/v2.1/2006")
  .then((response) => response.json())
  .then((data) => writeOutInfo(data));
  

function writeOutInfo (data) {
  let days = data.dagar;

  days.forEach(object => {
    let holiday = object.helgdag
    
    if (holiday) {
      let p = document.createElement("p")
      p.innerHTML =object.datum + ": " + holiday
      document.querySelector("body").appendChild(p)
      console.log(object)
    }
  });
}
