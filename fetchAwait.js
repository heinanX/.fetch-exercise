Promise.all([
    fetch("http://sholiday.faboul.se/dagar/v2.1/2018"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2019"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2020"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2021"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2022")
]) .then((responses) => Promise.all(responses.map((response) => response.json())))
.then((data) => console.log(data));


async function writeOutInfo(data) {
    let days = data.dagar;
  
    days.forEach(object => {
      let holiday = object.helgdag
      
      if (holiday) {
        let p = document.createElement("p")
        p.innerHTML = object.datum + ": " + holiday
        document.querySelector("body").appendChild(p)
        console.log(object)
      }
    });
}