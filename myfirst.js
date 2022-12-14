
// UPPGIFT 1!!!


// function timeOutfunction(myFunction) {
//   console.log("1")
//   setTimeout (myFunction, 2000)
//   console.log("2")
// }

// function myFunction () {
//   console.log("3")
// }

// timeOutfunction(myFunction)

// UPPGIFT 2!!!

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

// UPPGIFT 3!!!

// Använd Fetch för att hämta information från Svenska helgdagar API’er.

// I den här övningen ska du lista alla datum som midsommarafton har varit på de senaste 5 åren - använd Fetch med async/await!

 

// Svenska helgdagar API:    https://api.dryg.net
