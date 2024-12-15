async function getweather(meal) {
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${meal}&days=3`);
    if (t.ok && 400 != t.status) {
        let data = await t.json();
        displayCurrent(data.location, data.current),
        displayday2(data.forecast.forecastday)
        displayday3(data.forecast.forecastday)
    }
}
document.getElementById("search").addEventListener("keyup", a => {
    getweather(a.target.value)
}
);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function displayCurrent(a, t) {
    if (null != t) {
        var e = new Date(t.last_updated.replace(" ", "T"));
        let create= `<div class="history d-flex justify-content-between">
                                <span class="his">${days[e.getDay()]}</span>
                                <span class="his">${e.getDate() + monthNames[e.getMonth()]}</span>
                            </div>
                            <div class="part2-his ps-3 pb-4">
                                <p class="pp-1 pt-4">${a.name}</p>
                                <p class="pp-2">${t.temp_c}<sup>o</sup>C<span class="spp-2"><img src="https:${t.condition.icon}" alt="116"></span></p>
                                <p class="pp-3">${t.condition.text}</p>
                                <div class="tail">
                                    <span class="me-3"><img src="./images/icon-umberella.png" class="me-2" alt="umberella"><span class="text-img">20%</span></span>
                                    <span class="me-3"><img src="./images/icon-wind.png" class="me-2" alt="wind"><span class="text-img">18km/h</span></span>
                                    <span class="me-3"><img src="./images/icon-compass.png" class="me-2" alt="compass"><span class="text-img">East</span></span>
                                </div>
                            </div>`
        document.getElementById("one").innerHTML = create
    }
}
function displayday2(a) {
    let day2 = "";
   let e=1
        day2= ` <div class="history">
                                <p class="text-center his story mb-0">${days[new Date(a[e].date.replace(" ", "T")).getDay()]}</p>
                            </div>
                            <div class="tail2 text-center pb-2">
                                <p><img class="pt-5 " src="https:${a[e].day.condition.icon}" alt="113"></p>
                                <span class="cc-1">${a[e].day.maxtemp_c}<sup>o</sup>C</spanp>
                                <p class="cc-2">${a[e].day.mintemp_c}<sup>o</sup></p>
                                <p class="cc-3 pb-1">${a[e].day.condition.text}</p>
                            </div>`
    document.getElementById("two").innerHTML= day2
}
function displayday3(a) {
    let day3 = "";
   let e=2
        day3 = `<div class="history3">
                                <p class="text-center his story mb-0">${days[new Date(a[e].date.replace(" ", "T")).getDay()]}</p>
                            </div>
                            <div class="tail3 text-center pb-2">
                                <p><img class="pt-5 " src="https:${a[e].day.condition.icon}" alt="113"></p>
                                <span class="cc-1">${a[e].day.maxtemp_c}<sup>o</sup>C</spanp>
                                <p class="cc-2">${a[e].day.mintemp_c}<sup>o</sup></p>
                                <p class="cc-3 pb-1">${a[e].day.condition.text}</p>
                            </div>`
    document.getElementById("three").innerHTML = day3
}
getweather("cairo");
