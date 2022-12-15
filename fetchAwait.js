Promise.all([
    fetch("http://sholiday.faboul.se/dagar/v2.1/2018"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2019"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2020"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2021"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2022")
]) .then((responses) => Promise.all(responses.map((response) => response.json())))
.then((data) => writeOutInfo(data));


async function writeOutInfo(data) {
  await data.forEach(object => {
    object.dagar.forEach(days => {
      let holidays = days.helgdag
      if (holidays === "Midsommarafton") {
        let p = document.createElement("p")
        p.innerHTML = days.datum + ": " + holidays
        document.body.appendChild(p)
        console.log(object)
      }
    })
    
    
  });
}