console.time("apiCall") 
function getDates() {

    fetch ("http://sholiday.faboul.se/dagar/v2.1/2022")
    .then((response) => response.text())
    .then((data) => myFunction(data))
    fetch ("http://sholiday.faboul.se/dagar/v2.1/2021")
    .then((response) => response.text())
    .then((data) => myFunction(data))
    fetch ("http://sholiday.faboul.se/dagar/v2.1/2020")
    .then((response) => response.text())
    .then((data) => myFunction(data))
    fetch ("http://sholiday.faboul.se/dagar/v2.1/2019")
    .then((response) => response.text())
    .then((data) => myFunction(data))


};

getDates();

function myFunction(data) {
    const body = document.querySelector("body")
    for (const year of [data]) {
        let text
        text += year + "<br><br><br><br>"
        let p = document.createElement("p")
        p.innerText = text
        body.append(p)
        console.log(text)
    };
    


}

console.timeEnd("apiCall")