console.time("apiCall") 

Promise.all([
    fetch("http://sholiday.faboul.se/dagar/v2.1/1993"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/1994"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/1995"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/1996"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/1997"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/1998"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/1999"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2000"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2001"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2002"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2003"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2004"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2005"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2006"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2007"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2008"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2009"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2010"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2011"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2012"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2013"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2014"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2015"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2016"),
    fetch("http://sholiday.faboul.se/dagar/v2.1/2017"),
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

        let p = document.createElement("p")
        p.innerHTML = days.datum
        document.body.appendChild(p)
    })
    
    
  });
}
console.timeEnd("apiCall") 