console.time("apiCall") 
function getDates(year, times) {

   let dif = year - times
   let array = []
   if (dif < 2022) {
    for (dif; dif<=year;  dif++) {
        array.push(dif)
   }
}
   
   



    console.log(array)



    fetch ("http://sholiday.faboul.se/dagar/v2.1/"+ year)
    .then((response) => response.json())
    .then((data) => myFunction(data))
    // fetch ("http://sholiday.faboul.se/dagar/v2.1/2021")
    // .then((response) => response.json())
    // .then((data) => myFunction(data))
    // fetch ("http://sholiday.faboul.se/dagar/v2.1/2020")
    // .then((response) => response.json())
    // .then((data) => myFunction(data))
    // fetch ("http://sholiday.faboul.se/dagar/v2.1/2019")
    // .then((response) => response.json())
    // .then((data) => myFunction(data))


};

function getYears () {
    // 
}

getDates(2022,30);

function myFunction(data) {
    const body = document.querySelector("body")
    for (const year of [data]) {
        for (const years of [year]) {
            let p = document.createElement("p")
            p.innerHTML = years.startdatum
            body.append(p)
            console.log(years.startdatum)
        }
    };
    


}

console.timeEnd("apiCall")