console.time("apiCall") 
function getDates(year, times) {

   let dif = year - times
   let array = []
   if (dif < 2022) {
    for (dif; dif<=year;  dif++) {
        array.push(dif)
        }
    }
   array.forEach(object => {
    // myFetch(object)
    Promise.all ([fetch ("http://sholiday.faboul.se/dagar/v2.1/"+ object)])
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((data) => myFunction(data))
    })
    
}

   
// function myFetch(object) {
//     Promise.all (fetch ("http://sholiday.faboul.se/dagar/v2.1/"+ object))
//     .then((responses) => Promise.all(responses.map((response) => response.json())))
//     .then((data) => myFunction(data))
// }
// };

function myFunction(data) {
    const body = document.querySelector("body")
    for (const year of [data]) {
        for (const years of year) {
            for (const days of years.dagar){
                let p = document.createElement("p")
                p.innerHTML = days.datum + ", "
                body.append(p)
            }
        }
    };

}
getDates(2022,30);
console.timeEnd("apiCall")